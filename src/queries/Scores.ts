import {graphql} from 'react-relay';

export const ScoresQuery = graphql`
  query ScoresQuery {
    scores {
      data {
        edges {
          node {
            username
            value
          }
        }
      }
    }
  }
`;
