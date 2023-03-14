import React from 'react';
import { ConnectionHandler, graphql, useMutation, usePreloadedQuery } from "react-relay";

import NewCourseForm, { IFormFields as NewCourseFormFields } from '../forms/NewCourseForm';

export const UserQuery = graphql`
  query CourseCreateComponentQuery($id: String) {
    user(id: $id) {
      id,
      _id,
      username, 
      email,
      courses(
          first: 2147483647 # max GraphQLInt
        ) @connection(key: "Courses_courses") {
        edges {
          node {
            __id
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

  const { user } = usePreloadedQuery(UserQuery, initialQueryRef);


  const [mutate] = useMutation(mutation);
  const onSubmit = async (fields: NewCourseFormFields) => {
    mutate({
      variables: {
        input: {
          authorId: user._id,
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

  return <NewCourseForm onSubmit={onSubmit} />;
}

export default CourseCreateComponent;
