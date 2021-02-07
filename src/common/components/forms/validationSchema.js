import * as Yup from 'yup';
import i18n from '../../../languages/i18n';

const validationLogin = () =>
	Yup.object().shape({
		email: Yup.string()
			.email()
			.required(i18n.t('validation.Email is a required feild')),
		password: Yup.string()
			.min(4)
			.required(i18n.t('validation.Password must be at least 4 characters'))
	});

const validationRegister = () =>
	Yup.object().shape({
		name: Yup.string()
			.min(3)
			.required(i18n.t('validation.Name must be at least 3 characters')),
		email: Yup.string()
			.email()
			.required(i18n.t('validation.Email is a required feild')),
		phonenumber: Yup.string()
			.min(10)
			.required(i18n.t('validation.Phone must be at least 10 characters')),
		password: Yup.string()
			.min(4)
			.required(i18n.t('validation.Password must be at least 4 characters')),
		password_confirmation: Yup.string()
			.min(4)
			.required(
				i18n.t('validation.Confirm Password must be at least 4 characters')
			)
	});

const validationProfile = () =>
	Yup.object().shape({
		name: Yup.string()
			.min(3)
			.required(i18n.t('validation.Name must be at least 3 characters')),
		phonenumber: Yup.string()
			.min(10)
			.required(i18n.t('validation.Phone must be at least 10 characters')),
		location: Yup.string().required(
			i18n.t('validation.Email is a required feild')
		)
	});

const validationHelp = () =>
	Yup.object().shape({
		name: Yup.string()
			.min(3)
			.required(i18n.t('validation.Name must be at least 3 characters')),
		email: Yup.string()
			.email()
			.required(i18n.t('validation.Email is a required feild')),
		message: Yup.string()
			.min(4)
			.required(i18n.t('validation.Query must be at least 4 characters'))
	});

const validationAddress = () =>
	Yup.object().shape({
		name: Yup.string()
			.min(3)
			.required(i18n.t('validation.Name must be at least 3 characters')),
		phoneNumber: Yup.string()
			.min(10)
			.required(i18n.t('validation.Phone must be at least 10 characters')),
		pincode: Yup.string().required(
			i18n.t('validation.Pin Code is a required feild')
		),
		address: Yup.string().required(
			i18n.t('validation.Address is a required feild')
		),
		address1: Yup.string().required(
			i18n.t('validation.Locality is a required feild')
		),
		city: Yup.string().required(i18n.t('validation.City is a required feild')),
		state: Yup.string().required(i18n.t('validation.State is a required feild'))
	});

const validationForgotPassword = () =>
	Yup.object().shape({
		email: Yup.string()
			.email()
			.required(i18n.t('validation.Email is a required feild'))
	});

export default {
	validationLogin,
	validationRegister,
	validationProfile,
	validationAddress,
	validationHelp,
	validationForgotPassword
};
