/**
 * @generated SignedSource<<cab9cd05c0a0c75c4016c58fb5339a5a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type RemoveCourseInput = {
  clientMutationId?: string | null;
  id: number;
};
export type CourseComponentMutation$variables = {
  input: RemoveCourseInput;
};
export type CourseComponentMutation$data = {
  readonly removeCourse: {
    readonly _id: number;
    readonly clientMutationId: string | null;
  } | null;
};
export type CourseComponentMutation = {
  response: CourseComponentMutation$data;
  variables: CourseComponentMutation$variables;
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
    "concreteType": "RemoveCoursePayload",
    "kind": "LinkedField",
    "name": "removeCourse",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
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
    "name": "CourseComponentMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CourseComponentMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b2f1b58d3e48945a97fbda00d6b9e1a6",
    "id": null,
    "metadata": {},
    "name": "CourseComponentMutation",
    "operationKind": "mutation",
    "text": "mutation CourseComponentMutation(\n  $input: RemoveCourseInput!\n) {\n  removeCourse(input: $input) {\n    clientMutationId\n    _id\n  }\n}\n"
  }
};
})();

(node as any).hash = "85fefd3c489c852d212f53c16834092d";

export default node;
