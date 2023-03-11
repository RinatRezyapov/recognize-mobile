/**
 * @generated SignedSource<<4c878c59fca5c28deb5e5c0553f04510>>
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
  id: number;
  title: string;
};
export type CourseEditComponentMutation$variables = {
  input: UpdateCourseInput;
};
export type CourseEditComponentMutation$data = {
  readonly updateCourse: {
    readonly courseEdge: {
      readonly title: string | null;
    };
  } | null;
};
export type CourseEditComponentMutation = {
  response: CourseEditComponentMutation$data;
  variables: CourseEditComponentMutation$variables;
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CourseEditComponentMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCoursePayload",
        "kind": "LinkedField",
        "name": "updateCourse",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Course",
            "kind": "LinkedField",
            "name": "courseEdge",
            "plural": false,
            "selections": [
              (v2/*: any*/)
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
    "name": "CourseEditComponentMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCoursePayload",
        "kind": "LinkedField",
        "name": "updateCourse",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Course",
            "kind": "LinkedField",
            "name": "courseEdge",
            "plural": false,
            "selections": [
              (v2/*: any*/),
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
    "cacheID": "a737d0c4400fbc36e76d3f0d8840fbd9",
    "id": null,
    "metadata": {},
    "name": "CourseEditComponentMutation",
    "operationKind": "mutation",
    "text": "mutation CourseEditComponentMutation(\n  $input: UpdateCourseInput!\n) {\n  updateCourse(input: $input) {\n    courseEdge {\n      title\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d37bd7712f2876432a94044ef5b38738";

export default node;
