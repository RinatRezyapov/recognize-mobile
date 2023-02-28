import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationType } from '../../App';

interface IProps extends NavigationType<'Courses'> {

}

const LandingComponent: React.FC<IProps> = ({ navigation }) => {

  return (
    <View>
      <Text>Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  newCourseButton: {
    margin: 16,
  }
});

export default LandingComponent;
