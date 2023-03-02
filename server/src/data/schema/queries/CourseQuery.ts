
import { getCourse } from '../../database';
import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';
import { globalIdField, nodeDefinitions, fromGlobalId } from 'graphql-relay';


const {nodeInterface, nodeField} = nodeDefinitions(
  (globalId: string, { pgPool }) => {
    const {type, id} = fromGlobalId(globalId);

    return getCourse(id, pgPool);
  },
  (obj) => {
    return GraphQLCourse;
    
  }
)
const GraphQLCourse = new GraphQLObjectType({
  name: 'Course',
  fields: {
    id: globalIdField('Course'),
    authorid: {
      type: GraphQLString,
      resolve: course => course.author_id,
    },
    title: {
      type: GraphQLString,
      resolve: course => course.title,
    },
    body: {
      type: GraphQLString,
      resolve: course => course.body,
    },
    created: {
      type: GraphQLInt,
      resolve: course => course.created_at,
    },
  },
  interfaces: [nodeInterface],
});

export { GraphQLCourse, nodeField, nodeInterface };