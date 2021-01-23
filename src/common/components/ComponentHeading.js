import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../../config/colors';
import AppText from './AppText';

const ComponentHeading = ({ text, more, onPress }) => {
	return (
		<View style={styles.parent}>
			<AppText style={styles.heading}>{text}</AppText>
			{more && (
				<TouchableOpacity onPress={onPress}>
					<AppText style={styles.heading}>{more}</AppText>
				</TouchableOpacity>
			)}
		</View>
	);
};

export default ComponentHeading;

const styles = StyleSheet.create({
	parent: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 13,
		paddingBottom: 7,
		paddingHorizontal: 8
	},
	heading: {
		color: colors.primary2,
		fontSize: 12,
		textTransform: 'uppercase'
	}
});
