import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
} from "relay-runtime";
import { token } from './components/utils/helper';

const HTTP_ENDPOINT = "https://staging.api.constellation.academy/api/graphql";

const fetchFn: FetchFunction = async (request, variables) => {
  // console.log({request, variables})
  const resp = await fetch(HTTP_ENDPOINT, {
    method: "POST",
    headers: {
      Accept:
      "application/graphql-response+json; charset=utf-8, application/json; charset=utf-8",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem(token.ACCESS_TOKEN)}`
    },
    body: JSON.stringify({
      query: request.text, // <-- The GraphQL document composed by Relay
      variables
    }),
  });

  return await resp.json();
};

function createRelayEnvironment() {
  return new Environment({
    network: Network.create(fetchFn),
    store: new Store(new RecordSource()),
  });
}

export const RelayEnvironment = createRelayEnvironment();