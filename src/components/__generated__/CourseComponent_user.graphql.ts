/**
 * @generated SignedSource<<c958fa65a5e354502dc1258a2ded7aa3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CourseComponent_user$data = {
  readonly email: string | null;
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
      "name": "email",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "e72c7fa7c2d887912d073c6c48eeeba2";

export default node;
