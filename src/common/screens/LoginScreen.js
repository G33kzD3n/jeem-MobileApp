import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import AppText from '../components/AppText';
import colors from '../../config/colors';
import AppSwitch from '../components/AppSwitch';
import AppButton from '../components/AppButton';
import TextClick from '../components/TextClick';
import useKeyboardDetect from '../../hooks/useKeyboardDetect';
import AppFormFeild from '../components/forms/AppFormFeild';
import SubmitButton from '../components/forms/SubmitButton';
import AppForm from '../components/forms/AppForm';
import validation from '../components/forms/validationSchema';
import { useSelector, useDispatch } from 'react-redux';
import {
	getCartCountAction,
	loginAction,
	removeLoginErrorAction,
} from '../../../store/actions';
import {
	GET_COUNT,
	LOGIN,
	REMOVE_LOGIN_ERROR,
} from '../../../store/actions/actionTypes';
import ErrorMessage from '../components/forms/ErrorMessage';
import Loader from '../components/Loader';
import persistStore from '../../utils/persistStore';
import i18n from '../../languages/i18n';
import { apiUrlImageStatic } from '../../config/config';
// import { connect } from 'react-redux';
// import { loginAction } from '../../../store/actions/authActions';
// import { LOGIN } from '../../../store/actions/actionTypes';

const LoginScreen = ({ navigation, login }) => {
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

	const showKeyboard = useKeyboardDetect();
	const loginInfo = useSelector((state) => state.auth.login);
	const loading = useSelector((state) => state.auth.loading);
	const errorMsg = useSelector((state) => state.auth.errorMessages);
	const error = useSelector((state) => state.auth.error);
	const currentLanguage = useSelector(state => state.profile.language);
	const dispatch = useDispatch();
	useEffect(() => {
		return () => dispatch(removeLoginErrorAction(REMOVE_LOGIN_ERROR));
	}, []);

	//store auth in storage
	useEffect(() => {
		if (loginInfo) {
			dispatch(getCartCountAction(GET_COUNT)); //get total item in cart
			persistStore.storeDetails('token', loginInfo.token.access_token);
			persistStore.storeDetails('userDetails', JSON.stringify(loginInfo.user));
			navigation.goBack();
		}
	}, [loginInfo]);

	const handleLogin = () => {
		console.log('Login');
	};

	const handleSignUp = () => {
		navigation.navigate('Register');
	};

	const handleForgotPassword = () => {
		navigation.navigate('ForgotPassword');
	};

	return (
		<>
			{loading && <Loader />}
			<ImageBackground
			 source={{ uri: apiUrlImageStatic+'signupin.jpg' }}
				blurRadius={3}
				style={styles.parentContainer}
			>
				<View style={styles.firstContainer}>
					<AppText weight="bold" color={colors.white} size={42}>
						{i18n.t('loginScreen.Log into your account')}
					</AppText>
				</View>
				{error && (
					<View style={{ alignSelf: 'center' }}>
						<ErrorMessage visible={error} error={errorMsg} />
					</View>
				)}
				<View style={styles.secondContainer}>
					<AppForm
						initialValues={{ email: '', password: '' }}
						onSubmit={(values) => dispatch(loginAction(LOGIN, values))}
						validationSchema={validation.validationLogin}
					>
						<View style={styles.textBox}>
							<AppFormFeild
								placeholder={i18n.t('loginScreen.Email')}
								keyboardType="email-address"
								name="email"
								textAlign={currentLanguage==='ar'?'right':'left'}
							/>
							<AppFormFeild
								placeholder={i18n.t('loginScreen.Password')}
								name="password"
								secureTextEntry
								textAlign={currentLanguage==='ar'?'right':'left'}
							/>
						</View>
						<View style={styles.forgotPasswordParent}>
							<AppSwitch
								isEnabled={isEnabled}
								toggleSwitch={toggleSwitch}
								text={i18n.t('loginScreen.Remember me')}
							/>
							<View style={{paddingTop:5}}>
								<TextClick
									weight="bold"
									textDecorationLine="underline"
									text={i18n.t('loginScreen.Forgot Password')}
									onClick={handleForgotPassword}
									size={16}
									color={colors.white}
								/>
							</View>
						</View>
						<SubmitButton text={i18n.t('loginScreen.Log In')} />
					</AppForm>

					{/* social media buttons for login................. */}
					{/* <AppText size={15} style={styles.msg}>
						Or continue with
					</AppText>
					<View style={styles.social}>
						<AppButton
							color1="#808cba"
							textTransform="uppercase"
							color2="#808cba"
							width="45%"
							iconColor={colors.white}
							iconSize={20}
							icon="facebook"
							handleClick={handleLogin}
						/>
						<AppButton
							color1="#f18a77"
							textTransform="uppercase"
							color2="#f18a77"
							width="45%"
							iconColor={colors.white}
							iconSize={20}
							icon="google"
							handleClick={handleLogin}
						/>
					</View> */}
				</View>

				{!showKeyboard && (
					<View style={styles.thirdContainer}>
						<View style={[styles.innerThird,{flexDirection:currentLanguage === 'ar' ? 'row-reverse' : 'row'}]}>
							<AppText style={styles.signUp}>{i18n.t('loginScreen.Don\'t have an account?')} </AppText>
							<TextClick
								weight="bold"
								textDecorationLine="underline"
								text={i18n.t('loginScreen.Sign Up')}
								onClick={handleSignUp}
								size={16}
								color={colors.white}
							/>
						</View>
					</View>
				)}
			</ImageBackground>
		</>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	forgotPasswordParent: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	innerThird: {
		flex: 1,
		paddingBottom: 40,
		flexDirection: 'row',
		alignItems: 'flex-end',
	},
	signUp: {
		color: colors.white,
		fontSize: 16,
	},
	social: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	msg: {
		paddingVertical: 20,
		textAlign: 'center',
		color: colors.white,
	},
	parentContainer: {
		flex: 1,
		paddingHorizontal: 15,
	},
	firstContainer: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	textBox: {},
	secondContainer: {
		flex: 2,
		maxHeight: '65%',
	},
	thirdContainer: {
		flex: 1,
	},
});
