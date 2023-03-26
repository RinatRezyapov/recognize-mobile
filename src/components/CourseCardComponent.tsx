import styled from '@emotion/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { graphql, useMutation } from 'react-relay';

interface IProps {
  id: string;
  userId: string;
  course: any;
}


const CourseCardComponent: React.FC<IProps> = ({ id, userId, course }) => {

  const mutation = graphql`
    mutation CourseCardComponentMutation($input: LikeCourseInput!) {
      likeCourse(input: $input) {
        likedCourseId
      }
    }
  `;
const [mutate] = useMutation(mutation);
  const onLikePress = () => {

    mutate({
      variables: {
        input: {
          user_id: userId,
          course_id: id,
        }
      },
    })
  }

  return (
    <View style={styles.courseContainer}>
      <Text style={styles.courseTitle}>
        {course.title}
      </Text>
      <Text style={styles.courseDescription}>
        {course.description}
      </Text>
      <CardFooter>
        <Text>By: User</Text>
        {course.authorId !== userId && <TouchableOpacity
          onPress={() => onLikePress()}
        >
          <Icon name="heart" size={30} color='red' />
        </TouchableOpacity>}
      </CardFooter>
    </View>
  );
}

export default CourseCardComponent;

const CardFooter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const styles = StyleSheet.create({
  courseContainer: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 20,
    backgroundColor: 'white',
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  courseDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});