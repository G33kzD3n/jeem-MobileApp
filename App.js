
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import reducer from './store/reducers/reducer';
import { createStore } from 'redux';
// import AuthNavigator from './src/navigation/AuthNavigator';
import AppNavigator from './src/buyer/navigation/AppNavigator'

const store = createStore(reducer)

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}

