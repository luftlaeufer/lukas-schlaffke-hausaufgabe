/**
 * @generated SignedSource<<84f9c63cf0a28409e6f186e48080ab8c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type LoginAuthMutation$variables = {
  email: string;
  password: string;
};
export type LoginAuthMutation$data = {
  readonly Auth: {
    readonly loginJwt: {
      readonly loginResult: {
        readonly jwtTokens: {
          readonly accessToken: string;
          readonly refreshToken: string;
        };
      };
    } | null | undefined;
  };
};
export type LoginAuthMutation = {
  response: LoginAuthMutation$data;
  variables: LoginAuthMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "email"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "password"
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "AuthMutations",
    "kind": "LinkedField",
    "name": "Auth",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "email",
                "variableName": "email"
              },
              {
                "kind": "Variable",
                "name": "password",
                "variableName": "password"
              }
            ],
            "kind": "ObjectValue",
            "name": "input"
          }
        ],
        "concreteType": "LoginJwtPayload",
        "kind": "LinkedField",
        "name": "loginJwt",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "LoginResult",
            "kind": "LinkedField",
            "name": "loginResult",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "JwtLoginInformation",
                "kind": "LinkedField",
                "name": "jwtTokens",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "accessToken",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "refreshToken",
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LoginAuthMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LoginAuthMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3732e7335102cfa80e6cc9e7b531ba9a",
    "id": null,
    "metadata": {},
    "name": "LoginAuthMutation",
    "operationKind": "mutation",
    "text": "mutation LoginAuthMutation(\n  $email: String!\n  $password: String!\n) {\n  Auth {\n    loginJwt(input: {email: $email, password: $password}) {\n      loginResult {\n        jwtTokens {\n          accessToken\n          refreshToken\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3aa687d79123943a1ba78baf3dab8761";

export default node;
