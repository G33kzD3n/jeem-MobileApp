import React from 'react';
import { StyleSheet, View,ScrollView } from 'react-native';
import AppText from '../../common/components/AppText';
import colors from '../../config/colors';
import i18n from '../../languages/i18n';

const PrivacyPolicy = () => {
	return (
		<ScrollView style={styles.topContainer}>
			<View style={styles.parentContainer}>
				<AppText style={styles.subHeading}>
				{i18n.t(`privacyPolicy.policies`)}
				</AppText>
			</View>
			</ScrollView>
	);
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
	subHeading: {
		color: colors.primary2,
		// textAlign: 'justify'
	},
	parentContainer: {
		paddingTop: 10
	},
	topContainer: {
		paddingHorizontal: 10
	},
});
