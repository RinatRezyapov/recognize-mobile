/**
 * @generated SignedSource<<e271bb221a5bcbdab75ce7222b3980fe>>
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
export type RemoveCourseMutation$variables = {
  input: RemoveCourseInput;
};
export type RemoveCourseMutation$data = {
  readonly removeCourse: {
    readonly deletedCourseId: string;
  } | null;
};
export type RemoveCourseMutation = {
  response: RemoveCourseMutation$data;
  variables: RemoveCourseMutation$variables;
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
    "name": "RemoveCourseMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RemoveCourseMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "148b9f55deaba900b3ce5112b156a8db",
    "id": null,
    "metadata": {},
    "name": "RemoveCourseMutation",
    "operationKind": "mutation",
    "text": "mutation RemoveCourseMutation(\n  $input: RemoveCourseInput!\n) {\n  removeCourse(input: $input) {\n    deletedCourseId\n  }\n}\n"
  }
};
})();

(node as any).hash = "1262ff4b755f4c5ea4822c714e2bb9b6";

export default node;
