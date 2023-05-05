import {graphql} from 'react-relay';

export const UserQuery = graphql`
  query UserQuery($id: String) {
    user(id: $id) {
      id
      _id
      username
      email
      ...CoursePlayerComponent_user
      ...CourseComponent_user
      courses(first: 2147483647) @connection(key: "Courses_courses") {
        edges {
          node {
            id
            _id
            title
            description
            body
            authorId
            author
            avatar
            likes
            ...CourseComponent_course
            ...CoursePlayerComponent_course
            ...CourseEditComponent_course
          }
        }
      }
    }
  }
`;
