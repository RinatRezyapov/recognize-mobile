import {graphql} from 'react-relay';

export const UserQuery = graphql`
  query UserQuery($id: String, $courseId: String) {
    user(id: $id) {
      id
      _id
      username
      email
      ...CoursePlayerComponent_user
      ...CourseComponent_user
      score(courseId: $courseId) {
        ...CourseComponent_score
      }
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
            likes
            avatar
            ...CourseComponent_course
            ...CoursePlayerComponent_course
            ...CourseEditComponent_course
          }
        }
      }
    }
  }
`;
