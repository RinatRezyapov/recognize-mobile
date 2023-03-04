/**
 * @generated SignedSource<<0488245026120243943a7135ae3d9e07>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ProfilePageQuery$variables = {
  id?: string | null;
};
export type ProfilePageQuery$data = {
  readonly user: {
    readonly courses: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly body: string | null;
          readonly description: string | null;
          readonly id: string | null;
          readonly title: string | null;
        } | null;
      } | null> | null;
    } | null;
    readonly email: string | null;
    readonly id: string;
    readonly username: string | null;
  } | null;
};
export type ProfilePageQuery = {
  response: ProfilePageQuery$data;
  variables: ProfilePageQuery$variables;
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
        "name": "username",
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
                    "name": "description",
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
    "name": "ProfilePageQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProfilePageQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "f7d2502e6ed725f83f50107905368622",
    "id": null,
    "metadata": {},
    "name": "ProfilePageQuery",
    "operationKind": "query",
    "text": "query ProfilePageQuery(\n  $id: String\n) {\n  user(id: $id) {\n    id\n    username\n    email\n    courses {\n      edges {\n        node {\n          id\n          title\n          description\n          body\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c0c3e2ad929977af2ed095a77c295b49";

export default node;
