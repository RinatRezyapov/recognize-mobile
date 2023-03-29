import { GraphQLBoolean, GraphQLID, GraphQLNonNull } from 'graphql';
import { cursorForObjectInConnection, fromGlobalId, mutationWithClientMutationId } from 'graphql-relay';
import { getCourse, getCourses, likeCourse, unlikeCourse } from '../../database';
import { GraphQLCourseEdge } from '../nodes';

const LikeCourseMutation = mutationWithClientMutationId({
  name: 'LikeCourse',
  inputFields: {
    user_id: { type: new GraphQLNonNull(GraphQLID) },
    course_id: { type: new GraphQLNonNull(GraphQLID) },
    remove: { type: GraphQLBoolean }
  },
  outputFields: {
    courseEdge: {
      type: new GraphQLNonNull(GraphQLCourseEdge),
      resolve: async ({ id }, { }, { pgPool }) => {
        const course = await getCourse(id, pgPool);
        const courses = await getCourses("ad40f3e7-7a79-4d6b-9ffe-f85a8e0658ce", pgPool);
        return {
          cursor: cursorForObjectInConnection([...courses], course),
          node: course,
        };
      },
    },
  },
  mutateAndGetPayload: async ({ user_id, course_id, remove }, { pgPool }) => {
    const localUserId = fromGlobalId(user_id).id;
    const localCourseId = fromGlobalId(course_id).id;

    if (remove) {
      await unlikeCourse(localUserId, localCourseId, pgPool);
    } else {
      await likeCourse(localUserId, localCourseId, pgPool);
    }

    return { id: localCourseId };
  },
});

export { LikeCourseMutation };

