import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStore } from 'redux';
import rootReducer from './store/reducers';
import AppNavigator from './src/navigation/AppNavigator';

const store = createStore(rootReducer);
const MyTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		notification: 'sienna',
	},
};
export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer theme={MyTheme}>
				<AppNavigator />
			</NavigationContainer>
		</Provider>
	);
}
