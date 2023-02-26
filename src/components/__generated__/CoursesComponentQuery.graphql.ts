/**
 * @generated SignedSource<<1b7b6fc5218c20e0b7a7f782162848fd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type CoursesComponentQuery$variables = {
  id?: string | null;
};
export type CoursesComponentQuery$data = {
  readonly user: {
    readonly courses: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly body: string | null;
          readonly id: string;
          readonly title: string | null;
        } | null;
      } | null> | null;
    } | null;
    readonly email: string | null;
    readonly id: string;
    readonly name: string | null;
  } | null;
};
export type CoursesComponentQuery = {
  response: CoursesComponentQuery$data;
  variables: CoursesComponentQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "CourseConnection",
        "kind": "LinkedField",
        "name": "courses",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CourseEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Course",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "body",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CoursesComponentQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CoursesComponentQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "667234e2a1fdb3c71a2922970a66ba44",
    "id": null,
    "metadata": {},
    "name": "CoursesComponentQuery",
    "operationKind": "query",
    "text": "query CoursesComponentQuery(\n  $id: String\n) {\n  user(id: $id) {\n    id\n    name\n    email\n    courses {\n      edges {\n        node {\n          id\n          title\n          body\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b314386f42e3e118e1806d4e33e2d5c0";

export default node;
