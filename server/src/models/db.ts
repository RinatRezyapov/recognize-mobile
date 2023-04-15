import {EventEmitter} from 'events';
import {Client} from 'pg';

const METHODS_REQUIRING_CONNECTION = ['query'];
const deactivate = Symbol('deactivate');

class InitializedState {
  client: Client;

  constructor(client) {
    this.client = client;
  }

  async query(queryString) {
    console.log(`Query executed: ${queryString}`);
    return this.client.query(queryString);
  }
}

class QueuingState {
  db: any;
  commandsQueue: any[];

  constructor(db) {
    this.db = db;
    this.commandsQueue = [];

    METHODS_REQUIRING_CONNECTION.forEach(methodName => {
      this[methodName] = function (...args) {
        console.log('Command queued:', methodName, args);
        return new Promise((resolve, reject) => {
          const command = () => {
            db[methodName](...args).then(resolve, reject);
          };
          this.commandsQueue.push(command);
        });
      };
    });
  }

  [deactivate]() {
    this.commandsQueue.forEach(command => command());
    this.commandsQueue = [];
  }
}

class DB extends EventEmitter {
  state: QueuingState | InitializedState;
  connected: boolean;

  constructor() {
    super();
    this.state = new QueuingState(this);
  }

  async query(queryString) {
    return (this.state as InitializedState).query(queryString);
  }

  async connect() {
    const client = new Client({
      user: 'postgres',
      host: 'host.docker.internal',
      database: 'recognize',
      password: 'newPassword',
      port: 5432,
    });
    try {
      await client.connect();
      console.log('Connected to DB');
      this.connected = true;
      this.emit('connected');
      const oldState = this.state;
      this.state = new InitializedState(client);
      oldState[deactivate] && oldState[deactivate]();

      return client;
    } catch (err) {
      console.log('Connection failed, trying to reconnect...');
      setTimeout(() => this.connect(), 5000);
    }
  }
}

export const db = new DB();
