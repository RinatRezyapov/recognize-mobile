import React from 'react';
import { ConnectionHandler, graphql, useLazyLoadQuery, useMutation } from "react-relay";

import NewCourseForm, { IFormFields as NewCourseFormFields } from '../forms/NewCourseForm';
import { FormMode } from '../types/forms';

export const UserQuery = graphql`
  query CourseCreateComponentQuery($id: String) {
    user(id: $id) {
      id,
      _id,
      username, 
      email,
      courses(first: 2147483647) @connection(key: "Courses_courses") {
        edges {
          node {
            _id
            id
            title
            description
            body
          }
        }
      }
    }
  }
`

const mutation = graphql`
  mutation CourseCreateComponentMutation($input: AddCourseInput!) {
    addCourse(input: $input) {
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
        }
      }
    }
  }
`;


interface IProps  {
  initialQueryRef: any;
  navigation: any;
}

const CourseCreateComponent: React.FC<IProps> = ({ initialQueryRef, navigation }) => {

  const { user } = useLazyLoadQuery(UserQuery, { id: "ad40f3e7-7a79-4d6b-9ffe-f85a8e0658ce" });


  const [mutate] = useMutation(mutation);
  const onSubmit = async (fields: NewCourseFormFields) => {
    mutate({
      variables: {
        input: {
          authorId: user.id,
          title: fields.title,
          description: fields.description,
          body: fields.data,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      },
      updater: (store) => {
        const payload = store.get(user.id);
        if (payload == null) {
          return;
        }
        const newEdge = store.getRootField('addCourse')?.getLinkedRecord('courseEdge');
        if (!newEdge) return;
        const connection = ConnectionHandler.getConnection(
          payload,
          'Courses_courses',
        );
        if (!connection) return;
        ConnectionHandler.insertEdgeAfter(connection, newEdge, null);
      },
    })
    navigation.navigate('Profile');
  }

  return <NewCourseForm mode={FormMode.create} onSubmit={onSubmit} />;
}

export default CourseCreateComponent;
