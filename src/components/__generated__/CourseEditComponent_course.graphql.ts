/**
 * @generated SignedSource<<ad556d1df8f4547aea87f98463c41fe8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CourseEditComponent_course$data = {
  readonly body: string | null;
  readonly description: string | null;
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

(node as any).hash = "a0b4e62f1c7a5b429656bfc164e6e824";

export default node;
