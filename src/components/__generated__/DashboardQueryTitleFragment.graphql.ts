/**
 * @generated SignedSource<<170665919e0d5a35088ccea6be64533c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DashboardQueryTitleFragment$data = {
  readonly structureDefinition: {
    readonly title: string;
  };
  readonly " $fragmentType": "DashboardQueryTitleFragment";
};
export type DashboardQueryTitleFragment$key = {
  readonly " $data"?: DashboardQueryTitleFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DashboardQueryTitleFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DashboardQueryTitleFragment",
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

(node as any).hash = "7c7ff76ae8cc0c61bdc179112383bd86";

export default node;
