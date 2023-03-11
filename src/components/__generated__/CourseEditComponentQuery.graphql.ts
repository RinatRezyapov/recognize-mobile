/**
 * @generated SignedSource<<cc0adc6249494150a0d192c244810cd8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type CourseEditComponentQuery$variables = {
  id?: number | null;
};
export type CourseEditComponentQuery$data = {
  readonly course: {
    readonly _id: number | null;
    readonly body: string | null;
    readonly description: string | null;
    readonly title: string | null;
  } | null;
};
export type CourseEditComponentQuery = {
  response: CourseEditComponentQuery$data;
  variables: CourseEditComponentQuery$variables;
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
  "name": "_id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "body",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CourseEditComponentQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Course",
        "kind": "LinkedField",
        "name": "course",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/)
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
    "name": "CourseEditComponentQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Course",
        "kind": "LinkedField",
        "name": "course",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "14b6ba2a0c837a87ac9a0231aafb3d6e",
    "id": null,
    "metadata": {},
    "name": "CourseEditComponentQuery",
    "operationKind": "query",
    "text": "query CourseEditComponentQuery(\n  $id: Int\n) {\n  course(id: $id) {\n    _id\n    title\n    description\n    body\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "d3f4238c922781f6eb497305cc803275";

export default node;
