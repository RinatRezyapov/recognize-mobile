import {connectionArgs, connectionFromArray, connectionFromArraySlice} from 'graphql-relay';
import {fetchPaginatedCourses} from '../../database';

const CoursesQuery = {
  type: (() => require('../nodes/Course').default.connectionType)(),
  args: connectionArgs,
  resolve: async (root, {first, after, last, before}, {pgPool}) => {
    console.log('CoursesQuery', first, after, last, before);
    const courses = await fetchPaginatedCourses(first, after, last, before, pgPool);

    const edges = courses.map(course => ({
      node: course,
      cursor: Buffer.from(`course:${course.id}`).toString('base64'), // Example: using the course's ID as the cursor
    }));

    const connection = {
      edges,
      pageInfo: {
        // Set the appropriate pageInfo values
        hasNextPage: false, // Example: assuming no more pages
        hasPreviousPage: false, // Example: assuming no previous pages
        startCursor: edges.length > 0 ? edges[0].cursor : null,
        endCursor: edges.length > 0 ? edges[edges.length - 1].cursor : null,
      },
    };

    return connection;
    // return connectionFromArraySlice(
    //   connection,
    //   {first, after, last, before},
    //   {
    //     sliceStart: 0,
    //     arrayLength: courses.length,
    //     sliceEnd: courses.length,
    //     after,
    //     before,
    //   },
    // );
  },
};

export default CoursesQuery;
