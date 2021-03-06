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
import { CURRENT_LANGUAGE, LOGIN } from '../../store/actions/actionTypes';
import persistStore from '../utils/persistStore';
import HelpCenter from '../buyer/screens/HelpCenter';
import Faq from '../buyer/screens/Faq';
import AboutUs from '../buyer/screens/AboutUs';
import TermsOfUse from '../buyer/screens/TermsOfUse';
import PrivacyPolicy from '../buyer/screens/PrivacyPolicy';
import SellerProducts from '../buyer/screens/SellerProducts';
import AllBrands from '../buyer/screens/AllBrands';
import AddReview from '../buyer/screens/AddReview';
import Language from '../buyer/screens/Language';
import ForgotPassword from '../buyer/screens/ForgotPassword';
import i18n from '../languages/i18n';

const Stack = createStackNavigator();
function AppNavigator() {
	const dispatch = useDispatch();

	const getAuthDetails = async () => {
		const defaultLanguage = await persistStore.getDetails('language');
	  if(defaultLanguage){
			dispatch({ type: CURRENT_LANGUAGE, value: defaultLanguage });
		}else{
			dispatch({ type: CURRENT_LANGUAGE, value: 'ar' });
		}
		//check if the user is already logged in 
		const token = await persistStore.getDetails('token');
		const userDetails = await persistStore.getDetails('userDetails');

		if (token) {
			const data = {
				role: { role: 'Buyer' },
				status: 'success',
				token: { access_token: token },
				user: JSON.parse(userDetails)
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
				headerBackTitleVisible: false
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
					headerTitle: props => (
						<HeaderTitle
							name={route.params.name}
							totalItems={route.params.totalItems}
							{...props}
						/>
					)
				})}
			/>
			<Stack.Screen
				name="SellerProduct"
				component={SellerProducts}
				options={({ route }) => ({
					headerTitle: props => (
						<HeaderTitle
							name={route.params.name}
							totalItems={route.params.totalItems}
							{...props}
						/>
					)
				})}
			/>

			<Stack.Screen
				name="AllBrands"
				component={AllBrands}
				options={({ route }) => ({
					headerTitle: props => (
						<HeaderTitle
							name={route.params.name}
							totalItems={route.params.totalItems}
							{...props}
						/>
					)
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
				options={({ route }) => ({
					headerTitleStyle: { alignSelf: 'center' },
					headerTitle: props => (
						<HeaderTitle name={route.params.name} {...props} />
					)
				})}
			/>
			<Stack.Screen
				name="Payments"
				component={Payments}
				options={({ route }) => ({
					headerTitleStyle: { alignSelf: 'center' },
					headerTitle: props => (
						<HeaderTitle name={route.params.name} {...props} />
					)
				})}
			/>
			<Stack.Screen
				name="OrderDetails"
				component={OrderDetails}
				options={({ route }) => ({
					headerTitleStyle: { alignSelf: 'center' },
					headerLeft: () => null,
					headerTitle: props => (
						<HeaderTitle name={route.params.name} {...props} />
					)
				})}
			/>
			<Stack.Screen
				name="ViewOrders"
				component={ViewOrders}
				options={({ route }) => ({
					headerTitleStyle: { alignSelf: 'center' },
					headerTitle: props => (
						<HeaderTitle name={route.params.name} {...props} />
					)
				})}
			/>
			<Stack.Screen
				name="AddAddress"
				component={AddAddress}
				options={({ route }) => ({
					headerTitleStyle: { alignSelf: 'center' },
					headerTitle: props => (
						<HeaderTitle name={route.params.name} {...props} />
					)
				})}
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
				options={({ route }) => ({
					headerTitleStyle: { alignSelf: 'center' },
					headerTitle: props => (
						<HeaderTitle name={route.params.name} {...props} />
					)
				})}
			/>
			<Stack.Screen
				name="EditProfile"
				component={EditProfile}
				options={({ route }) => ({
					headerTitleStyle: { alignSelf: 'center' },
					headerTitle: props => (
						<HeaderTitle name={route.params.name} {...props} />
					)
				})}
			/>
			<Stack.Screen
				name="HelpCenter"
				component={HelpCenter}
				options={({ route }) => ({
					headerTitleStyle: { alignSelf: 'center' },
					headerTitle: props => (
						<HeaderTitle name={route.params.name} {...props} />
					)
				})}
			/>
			<Stack.Screen
				name="Faq"
				component={Faq}
				options={({ route }) => ({
					headerTitleStyle: { alignSelf: 'center' },
					headerTitle: props => (
						<HeaderTitle name={route.params.name} {...props} />
					)
				})}
			/>
			<Stack.Screen
				name="AboutUs"
				component={AboutUs}
				options={({ route }) => ({
					headerTitleStyle: { alignSelf: 'center' },
					headerTitle: props => (
						<HeaderTitle
							name={route.params.name}
							{...props}
						/>
					)
				})}
			/>
			<Stack.Screen
				name="TermsOfUse"
				component={TermsOfUse}
				options={({ route }) => ({
					headerTitleStyle: { alignSelf: 'center' },
					headerTitle: props => (
						<HeaderTitle name={route.params.name} {...props} />
					)
				})}
			/>
			<Stack.Screen
				name="PrivacyPolicy"
				component={PrivacyPolicy}
				options={({ route }) => ({
					headerTitleStyle: { alignSelf: 'center' },
					headerTitle: props => (
						<HeaderTitle
							name={route.params.name}
							{...props}
						/>
					)
				})}
			/>
			<Stack.Screen
				name="AddReview"
				component={AddReview}
				options={({ route }) => ({
					headerTitleStyle: { alignSelf: 'center' },
					headerTitle: props => (
						<HeaderTitle
							name={route.params.name}
							{...props}
						/>
					)
				})}
			/>
			<Stack.Screen
				name="Language"
				component={Language}
				options={({ route }) => ({
					headerTitleStyle: { alignSelf: 'center' },
					headerTitle: props => (
						<HeaderTitle
							name={route.params.name}
							{...props}
						/>
					)
				})}
			/>
			<Stack.Screen
				name="ForgotPassword"
				component={ForgotPassword}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}

export default AppNavigator;
