/**
 * @generated SignedSource<<f08e3205fd500bf82a109b561b3f9b6a>>
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
  readonly id: string;
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
      "name": "id",
      "storageKey": null
    },
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

(node as any).hash = "7c8e678cc277d8621fb440f540ab9c3f";

export default node;
