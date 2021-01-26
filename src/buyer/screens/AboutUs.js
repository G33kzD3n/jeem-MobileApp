import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import AppText from '../../common/components/AppText';
import colors from '../../config/colors';
import { LinearGradient } from 'expo-linear-gradient';
import i18n from '../../languages/i18n';
import { useSelector } from 'react-redux';

const AboutUs = () => {
	const currentLanguage = useSelector(state => state.profile.language);
	return (
		<View style={styles.parent}>
			<ImageBackground
				source={require('../../assets/background.png')}
				blurRadius={3}
				style={styles.image}
			>
				<AppText style={styles.text1}>{i18n.t('aboutScreen.aboutUs1')}</AppText>
		
			{currentLanguage === 'en' && (
				<>
					<LinearGradient
						style={styles.modal}
						start={[0.4, 0.1]}
						end={[0.5, 0.8]}
						colors={[
							colors.primaryShade24,
							colors.primaryShade24,
							colors.primaryShade22,
							colors.primaryShade24,
							colors.primaryShade24
						]}
					>
						<AppText style={styles.text2}>
							{i18n.t('aboutScreen.aboutUs2')}
						</AppText>
					</LinearGradient>
					<AppText style={styles.text3}>
						{i18n.t(`aboutScreen.aboutUs3`)}
					</AppText>
				</>
			)}
				</ImageBackground>
		</View>
	);
};

export default AboutUs;

const styles = StyleSheet.create({
	modal: {
		// backgroundColor: colors.primary2,
		flex: 0.8,
		opacity: 0.8
	},
	parent: {
		flex: 1
		// paddingVertical:20
	},
	image: {
		flex: 2
	},
	text1: {
		color: colors.white,
		paddingHorizontal: 10,
		fontSize: 21,
		textAlign: 'justify',
		//  textAlignVertical:'bottom',
		flex: 2,
		paddingBottom: 0,
		fontWeight: 'bold'
	},
	text2: {
		color: colors.primary1,
		paddingHorizontal: 10,
		textAlign: 'center',
		fontSize: 20,
		flex: 1,
		fontWeight: 'bold'
		// backgroundColor:colors.primaryShade23
	},
	text3: {
		color: colors.primaryShade23,
		paddingHorizontal: 10,
		paddingBottom: 15,
		flex: 1,
		textAlign: 'justify',
		fontSize: 20,
		// backgroundColor: colors.primaryShade24
	}
});
