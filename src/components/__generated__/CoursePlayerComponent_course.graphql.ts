/**
 * @generated SignedSource<<ea3d8c59f5826e7e9b0356210c9a7aad>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CoursePlayerComponent_course$data = {
  readonly body: string | null;
  readonly description: string | null;
  readonly id: string;
  readonly title: string | null;
  readonly " $fragmentType": "CoursePlayerComponent_course";
};
export type CoursePlayerComponent_course$key = {
  readonly " $data"?: CoursePlayerComponent_course$data;
  readonly " $fragmentSpreads": FragmentRefs<"CoursePlayerComponent_course">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CoursePlayerComponent_course",
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

(node as any).hash = "369da4a5b80c73d847eaa1e346df6105";

export default node;
