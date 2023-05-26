/**
 * @generated SignedSource<<7fe6173f2c0bb6ab57a85b3807979724>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddStreakInput = {
  clientMutationId?: string | null;
  courseId: string;
  interval: number;
  streak: number;
  userId: string;
  wordsCount: number;
};
export type AddStreakMutation$variables = {
  input: AddStreakInput;
};
export type AddStreakMutation$data = {
  readonly addStreak: {
    readonly streakEdge: {
      readonly node: {
        readonly _id: string | null;
        readonly courseId: string | null;
        readonly id: string;
        readonly streak: number | null;
        readonly userId: string | null;
        readonly username: string | null;
      } | null;
    };
  } | null;
};
export type AddStreakMutation = {
  response: AddStreakMutation$data;
  variables: AddStreakMutation$variables;
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
    "concreteType": "AddStreakPayload",
    "kind": "LinkedField",
    "name": "addStreak",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "StreakEdge",
        "kind": "LinkedField",
        "name": "streakEdge",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Streak",
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
                "name": "streak",
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
    "name": "AddStreakMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddStreakMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "28f7ee5c1ce87ba604c366569a639cf1",
    "id": null,
    "metadata": {},
    "name": "AddStreakMutation",
    "operationKind": "mutation",
    "text": "mutation AddStreakMutation(\n  $input: AddStreakInput!\n) {\n  addStreak(input: $input) {\n    streakEdge {\n      node {\n        id\n        _id\n        userId\n        courseId\n        username\n        streak\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "008b78fc7826dc0317f9f32cc5e4d603";

export default node;
