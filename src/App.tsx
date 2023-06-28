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
  Course: {user: any; course: any};
  CourseCreate: {userId: string};
  CourseEdit: {course: any};
  CoursePlayer: {course: any; user: any};
  Courses: {userId: string};
};

export type NavigationType<T> = NativeStackScreenProps<RootStackParamList, T>;

const App = () => {
  return (
    <Auth0Provider domain="dev-ew17ess3quvi8rin.us.auth0.com" clientId="DnuRcPZasmhMZwVZZgOaMm8lOntZgBR6">
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
    </Auth0Provider>
  );
};

export default App;
