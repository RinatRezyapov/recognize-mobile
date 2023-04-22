/**
 * @generated SignedSource<<4daf9e52d16411504f6a5eda4ce81470>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateCourseInput = {
  body: string;
  clientMutationId?: string | null;
  description: string;
  id: string;
  title: string;
};
export type UpdateCourseMutation$variables = {
  input: UpdateCourseInput;
};
export type UpdateCourseMutation$data = {
  readonly updateCourse: {
    readonly courseEdge: {
      readonly node: {
        readonly _id: string | null;
        readonly body: string | null;
        readonly description: string | null;
        readonly id: string;
        readonly title: string | null;
      } | null;
    };
  } | null;
};
export type UpdateCourseMutation = {
  response: UpdateCourseMutation$data;
  variables: UpdateCourseMutation$variables;
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
    "concreteType": "UpdateCoursePayload",
    "kind": "LinkedField",
    "name": "updateCourse",
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
                "name": "description",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "body",
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
    "name": "UpdateCourseMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateCourseMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "770856a49d7ef0d45b9da238f0efa708",
    "id": null,
    "metadata": {},
    "name": "UpdateCourseMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateCourseMutation(\n  $input: UpdateCourseInput!\n) {\n  updateCourse(input: $input) {\n    courseEdge {\n      node {\n        id\n        _id\n        title\n        description\n        body\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "85746d999171cff09fc2714cccd045aa";

export default node;
