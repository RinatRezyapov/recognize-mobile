/**
 * @generated SignedSource<<c8b92b660f8725daf6c78c2a5126b85b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CourseComponent_score$data = {
  readonly id: string;
  readonly value: number | null;
  readonly " $fragmentType": "CourseComponent_score";
};
export type CourseComponent_score$key = {
  readonly " $data"?: CourseComponent_score$data;
  readonly " $fragmentSpreads": FragmentRefs<"CourseComponent_score">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CourseComponent_score",
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
      "name": "value",
      "storageKey": null
    }
  ],
  "type": "Score",
  "abstractKey": null
};

(node as any).hash = "678602a40c1bb04af6b8629daea9a661";

export default node;
