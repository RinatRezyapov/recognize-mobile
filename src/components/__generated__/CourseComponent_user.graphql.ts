/**
 * @generated SignedSource<<62f543bb31ae7f015737261fe1eeba86>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CourseComponent_user$data = {
  readonly _id: number | null;
  readonly id: string;
  readonly username: string | null;
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "username",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "23a328eea806ad79c3c38b22ccdd540a";

export default node;
