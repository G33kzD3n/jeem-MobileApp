import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../../config/colors';
import i18n from '../../../languages/i18n';

const AppVersion = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{i18n.t('profileScreen.appVersion')}</Text>
		</View>
	);
};

export default AppVersion;

const styles = StyleSheet.create({
	container: {
		marginVertical: 30,
		alignItems: 'center'
	},
	text: {
		color: colors.primary2
	}
});
