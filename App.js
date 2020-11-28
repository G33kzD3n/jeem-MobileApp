import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStore } from 'redux';
import rootReducer from './store/reducers';
import AppNavigator from './src/navigation/AppNavigator';

const store = createStore(rootReducer);

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<AppNavigator />
			</NavigationContainer>
		</Provider>
	);
}
