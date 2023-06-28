import React from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {graphql, useFragment} from 'react-relay';
import {NavigationType} from '../App';
import {useRemoveCourseMutation} from '../mutations/RemoveCourseMutation';
import {CourseComponent_course$key} from './__generated__/CourseComponent_course.graphql';
import styled from '@emotion/native';

interface IProps extends NavigationType<'Course'> {}

const CourseComponent: React.FC<IProps> = ({navigation, route}) => {
  const user = route.params.user;
  const course = route.params.course;

  const isUserOwned = course.authorId === user?._id;
  const userScore = course.scores?.edges?.find(edge => edge?.node?.userId === user?._id)?.node?.score;

  const commitRemoveCourseMutation = useRemoveCourseMutation(user?.id);

  const onDeleteCourseClick = (courseId: string | null) => () => {
    if (!courseId) return;
    commitRemoveCourseMutation(courseId);
    if (!user?._id) return;
    navigation.navigate('Profile', {
      userId: user._id,
    });
  };

  const onEditCourseClick = (courseId: string | null) => async () => {
    if (!courseId) return;
    navigation.navigate('CourseEdit', {course});
  };

  const onStartCourseClick = (courseId: string | null) => async () => {
    if (!courseId) return;
    navigation.navigate('CoursePlayer', {
      course,
      user,
    });
  };

  return (
    <Wrapper>
      <View style={styles.iconContainer}>
        <Icon name="eye" size={120} />
      </View>
      <CourseTitle>{course.title}</CourseTitle>
      <CourseDescription>{course.description}</CourseDescription>
      <ScoreContainer>
        <View style={styles.scoreItem}>
          <Text style={styles.scoreValue}>{userScore || '-'}</Text>
          <Text style={styles.scoreLabel}>Reaction time</Text>
        </View>
        <View style={styles.scoreItem}>
          <Text style={styles.scoreValue}>300/2500</Text>
          <Text style={styles.scoreLabel}>Recognized</Text>
        </View>
      </ScoreContainer>
      <ScrollView>
        {course.scores?.edges?.map((v, idx) => {
          return (
            <ScoreRow key={idx}>
              <Text>{`${v?.node?.username}: ${v?.node?.score} ms`}</Text>
              <Text>{v?.node?.sequence}</Text>
            </ScoreRow>
          );
        })}
      </ScrollView>
      <ButtonsContainer>
        <Button title="Start" onPress={onStartCourseClick(course._id)} />
        {isUserOwned && (
          <>
            <Button title="Edit" onPress={onEditCourseClick(course._id)} />
            <Button title="Remove" onPress={onDeleteCourseClick(course.id)} />
          </>
        )}
      </ButtonsContainer>
    </Wrapper>
  );
};

export default CourseComponent;

const Wrapper = styled.View`
  display: flex;
  gap: 16px;
  padding: 16px;
  height: 100%;
`;

const CourseTitle = styled.Text`
  font-size: 36px;
  text-align: center;
`;

const CourseDescription = styled.Text`
  font-size: 18px;
  text-align: center;
`;

const ScoreContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
  padding: 16px;
  border-top-width: 1px;
  border-bottom-width: 1px;
`;

const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
`;

const ScoreRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const styles = StyleSheet.create({
  bodyText: {
    fontSize: 12,
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 72,
  },
  scoreItem: {
    flex: 1,
  },
  scoreValue: {
    fontSize: 18,
    textAlign: 'center',
  },
  scoreLabel: {
    textTransform: 'uppercase',
    fontSize: 12,
    textAlign: 'center',
  },
});
