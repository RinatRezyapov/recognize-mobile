/**
 * @generated SignedSource<<85166c2eea771a30c10e3828c41d6605>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type LikeCourseInput = {
  clientMutationId?: string | null;
  courseId: string;
  remove?: boolean | null;
  userId: string;
};
export type LikeCourseMutation$variables = {
  input: LikeCourseInput;
};
export type LikeCourseMutation$data = {
  readonly likeCourse: {
    readonly courseEdge: {
      readonly node: {
        readonly _id: string | null;
        readonly authorId: string | null;
        readonly avatar: string | null;
        readonly body: string | null;
        readonly createdAt: number | null;
        readonly description: string | null;
        readonly id: string;
        readonly likes: ReadonlyArray<string | null> | null;
        readonly title: string | null;
        readonly updatedAt: number | null;
      } | null;
    } | null;
  } | null;
};
export type LikeCourseMutation = {
  response: LikeCourseMutation$data;
  variables: LikeCourseMutation$variables;
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
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "avatar",
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
    "name": "LikeCourseMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LikeCourseMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "78cd53802ad515aea71479de109a8022",
    "id": null,
    "metadata": {},
    "name": "LikeCourseMutation",
    "operationKind": "mutation",
    "text": "mutation LikeCourseMutation(\n  $input: LikeCourseInput!\n) {\n  likeCourse(input: $input) {\n    courseEdge {\n      node {\n        id\n        _id\n        title\n        body\n        description\n        authorId\n        createdAt\n        updatedAt\n        likes\n        avatar\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "234cd2e83335bebd4587517a69c105db";

export default node;
