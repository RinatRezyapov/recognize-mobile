/**
 * @generated SignedSource<<816323844f919b8578c2f8613dd6d067>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type CourseComponentQuery$variables = {
  courseId?: string | null;
  id?: string | null;
};
export type CourseComponentQuery$data = {
  readonly user: {
    readonly _id: string | null;
    readonly id: string;
    readonly score: {
      readonly username: string | null;
      readonly value: number | null;
    } | null;
    readonly username: string | null;
  } | null;
};
export type CourseComponentQuery = {
  response: CourseComponentQuery$data;
  variables: CourseComponentQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "courseId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
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
      (v2/*: any*/),
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "courseId",
            "variableName": "courseId"
          }
        ],
        "concreteType": "Score",
        "kind": "LinkedField",
        "name": "score",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CourseComponentQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CourseComponentQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "e5e8f4b4a68d2d8c6ef2d02492a77776",
    "id": null,
    "metadata": {},
    "name": "CourseComponentQuery",
    "operationKind": "query",
    "text": "query CourseComponentQuery(\n  $id: String\n  $courseId: String\n) {\n  user(id: $id) {\n    id\n    _id\n    username\n    score(courseId: $courseId) {\n      username\n      value\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e1c4d4e2e08de3dd2c13ecb888e7cfaa";

export default node;
