/**
 * @generated SignedSource<<e426ae1775aee1c8c8eaa171edcfc6b8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DashboardNodesFragmentPaginationQuery$variables = {
  id: string;
};
export type DashboardNodesFragmentPaginationQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"DashboardNodesFragment">;
  } | null | undefined;
};
export type DashboardNodesFragmentPaginationQuery = {
  response: DashboardNodesFragmentPaginationQuery$data;
  variables: DashboardNodesFragmentPaginationQuery$variables;
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
    "name": "DashboardNodesFragmentPaginationQuery",
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
            "name": "DashboardNodesFragment"
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
    "name": "DashboardNodesFragmentPaginationQuery",
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
    "cacheID": "a5b82dac8c233abdc9886cf42f43c17e",
    "id": null,
    "metadata": {},
    "name": "DashboardNodesFragmentPaginationQuery",
    "operationKind": "query",
    "text": "query DashboardNodesFragmentPaginationQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...DashboardNodesFragment\n    id\n  }\n}\n\nfragment DashboardNodesFragment on TreeNode {\n  id\n  structureDefinition {\n    __typename\n    title\n  }\n}\n"
  }
};
})();

(node as any).hash = "a12d5e11dd2949d8d2d025e4ae5cf0d6";

export default node;
