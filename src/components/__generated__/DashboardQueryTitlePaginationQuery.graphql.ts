/**
 * @generated SignedSource<<5de28e6d585eab277adbd502e44c0f0d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DashboardQueryTitlePaginationQuery$variables = {
  id: string;
};
export type DashboardQueryTitlePaginationQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"DashboardQueryTitleFragment">;
  } | null | undefined;
};
export type DashboardQueryTitlePaginationQuery = {
  response: DashboardQueryTitlePaginationQuery$data;
  variables: DashboardQueryTitlePaginationQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DashboardQueryTitlePaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "DashboardQueryTitleFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DashboardQueryTitlePaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "structureDefinition",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "TreeNode",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a508887d1a60f126b86fa54d62b1e219",
    "id": null,
    "metadata": {},
    "name": "DashboardQueryTitlePaginationQuery",
    "operationKind": "query",
    "text": "query DashboardQueryTitlePaginationQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...DashboardQueryTitleFragment\n    id\n  }\n}\n\nfragment DashboardQueryTitleFragment on TreeNode {\n  structureDefinition {\n    __typename\n    title\n  }\n  id\n}\n"
  }
};
})();

(node as any).hash = "490919cd85fadef1ee23cd4b185df9d2";

export default node;
