/**
 * @generated SignedSource<<6364734ae121e464e50a333c8f445ebb>>
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
    readonly addedUserId: string;
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
        "name": "addedUserId",
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
    "cacheID": "e725650c41b1b8fe5dfbedf0f587d97a",
    "id": null,
    "metadata": {},
    "name": "AddUserMutation",
    "operationKind": "mutation",
    "text": "mutation AddUserMutation(\n  $input: AddUserInput!\n) {\n  addUser(input: $input) {\n    addedUserId\n  }\n}\n"
  }
};
})();

(node as any).hash = "88b43e9d0a727f9670b6b076ae2943f6";

export default node;
