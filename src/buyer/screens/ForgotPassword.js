import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import colors from '../../config/colors';
import TextClick from '../../common/components/TextClick';
import useKeyboardDetect from '../../hooks/useKeyboardDetect';
import AppFormFeild from '../../common/components/forms/AppFormFeild';
import SubmitButton from '../../common/components/forms/SubmitButton';
import AppForm from '../../common/components/forms/AppForm';
import validation from '../../common/components/forms/validationSchema';
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
import ErrorMessage from '../../common/components/forms/ErrorMessage';
import Loader from '../../common/components/Loader';
import persistStore from '../../utils/persistStore';
import AppText from '../../common/components/AppText';

const ForgotPassword = ({ navigation, login }) => {
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

	const showKeyboard = useKeyboardDetect();
	const loginInfo = useSelector((state) => state.auth.login);
	const loading = useSelector((state) => state.auth.loading);
	const errorMsg = useSelector((state) => state.auth.errorMessages);
	const error = useSelector((state) => state.auth.error);
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


	const handleForgotPassword = () => {
		navigation.navigate('ForgotPassword');
	};

	return (
		<>
			{loading && <Loader />}
			<ImageBackground
				source={require('../../assets/background.png')}
				blurRadius={3}
				style={styles.parentContainer}
			>
				<View style={styles.firstContainer}>
					<AppText weight="bold" color={colors.white} size={42}>
						Forgot{'\n'}Password
					</AppText>
				</View>
				{error && (
					<View style={{ alignSelf: 'center' }}>
						<ErrorMessage visible={error} error={errorMsg} />
					</View>
				)}
				<View style={styles.secondContainer}>
					<AppForm
						initialValues={{ email: '' }}
						onSubmit={(values) => dispatch(loginAction(LOGIN, values))}
						validationSchema={validation.validationForgotPassword}
					>
						<View style={styles.textBox}>
							<AppFormFeild
								placeholder="Email"
								keyboardType="email-address"
								name="email"
							/>
						</View>
						<SubmitButton text="Confirm" />
					</AppForm>
				</View>

				{!showKeyboard && (
					<View style={styles.thirdContainer}>
						<View style={styles.innerThird}>
							<AppText style={styles.signUp}>Remember Password? </AppText>
							<TextClick
								weight="bold"
								textDecorationLine="underline"
								text="Login"
								onClick={handleLogin}
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

export default ForgotPassword;

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
		flex: 2,
    justifyContent: 'flex-end',
    
	},
	textBox: {
    paddingBottom:10
  },
	secondContainer: {
		flex: 2,
    maxHeight: '65%',
    // justifyContent:'center'
	},
	thirdContainer: {
		flex: 1,
	},
});
