import React from 'react';
// import { StyleSheet, Text, View } from 'react-native'

import { useFormikContext } from 'formik';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

const AppFormFeild = ({
	name,
	overrideContainer,
	overrideTextbox,
	...otherprops
}) => {
	const {
		setFieldTouched,
		handleChange,
		errors,
		touched,
		values
	} = useFormikContext();
	return (
		<>
			<AppTextInput
				onBlur={() => setFieldTouched(name)}
				onChangeText={handleChange(name)}
				overrideContainer={overrideContainer}
				value={values[name]}
				overrideTextbox={overrideTextbox}
				{...otherprops}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
};

export default AppFormFeild;
