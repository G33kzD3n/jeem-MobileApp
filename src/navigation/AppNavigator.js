import React, { useEffect } from 'react';
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
import AddAddress from '../buyer/components/AddressPageComponents/AddAddress';
import RegisterScreen from '../common/screens/RegisterScreen';
import LoginScreen from '../common/screens/LoginScreen';
import OrderFullDetail from '../buyer/components/OrderDetailsComponent/OrderFullDetail';
import EditProfile from '../buyer/screens/EditProfile';
import { useDispatch } from 'react-redux';
import { LOGIN } from '../../store/actions/actionTypes';
import persistStore from '../utils/persistStore';
import HelpCenter from '../buyer/screens/HelpCenter';
import Share from '../buyer/screens/Share';
import Faq from '../buyer/screens/Faq';
import AboutUs from '../buyer/screens/AboutUs';
import TermsOfUse from '../buyer/screens/TermsOfUse';
import PrivacyPolicy from '../buyer/screens/PrivacyPolicy';
import SellerProducts from '../buyer/screens/SellerProducts';

const Stack = createStackNavigator();
function AppNavigator() {
	const dispatch = useDispatch();

	const getAuthDetails = async () => {
		//check if the user is already logged in
		const token = await persistStore.getDetails('token');
		const userDetails = await persistStore.getDetails('userDetails');
		if (token) {
			const data = {
				role: { role: 'Buyer' },
				status: 'success',
				token: { access_token: token },
				user: JSON.parse(userDetails),
			};
			dispatch({ type: LOGIN, value: data });
		}
	};

	useEffect(() => {
		getAuthDetails();
	}, []);

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
							name={route.params.name}
							totalItems={route.params.totalItems}
							{...props}
						/>
					),
				})}
			/>
				<Stack.Screen
				name="SellerProduct"
				component={SellerProducts}
				options={({ route }) => ({
					headerTitle: (props) => (
						<HeaderTitle
							name={route.params.name}
							totalItems={route.params.totalItems}
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
			<Stack.Screen
				name="AddAddress"
				component={AddAddress}
				options={{ title: 'ADD ADDRESS' }}
			/>
			<Stack.Screen
				name="Login"
				component={LoginScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Register"
				component={RegisterScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="ItemDetails"
				component={OrderFullDetail}
				options={{ title: 'ITEM DETAILS' }}
			/>
			<Stack.Screen
				name="EditProfile"
				component={EditProfile}
				options={{ title: 'PROFILE' }}
			/>
				<Stack.Screen
				name="HelpCenter"
				component={HelpCenter}
				options={{ title: 'HELP' }}
			/>
				<Stack.Screen
				name="Share"
				component={Share}
				options={{ title: 'SHARE' }}
			/>
				<Stack.Screen
				name="Faq"
				component={Faq}
				options={{ title: 'FAQ' }}
			/>
				<Stack.Screen
				name="AboutUs"
				component={AboutUs}
				options={{ title: 'ABOUT US' }}
			/>
			<Stack.Screen
				name="TermsOfUse"
				component={TermsOfUse}
				options={{ title: 'TERMS OF USE' }}
			/>
			<Stack.Screen
				name="PrivacyPolicy"
				component={PrivacyPolicy}
				options={{ title: 'PRIVACY POLICY' }}
			/>
		</Stack.Navigator>
	);
}

export default AppNavigator;
