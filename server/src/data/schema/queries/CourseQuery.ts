
import { getCourse } from '../../database';
import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';
import { globalIdField, nodeDefinitions, fromGlobalId } from 'graphql-relay';


const {nodeInterface, nodeField} = nodeDefinitions(
  (globalId: string, { pgPool }) => {
    const {type, id} = fromGlobalId(globalId);

    return getCourse(id, pgPool);
  },
  (obj) => {
    console.log('hooooooooooo', obj)
    return GraphQLCourse;
    
  }
)
const GraphQLCourse = new GraphQLObjectType({
  name: 'Course',
  fields: {
    id: globalIdField('Course'),
    authorid: {
      type: GraphQLString,
      resolve: course => course.authorid,
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
      resolve: course => course.created,
    },
  },
  interfaces: [nodeInterface],
});

export { GraphQLCourse, nodeField, nodeInterface };