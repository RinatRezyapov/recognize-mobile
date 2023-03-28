/**
 * @generated SignedSource<<04db386442b9a69dabe88b574c3fa4d7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CourseEditComponent_course$data = {
  readonly _id: string | null;
  readonly body: string | null;
  readonly description: string | null;
  readonly id: string;
  readonly title: string | null;
  readonly " $fragmentType": "CourseEditComponent_course";
};
export type CourseEditComponent_course$key = {
  readonly " $data"?: CourseEditComponent_course$data;
  readonly " $fragmentSpreads": FragmentRefs<"CourseEditComponent_course">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CourseEditComponent_course",
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
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "body",
      "storageKey": null
    }
  ],
  "type": "Course",
  "abstractKey": null
};

(node as any).hash = "6260caf71eb576f71c1d59c95c51f1d3";

export default node;
