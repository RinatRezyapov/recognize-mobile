import React from 'react';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { ConnectionHandler, graphql, useFragment, useMutation } from 'react-relay';
import { NavigationType } from './App';

interface IProps extends NavigationType<'Course'> {

}

const CourseComponent: React.FC<IProps> = ({ navigation, route }) => {

  const course = useFragment(
    graphql`
      fragment CourseComponent_course on Course {
        id
        title
        description
        body
      }
    `,
    route.params.courseRef,
  );

  const user = useFragment(
    graphql`
      fragment CourseComponent_user on User {
        id
        _id
        username
      }
    `,
    route.params.userRef,
  );

  const mutation = graphql`
  mutation CourseComponentMutation($input: RemoveCourseInput!) {
    removeCourse(input: $input) {
      deletedCourseId
    }
  }
`;
  const [mutate] = useMutation(mutation);

  const onDeleteCourseClick = (id: string) => () => {
    mutate({
      variables: {
        input: {
          id,
        }
      },
      updater: (store) => {
        const payload = store.get(user.id);

        if (payload == null) return;

        const removedEdgeID = store.getRootField('removeCourse')?.getValue('deletedCourseId');

        if (!removedEdgeID) return;

        const connection = ConnectionHandler.getConnection(
          payload,
          'Courses_courses',
        );

        if (!connection) return;

        ConnectionHandler.deleteNode(connection, removedEdgeID?.toString());
      },
    })
    navigation.navigate('Courses');
  };

  const onEditCourseClick = (id: string) => async () => {
    navigation.navigate('CourseEdit', { id, courseRef: route.params.courseRef });
  }

  const onStartCourseClick = (id: string) => async () => {
    navigation.navigate('CoursePlayer', { id, courseRef: route.params.courseRef });
  };

  if (!course) return <ActivityIndicator size="large" />;

  return <View style={styles.container}>
    <Text style={styles.nameText}>{course.title}</Text>
    <Text style={styles.descriptionText}>{course.description}</Text>
    <Text style={styles.bodyText}>{course.body}</Text>
    <View style={styles.buttonsContainer}>
      <Button title='Start' onPress={onStartCourseClick(route?.params?.id)} />
      <Button title='Edit' onPress={onEditCourseClick(route?.params?.id)} />
      <Button title='Remove' onPress={onDeleteCourseClick(course?.id)} />
    </View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 16,
    padding: 16,
    height: '100%',
  },
  nameText: {
    fontSize: 36,
  },
  descriptionText: {
    fontSize: 18,
  },
  bodyText: {
    fontSize: 12,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  }
});

export default CourseComponent;
