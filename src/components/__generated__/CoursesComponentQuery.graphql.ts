/**
 * @generated SignedSource<<28e3444e0ca6e5a00a9610dda130d0cb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CoursesComponentQuery$variables = {};
export type CoursesComponentQuery$data = {
  readonly courses: {
    readonly courses: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly _id: number | null;
          readonly body: string | null;
          readonly description: string | null;
          readonly id: string;
          readonly title: string | null;
          readonly " $fragmentSpreads": FragmentRefs<"CourseComponent_course">;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};
export type CoursesComponentQuery = {
  response: CoursesComponentQuery$data;
  variables: CoursesComponentQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "body",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CoursesComponentQuery",
    "selections": [
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
                      (v0/*: any*/),
                      (v1/*: any*/),
                      (v2/*: any*/),
                      (v3/*: any*/),
                      (v4/*: any*/),
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CoursesComponentQuery",
    "selections": [
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
                      (v0/*: any*/),
                      (v1/*: any*/),
                      (v2/*: any*/),
                      (v3/*: any*/),
                      (v4/*: any*/)
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
    "cacheID": "d00b5f99db056855f5ce173d9c77800c",
    "id": null,
    "metadata": {},
    "name": "CoursesComponentQuery",
    "operationKind": "query",
    "text": "query CoursesComponentQuery {\n  courses {\n    courses {\n      edges {\n        node {\n          id\n          _id\n          title\n          description\n          body\n          ...CourseComponent_course\n        }\n      }\n    }\n  }\n}\n\nfragment CourseComponent_course on Course {\n  id\n  title\n  description\n  body\n}\n"
  }
};
})();

(node as any).hash = "6e924379f4e5e5a26840566f19214c00";

export default node;
