import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../config/colors';
import AppText from './AppText';

const PickerItem = ({ label, onPress, style }) => {
	return (
		<TouchableOpacity onPress={onPress} style={style}>
			<AppText style={styles.text}>{label}</AppText>
		</TouchableOpacity>
	);
};

export default PickerItem;

const styles = StyleSheet.create({
	text: {
		padding: 20,
		color: colors.primary1,
	}
});
