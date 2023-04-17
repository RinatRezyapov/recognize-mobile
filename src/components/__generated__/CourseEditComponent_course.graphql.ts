/**
 * @generated SignedSource<<b5862353aadea97472d48cc58cba22ff>>
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
  readonly avatar: string | null;
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "avatar",
      "storageKey": null
    }
  ],
  "type": "Course",
  "abstractKey": null
};

(node as any).hash = "cff44ba5c6312527b32e16cecfa522b2";

export default node;
