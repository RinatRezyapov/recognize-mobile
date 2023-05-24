/**
 * @generated SignedSource<<9eedcd6394aa28ba67df242881e54540>>
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
var v0 = [
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ScoresQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ScoresQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "cc25618f5500e7a50fdd525761f75f85",
    "id": null,
    "metadata": {},
    "name": "ScoresQuery",
    "operationKind": "query",
    "text": "query ScoresQuery {\n  scores {\n    data {\n      edges {\n        node {\n          id\n          _id\n          username\n          score\n          sequence\n          course\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "248629bdabd4443bebf7f10c86bbcba6";

export default node;
