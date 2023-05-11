/**
 * @generated SignedSource<<467634f891ae614cdd2b87b636e90689>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ScoresQuery$variables = {};
export type ScoresQuery$data = {
  readonly scores: {
    readonly data: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly username: string | null;
          readonly value: number | null;
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ScoresQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
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
                      (v0/*: any*/),
                      (v1/*: any*/)
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
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ScoresQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
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
                      (v0/*: any*/),
                      (v1/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "id",
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
    ]
  },
  "params": {
    "cacheID": "9148be853b73598ef13098c560639f7a",
    "id": null,
    "metadata": {},
    "name": "ScoresQuery",
    "operationKind": "query",
    "text": "query ScoresQuery {\n  scores {\n    data {\n      edges {\n        node {\n          username\n          value\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "7b6a71c71a607becf82bce680a4cec08";

export default node;
