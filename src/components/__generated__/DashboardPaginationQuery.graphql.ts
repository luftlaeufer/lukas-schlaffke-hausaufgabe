/**
 * @generated SignedSource<<5e0f5cd6ed1a071dd11753576b4bc468>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DashboardPaginationQuery$variables = {
  after?: string | null | undefined;
  first?: number | null | undefined;
};
export type DashboardPaginationQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"DashboardQueryFragment">;
};
export type DashboardPaginationQuery = {
  response: DashboardPaginationQuery$data;
  variables: DashboardPaginationQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": 10,
    "kind": "LocalArgument",
    "name": "first"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DashboardPaginationQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "DashboardQueryFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DashboardPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AdminQueryType",
        "kind": "LinkedField",
        "name": "Admin",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TreeAdminSchema",
            "kind": "LinkedField",
            "name": "Tree",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": (v1/*: any*/),
                "concreteType": "TreeNodesConnection",
                "kind": "LinkedField",
                "name": "GetContentNodes",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TreeNodesEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "TreeNode",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "structureDefinition",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "__typename",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "title",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "id",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "cursor",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "kind": "LinkedField",
                    "name": "pageInfo",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hasNextPage",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "endCursor",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6c30805ede56c17b05305009e67046f2",
    "id": null,
    "metadata": {},
    "name": "DashboardPaginationQuery",
    "operationKind": "query",
    "text": "query DashboardPaginationQuery(\n  $after: String\n  $first: Int = 10\n) {\n  ...DashboardQueryFragment_2HEEH6\n}\n\nfragment DashboardQueryFragment_2HEEH6 on Query {\n  Admin {\n    Tree {\n      GetContentNodes(first: $first, after: $after) {\n        edges {\n          node {\n            structureDefinition {\n              __typename\n              title\n            }\n            id\n          }\n          cursor\n        }\n        pageInfo {\n          hasNextPage\n          endCursor\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b6cf3dd961092d7d8ba00ba2bd278a68";

export default node;
