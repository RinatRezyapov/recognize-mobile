/**
 * @generated SignedSource<<72c6edb7eb8d3d05cd0d2521e15cfdb6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddCourseInput = {
  authorId: number;
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
        readonly authorId: string | null;
        readonly body: string | null;
        readonly createdAt: number | null;
        readonly description: string | null;
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "body",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "authorId",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
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
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/)
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
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
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
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "63a0ac17785ff94388b15096d1880713",
    "id": null,
    "metadata": {},
    "name": "CourseCreateComponentMutation",
    "operationKind": "mutation",
    "text": "mutation CourseCreateComponentMutation(\n  $input: AddCourseInput!\n) {\n  addCourse(input: $input) {\n    courseEdge {\n      node {\n        title\n        body\n        description\n        authorId\n        createdAt\n        updatedAt\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "fe5822ff75fc8d61e930227f24a6f3ef";

export default node;
