import React from 'react';
import { StyleSheet, View, Share } from 'react-native';
import ProfileCard from '../../../common/components/ProfileCard';
import colors from '../../../config/colors';
import { useNavigation } from '@react-navigation/native';
import i18n from '../../../languages/i18n';
import { useSelector } from 'react-redux';

const SecondSection = ({ token }) => {
	const navigation = useNavigation();
	const currentLanguage = useSelector(state => state.profile.language);
	const checkStatus = () => {
		navigation.navigate('ViewOrders',{name:i18n.t('appNavigation.MY ORDERS')});
	};
	const addAddress = () => {
		navigation.navigate('SelectAddress',{name:i18n.t('appNavigation.ADDRESS')});
	};
	const editProfile = () => {
		navigation.navigate('EditProfile',{name:i18n.t('appNavigation.PROFILE')});
	};
	const helpCenter = () => {
		navigation.navigate('HelpCenter',{name:i18n.t('appNavigation.HELP')});
	};
	const language = () => {
		navigation.navigate('Language',{name:i18n.t('appNavigation.SELECT LANGUAGE')});
	};
	const share = async () => {
		try {
			const result = await Share.share({
				message: 'Jeem Solutions | http://jeem.brorinfotech.com/#/'
			});
			if (result.action === Share.sharedAction) {
				if (result.activityType) {
					// shared with activity type of result.activityType
				} else {
					// shared
				}
			} else if (result.action === Share.dismissedAction) {
				// dismissed
			}
		} catch (error) {
			alert(error.message);
		}
	};
	return (
		<View style={styles.topContainer}>
			{token && (
				<>
					<ProfileCard
						customStyle={styles.customStyle}
						heading={i18n.t('profileScreen.Orders')}
						subHeading={i18n.t('profileScreen.Check your order status')}
						icon="inbox-arrow-up"
						onPress={() => checkStatus()}
						direction={currentLanguage==='ar'?'row-reverse':'row'}
					/>
					<ProfileCard
						customStyle={styles.customStyle}
						heading={i18n.t('profileScreen.Profile Details')}
						subHeading={i18n.t('profileScreen.Change your profile details')}
						icon="account-edit"
						onPress={() => editProfile()}
						direction={currentLanguage==='ar'?'row-reverse':'row'}
					/>
					<ProfileCard
						customStyle={styles.customStyle}
						heading={i18n.t('profileScreen.Address')}
						subHeading={i18n.t('profileScreen.Save addresses for hasle-free checkout')}
						icon="map-marker-plus"
						onPress={() => addAddress()}
						direction={currentLanguage==='ar'?'row-reverse':'row'}
					/>
				</>
			)}
			<ProfileCard
				customStyle={styles.customStyle}
				heading={i18n.t('profileScreen.Help Center')}
				subHeading={i18n.t('profileScreen.Help regarding your recent purchases')}
				icon="help-rhombus-outline"
				onPress={() => helpCenter()}
				direction={currentLanguage==='ar'?'row-reverse':'row'}
			/>
			<ProfileCard
				customStyle={styles.customStyle}
				heading={i18n.t('profileScreen.Language')}
				subHeading={i18n.t('profileScreen.Change Language according to your needs')}
				icon="speaker-wireless"
				onPress={() => language()}
				direction={currentLanguage==='ar'?'row-reverse':'row'}
			/>
			<ProfileCard
				customStyle={styles.customStyle}
				heading={i18n.t('profileScreen.Share')}
				subHeading={i18n.t('profileScreen.Refer to your friends')}
				icon="share-variant"
				onPress={() => share()}
				direction={currentLanguage==='ar'?'row-reverse':'row'}
			/>
		</View>
	);
};

export default SecondSection;

const styles = StyleSheet.create({
	topContainer: {
		// backgroundColor:colors.white
	},
	customStyle: {
		marginBottom: 2,
		backgroundColor: colors.white
	}
});
