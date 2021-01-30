import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ImageBackground, ScrollView } from 'react-native';
import AppText from '../components/AppText';
import colors from '../../config/colors';
import AppSwitch from '../components/AppSwitch';
import AppButton from '../components/AppButton';
import TextClick from '../components/TextClick';
import useKeyboardDetect from '../../hooks/useKeyboardDetect';
import AppFormFeild from '../components/forms/AppFormFeild';
import SubmitButton from '../components/forms/SubmitButton';
import AppForm from '../components/forms/AppForm';
import appAlert from '../components/appAlert';
import validation from '../components/forms/validationSchema';
import AppScreen from '../components/AppScreen';
import ErrorMessage from '../components/forms/ErrorMessage';
import Loader from '../components/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { CLEAR_SIGNUP, SIGNUP } from '../../../store/actions/actionTypes';
import {
	emptySignupAction,
	signupAction,
} from '../../../store/actions/authAction';
import i18n from '../../languages/i18n';
import { apiUrlImageStatic } from '../../config/config';

const RegisterScreen = ({ navigation }) => {
	const [isEnabled, setIsEnabled] = useState(false);
	const [checkPassword, setCheckPassword] = useState(null);
	const [loading, setloading] = useState(false);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
	const signupInfo = useSelector((state) => state.auth.signup);
	const showKeyboard = useKeyboardDetect();
	const dispatch = useDispatch();

	useEffect(() => {
		if (signupInfo && signupInfo==='Phone Number or Email already registered') {
			setloading(false);
			appAlert(
				i18n.t('registerScreen.Error'),
				i18n.t('registerScreen.Phone Number or Email already registered')
			);
			dispatch(emptySignupAction(CLEAR_SIGNUP));
		}else if (signupInfo){
			setloading(false);
			appAlert(
				i18n.t('registerScreen.Verification email sent'),
				i18n.t('registerScreen.Please verify your email and login'),
				handleOk
			);
			dispatch(emptySignupAction(CLEAR_SIGNUP));
		}
		// return () =>  dispatch(emptySignupAction(CLEAR_SIGNUP));
	}, [signupInfo]);
	const handleOk = () => {
		navigation.navigate('Login');
	};

	const handleSubmit = (values) => {
		setCheckPassword(null);
		if (!isEnabled) {
			appAlert(i18n.t('registerScreen.Info!'),i18n.t('registerScreen.Please agree on the terms and privacy policy'));
		} else if (values.password !== values.password_confirmation) {
			setCheckPassword('Password Mismatch');
		} else {
			setloading(true);
			dispatch(signupAction(SIGNUP, values));
		}
	};

	const handleLogin = () => {
		navigation.navigate('Login');
	};

	return (
		<>
			{loading && <Loader />}
		<ImageBackground
			 source={{ uri: apiUrlImageStatic+'signupin.jpg' }}
			blurRadius={3}
			style={styles.parentContainer}
		>
			<AppScreen>
				<ScrollView>
					<View style={styles.firstContainer}>
						<AppText weight="bold" color={colors.white} size={42}>
							{i18n.t('registerScreen.Create your account')}
						</AppText>
					</View>
					{checkPassword && (
						<View style={{ alignSelf: 'center' }}>
							<ErrorMessage visible={checkPassword} error={checkPassword} />
						</View>
					)}
					<View style={styles.secondContainer}>
						<AppForm
							initialValues={{
								name: '',
								email: '',
								password: '',
								password_confirmation: '',
								phonenumber: '',
							}}
							onSubmit={(values) => handleSubmit(values)}
							validationSchema={validation.validationRegister}
						>
							<View style={styles.textBox}>
								<AppFormFeild placeholder={i18n.t('registerScreen.Your Name')} name="name" />
								<AppFormFeild
									placeholder={i18n.t('registerScreen.Email')}
									keyboardType="email-address"
									name="email"
									keyboardType="email-address"
								/>
								<AppFormFeild
									name="phonenumber"
									placeholder={i18n.t('registerScreen.Phone Number')}
									keyboardType="phone-pad"
								/>
								<AppFormFeild
									name="password"
									placeholder={i18n.t('registerScreen.Password')}
									secureTextEntry
								/>
								<AppFormFeild
									name="password_confirmation"
									placeholder={i18n.t('registerScreen.Confirm Password')}
									secureTextEntry
								/>
							</View>
							<AppSwitch
								isEnabled={isEnabled}
								toggleSwitch={toggleSwitch}
								text={i18n.t('registerScreen.You agree the terms and privacy policy')}
							/>
							<SubmitButton text={i18n.t('registerScreen.Sign Up')}/>
						</AppForm>

						{/* <AppText size={15} style={styles.msg}>
					Or continue with
				</AppText>
				<View style={styles.social}>
					<AppButton
						textTransform="uppercase"
						color1="#808cba"
						color2="#808cba"
						width="45%"
						iconColor={colors.white}
						iconSize={20}
						icon="facebook"
						handleClick={handleLogin}
					/>
					<AppButton
						textTransform="uppercase"
						color1="#f18a77"
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
							<View style={styles.innerThird}>
								<AppText style={styles.signUp}>
									{i18n.t('registerScreen.Already have an account?')}{' '}
								</AppText>
								<TextClick
									weight="bold"
									textDecorationLine="underline"
									text={i18n.t('registerScreen.Log In')}
									onClick={handleLogin}
									size={16}
									color={colors.white}
								/>
							</View>
						</View>
					)}
				</ScrollView>
			</AppScreen>
		</ImageBackground>
		</>
	);
};

export default RegisterScreen;

const styles = StyleSheet.create({
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
		marginTop: 10,
		flex: 0.7,
		justifyContent: 'flex-end',
	},
	textBox: {},
	secondContainer: {
		flex: 2,
		// maxHeight: "65%"
	},
	thirdContainer: {
		flex: 1,
	},
});
