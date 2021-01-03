import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppButton from '../../../common/components/AppButton';
import Avatar from '../../../common/components/Avatar';
import colors from '../../../config/colors';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../../../store/actions';
import { LOGOUT } from '../../../../store/actions/actionTypes';

const TopSections = ({ edit, token,image="https://cdn0.iconfinder.com/data/icons/social-media-network-4/48/male_avatar-512.png" }) => {
	const navigation = useNavigation();

	const dispatch = useDispatch();
	const handelAuth = async () => {
		if (token) {
			dispatch(logoutAction(LOGOUT));
			navigation.navigate('Home');
		} else {
			navigation.navigate('Login');
		}
	};
	return (
		<View style={styles.topContainer}>
			<View style={styles.firstContainer}></View>
			<View style={styles.secondContainer}>
				<Avatar
					customStyles={styles.avatar}
					image={image}
				/>
				{!edit && (
					<AppButton
						color1={colors.primaryShade11}
						color2={colors.primaryShade13}
						borderRadius={0}
						textColor={colors.white}
						width="50%"
						text={token !== null ? 'LOGOUT' : 'LOG IN/SIGN UP'}
						customStyle={styles.button}
						textTransform="uppercase"
						handleClick={handelAuth}
					/>
				)}
			</View>
		</View>
	);
};

export default TopSections;

const styles = StyleSheet.create({
	button: {
		alignSelf: 'center',
	},
	avatar: {
		height: 150,
		width: 150,
		borderRadius: 75,
		bottom: 80,
	},
	topContainer: {
		backgroundColor: colors.white,
		height: 200,
		//	marginBottom: 10,
	},
	firstContainer: {
		backgroundColor: colors.primaryShade13,
		flex: 1.5,
	},
	secondContainer: {
		backgroundColor: colors.white,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
});
