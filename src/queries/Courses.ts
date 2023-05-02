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
            title
            description
            avatar
            likes
          }
        }
      }
    }
  }
`;
