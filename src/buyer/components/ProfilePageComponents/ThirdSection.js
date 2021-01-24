import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import AppText from '../../../common/components/AppText';
import colors from '../../../config/colors';
import { useNavigation } from '@react-navigation/native';
import i18n from '../../../languages/i18n';

const ThirdSection = () => {
	const navigation = useNavigation();
	const faq = () => {
		navigation.navigate('Faq');
	};
	const aboutUs = () => {
		navigation.navigate('AboutUs');
	};
	const termsOfUse = () => {
		navigation.navigate('TermsOfUse');
	};
	const privacyPolicy = () => {
		navigation.navigate('PrivacyPolicy');
	};
	return (
		<View style={styles.topContainer}>
			<TouchableOpacity style={styles.container} onPress={() => faq()}>
				<AppText style={styles.text}>{i18n.t('profileScreen.FAQs')}</AppText>
			</TouchableOpacity>
			<TouchableOpacity style={styles.container} onPress={() => aboutUs()}>
				<AppText style={styles.text}>{i18n.t('profileScreen.ABOUT US')}</AppText>
			</TouchableOpacity>
			<TouchableOpacity style={styles.container} onPress={() => termsOfUse()}>
				<AppText style={styles.text}>{i18n.t('profileScreen.TERMS OF USE')}</AppText>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.container}
				onPress={() => privacyPolicy()}
			>
				<AppText style={styles.text}>{i18n.t('profileScreen.PRIVACY POLICY')}</AppText>
			</TouchableOpacity>
		</View>
	);
};

export default ThirdSection;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		height: 50,
		// borderColor:'red',
		// borderWidth:3,
		justifyContent: 'center',
		paddingHorizontal: 60
	},
	text: {
		color: colors.primary1,
		textTransform: 'uppercase',
		fontSize: 14
	},
	topContainer: {
		marginTop: 8
	}
});
