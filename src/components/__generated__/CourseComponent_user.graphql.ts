/**
 * @generated SignedSource<<a1b5d3bec81272a666539475ef0ded98>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CourseComponent_user$data = {
  readonly _id: string | null;
  readonly " $fragmentType": "CourseComponent_user";
};
export type CourseComponent_user$key = {
  readonly " $data"?: CourseComponent_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"CourseComponent_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CourseComponent_user",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "_id",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "896cb4bdd9f4659a9d7a813e40bf8e29";

export default node;
