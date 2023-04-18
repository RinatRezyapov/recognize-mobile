/**
 * @generated SignedSource<<feb07503b83b7bd015b6cc8b16bf265c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CourseComponent_user$data = {
  readonly _id: string | null;
  readonly id: string;
  readonly score: {
    readonly value: number | null;
  } | null;
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
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "courseId",
          "value": "09ab269d-cbc8-4c75-82c0-db7100ee6788"
        }
      ],
      "concreteType": "Score",
      "kind": "LinkedField",
      "name": "score",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "value",
          "storageKey": null
        }
      ],
      "storageKey": "score(courseId:\"09ab269d-cbc8-4c75-82c0-db7100ee6788\")"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "88940ef802317a775e4a20d1035c5225";

export default node;
