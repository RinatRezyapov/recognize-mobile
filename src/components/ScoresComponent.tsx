import styled from '@emotion/native';
import {Divider, TextInput} from '@react-native-material/core';
import React, {useCallback, useState} from 'react';
import {NavigationType} from '../App';
import ScoresComponentInputs from './ScoresComponentInputs';

interface IProps extends NavigationType<'Profile'> {
  initialQueryRef: any;
}

const ScoresComponent: React.FC<IProps> = ({navigation, route}) => {
  const [wordsCount, setWordsCount] = useState('2');
  const [interval, setInterval] = useState('1000');

  const [queryArgs, setQueryArgs] = useState({
    options: {fetchKey: 0},
    variables: {wordsCount: 2, interval: 1000},
  });

  const refetch = useCallback(() => {
    setQueryArgs(prev => ({
      options: {
        fetchKey: (prev?.options.fetchKey ?? 0) + 1,
      },
      variables: {wordsCount: parseInt(wordsCount), interval: parseInt(interval)},
    }));
  }, [wordsCount, interval]);

  return (
    <Wrapper>
      <Filters>
        <TextInputStyled
          keyboardType="numeric"
          variant="outlined"
          label="Count"
          value={wordsCount}
          onChangeText={setWordsCount}
        />
        <TextInputStyled
          keyboardType="numeric"
          variant="outlined"
          label="Interval"
          value={interval}
          onChangeText={setInterval}
        />
      </Filters>
      <ScoresComponentInputs refetch={refetch} queryArgs={queryArgs} />
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
