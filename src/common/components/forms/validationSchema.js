import * as Yup from 'yup';
import i18n from '../../../languages/i18n';


const validationLogin = Yup.object().shape({
	email: Yup.string()
		.required()
		.email()
		.label(i18n.t('validation.Email')),
	password: Yup.string()
		.required()
		.min(4)
		.label(i18n.t('validation.Password'))
});

const validationRegister = Yup.object().shape({
	name: Yup.string()
		.required()
		.min(3)
		.label(i18n.t('validation.Name')),
	email: Yup.string()
		.required()
		.email()
		.label(i18n.t('validation.Email')),
	phonenumber: Yup.string()
		.required()
		.min(10)
		.label(i18n.t('validation.Phone')),
	password: Yup.string()
		.required()
		.min(4)
		.label(i18n.t('validation.Password')),
	password_confirmation: Yup.string()
		.required()
		.min(4)
		.label(i18n.t('validation.Confirm Password'))
});

const validationProfile = Yup.object().shape({
	name: Yup.string()
		.required()
		.min(3)
		.label(i18n.t('validation.Name')),
	phonenumber: Yup.string()
		.required()
		.min(10)
		.label(i18n.t('validation.Phone')),
	location: Yup.string()
		.required()
		.label(i18n.t('validation.Location'))
});

const validationHelp = Yup.object().shape({
	name: Yup.string()
		.required()
		.min(3)
		.label(i18n.t('validation.Name')),
	email: Yup.string()
		.required()
		.email()
		.label(i18n.t('validation.Email')),
	message: Yup.string()
		.required()
		.min(4)
		.label(i18n.t('validation.Query'))
});

const validationAddress = Yup.object().shape({
	name: Yup.string()
		.required()
		.min(3)
		.label(i18n.t('validation.Name')),
	phoneNumber: Yup.string()
		.required()
		.min(10)
		.label(i18n.t('validation.Phone')),
	pincode: Yup.string()
		.required()
		.label(i18n.t('validation.Pin Code')),
	address: Yup.string()
		.required()
		.label(i18n.t('validation.Address')),
	address1: Yup.string()
		.required()
		.label(i18n.t('validation.Locality')),
	city: Yup.string()
		.required()
		.label(i18n.t('validation.City')),
	state: Yup.string()
		.required()
		.label(i18n.t('validation.State'))
});

const validationForgotPassword = Yup.object().shape({
	email: Yup.string()
		.required()
		.email()
		.label(i18n.t('validation.Email'))
});

export default {
	validationLogin,
	validationRegister,
	validationProfile,
	validationAddress,
	validationHelp,
	validationForgotPassword
};
