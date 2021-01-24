import React,{useState,useEffect} from 'react';
import { StyleSheet,  View, ScrollView } from 'react-native';
import AppDivider from '../../common/components/AppDivider';
import colors from '../../config/colors';
import AppVersion from '../components/ProfilePageComponents/AppVersion';
import SecondSection from '../components/ProfilePageComponents/SecondSection';
import ThirdSection from '../components/ProfilePageComponents/ThirdSection';
import TopSections from '../components/ProfilePageComponents/TopSections';
import { useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import Loader from '../../common/components/Loader';

const Profile = () => {
	const [loading, setLoading] = useState(true);
	const isFocused = useIsFocused();
	const token = useSelector(
		state => state.auth.login && state.auth.login.token.access_token
	);
	useEffect(() => {
		setLoading(false);
	}, [isFocused]);
	return (
		<>
			{loading && <Loader />}
		<ScrollView style={{ backgroundColor: colors.primaryShade24 }}>
			<View>
				<TopSections token={token} />
				<AppDivider width={0.5} />
				<SecondSection token={token} />
				<ThirdSection />
				<AppVersion />
			</View>
		</ScrollView>
		</>
	);
};

export default Profile;

const styles = StyleSheet.create({});
