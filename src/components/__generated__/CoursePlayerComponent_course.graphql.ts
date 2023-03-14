/**
 * @generated SignedSource<<536e58d1b102cb1ff34c1984fe497e14>>
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

(node as any).hash = "dcd9445ba893e16e1f7fd53749edb4f6";

export default node;
