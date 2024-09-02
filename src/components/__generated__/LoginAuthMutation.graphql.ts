/**
 * @generated SignedSource<<78b20282c91f37f277a8a69e433d5746>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type Permission = "AccountPermission_AVGSPotentialAnalysis_IsAVGSAccount" | "AccountPermission_AZAVAdmin_IsAZAVAccount" | "AccountPermission_AccountMemberManagement_CanInviteOrAddUsersToUserInAccountGroups" | "AccountPermission_Auth_IsBusinessAccount" | "AccountPermission_Auth_usePlacement" | "AccountPermission_CoachingCoachProfileAdmin_IsCoachAccount" | "AccountPermission_System_Root" | "UserInAccountPermission_AVGSPotentialAnalysis_IsAVGSAdmin" | "UserInAccountPermission_AVGSPotentialAnalysis_IsAVGSCoach" | "UserInAccountPermission_AVGSPotentialAnalysis_ModifyAdmin" | "UserInAccountPermission_AVGSPotentialAnalysis_ReadAdmin" | "UserInAccountPermission_AZAVAdmin_Modify" | "UserInAccountPermission_AZAVAdmin_Read" | "UserInAccountPermission_AsyncElementTaskAdmin_Modify" | "UserInAccountPermission_AsyncElementTaskAdmin_Read" | "UserInAccountPermission_AuthAdmin_MinimalRead" | "UserInAccountPermission_AuthAdmin_Modify" | "UserInAccountPermission_AuthAdmin_Read" | "UserInAccountPermission_Auth_Modify" | "UserInAccountPermission_Auth_Read" | "UserInAccountPermission_CachingAdmin_Modify" | "UserInAccountPermission_CoachBillingAdmin_Read" | "UserInAccountPermission_CoachFeedback_Read" | "UserInAccountPermission_CoachingAvailabilityAdmin_ModifyAvailability" | "UserInAccountPermission_CoachingAvailabilityAdmin_ReadAvailability" | "UserInAccountPermission_CoachingCoachProfileAdmin_ModifyCoachProfiles" | "UserInAccountPermission_CoachingCoachProfileAdmin_ReadCoachProfiles" | "UserInAccountPermission_CoachingOfferAdmin_Modify" | "UserInAccountPermission_CoachingOfferAdmin_Read" | "UserInAccountPermission_ContractPartnerAdmin_Modify" | "UserInAccountPermission_ContractPartnerAdmin_Read" | "UserInAccountPermission_CustomerFeedback_Modify" | "UserInAccountPermission_CustomerFeedback_Read" | "UserInAccountPermission_DiscountAdmin_Modify" | "UserInAccountPermission_DiscountAdmin_Read" | "UserInAccountPermission_Email_Templates" | "UserInAccountPermission_ExternalLicenseAdmin_Modify" | "UserInAccountPermission_ExternalLicenseAdmin_Read" | "UserInAccountPermission_FeatureToggleAdmin_Modify" | "UserInAccountPermission_FeatureToggleAdmin_Read" | "UserInAccountPermission_Files_Delete" | "UserInAccountPermission_GenerateCartLinkAdmin_Modify" | "UserInAccountPermission_Instructors_CreateInstructors" | "UserInAccountPermission_Instructors_DeleteInstructors" | "UserInAccountPermission_Instructors_ReadInstructors" | "UserInAccountPermission_Instructors_UpdateInstructors" | "UserInAccountPermission_LearnStates_ReadLearnStates" | "UserInAccountPermission_LearnableAdmin_Modify" | "UserInAccountPermission_LearnableAdmin_Read" | "UserInAccountPermission_LicenseAdmin_Modify" | "UserInAccountPermission_LicenseAdmin_Read" | "UserInAccountPermission_LicenseDefinitionAdmin_Modify" | "UserInAccountPermission_LicenseDefinitionAdmin_Read" | "UserInAccountPermission_LimitedCartDiscountAdmin_Modify" | "UserInAccountPermission_LimitedCartDiscountAdmin_Read" | "UserInAccountPermission_Management_Management" | "UserInAccountPermission_Nodes_CreateNodes" | "UserInAccountPermission_Nodes_DeleteNodes" | "UserInAccountPermission_Nodes_PublishNodes" | "UserInAccountPermission_Nodes_ReadNodes" | "UserInAccountPermission_Nodes_UpdateNodes" | "UserInAccountPermission_OrderAdmin_Modify" | "UserInAccountPermission_OrderAdmin_Read" | "UserInAccountPermission_PlacementContactPerson_Access" | "UserInAccountPermission_ProductAdmin_Modify" | "UserInAccountPermission_ProductAdmin_Read" | "UserInAccountPermission_ReportAdmin_Modify" | "UserInAccountPermission_ReportAdmin_Read" | "UserInAccountPermission_SettingsAdmin_Modify" | "UserInAccountPermission_SettingsAdmin_Read" | "UserInAccountPermission_Submissions_ReadSubmissions" | "UserInAccountPermission_System_Owner" | "UserInAccountPermission_TagAdmin_Modify" | "UserInAccountPermission_TagAdmin_Read" | "UserInAccountPermission_TagAdmin_Select" | "UserInAccountPermission_Tags_CreateTags" | "UserInAccountPermission_Tags_DeleteTags" | "UserInAccountPermission_Tags_ReadTags" | "UserInAccountPermission_Tags_UpdateTags" | "UserInAccountPermission_Trend_Modify" | "UserInAccountPermission_Trend_Read" | "UserInAccountPermission_VocabAdmin_ModifyWordPackages" | "UserInAccountPermission_VocabAdmin_ReadWordPackages" | "%future added value";
export type LoginAuthMutation$variables = {
  email: string;
  password: string;
};
export type LoginAuthMutation$data = {
  readonly Auth: {
    readonly login: {
      readonly accounts: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
      }>;
      readonly permissionsInAccounts: ReadonlyArray<{
        readonly accountRef: string;
        readonly permissions: ReadonlyArray<Permission>;
      }>;
    } | null | undefined;
    readonly loginJwt: {
      readonly clientMutationId: string | null | undefined;
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
v2 = [
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
        "args": (v1/*: any*/),
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "clientMutationId",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "LoginPayload",
        "kind": "LinkedField",
        "name": "login",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Account",
            "kind": "LinkedField",
            "name": "accounts",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "AccountPermissions",
            "kind": "LinkedField",
            "name": "permissionsInAccounts",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "accountRef",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "permissions",
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
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LoginAuthMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "47eb2ae6f4c38c56c8b2e76ca2ec4394",
    "id": null,
    "metadata": {},
    "name": "LoginAuthMutation",
    "operationKind": "mutation",
    "text": "mutation LoginAuthMutation(\n  $email: String!\n  $password: String!\n) {\n  Auth {\n    loginJwt(input: {email: $email, password: $password}) {\n      loginResult {\n        jwtTokens {\n          accessToken\n          refreshToken\n        }\n      }\n      clientMutationId\n    }\n    login(input: {email: $email, password: $password}) {\n      accounts {\n        id\n        name\n      }\n      permissionsInAccounts {\n        accountRef\n        permissions\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "910e2312990c2469163410ad501dfee9";

export default node;
