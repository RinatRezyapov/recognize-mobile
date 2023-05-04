import {graphql} from 'react-relay';

export const CoursesQuery = graphql`
  query CoursesQuery {
    courses {
      data {
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
  }
`;
