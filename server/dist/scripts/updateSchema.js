"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const schema_1 = require("../data/schema");
const graphql_1 = require("graphql");
const schemaPath = path.resolve(__dirname, '../../../data/schema.graphql');
fs.writeFileSync(schemaPath, graphql_1.printSchema(schema_1.schema));
console.log('Wrote ' + schemaPath);
//# sourceMappingURL=updateSchema.js.map