import React from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {graphql, useFragment, useLazyLoadQuery} from 'react-relay';
import {NavigationType} from '../App';
import {useRemoveCourseMutation} from '../mutations/RemoveCourseMutation';
import {CourseComponentQuery as CourseComponentQueryType} from './__generated__/CourseComponentQuery.graphql';
import {CourseComponent_course$key} from './__generated__/CourseComponent_course.graphql';

export const CourseComponentQuery = graphql`
  query CourseComponentQuery($id: String, $courseId: String) {
    user(id: $id) {
      id
      _id
      username
      score(courseId: $courseId) {
        id
        username
        value
      }
    }
  }
`;

interface IProps extends NavigationType<'Course'> {}

const CourseComponent: React.FC<IProps> = ({navigation, route}) => {
  const course = useFragment<CourseComponent_course$key>(
    graphql`
      fragment CourseComponent_course on Course {
        id
        _id
        title
        description
        body
        authorId
        scores {
          edges {
            node {
              id
              username
              value
            }
          }
        }
      }
    `,
    route.params.courseRef,
  );

  const {user} = useLazyLoadQuery<CourseComponentQueryType>(CourseComponentQuery, {
    id: route.params.userRef._id,
    courseId: course?._id,
  });

  const isUserOwned = course.authorId === user?._id;

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
    navigation.navigate('CourseEdit', {
      courseId,
      courseRef: route.params.courseRef,
      userRef: route.params.userRef,
    });
  };

  const onStartCourseClick = (courseId: string | null) => async () => {
    if (!courseId) return;
    navigation.navigate('CoursePlayer', {
      courseId,
      courseRef: route.params.courseRef,
      userRef: route.params.userRef,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="eye" size={120} />
      </View>
      <Text style={styles.nameText}>{course.title}</Text>
      <Text style={styles.descriptionText}>{course.description}</Text>
      <View style={styles.scoreContainer}>
        <View style={styles.scoreItem}>
          <Text style={styles.scoreValue}>{user?.score?.value || '-'}</Text>
          <Text style={styles.scoreLabel}>Reaction time</Text>
        </View>
        <View style={styles.scoreItem}>
          <Text style={styles.scoreValue}>300/2500</Text>
          <Text style={styles.scoreLabel}>Recognized</Text>
        </View>
      </View>
      <ScrollView>
        {course.scores?.edges?.map((v, idx) => {
          return (
            <Text key={idx}>
              {v?.node?.username}: {v?.node?.value}
            </Text>
          );
        })}
      </ScrollView>
      <View style={styles.buttonsContainer}>
        <Button title="Start" onPress={onStartCourseClick(course._id)} />
        {isUserOwned && (
          <>
            <Button title="Edit" onPress={onEditCourseClick(course._id)} />
            <Button title="Remove" onPress={onDeleteCourseClick(course.id)} />
          </>
        )}
      </View>
    </View>
  );
};

export default CourseComponent;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 16,
    padding: 16,
    height: '100%',
    backgroundColor: 'white',
  },
  nameText: {
    fontSize: 36,
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 18,
    textAlign: 'center',
  },
  bodyText: {
    fontSize: 12,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginTop: 32,
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 72,
  },
  scoreContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 32,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: 16,
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
