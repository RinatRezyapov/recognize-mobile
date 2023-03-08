/**
 * @generated SignedSource<<73044d76cb59d14e44462c402da00a51>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type RemoveCourseInput = {
  clientMutationId?: string | null;
  courseId: number;
};
export type CourseComponentMutation$variables = {
  input: RemoveCourseInput;
};
export type CourseComponentMutation$data = {
  readonly removeCourse: {
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
    "cacheID": "63b8f4f20c3e8f85999c1ecab9c480dd",
    "id": null,
    "metadata": {},
    "name": "CourseComponentMutation",
    "operationKind": "mutation",
    "text": "mutation CourseComponentMutation(\n  $input: RemoveCourseInput!\n) {\n  removeCourse(input: $input) {\n    clientMutationId\n  }\n}\n"
  }
};
})();

(node as any).hash = "3e4784b30d022c4ab167f2828f34f59d";

export default node;
