/**
 * @generated SignedSource<<df96d94b93caa78e5a628808692780e8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
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
var v0 = [
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CoursesComponentQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CoursesComponentQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "40f4aeaea5e04ea0aea874c88744c0d4",
    "id": null,
    "metadata": {},
    "name": "CoursesComponentQuery",
    "operationKind": "query",
    "text": "query CoursesComponentQuery {\n  courses {\n    courses {\n      edges {\n        node {\n          id\n          _id\n          title\n          description\n          body\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "740df53cd45bb8920b1f6a8702850e8e";

export default node;
