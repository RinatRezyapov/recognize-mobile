
import * as fs from 'fs';
import * as path from 'path';
import {schema} from '../data/schema';
import {printSchema} from 'graphql';

const schemaPath = path.resolve(__dirname as any, '../../../data/schema.graphql');

fs.writeFileSync(schemaPath, printSchema(schema));

console.log('Wrote ' + schemaPath);