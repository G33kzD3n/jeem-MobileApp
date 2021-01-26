import React, { useEffect, useState } from 'react';
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
import i18n from '../languages/i18n';
import { useIsFocused } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
	// const [language, setLanguage] = useState();
	const isFocused = useIsFocused();
	const cartCount = useSelector(state => state.cart.count);
	const language = useSelector(state => state.profile.language);
	const dispatch = useDispatch();
	useEffect(() => {
		// currentLanguage();
		if (language) dispatch(getCartCountAction(GET_COUNT));
	}, [language,isFocused]);

	// const currentLanguage = async () => {
	// 	const defaultLanguage = await persistStore.getDetails('language');
	// 	setLanguage(defaultLanguage);
	// };
	return (
		<Tab.Navigator
			tabBarOptions={{
				keyboardHidesTabBar: true,
				activeBackgroundColor: colors.primaryShade24,
				activeTintColor: colors.primary1,
				inactiveBackgroundColor: colors.primaryShade24,
				inactiveTintColor: colors.primary2,
				style: { backgroundColor: colors.primaryShade24 }
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarLabel: i18n.t('tabNavigation.Home'),
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="home" size={size} color={color} />
					)
				}}
			/>
			<Tab.Screen
				name="Categories"
				component={Categories}
				options={{
					tabBarLabel: i18n.t('tabNavigation.Categories'),
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="view-list"
							size={size}
							color={color}
						/>
					)
				}}
			/>
			<Tab.Screen
				name="Search"
				component={Search}
				options={({ navigation }) => ({
					tabBarLabel: i18n.t('tabNavigation.Search'),
					tabBarButton: () => (
						<SearchButton onPress={() => navigation.navigate('Search')} />
					)
				})}
			/>
			<Tab.Screen
				name="Cart"
				component={Cart}
				options={{
					tabBarLabel: i18n.t('tabNavigation.Cart'),
					tabBarBadge: cartCount !== 0 ? cartCount : undefined,
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="cart" size={size} color={color} />
					)
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarLabel: i18n.t('tabNavigation.Profile'),
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="account" size={size} color={color} />
					)
				}}
			/>
		</Tab.Navigator>
	);
};

export default TabNavigator;
