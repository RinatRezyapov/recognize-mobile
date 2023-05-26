/**
 * @generated SignedSource<<dfa91a54315abcd00b02d83b83e6b4d7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddScoreInput = {
  clientMutationId?: string | null;
  courseId: string;
  interval: number;
  score: number;
  sequence: string;
  userId: string;
  wordsCount: number;
};
export type AddScoreMutation$variables = {
  input: AddScoreInput;
};
export type AddScoreMutation$data = {
  readonly addScore: {
    readonly scoreEdge: {
      readonly node: {
        readonly _id: string | null;
        readonly courseId: string | null;
        readonly id: string;
        readonly score: number | null;
        readonly sequence: string | null;
        readonly userId: string | null;
        readonly username: string | null;
      } | null;
    };
  } | null;
};
export type AddScoreMutation = {
  response: AddScoreMutation$data;
  variables: AddScoreMutation$variables;
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
                "name": "_id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "userId",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "courseId",
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
                "name": "score",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "sequence",
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
    "name": "AddScoreMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddScoreMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d083a81f27e18c729a5613dea05948eb",
    "id": null,
    "metadata": {},
    "name": "AddScoreMutation",
    "operationKind": "mutation",
    "text": "mutation AddScoreMutation(\n  $input: AddScoreInput!\n) {\n  addScore(input: $input) {\n    scoreEdge {\n      node {\n        id\n        _id\n        userId\n        courseId\n        username\n        score\n        sequence\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b095a5cebb67cf15825f316d932d47db";

export default node;
