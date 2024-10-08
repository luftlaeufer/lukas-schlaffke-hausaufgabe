import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
} from "relay-runtime";
import { localState } from "./utils/helper";

const fetchFn: FetchFunction = async (request, variables) => {
  // console.log({request, variables})
  const resp = await fetch(import.meta.env.VITE_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      Accept:
      "application/graphql-response+json; charset=utf-8, application/json; charset=utf-8",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem(localState.ACCESS_TOKEN)}` 
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