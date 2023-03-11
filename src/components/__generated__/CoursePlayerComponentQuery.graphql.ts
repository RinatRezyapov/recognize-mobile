/**
 * @generated SignedSource<<fbb0abcc3c8f05b4ad59c2397798e723>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type CoursePlayerComponentQuery$variables = {
  id?: number | null;
};
export type CoursePlayerComponentQuery$data = {
  readonly course: {
    readonly body: string | null;
    readonly id: string;
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
    "cacheID": "1b51abbcebaeb896dc44213f254349c5",
    "id": null,
    "metadata": {},
    "name": "CoursePlayerComponentQuery",
    "operationKind": "query",
    "text": "query CoursePlayerComponentQuery(\n  $id: Int\n) {\n  course(id: $id) {\n    id\n    title\n    body\n  }\n}\n"
  }
};
})();

(node as any).hash = "b95c20aee1f50bc8c480a38cf4ed7573";

export default node;
