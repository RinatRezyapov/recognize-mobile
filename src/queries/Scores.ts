import {graphql} from 'react-relay';

export const ScoresQuery = graphql`
  query ScoresQuery($wordsCount: Int, $interval: Int) {
    scores(wordsCount: $wordsCount, interval: $interval) {
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
