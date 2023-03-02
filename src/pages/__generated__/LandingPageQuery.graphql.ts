/**
 * @generated SignedSource<<44f0c76341ae4c2f00365fca5fb46c42>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type LandingPageQuery$variables = {
  id?: string | null;
};
export type LandingPageQuery$data = {
  readonly user: {
    readonly email: string | null;
    readonly id: string;
    readonly username: string | null;
  } | null;
};
export type LandingPageQuery = {
  response: LandingPageQuery$data;
  variables: LandingPageQuery$variables;
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
        "name": "username",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
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
    "name": "LandingPageQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LandingPageQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "fd406d6a4065f17a121628cbdb520140",
    "id": null,
    "metadata": {},
    "name": "LandingPageQuery",
    "operationKind": "query",
    "text": "query LandingPageQuery(\n  $id: String\n) {\n  user(id: $id) {\n    id\n    username\n    email\n  }\n}\n"
  }
};
})();

(node as any).hash = "0c9a6c175acf7b907dd05422936d0e5c";

export default node;
