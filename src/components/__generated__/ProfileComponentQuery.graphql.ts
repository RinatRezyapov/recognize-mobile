/**
 * @generated SignedSource<<ee32b8e23010ea4deb6c0709e90fc11a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProfileComponentQuery$variables = {
  id?: string | null;
};
export type ProfileComponentQuery$data = {
  readonly user: {
    readonly _id: number | null;
    readonly courses: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly _id: number | null;
          readonly body: string | null;
          readonly description: string | null;
          readonly id: string;
          readonly title: string | null;
          readonly " $fragmentSpreads": FragmentRefs<"CourseComponent_course" | "CourseEditComponent_course" | "CoursePlayerComponent_course">;
        } | null;
      } | null> | null;
    } | null;
    readonly email: string | null;
    readonly id: string;
    readonly username: string | null;
  } | null;
};
export type ProfileComponentQuery = {
  response: ProfileComponentQuery$data;
  variables: ProfileComponentQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "body",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "endCursor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasNextPage",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v12 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 2147483647
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProfileComponentQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": "courses",
            "args": null,
            "concreteType": "CourseConnection",
            "kind": "LinkedField",
            "name": "__Courses_courses_connection",
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
                      (v2/*: any*/),
                      (v3/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/),
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "CourseComponent_course"
                      },
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "CoursePlayerComponent_course"
                      },
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "CourseEditComponent_course"
                      },
                      (v9/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v10/*: any*/)
                ],
                "storageKey": null
              },
              (v11/*: any*/)
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProfileComponentQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": (v12/*: any*/),
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
                      (v2/*: any*/),
                      (v3/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/),
                      (v9/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v10/*: any*/)
                ],
                "storageKey": null
              },
              (v11/*: any*/)
            ],
            "storageKey": "courses(first:2147483647)"
          },
          {
            "alias": null,
            "args": (v12/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "Courses_courses",
            "kind": "LinkedHandle",
            "name": "courses"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9e1fa7bf666fcf44ee974ed59a7556ac",
    "id": null,
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "user",
            "courses"
          ]
        }
      ]
    },
    "name": "ProfileComponentQuery",
    "operationKind": "query",
    "text": "query ProfileComponentQuery(\n  $id: String\n) {\n  user(id: $id) {\n    id\n    _id\n    username\n    email\n    courses(first: 2147483647) {\n      edges {\n        node {\n          id\n          _id\n          title\n          description\n          body\n          ...CourseComponent_course\n          ...CoursePlayerComponent_course\n          ...CourseEditComponent_course\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n\nfragment CourseComponent_course on Course {\n  id\n  title\n  description\n  body\n}\n\nfragment CourseEditComponent_course on Course {\n  title\n  description\n  body\n}\n\nfragment CoursePlayerComponent_course on Course {\n  title\n  description\n  body\n}\n"
  }
};
})();

(node as any).hash = "3054478fa1b8b1a36eaec08eb41a1a50";

export default node;
