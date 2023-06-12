import {GraphQLInt, GraphQLString} from 'graphql';
import {getAllCourses} from '../../database';
import {GraphQLCourses} from '../nodes';
import {connectionArgs} from 'graphql-relay';

const CoursesQuery = {
  type: GraphQLCourses,
  args: {...connectionArgs},
  resolve: (root, {after, before, first, last}, {pgPool}) => {
    console.log('Query', after, before, first, last);
    return getAllCourses(pgPool, first);
  },
};

export {CoursesQuery};
