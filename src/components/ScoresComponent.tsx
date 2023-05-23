import styled from '@emotion/native';
import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {useLazyLoadQuery} from 'react-relay';
import {Button, TextInput} from '@react-native-material/core';
import {ListItem} from '@react-native-material/core';
import {NavigationType} from '../App';
import {ScoresQuery} from '../queries/Scores';
import {ScoresQuery as ScoresQueryType} from '../queries/__generated__/ScoresQuery.graphql';
import SelectDropdown from 'react-native-select-dropdown';

interface IProps extends NavigationType<'Profile'> {
  initialQueryRef: any;
}

const ScoresComponent: React.FC<IProps> = ({navigation, route}) => {
  const [wordsCount, setWordsCount] = useState('2');
  const [interval, setInterval] = useState('1000');
  const scores = useLazyLoadQuery<ScoresQueryType>(ScoresQuery, {});

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
      <ScrollView>
        {scores?.scores?.data?.edges?.map((edge, idx) => (
          <ListItem key={idx} title={`${edge?.node?.username} ${edge?.node?.value} (${edge?.node?.course})`} />
        ))}
      </ScrollView>
    </Wrapper>
  );
};

export default ScoresComponent;

const Wrapper = styled.View`
  padding: 32px 16px;
  height: 100%;
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
