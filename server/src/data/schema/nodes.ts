
import { getCourse } from '../database';
import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';
import { globalIdField, nodeDefinitions, fromGlobalId } from 'graphql-relay';
import { GraphQLCourse } from './queries/CourseQuery';


const {nodeInterface, nodeField} = nodeDefinitions(
  (globalId: string, { pgPool }) => {
    const {type, id} = fromGlobalId(globalId);

    return getCourse(id, pgPool);
  },
  (obj) => {
    return GraphQLCourse;
    
  }
)

export { GraphQLCourse, nodeField, nodeInterface };