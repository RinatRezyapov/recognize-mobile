/**
 * @generated SignedSource<<e2e8bde57831b6b4b6ac1d799fea23d5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CourseEditComponent_user$data = {
  readonly _id: number | null;
  readonly id: string;
  readonly username: string | null;
  readonly " $fragmentType": "CourseEditComponent_user";
};
export type CourseEditComponent_user$key = {
  readonly " $data"?: CourseEditComponent_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"CourseEditComponent_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CourseEditComponent_user",
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

(node as any).hash = "4a78ca006b966e44bb247e87b77471bd";

export default node;
