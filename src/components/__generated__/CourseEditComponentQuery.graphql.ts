/**
 * @generated SignedSource<<ab35358fc57f83102b98a25cf4de4699>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type CourseEditComponentQuery$variables = {
  id?: string | null;
};
export type CourseEditComponentQuery$data = {
  readonly course: {
    readonly body: string | null;
    readonly description: string | null;
    readonly id: number | null;
    readonly title: string | null;
  } | null;
};
export type CourseEditComponentQuery = {
  response: CourseEditComponentQuery$data;
  variables: CourseEditComponentQuery$variables;
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
    "name": "CourseEditComponentQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CourseEditComponentQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "21439f2ef446787f4345f1ddf85b6922",
    "id": null,
    "metadata": {},
    "name": "CourseEditComponentQuery",
    "operationKind": "query",
    "text": "query CourseEditComponentQuery(\n  $id: String\n) {\n  course(id: $id) {\n    id\n    title\n    description\n    body\n  }\n}\n"
  }
};
})();

(node as any).hash = "4dc71eac622ca6921ccfbf114aba6128";

export default node;
