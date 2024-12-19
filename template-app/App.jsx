import React from 'react';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']);
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserDetails from './components/Userprofile';
import Home from './components/Home';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="User Profiles" component={Home} />
      <Stack.Screen name="User Details" component={UserDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
