/**
 * @generated SignedSource<<27e847721ab074175202e907600e0188>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type LikeCourseInput = {
  clientMutationId?: string | null;
  course_id: string;
  user_id: string;
};
export type CourseCardComponentMutation$variables = {
  input: LikeCourseInput;
};
export type CourseCardComponentMutation$data = {
  readonly likeCourse: {
    readonly likedCourseId: string;
  } | null;
};
export type CourseCardComponentMutation = {
  response: CourseCardComponentMutation$data;
  variables: CourseCardComponentMutation$variables;
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
    "concreteType": "LikeCoursePayload",
    "kind": "LinkedField",
    "name": "likeCourse",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "likedCourseId",
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
    "name": "CourseCardComponentMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CourseCardComponentMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "feed2581dcdc509673b729b5aa1fe502",
    "id": null,
    "metadata": {},
    "name": "CourseCardComponentMutation",
    "operationKind": "mutation",
    "text": "mutation CourseCardComponentMutation(\n  $input: LikeCourseInput!\n) {\n  likeCourse(input: $input) {\n    likedCourseId\n  }\n}\n"
  }
};
})();

(node as any).hash = "f9f9a4240a048dc563f61d92becad77a";

export default node;
