import {Environment, Network, RecordSource, Store} from 'relay-runtime';
import fetchGraphQL from './api/fetchGraphQL';

async function fetchRelay(params, variables) {
  return fetchGraphQL(params.text, variables);
}

const storeObject = new Store(new RecordSource());

export default new Environment({
  network: Network.create(fetchRelay),
  store: storeObject,
});
