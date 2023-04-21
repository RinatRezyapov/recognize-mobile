import styled from '@emotion/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {graphql, useMutation} from 'react-relay';

interface IProps {
  user: any;
  course: any;
}

const CourseCardComponent: React.FC<IProps> = ({user, course}) => {
  const userOwned = course.authorId === user._id;
  const likedByUser = course.likes?.includes(user._id);

  const mutation = graphql`
    mutation CourseCardComponentMutation($input: LikeCourseInput!) {
      likeCourse(input: $input) {
        courseEdge {
          node {
            id
            _id
            title
            body
            description
            authorId
            createdAt
            updatedAt
            likes
            avatar
          }
        }
      }
    }
  `;
  const [mutate] = useMutation(mutation);
  const onLikePress = () => {
    mutate({
      variables: {
        input: {
          user_id: user.id,
          course_id: course.id,
          remove: likedByUser,
        },
      },
    });
  };

  return (
    <Wrapper>
      <Avatar source={{uri: 'data:image/jpeg;base64,' + course.avatar}} />
      <Details>
        <Text style={styles.courseTitle}>{course.title}</Text>
        <Text style={styles.courseDescription}>{course.description}</Text>
        {!userOwned && (
          <CardFooter>
            <Text>By: {course.author}</Text>
            <TouchableOpacity onPress={() => onLikePress()}>
              <Icon name={likedByUser ? 'heart' : 'hearto'} size={30} color="red" />
            </TouchableOpacity>
          </CardFooter>
        )}
      </Details>
    </Wrapper>
  );
};

export default CourseCardComponent;

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin: 8px;
  padding: 16px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid lightgrey;
  min-height: 130px;
`;

const Avatar = styled.Image`
  flex: 1;
  border-radius: 8px;
`;

const Details = styled.View`
  flex: 2;
`;

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
