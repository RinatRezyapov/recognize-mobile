/**
 * @generated SignedSource<<ec2447f21e0ddd90f5b3304c234c0291>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CoursesComponentQuery$variables = {
  id?: string | null;
};
export type CoursesComponentQuery$data = {
  readonly courses: {
    readonly courses: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly _id: string | null;
          readonly authorId: string | null;
          readonly body: string | null;
          readonly description: string | null;
          readonly id: string;
          readonly likes: ReadonlyArray<string | null> | null;
          readonly title: string | null;
          readonly " $fragmentSpreads": FragmentRefs<"CourseComponent_course">;
        } | null;
      } | null> | null;
    } | null;
  } | null;
  readonly user: {
    readonly _id: string | null;
    readonly id: string;
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_id",
  "storageKey": null
},
v3 = {
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
    (v2/*: any*/)
  ],
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "body",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "authorId",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "likes",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CoursesComponentQuery",
    "selections": [
      (v3/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Courses",
        "kind": "LinkedField",
        "name": "courses",
        "plural": false,
        "selections": [
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
                      (v2/*: any*/),
                      (v4/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/),
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "CourseComponent_course"
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
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CoursesComponentQuery",
    "selections": [
      (v3/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Courses",
        "kind": "LinkedField",
        "name": "courses",
        "plural": false,
        "selections": [
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
                      (v2/*: any*/),
                      (v4/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/)
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
    "cacheID": "2645063b9c24df6b6f38e720c21f9ccc",
    "id": null,
    "metadata": {},
    "name": "CoursesComponentQuery",
    "operationKind": "query",
    "text": "query CoursesComponentQuery(\n  $id: String\n) {\n  user(id: $id) {\n    id\n    _id\n  }\n  courses {\n    courses {\n      edges {\n        node {\n          id\n          _id\n          title\n          description\n          body\n          authorId\n          likes\n          ...CourseComponent_course\n        }\n      }\n    }\n  }\n}\n\nfragment CourseComponent_course on Course {\n  id\n  title\n  description\n  body\n}\n"
  }
};
})();

(node as any).hash = "b1364255bb7d21999e74e944b75a6b10";

export default node;
