/**
 * @generated SignedSource<<7bbe3a1dd3cd60c9bd958ba162b45816>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddUserInput = {
  clientMutationId?: string | null;
  email: string;
  username: string;
};
export type AddUserMutation$variables = {
  input: AddUserInput;
};
export type AddUserMutation$data = {
  readonly addUser: {
    readonly id: string;
  } | null;
};
export type AddUserMutation = {
  response: AddUserMutation$data;
  variables: AddUserMutation$variables;
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
    "concreteType": "AddUserPayload",
    "kind": "LinkedField",
    "name": "addUser",
    "plural": false,
    "selections": [
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AddUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6464bd52660875eb607ae4992b7fcd66",
    "id": null,
    "metadata": {},
    "name": "AddUserMutation",
    "operationKind": "mutation",
    "text": "mutation AddUserMutation(\n  $input: AddUserInput!\n) {\n  addUser(input: $input) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "953b475ffbc231a8cd40e4ff3ce58727";

export default node;
