import {graphql} from 'react-relay';

export const ScoresQuery = graphql`
  query ScoresQuery {
    scores {
      data {
        edges {
          node {
            id
            _id
            username
            score
            sequence
            course
          }
        }
      }
    }
  }
`;
