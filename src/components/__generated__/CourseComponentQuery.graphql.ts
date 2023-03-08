/**
 * @generated SignedSource<<d85e3c59600ae2dc36eb73543f6e91c7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type CourseComponentQuery$variables = {
  id?: string | null;
};
export type CourseComponentQuery$data = {
  readonly course: {
    readonly body: string | null;
    readonly description: string | null;
    readonly id: number | null;
    readonly title: string | null;
  } | null;
};
export type CourseComponentQuery = {
  response: CourseComponentQuery$data;
  variables: CourseComponentQuery$variables;
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
    "name": "CourseComponentQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CourseComponentQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "721937ffe2e89166331b7d888de64012",
    "id": null,
    "metadata": {},
    "name": "CourseComponentQuery",
    "operationKind": "query",
    "text": "query CourseComponentQuery(\n  $id: String\n) {\n  course(id: $id) {\n    id\n    title\n    description\n    body\n  }\n}\n"
  }
};
})();

(node as any).hash = "a069e50514f573e40af0000405d338ce";

export default node;
