/**
 * @generated SignedSource<<36eae6ab0f383a27f03d3237133cd1d6>>
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
      readonly authorid: string | null;
      readonly title: string | null;
    };
    readonly user: {
      readonly username: string | null;
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "concreteType": "Course",
  "kind": "LinkedField",
  "name": "courseEdge",
  "plural": false,
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
      "name": "authorid",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CourseCreateComponentMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddCoursePayload",
        "kind": "LinkedField",
        "name": "addCourse",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CourseCreateComponentMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddCoursePayload",
        "kind": "LinkedField",
        "name": "addCourse",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4ae5755a65be32f2e90338bdc1a34138",
    "id": null,
    "metadata": {},
    "name": "CourseCreateComponentMutation",
    "operationKind": "mutation",
    "text": "mutation CourseCreateComponentMutation(\n  $input: AddCourseInput!\n) {\n  addCourse(input: $input) {\n    courseEdge {\n      title\n      authorid\n    }\n    user {\n      username\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a72068f098a859899ac38ddd4e24c7d6";

export default node;
