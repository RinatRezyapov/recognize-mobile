/**
 * @generated SignedSource<<ad583e543b34a089adec11d50fefe74e>>
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
  streak: number;
  userId: string;
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
        readonly userId: string | null;
        readonly username: string | null;
        readonly value: number | null;
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
        "concreteType": "ScoreEdge",
        "kind": "LinkedField",
        "name": "streakEdge",
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
    "cacheID": "075c7370cca9a64f193b134b1e7f29f6",
    "id": null,
    "metadata": {},
    "name": "AddStreakMutation",
    "operationKind": "mutation",
    "text": "mutation AddStreakMutation(\n  $input: AddStreakInput!\n) {\n  addStreak(input: $input) {\n    streakEdge {\n      node {\n        id\n        _id\n        userId\n        courseId\n        username\n        value\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "eaa7569387dcc42aed4e6d24b0405a5c";

export default node;
