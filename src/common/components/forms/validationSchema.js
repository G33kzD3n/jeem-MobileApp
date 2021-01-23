import * as Yup from 'yup';

const validationLogin = Yup.object().shape({
	email: Yup.string()
		.required()
		.email()
		.label('Email'),
	password: Yup.string()
		.required()
		.min(4)
		.label('Password')
});

const validationRegister = Yup.object().shape({
	name: Yup.string()
		.required()
		.min(3)
		.label('Name'),
	email: Yup.string()
		.required()
		.email()
		.label('Email'),
	phonenumber: Yup.string()
		.required()
		.min(10)
		.label('Phone'),
	password: Yup.string()
		.required()
		.min(4)
		.label('Password'),
	password_confirmation: Yup.string()
		.required()
		.min(4)
		.label('Confirm Password')
});

const validationProfile = Yup.object().shape({
	name: Yup.string()
		.required()
		.min(3)
		.label('Name'),
	phonenumber: Yup.string()
		.required()
		.min(10)
		.label('Phone'),
	location: Yup.string()
		.required()
		.label('Location')
});

const validationHelp = Yup.object().shape({
	name: Yup.string()
		.required()
		.min(3)
		.label('Name'),
	email: Yup.string()
		.required()
		.email()
		.label('Email'),
	message: Yup.string()
		.required()
		.min(4)
		.label('Query')
});

const validationAddress = Yup.object().shape({
	name: Yup.string()
		.required()
		.min(3)
		.label('Name'),
	phoneNumber: Yup.string()
		.required()
		.min(10)
		.label('Phone'),
	pincode: Yup.string()
		.required()
		.label('Pin Code'),
	address: Yup.string()
		.required()
		.label('Address'),
	address1: Yup.string()
		.required()
		.label('Locality'),
	city: Yup.string()
		.required()
		.label('City'),
	state: Yup.string()
		.required()
		.label('State')
});

const validationForgotPassword = Yup.object().shape({
	email: Yup.string()
		.required()
		.email()
		.label('Email')
});

export default {
	validationLogin,
	validationRegister,
	validationProfile,
	validationAddress,
	validationHelp,
	validationForgotPassword
};
