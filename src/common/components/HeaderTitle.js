import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../config/colors';
import i18n from '../../languages/i18n';

const HeaderTitle = ({ name, totalItems }) => {
	// console.log(totalItems)
	return (
		<View>
			<Text style={styles.text}>{name}</Text>
			{totalItems && <Text style={styles.subText}>{totalItems} {i18n.t('common.Items')}</Text>}
		</View>
	);
};

export default HeaderTitle;

const styles = StyleSheet.create({
	text: {
		textTransform: 'uppercase',
		fontWeight: 'bold',
		fontSize: 16,
		color: colors.primary1
	},
	subText: {
		fontSize: 12,
		color: colors.primary2
	}
});
