import styled from '@emotion/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
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

  const renderFooter = () => (
    <CardFooter>
      <Text>By: {course.author}</Text>
      <LikesWrapper>
        <Text> {likes}</Text>
        <TouchableOpacity onPress={() => onLikePress()}>
          <Icon name={likedByUser ? 'heart' : 'hearto'} size={25} color="red" />
        </TouchableOpacity>
      </LikesWrapper>
    </CardFooter>
  );

  return (
    <Wrapper>
      <Avatar source={{uri: 'data:image/jpeg;base64,' + course.avatar}} />
      <Details>
        <View>
          <Title>{course.title}</Title>
          <Description numberOfLines={2}>{course.description}</Description>
        </View>
        {renderFooter()}
      </Details>
    </Wrapper>
  );
};

export default CourseCardComponent;

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  height: 120px;
  gap: 16px;
  margin: 8px;
  padding: 8px;
  border-radius: 16px;
  border: 1px solid lightgrey;
  background-color: white;
`;

const Avatar = styled.Image`
  flex: 1;
  border-radius: 16px;
`;

const Details = styled.View`
  display: flex;
  justify-content: space-between;
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

const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
`;

const Description = styled.Text`
  margin-top: 4px;
  font-size: 14px;
  font-weight: 400;
`;
