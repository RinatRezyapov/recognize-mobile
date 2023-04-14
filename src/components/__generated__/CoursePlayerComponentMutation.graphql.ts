/**
 * @generated SignedSource<<cc658a5291c719f7d7455047c12fd066>>
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
        "concreteType": "CourseEdge",
        "kind": "LinkedField",
        "name": "scoreEdge",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Course",
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
    "cacheID": "a991c0dc2b147b054fc7918fdfea22c8",
    "id": null,
    "metadata": {},
    "name": "CoursePlayerComponentMutation",
    "operationKind": "mutation",
    "text": "mutation CoursePlayerComponentMutation(\n  $input: AddScoreInput!\n) {\n  addScore(input: $input) {\n    scoreEdge {\n      node {\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "048d4996ecccddf8b3ddc6b8da984198";

export default node;
