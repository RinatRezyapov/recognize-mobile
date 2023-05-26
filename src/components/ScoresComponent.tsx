import styled from '@emotion/native';
import {Divider, Text, TextInput} from '@react-native-material/core';
import React, {useCallback, useState} from 'react';
import {ScrollView} from 'react-native';
import {useLazyLoadQuery} from 'react-relay';
import {NavigationType} from '../App';
import {ScoresQuery} from '../queries/Scores';
import {ScoresQuery as ScoresQueryType} from '../queries/__generated__/ScoresQuery.graphql';

interface IProps extends NavigationType<'Profile'> {
  initialQueryRef: any;
}

const ScoresComponent: React.FC<IProps> = ({navigation, route}) => {
  const [wordsCount, setWordsCount] = useState('2');
  const [interval, setInterval] = useState('1000');
  const scores = useLazyLoadQuery<ScoresQueryType>(ScoresQuery, {
    wordsCount: parseInt(wordsCount),
    interval: parseInt(interval),
  });

  const handleWordsCountChange = useCallback(event => {
    setWordsCount(event.target.value);
  }, []);

  const handleIntervalChange = useCallback(event => {
    setInterval(event.target.value);
  }, []);

  return (
    <Wrapper>
      <Filters>
        <TextInputStyled
          keyboardType="numeric"
          variant="outlined"
          label="Count"
          value={wordsCount}
          onChangeText={handleWordsCountChange}
        />
        <TextInputStyled
          keyboardType="numeric"
          variant="outlined"
          label="Interval"
          value={interval}
          onChangeText={handleIntervalChange}
        />
      </Filters>
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

export default ScoresComponent;

const Wrapper = styled.View`
  padding: 32px 16px;
  height: 100%;
  background-color: white;
`;

const Filters = styled.View`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-bottom: 16px;
`;

const TextInputStyled = styled(TextInput)`
  flex: 1;
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
