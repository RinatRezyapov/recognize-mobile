import {GraphQLInt, GraphQLString} from 'graphql';
import {getAllCourses} from '../../database';
import {GraphQLCourses} from '../nodes';
import {connectionArgs} from 'graphql-relay';

const CoursesQuery = {
  type: GraphQLCourses,
  args: {
    interval: {type: GraphQLInt},
    ...connectionArgs,
  },
  resolve: (root, {id, ...rest}, {pgPool, ...test}) => {
    console.log('!!!!!!!!!!!!', root, rest, test);
    return getAllCourses(pgPool, 2);
  },
};

export {CoursesQuery};
