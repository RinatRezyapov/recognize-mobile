import styled from '@emotion/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useLikeCourseMutation} from '../mutations/LikeCourseMutation';

interface IProps {
  user: any;
  course: any;
}

const CourseCardComponent: React.FC<IProps> = ({user, course}) => {
  const commitLikeCourseMutation = useLikeCourseMutation(user.id, course.id);
  const userOwned = course.authorId === user._id;
  const likedByUser = course.likes?.includes(user._id);
  const likes = course?.likes?.length === 0 ? '' : course?.likes?.length;
  const onLikePress = () => commitLikeCourseMutation(likedByUser);

  return (
    <Wrapper>
      <Avatar source={{uri: 'data:image/jpeg;base64,' + course.avatar}} />
      <Details>
        <Text style={styles.courseTitle}>{course.title}</Text>
        <Description>{course.description}</Description>
        {!userOwned && (
          <CardFooter>
            <Text>By: {course.author}</Text>
            <LikesWrapper>
              <Text> {likes}</Text>
              <TouchableOpacity onPress={() => onLikePress()}>
                <Icon name={likedByUser ? 'heart' : 'hearto'} size={25} color="red" />
              </TouchableOpacity>
            </LikesWrapper>
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
  border-radius: 16px;
  background-color: white;
  border: 1px solid lightgrey;
  min-height: 130px;
`;

const Avatar = styled.Image`
  flex: 1;
  border-radius: 16px;
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

const LikesWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const Description = styled.Text`
  margin-top: 8px;
  font-size: 16px;
  font-weight: 400;
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
});
