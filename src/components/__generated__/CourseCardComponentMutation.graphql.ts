/**
 * @generated SignedSource<<2d07c00cad977688cbbb44fb98d61666>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type LikeCourseInput = {
  clientMutationId?: string | null;
  course_id: string;
  remove?: boolean | null;
  user_id: string;
};
export type CourseCardComponentMutation$variables = {
  input: LikeCourseInput;
};
export type CourseCardComponentMutation$data = {
  readonly likeCourse: {
    readonly courseEdge: {
      readonly node: {
        readonly _id: string | null;
        readonly authorId: string | null;
        readonly body: string | null;
        readonly createdAt: number | null;
        readonly description: string | null;
        readonly id: string;
        readonly likes: ReadonlyArray<string | null> | null;
        readonly title: string | null;
        readonly updatedAt: number | null;
      } | null;
    };
  } | null;
};
export type CourseCardComponentMutation = {
  response: CourseCardComponentMutation$data;
  variables: CourseCardComponentMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "LikeCoursePayload",
    "kind": "LinkedField",
    "name": "likeCourse",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CourseEdge",
        "kind": "LinkedField",
        "name": "courseEdge",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Course",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
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
                "name": "body",
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
                "name": "authorId",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "createdAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "updatedAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "likes",
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CourseCardComponentMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CourseCardComponentMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e154ac0b8b8f1a023569c94a48a093ea",
    "id": null,
    "metadata": {},
    "name": "CourseCardComponentMutation",
    "operationKind": "mutation",
    "text": "mutation CourseCardComponentMutation(\n  $input: LikeCourseInput!\n) {\n  likeCourse(input: $input) {\n    courseEdge {\n      node {\n        id\n        _id\n        title\n        body\n        description\n        authorId\n        createdAt\n        updatedAt\n        likes\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e0a3954e65b16b1bd16a0f04c8e11bc2";

export default node;
