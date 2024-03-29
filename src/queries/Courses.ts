import {graphql} from 'react-relay';

export const CoursesQuery = graphql`
  query CoursesQuery($count: Int, $cursor: String) {
    courses(first: $count, after: $cursor) {
      edges {
        node {
          id
          _id
          authorId
          author
          title
          description
          avatar
          likes
          ...CoursePlayerComponent_course
        }
      }
    }
    ...CoursesComponent
  }
`;
