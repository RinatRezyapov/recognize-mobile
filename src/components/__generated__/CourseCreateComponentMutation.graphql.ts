/**
 * @generated SignedSource<<abc09f848e6df8cd1ff5c20a3b7abae5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddCourseInput = {
  authorId: string;
  body: string;
  clientMutationId?: string | null;
  createdAt: string;
  description: string;
  title: string;
  updatedAt: string;
};
export type CourseCreateComponentMutation$variables = {
  input: AddCourseInput;
};
export type CourseCreateComponentMutation$data = {
  readonly addCourse: {
    readonly courseEdge: {
      readonly node: {
        readonly _id: number | null;
        readonly authorId: string | null;
        readonly body: string | null;
        readonly createdAt: number | null;
        readonly description: string | null;
        readonly id: string;
        readonly title: string | null;
        readonly updatedAt: number | null;
      } | null;
    };
  } | null;
};
export type CourseCreateComponentMutation = {
  response: CourseCreateComponentMutation$data;
  variables: CourseCreateComponentMutation$variables;
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
    "name": "CourseCreateComponentMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CourseCreateComponentMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1638fae75154eb4d0213705577ed95cd",
    "id": null,
    "metadata": {},
    "name": "CourseCreateComponentMutation",
    "operationKind": "mutation",
    "text": "mutation CourseCreateComponentMutation(\n  $input: AddCourseInput!\n) {\n  addCourse(input: $input) {\n    courseEdge {\n      node {\n        id\n        _id\n        title\n        body\n        description\n        authorId\n        createdAt\n        updatedAt\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3b471a69842be340c509baca7b298523";

export default node;
