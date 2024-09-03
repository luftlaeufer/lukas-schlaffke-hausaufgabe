/**
 * @generated SignedSource<<be78744f66a632ade2cb8ad47bf4563f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DashboardGetContentNodesNodeFragment$data = {
  readonly id: string;
  readonly structureDefinition: {
    readonly title: string;
  };
  readonly " $fragmentType": "DashboardGetContentNodesNodeFragment";
};
export type DashboardGetContentNodesNodeFragment$key = {
  readonly " $data"?: DashboardGetContentNodesNodeFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DashboardGetContentNodesNodeFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DashboardGetContentNodesNodeFragment",
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
  "type": "TreeNode",
  "abstractKey": null
};

(node as any).hash = "4f2d01159222b38af6c70d5d2f719dd7";

export default node;
