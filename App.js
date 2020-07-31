
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import AuthNavigator from './src/navigation/AuthNavigator';
import AppNavigator from './src/buyer/navigation/AppNavigator'


export default function App() {
  return (
   <NavigationContainer>
      <AppNavigator/>
   </NavigationContainer>
  );
}

