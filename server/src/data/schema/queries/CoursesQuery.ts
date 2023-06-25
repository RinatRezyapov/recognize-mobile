import {connectionArgs} from 'graphql-relay';
import {fetchPaginatedCourses} from '../../database';

const CoursesQuery = {
  type: (() => require('../nodes/Course').default.connectionType)(),
  args: connectionArgs,
  resolve: async (root, {first, after, last, before}, {pgPool}) => {
    console.log('CoursesQuery', first, after, last, before);
    const courses = await fetchPaginatedCourses(first, after, last, before, pgPool);

    const edges = courses.map(course => ({
      node: course,
      cursor: Buffer.from(`course:${course.id}`).toString('base64'),
    }));

    const connection = {
      edges,
      pageInfo: {
        hasNextPage: courses.length === first,
        hasPreviousPage: !!before,
        startCursor: edges.length > 0 ? edges[0].cursor : null,
        endCursor: edges.length > 0 ? edges[edges.length - 1].cursor : null,
      },
    };

    return connection;
  },
};

export default CoursesQuery;
