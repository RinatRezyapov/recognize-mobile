import React from 'react';
import {ActivityIndicator} from 'react-native';
import {graphql, useFragment, useMutation} from 'react-relay';
import {NavigationType} from '../App';
import NewCourseForm, {IFormFields as NewCourseFormFields} from '../forms/NewCourseForm';
import {FormMode} from '../types/forms';
import {CourseEditComponent_course$key} from './__generated__/CourseEditComponent_course.graphql';

interface IProps extends NavigationType<'Course'> {}

const CourseEditComponent: React.FC<IProps> = ({navigation, route}) => {
  const course = useFragment<CourseEditComponent_course$key>(
    graphql`
      fragment CourseEditComponent_course on Course {
        id
        _id
        title
        description
        body
        avatar
      }
    `,
    route.params.courseRef,
  );

  const mutation = graphql`
    mutation CourseEditComponentMutation($input: UpdateCourseInput!) {
      updateCourse(input: $input) {
        courseEdge {
          node {
            id
            _id
            title
            description
            body
          }
        }
      }
    }
  `;
  const [mutate] = useMutation(mutation);
  const onSubmit = async (fields: NewCourseFormFields) => {
    mutate({
      variables: {
        input: {
          id: course.id,
          title: fields.title,
          description: fields.description,
          body: fields.words.map(v => v.value).join(' '),
        },
      },
    });
    navigation.navigate('Profile');
  };

  if (!course) return <ActivityIndicator size="large" />;

  const title = course.title;
  const description = course.description;
  const avatar = course.avatar;
  const words = course.body?.split(' ').map(value => ({value}));

  return (
    <NewCourseForm mode={FormMode.update} defaultValues={{title, description, avatar, words}} onSubmit={onSubmit} />
  );
};

export default CourseEditComponent;
