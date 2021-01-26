import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppText from '../../common/components/AppText';
import colors from '../../config/colors';
import i18n from '../../languages/i18n';

const TermsOfUse = () => {
	return (
		<ScrollView style={styles.topContainer}>
			<View style={styles.parentContainer}>
				<AppText style={styles.heading}>
					{i18n.t('termsOfUse.one')}
				</AppText>
				<AppText style={styles.subHeading}>
				{i18n.t('termsOfUse.detailsOne')}
				</AppText>
			</View>
			<View style={styles.parentContainer}>
				<AppText style={styles.heading}>{i18n.t('termsOfUse.two')}</AppText>
				<AppText style={styles.subHeading}>
				{i18n.t('termsOfUse.detailsTwo')}
				</AppText>
			</View>
			<View style={styles.parentContainer}>
				<AppText style={styles.heading}>
					{i18n.t('termsOfUse.three')}
				</AppText>
				<AppText style={styles.subHeading}>
				{i18n.t('termsOfUse.detailsThree')}
				</AppText>
			</View>
			<View style={styles.parentContainer}>
				<AppText style={styles.heading}>
				{i18n.t('termsOfUse.four')}
				</AppText>
				<AppText style={styles.subHeading}>
				{i18n.t('termsOfUse.detailsFour')}
				</AppText>
			</View>
			<View style={styles.parentContainer}>
				<AppText style={styles.heading}>
				{i18n.t('termsOfUse.five')}
				</AppText>
				<AppText style={styles.subHeading}>
				{i18n.t('termsOfUse.detailsFive')}
				</AppText>
			</View>
			<View style={styles.parentContainer}>
				<AppText style={styles.heading}>
				{i18n.t('termsOfUse.six')}
				</AppText>
				<AppText style={styles.subHeading}>
				{i18n.t('termsOfUse.detailsSix')}
				</AppText>
			</View>
			<View style={styles.parentContainer}>
				<AppText style={styles.heading}>
				{i18n.t('termsOfUse.seven')}
				</AppText>
				<AppText style={styles.subHeading}>
				{i18n.t('termsOfUse.detailsSeven')}
				</AppText>
			</View>
		</ScrollView>
	);
};

export default TermsOfUse;

const styles = StyleSheet.create({
	parentContainer: {
		paddingTop: 10
	},
	topContainer: {
		paddingHorizontal: 10
	},
	heading: {
		color: colors.primary1,
		fontWeight: 'bold',
		fontSize: 20
	},
	subHeading: {
		color: colors.primary2,
		// textAlign: 'justify'
	}
});
