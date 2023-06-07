import {graphql} from 'react-relay';

export const CoursesQuery = graphql`
  query CoursesQuery($count: Int, $cursor: String) {
    courses {
      data(first: $count, after: $cursor) {
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
            ...CourseComponent_course
            ...CoursePlayerComponent_course
          }
        }
      }
    }
    ...CoursesComponent
  }
`;
