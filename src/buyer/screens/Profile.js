import React from 'react';
import { StyleSheet,  View, ScrollView } from 'react-native';
import AppDivider from '../../common/components/AppDivider';
import colors from '../../config/colors';
import AppVersion from '../components/ProfilePageComponents/AppVersion';
import SecondSection from '../components/ProfilePageComponents/SecondSection';
import ThirdSection from '../components/ProfilePageComponents/ThirdSection';
import TopSections from '../components/ProfilePageComponents/TopSections';
import { useSelector } from 'react-redux';

const Profile = () => {
	const token = useSelector(
		state => state.auth.login && state.auth.login.token.access_token
	);
	return (
		// <AppScreen>
		<ScrollView style={{ backgroundColor: colors.primaryShade24 }}>
			<View>
				<TopSections token={token} />
				<AppDivider width={0.5} />
				<SecondSection token={token} />
				<ThirdSection />
				<AppVersion />
			</View>
		</ScrollView>
		// </AppScreen>
	);
};

export default Profile;

const styles = StyleSheet.create({});
