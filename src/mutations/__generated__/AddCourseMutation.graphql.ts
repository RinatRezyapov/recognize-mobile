/**
 * @generated SignedSource<<6ae3e7a76502effb0375ef74f3293607>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddCourseInput = {
  authorId: string;
  avatar: string;
  body: string;
  clientMutationId?: string | null;
  createdAt: string;
  description: string;
  title: string;
  updatedAt: string;
};
export type AddCourseMutation$variables = {
  input: AddCourseInput;
};
export type AddCourseMutation$data = {
  readonly addCourse: {
    readonly courseEdge: {
      readonly node: {
        readonly _id: string | null;
        readonly authorId: string | null;
        readonly body: string | null;
        readonly createdAt: number | null;
        readonly description: string | null;
        readonly id: string;
        readonly title: string | null;
        readonly updatedAt: number | null;
      } | null;
    } | null;
    readonly errors: ReadonlyArray<string | null> | null;
  } | null;
};
export type AddCourseMutation = {
  response: AddCourseMutation$data;
  variables: AddCourseMutation$variables;
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
    "concreteType": "AddCoursePayload",
    "kind": "LinkedField",
    "name": "addCourse",
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
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "errors",
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
    "name": "AddCourseMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddCourseMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e4041854000b86a12a384a8fad1c0cf3",
    "id": null,
    "metadata": {},
    "name": "AddCourseMutation",
    "operationKind": "mutation",
    "text": "mutation AddCourseMutation(\n  $input: AddCourseInput!\n) {\n  addCourse(input: $input) {\n    courseEdge {\n      node {\n        id\n        _id\n        title\n        body\n        description\n        authorId\n        createdAt\n        updatedAt\n      }\n    }\n    errors\n  }\n}\n"
  }
};
})();

(node as any).hash = "d91930f819df812e14e95f542471750c";

export default node;
