/**
 * @generated SignedSource<<f0213ee247e83ba7489bf19b8c8e6c90>>
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
    readonly id: string;
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
    "cacheID": "7f8d5527e03f0f5a76f0cba8f79b7edd",
    "id": null,
    "metadata": {},
    "name": "CourseComponentQuery",
    "operationKind": "query",
    "text": "query CourseComponentQuery(\n  $id: String\n) {\n  course(id: $id) {\n    id\n    title\n    body\n  }\n}\n"
  }
};
})();

(node as any).hash = "d4be3ff4389bf74f4a79c2d3405fddc3";

export default node;
