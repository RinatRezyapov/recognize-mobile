import {GraphQLObjectType, GraphQLSchema} from 'graphql';
import {AddCourseMutation} from './mutations/AddCourseMutation';
import {LikeCourseMutation} from './mutations/AddLikeMutation';
import {RemoveCourseMutation} from './mutations/RemoveCourseMutation';
import {UpdateCourseMutation} from './mutations/UpdateCourseMutation';
import {nodeField} from './nodes';
import {CoursesQuery} from './queries/CoursesQuery';
import {UserQuery} from './queries/UserQuery';
import {AddScoreMutation} from './mutations/AddScoreMutation';
import {ScoresQuery} from './queries/ScoresQuery';
import {AddStreakMutation} from './mutations/AddStreakMutation';
import {StreaksQuery} from './queries/StreaksQuery';

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: UserQuery,
    courses: CoursesQuery,
    scores: ScoresQuery,
    streaks: StreaksQuery,
    node: nodeField,
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addCourse: AddCourseMutation,
    updateCourse: UpdateCourseMutation,
    removeCourse: RemoveCourseMutation,
    likeCourse: LikeCourseMutation,
    addScore: AddScoreMutation,
    addStreak: AddStreakMutation,
  },
});

export const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
