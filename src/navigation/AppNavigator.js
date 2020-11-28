import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import SubCategoryProducts from '../buyer/screens/SubCategoryProducts';
import ProductView from '../buyer/screens/ProductView';
import Cart from '../buyer/screens/Cart';
import SelectAddress from '../buyer/screens/SelectAddress';
import HeaderTitle from '../common/components/HeaderTitle';
import colors from '../config/colors';

const Stack = createStackNavigator();
function AppNavigator() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerTintColor: colors.primary1,
			}}
		>
			<Stack.Screen
				name="Home"
				component={TabNavigator}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="SubCategoryProduct"
				component={SubCategoryProducts}
				options={({ route }) => ({
					headerTitle: (props) => (
						<HeaderTitle
							name={route.params.subCategoryName}
							totalItems={route.params.total}
							{...props}
						/>
					),
				})}
			/>
			<Stack.Screen
				name="ProductDetails"
				component={ProductView}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Cart"
				component={Cart}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="SelectAddress" component={SelectAddress} />
		</Stack.Navigator>
	);
}

export default AppNavigator;
