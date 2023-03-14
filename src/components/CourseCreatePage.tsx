import React from 'react';
import { graphql, loadQuery } from "react-relay";
import { NavigationType } from '../../App';

import RelayEnvironment from '../RelayEnvironment';
import CourseCreateComponent from './CourseCreateComponent';

export const UserQuery = graphql`
  query CourseCreatePageQuery($id: String) {
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

const initialQueryRef = loadQuery(
  RelayEnvironment,
  UserQuery,
  { id: '1' },
);
interface IProps extends NavigationType<'Course'> {

}

const CourseCreatePage: React.FC<IProps> = ({ navigation, route }) => {


  return <CourseCreateComponent initialQueryRef={initialQueryRef} navigation={navigation} />;
}

export default CourseCreatePage;
