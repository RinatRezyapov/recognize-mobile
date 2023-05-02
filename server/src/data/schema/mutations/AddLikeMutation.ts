import {GraphQLBoolean, GraphQLID, GraphQLNonNull} from 'graphql';
import {cursorForObjectInConnection, fromGlobalId, mutationWithClientMutationId} from 'graphql-relay';
import {getCourse, getCourses, likeCourse, unlikeCourse} from '../../database';
import {GraphQLCourseEdge} from '../nodes';

const LikeCourseMutation = mutationWithClientMutationId({
  name: 'LikeCourse',
  inputFields: {
    userId: {type: new GraphQLNonNull(GraphQLID)},
    courseId: {type: new GraphQLNonNull(GraphQLID)},
    remove: {type: GraphQLBoolean},
  },
  outputFields: {
    courseEdge: {
      type: new GraphQLNonNull(GraphQLCourseEdge),
      resolve: async ({id}, {}, {pgPool}) => {
        const course = await getCourse(id, pgPool);
        const courses = await getCourses(id, pgPool);
        return {
          cursor: cursorForObjectInConnection([...courses], course),
          node: course,
        };
      },
    },
  },
  mutateAndGetPayload: async ({userId, courseId, remove}, {pgPool}) => {
    const localUserId = fromGlobalId(userId).id;
    const localCourseId = fromGlobalId(courseId).id;

    if (remove) {
      await unlikeCourse(localUserId, localCourseId, pgPool);
    } else {
      await likeCourse(localUserId, localCourseId, pgPool);
    }

    return {id: localCourseId};
  },
});

export {LikeCourseMutation};
