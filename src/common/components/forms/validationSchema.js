import * as Yup from 'yup';

const validationLogin = Yup.object().shape({
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(4).label('Password'),
});

const validationRegister = Yup.object().shape({
	name: Yup.string().required().min(3).label('Name'),
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(4).label('Password'),
});

const validationProfile = Yup.object().shape({
	name: Yup.string().required().min(3).label('Name'),
	mobile: Yup.string().required().min(10).label('Phone'),
	location: Yup.string().required().label('Location'),
});

const validationAddress = Yup.object().shape({
	name: Yup.string().required().min(3).label('Name'),
	mobile: Yup.string().required().min(10).label('Phone'),
	pin: Yup.string().required().label('Pin Code'),
	address: Yup.string().required().label('Address'),
	locality: Yup.string().required().label('Locality'),
	city: Yup.string().required().label('City'),
	state: Yup.string().required().label('State'),
});

export default {
	validationLogin,
	validationRegister,
	validationProfile,
	validationAddress,
};
