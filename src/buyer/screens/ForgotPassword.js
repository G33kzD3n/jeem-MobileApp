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
import { forgotPasswordAction } from '../../../store/actions';
import {
	CLEAR_FORGOT_PASSWORD,
	FORGOT_PASSWORD
} from '../../../store/actions/actionTypes';
import Loader from '../../common/components/Loader';
import AppText from '../../common/components/AppText';
import appAlert from '../../common/components/appAlert';
import i18n from '../../languages/i18n';
import { apiUrlImageStatic } from '../../config/config';

const ForgotPassword = ({ navigation }) => {
	const [loading, setLoading] = useState(false);
	const showKeyboard = useKeyboardDetect();
	const status = useSelector(state => state.auth.forgotPasswordStatus);
	const dispatch = useDispatch();

	//store auth in storage
	useEffect(() => {
		if (status && status === 200) {
			setLoading(false);
			dispatch(forgotPasswordAction(CLEAR_FORGOT_PASSWORD));
			appAlert(
				i18n.t('forgotScreen.SUCCESS'),
				i18n.t('forgotScreen.Reset Password link send to your verified email address'),
				handleOk
			);
		} else if (status && status !== 200) {
			setLoading(false);
			dispatch(forgotPasswordAction(CLEAR_FORGOT_PASSWORD));
			appAlert(
				i18n.t('forgotScreen.Error'),
				i18n.t('forgotScreen.Email not registered or Please try again later'),
				handleOk
			);
		}
	}, [status]);

	const handleOk = () => {
		navigation.goBack();
	};

	const handleLogin = () => {
		navigation.navigate('Login');
	};

	const handleForgotPassword = values => {
		setLoading(true);
		dispatch(forgotPasswordAction(FORGOT_PASSWORD, values));
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
						{i18n.t('forgotScreen.Forgot')}{'\n'}{i18n.t('forgotScreen.Password')}
					</AppText>
				</View>
				<View style={styles.secondContainer}>
					<AppForm
						initialValues={{ email: '' }}
						onSubmit={values => handleForgotPassword(values)}
						validationSchema={validation.validationForgotPassword}
					>
						<View style={styles.textBox}>
							<AppFormFeild
								placeholder={i18n.t('forgotScreen.Email')}
								keyboardType="email-address"
								name="email"
							/>
						</View>
						<SubmitButton text={i18n.t('forgotScreen.Confirm')} />
					</AppForm>
				</View>

				{!showKeyboard && (
					<View style={styles.thirdContainer}>
						<View style={styles.innerThird}>
							<AppText style={styles.signUp}>{i18n.t('forgotScreen.Remember Password?')} </AppText>
							<TextClick
								weight="bold"
								textDecorationLine="underline"
								text={i18n.t('forgotScreen.Login')}
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
		alignItems: 'flex-end'
	},
	signUp: {
		color: colors.white,
		fontSize: 16
	},
	social: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	msg: {
		paddingVertical: 20,
		textAlign: 'center',
		color: colors.white
	},
	parentContainer: {
		flex: 1,
		paddingHorizontal: 15
	},
	firstContainer: {
		flex: 2,
		justifyContent: 'flex-end'
	},
	textBox: {
		paddingBottom: 10
	},
	secondContainer: {
		flex: 2,
		maxHeight: '65%'
		// justifyContent:'center'
	},
	thirdContainer: {
		flex: 1
	}
});
