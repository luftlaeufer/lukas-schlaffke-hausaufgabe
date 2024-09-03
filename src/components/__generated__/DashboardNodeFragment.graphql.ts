/**
 * @generated SignedSource<<7814c33bca85f2538c21d6c2c4fdcf2d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DashboardNodeFragment$data = {
  readonly node: {
    readonly id: string;
    readonly structureDefinition: {
      readonly title: string;
    };
  };
  readonly " $fragmentType": "DashboardNodeFragment";
};
export type DashboardNodeFragment$key = {
  readonly " $data"?: DashboardNodeFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DashboardNodeFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DashboardNodeFragment",
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
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
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
              "name": "title",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TreeNodesEdge",
  "abstractKey": null
};

(node as any).hash = "dd1de34ae0b4b15dd102755ac5de1f63";

export default node;
