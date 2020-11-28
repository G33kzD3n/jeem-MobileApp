import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Profile from '../buyer/screens/Profile';
import colors from '../config/colors';
import Home from '../buyer/screens/Home';
import Categories from '../buyer/screens/Categories';
import Cart from '../buyer/screens/Cart';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
	<Tab.Navigator
		tabBarOptions={{
			activeBackgroundColor: colors.primaryShade24,
			activeTintColor: colors.primary1,
			inactiveBackgroundColor: colors.primaryShade24,
			inactiveTintColor: colors.primary2,
		}}
	>
		<Tab.Screen
			name="Home"
			component={Home}
			options={{
				tabBarIcon: ({ color, size }) => (
					<MaterialCommunityIcons name="home" size={size} color={color} />
				),
			}}
		/>
		<Tab.Screen
			name="Categories"
			component={Categories}
			options={{
				tabBarIcon: ({ color, size }) => (
					<MaterialCommunityIcons name="view-list" size={size} color={color} />
				),
			}}
		/>
		<Tab.Screen
			name="Cart"
			component={Cart}
			options={{
				tabBarIcon: ({ color, size }) => (
					<MaterialCommunityIcons name="cart" size={size} color={color} />
				),
			}}
		/>
		<Tab.Screen
			name="Profile"
			component={Profile}
			options={{
				tabBarIcon: ({ color, size }) => (
					<MaterialCommunityIcons name="account" size={size} color={color} />
				),
			}}
		/>
	</Tab.Navigator>
);

export default TabNavigator;
