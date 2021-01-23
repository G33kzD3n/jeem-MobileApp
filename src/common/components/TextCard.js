import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../../config/colors';
import AppText from './AppText';

const TextCard = ({ heading, details }) => {
	return (
		<View style={styles.container}>
			<AppText style={styles.heading}>{heading}</AppText>
			<AppText style={styles.subHeading}>{details}</AppText>
		</View>
	);
};

export default TextCard;

const styles = StyleSheet.create({
	container: {
		padding: 10,
		backgroundColor: colors.white
	},
	heading: {
		color: colors.primary1,
		fontSize: 17
	},
	subHeading: {
		color: colors.primary2,
		fontSize: 15
	}
});
