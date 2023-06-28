import {graphql} from 'react-relay';

export const UserQuery = graphql`
  query UserQuery($id: String, $email: String) {
    user(id: $id, email: $email) {
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
            author
            avatar
            likes
            ...CoursePlayerComponent_course
            ...CourseEditComponent_course
          }
        }
      }
    }
  }
`;
