/**
 * @generated SignedSource<<c9a0621b80110f6b4a36221e4de3dcc6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type CoursePageQuery$variables = {
  id?: string | null;
};
export type CoursePageQuery$data = {
  readonly course: {
    readonly body: string | null;
    readonly description: string | null;
    readonly id: string | null;
    readonly title: string | null;
  } | null;
};
export type CoursePageQuery = {
  response: CoursePageQuery$data;
  variables: CoursePageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Course",
    "kind": "LinkedField",
    "name": "course",
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CoursePageQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CoursePageQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c39ff3b6cd7b2b7e3f6db5dbd922838b",
    "id": null,
    "metadata": {},
    "name": "CoursePageQuery",
    "operationKind": "query",
    "text": "query CoursePageQuery(\n  $id: String\n) {\n  course(id: $id) {\n    id\n    title\n    description\n    body\n  }\n}\n"
  }
};
})();

(node as any).hash = "9c5351f863216fc790d8229240d93a27";

export default node;
