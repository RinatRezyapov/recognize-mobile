/**
 * @generated SignedSource<<1eca8ef70b091e5e8a99c55a0992cdd1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ScoresQuery$variables = {
  interval?: number | null;
  wordsCount?: number | null;
};
export type ScoresQuery$data = {
  readonly scores: {
    readonly data: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly _id: string | null;
          readonly course: string | null;
          readonly id: string;
          readonly score: number | null;
          readonly sequence: string | null;
          readonly username: string | null;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};
export type ScoresQuery = {
  response: ScoresQuery$data;
  variables: ScoresQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "interval"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "wordsCount"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "interval",
        "variableName": "interval"
      },
      {
        "kind": "Variable",
        "name": "wordsCount",
        "variableName": "wordsCount"
      }
    ],
    "concreteType": "Scores",
    "kind": "LinkedField",
    "name": "scores",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ScoreConnection",
        "kind": "LinkedField",
        "name": "data",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ScoreEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
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
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "course",
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ScoresQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "ScoresQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "204be0486f7c5045153c6ee24cd9151e",
    "id": null,
    "metadata": {},
    "name": "ScoresQuery",
    "operationKind": "query",
    "text": "query ScoresQuery(\n  $wordsCount: Int\n  $interval: Int\n) {\n  scores(wordsCount: $wordsCount, interval: $interval) {\n    data {\n      edges {\n        node {\n          id\n          _id\n          username\n          score\n          sequence\n          course\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "bb7fe8a031b121eea96b316ae2cb372c";

export default node;
