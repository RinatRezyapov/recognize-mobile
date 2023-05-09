/**
 * @generated SignedSource<<cb9628c9c1c0b9de77042b1621c6ee84>>
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
  score: number;
  userId: string;
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
        readonly sequence: string | null;
        readonly userId: string | null;
        readonly username: string | null;
        readonly value: number | null;
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
                "name": "value",
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
    "cacheID": "864f3290097d57249d375f57670f10e1",
    "id": null,
    "metadata": {},
    "name": "AddScoreMutation",
    "operationKind": "mutation",
    "text": "mutation AddScoreMutation(\n  $input: AddScoreInput!\n) {\n  addScore(input: $input) {\n    scoreEdge {\n      node {\n        id\n        _id\n        userId\n        courseId\n        username\n        value\n        sequence\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "abcaadb78bc8e71298dd485b3664535f";

export default node;
