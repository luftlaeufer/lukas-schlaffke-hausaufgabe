/**
 * @generated SignedSource<<0ec6fabac1152cd0dc9a86d466aedcb8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type DashboardQuery$variables = Record<PropertyKey, never>;
export type DashboardQuery$data = {
  readonly Admin: {
    readonly Tree: {
      readonly GetContentNodes: {
        readonly edges: ReadonlyArray<{
          readonly node: {
            readonly id: string;
            readonly structureDefinition: {
              readonly title: string;
            };
          };
        } | null | undefined> | null | undefined;
      };
    };
  };
};
export type DashboardQuery = {
  response: DashboardQuery$data;
  variables: DashboardQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "DashboardQuery",
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
                "args": null,
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
                              (v0/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v1/*: any*/)
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
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DashboardQuery",
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
                "args": null,
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
                              (v0/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v1/*: any*/)
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
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "cf7080dea13167c48430270822e3ea79",
    "id": null,
    "metadata": {},
    "name": "DashboardQuery",
    "operationKind": "query",
    "text": "query DashboardQuery {\n  Admin {\n    Tree {\n      GetContentNodes {\n        edges {\n          node {\n            structureDefinition {\n              __typename\n              title\n            }\n            id\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "21bdd24354803e79dd3d2c5e3b7ddf17";

export default node;
