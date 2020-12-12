import React from 'react';
import { View } from 'react-native';
import colors from '../../config/colors';

const AppDivider = ({ width = 0.5, margin = 5 }) => {
	return (
		<View
			style={{
				borderBottomColor: colors.primaryShade23,
				borderBottomWidth: width,
				marginHorizontal: margin,
			}}
		/>
	);
};

export default AppDivider;
