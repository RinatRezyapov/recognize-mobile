/**
 * @generated SignedSource<<a0884888a6578f451a922d9de605d83f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddScoreInput = {
  clientMutationId?: string | null;
  course_id: string;
  score: number;
  user_id: string;
};
export type CoursePlayerComponentMutation$variables = {
  input: AddScoreInput;
};
export type CoursePlayerComponentMutation$data = {
  readonly addScore: {
    readonly scoreEdge: {
      readonly node: {
        readonly id: string;
        readonly username: string | null;
        readonly value: number | null;
      } | null;
    };
  } | null;
};
export type CoursePlayerComponentMutation = {
  response: CoursePlayerComponentMutation$data;
  variables: CoursePlayerComponentMutation$variables;
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
    "concreteType": "AddScorePayload",
    "kind": "LinkedField",
    "name": "addScore",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ScoreEdge",
        "kind": "LinkedField",
        "name": "scoreEdge",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Score",
            "kind": "LinkedField",
            "name": "node",
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
                "name": "value",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
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
    "name": "CoursePlayerComponentMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CoursePlayerComponentMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "aa72b53a7f3d269fb22af123aa29cda6",
    "id": null,
    "metadata": {},
    "name": "CoursePlayerComponentMutation",
    "operationKind": "mutation",
    "text": "mutation CoursePlayerComponentMutation(\n  $input: AddScoreInput!\n) {\n  addScore(input: $input) {\n    scoreEdge {\n      node {\n        id\n        username\n        value\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "1ecfff91e9df5ae492acb661eb07d8cd";

export default node;
