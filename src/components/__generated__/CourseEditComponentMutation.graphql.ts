/**
 * @generated SignedSource<<472f6061284ab05e520dbd2d5731b2a2>>
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
export type CourseEditComponentMutation$variables = {
  input: UpdateCourseInput;
};
export type CourseEditComponentMutation$data = {
  readonly updateCourse: {
    readonly courseEdge: {
      readonly node: {
        readonly _id: number | null;
        readonly body: string | null;
        readonly description: string | null;
        readonly id: string;
        readonly title: string | null;
      } | null;
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
    "name": "CourseEditComponentMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CourseEditComponentMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a61a4089a9641940a1f326ca16705602",
    "id": null,
    "metadata": {},
    "name": "CourseEditComponentMutation",
    "operationKind": "mutation",
    "text": "mutation CourseEditComponentMutation(\n  $input: UpdateCourseInput!\n) {\n  updateCourse(input: $input) {\n    courseEdge {\n      node {\n        id\n        _id\n        title\n        description\n        body\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f7f85e3e00842fb14ed5fbe332c99c1e";

export default node;
