import React from 'react';
import { View } from 'react-native';
import colors from '../../config/colors';

const AppDivider = () => {
	return (
		<View
			style={{
				borderBottomColor: colors.primaryShade23,
				borderBottomWidth: 0.5,
				marginHorizontal: 5,
			}}
		/>
	);
};

export default AppDivider;
