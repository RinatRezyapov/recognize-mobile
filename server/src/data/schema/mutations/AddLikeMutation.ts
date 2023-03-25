import { GraphQLID, GraphQLNonNull } from 'graphql';
import { fromGlobalId, mutationWithClientMutationId } from 'graphql-relay';
import { likeCourse } from '../../database';

const LikeCourseMutation = mutationWithClientMutationId({
  name: 'LikeCourse',
  inputFields: {
    user_id: { type: new GraphQLNonNull(GraphQLID) },
    course_id: { type: new GraphQLNonNull(GraphQLID) },
  },
  outputFields: {
    likedCourseId: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: ({ id }, { }, { pgPool }): string => id,
    },
  },
  mutateAndGetPayload: async ({ user_id, course_id }, { pgPool }) => {
    const localUserId = fromGlobalId(user_id).id;
    const localCourseId = fromGlobalId(course_id).id;
    console.log('hm?', localUserId, localCourseId)
    await likeCourse(pgPool, localUserId, localCourseId);

    return { id: course_id };
  },
});

export { LikeCourseMutation };

