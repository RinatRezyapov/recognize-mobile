import React from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {graphql, useFragment} from 'react-relay';
import {NavigationType} from '../App';
import {useRemoveCourseMutation} from '../mutations/RemoveCourseMutation';
import {CourseComponent_course$key} from './__generated__/CourseComponent_course.graphql';
import styled from '@emotion/native';

interface IProps extends NavigationType<'Course'> {}

const CourseComponent: React.FC<IProps> = ({navigation, route}) => {
  const course = useFragment<CourseComponent_course$key>(
    graphql`
      fragment CourseComponent_course on Course {
        id
        _id
        title
        description
        authorId
        avatar
        scores(first: 2147483647) @connection(key: "Scores_scores") {
          edges {
            node {
              id
              _id
              userId
              username
              score
              sequence
            }
          }
        }
      }
    `,
    route.params.course,
  );

  const user = useFragment<CourseComponent_course$key>(
    graphql`
      fragment CourseComponent_user on User {
        id
        _id
      }
    `,
    route.params.user,
  );

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
    navigation.navigate('CourseEdit', {course: route.params.course});
  };

  const onStartCourseClick = (courseId: string | null) => async () => {
    if (!courseId) return;
    navigation.navigate('CoursePlayer', {
      course: route.params.course,
      user: route.params.user,
    });
  };

  const avatarUri = 'data:image/png;base64,' + course.avatar;

  return (
    <Wrapper>
      <ImageContainer>
        <StyledImage source={{uri: avatarUri}} />
      </ImageContainer>
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

const StyledImage = styled(Image)`
  width: 135px;
  height: 135px;
  border-radius: 16px;
`;

const ImageContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
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
