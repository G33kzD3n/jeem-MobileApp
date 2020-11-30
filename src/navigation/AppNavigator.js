import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import SubCategoryProducts from '../buyer/screens/SubCategoryProducts';
import ProductView from '../buyer/screens/ProductView';
import SelectAddress from '../buyer/screens/SelectAddress';
import HeaderTitle from '../common/components/HeaderTitle';
import colors from '../config/colors';
import Payments from '../buyer/screens/Payments';
import OrderDetails from '../buyer/screens/OrderDetails';
import ViewOrders from '../buyer/screens/ViewOrders';

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
				name="SelectAddress"
				component={SelectAddress}
				options={{ title: 'ADDRESS' }}
			/>
			<Stack.Screen
				name="Payments"
				component={Payments}
				options={{ title: 'PAYMENT' }}
			/>
			<Stack.Screen
				name="OrderDetails"
				component={OrderDetails}
				options={{
					title: 'ORDER',
					headerTitleStyle: { alignSelf: 'center' },
					headerLeft: () => null,
				}}
			/>
			<Stack.Screen
				name="ViewOrders"
				component={ViewOrders}
				options={{ title: 'MY ORDERS' }}
			/>
		</Stack.Navigator>
	);
}

export default AppNavigator;
