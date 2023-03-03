/**
 * @generated SignedSource<<cfebef83d8525c0ed65da1e58cda165b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type CourseComponentQuery$variables = {
  id?: string | null;
};
export type CourseComponentQuery$data = {
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
    readonly username: string | null;
  } | null;
};
export type CourseComponentQuery = {
  response: CourseComponentQuery$data;
  variables: CourseComponentQuery$variables;
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
    "name": "CourseComponentQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CourseComponentQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "0550dfa7604ab8906e5967d2d14f5c5a",
    "id": null,
    "metadata": {},
    "name": "CourseComponentQuery",
    "operationKind": "query",
    "text": "query CourseComponentQuery(\n  $id: String\n) {\n  user(id: $id) {\n    id\n    username\n    email\n    courses {\n      edges {\n        node {\n          id\n          title\n          body\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "276f46baba897ce86f58309812eabb36";

export default node;
