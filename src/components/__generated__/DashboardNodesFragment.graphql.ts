/**
 * @generated SignedSource<<885f0ee86763e517c28a4d76e5e1a575>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DashboardNodesFragment$data = {
  readonly id: string;
  readonly structureDefinition: {
    readonly title: string;
  };
  readonly " $fragmentType": "DashboardNodesFragment";
};
export type DashboardNodesFragment$key = {
  readonly " $data"?: DashboardNodesFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DashboardNodesFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DashboardNodesFragment",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "TreeNode",
  "abstractKey": null
};

(node as any).hash = "c4e1908e6ec5482b740cdc40a007277c";

export default node;
