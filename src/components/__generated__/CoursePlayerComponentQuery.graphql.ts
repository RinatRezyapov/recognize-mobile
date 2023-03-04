/**
 * @generated SignedSource<<89e8d406b88071dddc5f04e20d6e05e6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type CoursePlayerComponentQuery$variables = {
  id?: string | null;
};
export type CoursePlayerComponentQuery$data = {
  readonly course: {
    readonly body: string | null;
    readonly id: string | null;
    readonly title: string | null;
  } | null;
};
export type CoursePlayerComponentQuery = {
  response: CoursePlayerComponentQuery$data;
  variables: CoursePlayerComponentQuery$variables;
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
    "name": "CoursePlayerComponentQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CoursePlayerComponentQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "affb4e7ca19aac56c2fc98d0c23b671e",
    "id": null,
    "metadata": {},
    "name": "CoursePlayerComponentQuery",
    "operationKind": "query",
    "text": "query CoursePlayerComponentQuery(\n  $id: String\n) {\n  course(id: $id) {\n    id\n    title\n    body\n  }\n}\n"
  }
};
})();

(node as any).hash = "feba0fc73f8c18d6acdd6828a9225d7a";

export default node;
