import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { graphql, useLazyLoadQuery } from 'react-relay';

import CourseCardComponent from './CourseCardComponent';
import { CoursesComponentQuery as CoursesComponentQueryType } from './__generated__/CoursesComponentQuery.graphql';

interface IProps {
  initialQueryRef: any;
  navigation: any;
}

const CoursesComponentQuery = graphql`
  query CoursesComponentQuery {
    courses {
      courses {
        edges {
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
  }
`

const CoursesComponent: React.FC<IProps> = ({ initialQueryRef, navigation }) => {

  const data = useLazyLoadQuery<CoursesComponentQueryType>(CoursesComponentQuery, {});

  return (
    <View>
      <ScrollView>
        {data?.courses?.courses?.edges?.map(({ node }) => {
          return (
            <TouchableOpacity
              key={node?.id}
              onPress={() => navigation.navigate('Course', { id: node?._id, courseRef: node })}
            >
              <CourseCardComponent
                title={node?.title}
                description={node?.description}
              />
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  );
}

export default CoursesComponent;