/**
 * @generated SignedSource<<87413a62a47db415471159688c007cdd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type RemoveCourseInput = {
  clientMutationId?: string | null;
  id: string;
};
export type CourseComponentMutation$variables = {
  input: RemoveCourseInput;
};
export type CourseComponentMutation$data = {
  readonly removeCourse: {
    readonly deletedCourseId: number;
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
        "name": "deletedCourseId",
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
    "cacheID": "7f58b5a2aac109c1addccfaf247cd430",
    "id": null,
    "metadata": {},
    "name": "CourseComponentMutation",
    "operationKind": "mutation",
    "text": "mutation CourseComponentMutation(\n  $input: RemoveCourseInput!\n) {\n  removeCourse(input: $input) {\n    deletedCourseId\n  }\n}\n"
  }
};
})();

(node as any).hash = "57069cd3003e3e7ce0af6d1cd698f7e6";

export default node;
