/**
 * @generated SignedSource<<252a427225f862f41e2663cefc1cba6d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DashboardEdgesFragment$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly id: string;
      readonly structureDefinition: {
        readonly title: string;
      };
    };
  } | null | undefined> | null | undefined;
  readonly " $fragmentType": "DashboardEdgesFragment";
};
export type DashboardEdgesFragment$key = {
  readonly " $data"?: DashboardEdgesFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DashboardEdgesFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DashboardEdgesFragment",
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
      "storageKey": null
    }
  ],
  "type": "TreeNodesConnection",
  "abstractKey": null
};

(node as any).hash = "56c48ebd138de12d423a65a58ae4b50a";

export default node;
