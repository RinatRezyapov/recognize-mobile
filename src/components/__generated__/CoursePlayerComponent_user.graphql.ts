/**
 * @generated SignedSource<<f57df3c50c4aeaa86ca758a8d879738b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CoursePlayerComponent_user$data = {
  readonly _id: string | null;
  readonly id: string;
  readonly username: string | null;
  readonly " $fragmentType": "CoursePlayerComponent_user";
};
export type CoursePlayerComponent_user$key = {
  readonly " $data"?: CoursePlayerComponent_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"CoursePlayerComponent_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CoursePlayerComponent_user",
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

(node as any).hash = "f7987e8f7061b131f6fdbbcfc014edfd";

export default node;
