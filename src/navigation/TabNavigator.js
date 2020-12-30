import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Profile from '../buyer/screens/Profile';
import colors from '../config/colors';
import Home from '../buyer/screens/Home';
import Categories from '../buyer/screens/Categories';
import Cart from '../buyer/screens/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { getCartCountAction } from '../../store/actions';
import { GET_COUNT } from '../../store/actions/actionTypes';
import Search from '../buyer/screens/Search';
import SearchButton from './SearchButton';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
	const cartCount = useSelector((state) => state.cart.count);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCartCountAction(GET_COUNT));
	}, []);

	return (
		<Tab.Navigator
			tabBarOptions={{
				activeBackgroundColor: colors.primaryShade24,
				activeTintColor: colors.primary1,
				inactiveBackgroundColor: colors.primaryShade24,
				inactiveTintColor: colors.primary2,
				style: { backgroundColor: colors.primaryShade24 },
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
						<MaterialCommunityIcons
							name="view-list"
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Search"
				component={Search}
				options={({ navigation }) => ({
					tabBarButton: () => (
						<SearchButton onPress={() => navigation.navigate('Search')} />
					),
				})}
			/>
			<Tab.Screen
				name="Cart"
				component={Cart}
				options={{
					tabBarBadge: cartCount !== 0 ? cartCount : undefined,
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
};

export default TabNavigator;
