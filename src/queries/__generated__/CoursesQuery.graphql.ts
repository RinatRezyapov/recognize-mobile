/**
 * @generated SignedSource<<d0641517ae5289d75559b7b7b2e9d8a7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type CoursesQuery$variables = {};
export type CoursesQuery$data = {
  readonly courses: {
    readonly data: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly _id: string | null;
          readonly authorId: string | null;
          readonly avatar: string | null;
          readonly description: string | null;
          readonly id: string;
          readonly title: string | null;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};
export type CoursesQuery = {
  response: CoursesQuery$data;
  variables: CoursesQuery$variables;
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
        "name": "data",
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
                    "name": "authorId",
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
                    "name": "avatar",
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
    "name": "CoursesQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CoursesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "47a6139c75875eb0abf628dcb5bc7ab8",
    "id": null,
    "metadata": {},
    "name": "CoursesQuery",
    "operationKind": "query",
    "text": "query CoursesQuery {\n  courses {\n    data {\n      edges {\n        node {\n          id\n          _id\n          authorId\n          title\n          description\n          avatar\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0e601a9220ad533881d06257c0d423c2";

export default node;
