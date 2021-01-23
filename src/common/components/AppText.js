import React from 'react';
import { StyleSheet, Text } from 'react-native';
// import {useFonts} from 'expo-font';
import defaultStyles from '../../config/defaultStyles';

const AppText = ({
	size = 18,
	weight = 'normal',
	children,
	style,
	color = 'white',
	...props
}) => {
	return (
		<Text
			{...props}
			style={[
				defaultStyles.text,
				{
					fontSize: size,
					fontWeight: weight,
					color: color,
					textTransform: 'capitalize'
				},
				style
			]}
		>
			{children}
		</Text>
	);
};

export default AppText;

const styles = StyleSheet.create({});
