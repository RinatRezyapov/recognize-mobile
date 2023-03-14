
import { installRelayDevTools } from 'relay-devtools';
import {Environment, Network, RecordSource, Store} from 'relay-runtime';
import fetchGraphQL from './api/fetchGraphQL';

async function fetchRelay(params, variables) {
  console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`);
  return fetchGraphQL(params.text, variables);
}


// installRelayDevTools();
const storeObject = new Store(new RecordSource())

export default new Environment({
  network: Network.create(fetchRelay),
  store: storeObject,
});