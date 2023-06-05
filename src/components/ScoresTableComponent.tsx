import styled from '@emotion/native';
import {Button, Divider, Text} from '@react-native-material/core';
import React from 'react';
import {ScrollView} from 'react-native';
import {useLazyLoadQuery} from 'react-relay';
import {ScoresQuery} from '../queries/Scores';
import {ScoresQuery as ScoresQueryType} from '../queries/__generated__/ScoresQuery.graphql';

interface IProps {
  queryArgs: {
    options: {fetchKey: number};
    variables: {wordsCount: number; interval: number};
  };
}

const ScoresTableComponent: React.FC<IProps> = ({queryArgs}) => {
  const scores = useLazyLoadQuery<ScoresQueryType>(ScoresQuery, queryArgs.variables, queryArgs.options);

  return (
    <Wrapper>
      <ScrollView>
        {scores?.scores?.data?.edges?.map((edge, idx) => (
          <React.Fragment key={idx}>
            <ScoreWrapper>
              <Text>{edge?.node?.username}</Text>
              <Text>{`${edge?.node?.course} (${edge?.node?.sequence})`}</Text>
              <Text>{edge?.node?.score}</Text>
            </ScoreWrapper>
            <StyledDivider />
          </React.Fragment>
        ))}
      </ScrollView>
    </Wrapper>
  );
};

export default ScoresTableComponent;

const Wrapper = styled.View`
  height: 100%;
`;

const ScoreWrapper = styled.View`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: space-between;
`;

const StyledDivider = styled(Divider)`
  margin-top: 16px;
`;

const StyledButton = styled(Button)`
  margin-bottom: 16px;
`;
