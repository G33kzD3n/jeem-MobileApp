import React from 'react';
import { StyleSheet, View, Share } from 'react-native';
import ProfileCard from '../../../common/components/ProfileCard';
import colors from '../../../config/colors';
import { useNavigation } from '@react-navigation/native';

const SecondSection = ({ token }) => {
	const navigation = useNavigation();
	const checkStatus = () => {
		navigation.navigate('ViewOrders');
	};
	const addAddress = () => {
		navigation.navigate('SelectAddress');
	};
	const editProfile = () => {
		navigation.navigate('EditProfile');
	};
	const helpCenter = () => {
		navigation.navigate('HelpCenter');
	};
	const language = () => {
		navigation.navigate('Language');
	};
	const share = async () => {
		try {
			const result = await Share.share({
				message: 'Jeem Solutions | http://jeem.brorinfotech.com/#/',
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
						heading="Orders"
						subHeading="Check your order status"
						icon="inbox-arrow-up"
						onPress={() => checkStatus()}
					/>
					<ProfileCard
						customStyle={styles.customStyle}
						heading="Profile Details"
						subHeading="Change your profile details"
						icon="account-edit"
						onPress={() => editProfile()}
					/>
					<ProfileCard
						customStyle={styles.customStyle}
						heading="Address"
						subHeading="Save addresses for hasle-free checkout"
						icon="map-marker-plus"
						onPress={() => addAddress()}
					/>
				</>
			)}
			<ProfileCard
				customStyle={styles.customStyle}
				heading="Help Center"
				subHeading="Help regarding your recent purchases"
				icon="help-rhombus-outline"
				onPress={() => helpCenter()}
			/>
			<ProfileCard
				customStyle={styles.customStyle}
				heading="Language"
				subHeading="Change Language according to your needs"
				icon="speaker-wireless"
				onPress={() => language()}
			/>
			<ProfileCard
				customStyle={styles.customStyle}
				heading="Share"
				subHeading="Refer to your friends"
				icon="share-variant"
				onPress={() => share()}
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
		backgroundColor: colors.white,
	},
});
