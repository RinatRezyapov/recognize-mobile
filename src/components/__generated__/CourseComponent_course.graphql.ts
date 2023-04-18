/**
 * @generated SignedSource<<f9a78388a1c52b4020c98a88c44019a3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CourseComponent_course$data = {
  readonly _id: string | null;
  readonly authorId: string | null;
  readonly body: string | null;
  readonly description: string | null;
  readonly id: string;
  readonly scores: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly username: string | null;
        readonly value: number | null;
      } | null;
    } | null> | null;
  } | null;
  readonly title: string | null;
  readonly " $fragmentType": "CourseComponent_course";
};
export type CourseComponent_course$key = {
  readonly " $data"?: CourseComponent_course$data;
  readonly " $fragmentSpreads": FragmentRefs<"CourseComponent_course">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CourseComponent_course",
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
      "name": "authorId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ScoreConnection",
      "kind": "LinkedField",
      "name": "scores",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ScoreEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Score",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "username",
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
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Course",
  "abstractKey": null
};

(node as any).hash = "23ffc643a7b989a24a9bbea42e8fb506";

export default node;
