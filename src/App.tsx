import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import {RelayEnvironmentProvider} from 'react-relay/hooks';
import CourseComponent from './components/CourseComponent';
import CourseCreateComponent from './components/CourseCreateComponent';
import CourseEditComponent from './components/CourseEditComponent';
import CoursePlayerComponent from './components/CoursePlayerComponent';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RelayEnvironment from './RelayEnvironment';
import CanvasProvider from './utils/context/CanvasProvider';
import SnackbarProvider from './utils/context/SnackbarProvider';
import DialogProvider from './utils/context/DialogProvider';
import {Auth0Provider} from 'react-native-auth0';

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  Profile: {userId: string};
  Home: {userId: string};
  Course: {userRef: any; courseRef: any};
  CourseCreate: {userId: string};
  CourseEdit: {courseRef: any};
  CoursePlayer: {courseId: string; courseRef: any; userRef: any};
  Courses: {userId: string};
};

export type NavigationType<T> = NativeStackScreenProps<RootStackParamList, T>;

const App = () => {
  return (
    <Auth0Provider domain='dev-ew17ess3quvi8rin.us.auth0.com' clientId='4GHelQdAAX8zaczV53XJKFP107AqPYWI'>
      <DialogProvider>
        <SnackbarProvider>
          <CanvasProvider>
            <RelayEnvironmentProvider environment={RelayEnvironment}>
              <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                  <Stack.Screen name="Login" component={LoginPage} options={{headerShown: false}} />
                  <Stack.Screen name="Home" component={HomePage} options={{headerShown: false}} />
                  <Stack.Screen name="Course" component={CourseComponent} options={{title: 'Course'}} />
                  <Stack.Screen
                    name="CoursePlayer"
                    component={CoursePlayerComponent}
                    options={{title: 'Course Player'}}
                  />
                  <Stack.Screen name="CourseCreate" component={CourseCreateComponent} options={{title: 'New Course'}} />
                  <Stack.Screen name="CourseEdit" component={CourseEditComponent} options={{title: 'Edit Course'}} />
                </Stack.Navigator>
              </NavigationContainer>
            </RelayEnvironmentProvider>
          </CanvasProvider>
        </SnackbarProvider>
      </DialogProvider>
    </Auth0Provider>ы
  );
};

export default App;
