import React from 'react';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { graphql, useLazyLoadQuery, useMutation } from 'react-relay';
import { NavigationType } from '../../App';
import { removeCourseFromStorage } from '../utils/storage';

interface IProps extends NavigationType<'Course'> {

}

const CourseComponent: React.FC<IProps> = ({ navigation, route }) => {
  const { course } = useLazyLoadQuery<any>(graphql`
    query CourseComponentQuery($id: String) {
      course(id: $id) {
        id,
        title,
        description,
        body,

      }
    }
  `, { id: route.params.id });
  const mutation = graphql`
  mutation CourseComponentMutation($input: RemoveCourseInput!) {
    removeCourse(input: $input) {
      clientMutationId
    }
  }
`;
  const [mutate] = useMutation(mutation);

  const onDeleteCourseClick = (id: string) => () => {
    mutate({
      variables: {
        input: {
          courseId: parseInt(id),
        }
      }
    })
    navigation.navigate('Profile');
  };

  const onEditCourseClick = (id: string) => async () => {
    navigation.navigate('CourseEdit', { id });
  }

  const onStartCourseClick = (id: string) => async () => {
    navigation.navigate('CoursePlayer', { id });
  };

  if (!course) return <ActivityIndicator size="large" />;

  return <View style={styles.container}>
    <Text style={styles.nameText}>{course.title}</Text>
    <Text style={styles.descriptionText}>{course.description}</Text>
    <Text style={styles.bodyText}>{course.body}</Text>
    <View style={styles.buttonsContainer}>
      <Button title='Start' onPress={onStartCourseClick(route?.params?.id)} />
      <Button title='Edit' onPress={onEditCourseClick(route?.params?.id)} />
      <Button title='Remove' onPress={onDeleteCourseClick(route?.params?.id)} />
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
