import styled from '@emotion/native';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useLazyLoadQuery} from 'react-relay';

import {NavigationType} from '../App';
import {ScoresQuery} from '../queries/Scores';
import {ScoresQuery as ScoresQueryType} from '../queries/__generated__/ScoresQuery.graphql';

interface IProps extends NavigationType<'Profile'> {
  initialQueryRef: any;
}

const ScoresComponent: React.FC<IProps> = ({navigation, route}) => {
  const scores = useLazyLoadQuery<ScoresQueryType>(ScoresQuery, {});

  return (
    <Wrapper>
      <ScrollView>
        {scores?.scores?.data?.edges?.map((edge, idx) => (
          <View key={idx}>
            <Text>{`${edge?.node?.username} - ${edge?.node?.value}`}</Text>
          </View>
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
