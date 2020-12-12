import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers';
import AppNavigator from './src/navigation/AppNavigator';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));
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
