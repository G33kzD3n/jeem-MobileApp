import React from 'react';
import { useFormikContext } from 'formik';
import AppButton from '../AppButton';
import colors from '../../../config/colors';

const SubmitButton = ({ text, borderRadius }) => {
	const { handleSubmit } = useFormikContext();
	return (
		<>
			<AppButton
				color1={colors.primaryShade11}
				textTransform="uppercase"
				color2={colors.primaryShade13}
				text={text}
				textColor={colors.white}
				handleClick={handleSubmit}
				borderRadius={borderRadius}
			/>
		</>
	);
};

export default SubmitButton;
