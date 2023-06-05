import styled from '@emotion/native';
import {IconButton, TextInput} from '@react-native-material/core';
import React, {useCallback, useState} from 'react';
import {NavigationType} from '../App';
import ScoresTableComponent from './ScoresTableComponent';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IProps extends NavigationType<'Scores'> {}

const ScoresFilterComponent: React.FC<IProps> = () => {
  const [wordsCount, setWordsCount] = useState('2');
  const [interval, setInterval] = useState('1000');

  const [queryArgs, setQueryArgs] = useState({
    options: {fetchKey: 0},
    variables: {wordsCount: 2, interval: 1000},
  });

  const refetch = useCallback(() => {
    setQueryArgs(prev => ({
      options: {fetchKey: (prev?.options.fetchKey ?? 0) + 1},
      variables: {wordsCount: parseInt(wordsCount), interval: parseInt(interval)},
    }));
  }, [wordsCount, interval]);

  return (
    <Wrapper>
      <Filters>
        <TextInputStyled
          keyboardType="numeric"
          label="Count"
          value={wordsCount}
          onChangeText={text => setWordsCount(text)}
        />
        <TextInputStyled
          keyboardType="numeric"
          label="Interval"
          value={interval}
          onChangeText={text => setInterval(text)}
        />
        <IconButton icon={props => <Icon name="search" {...props} />} onPress={refetch} />
      </Filters>
      <ScoresTableComponent queryArgs={queryArgs} />
    </Wrapper>
  );
};

export default ScoresFilterComponent;

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
