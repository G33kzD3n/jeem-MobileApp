import React, { useEffect } from 'react';
import { StyleSheet, View, BackHandler } from 'react-native';
import AppText from '../../../common/components/AppText';
import colors from '../../../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppButton from '../../../common/components/AppButton';
import { useNavigation } from '@react-navigation/native';
import i18n from '../../../languages/i18n';

const SucessCard = ({ orderCode }) => {
	const navigation = useNavigation();
	const checkStatus = () => {
		navigation.navigate('ViewOrders',{name:i18n.t('appNavigation.MY ORDERS')});
	};

	const handleBackButton = () => {
		navigation.navigate('Home');
	};
	useEffect(() => {
		BackHandler.addEventListener('hardwareBackPress', handleBackButton);
		return () =>
			BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
	}, []);

	return (
		<View style={styles.parent}>
			<View style={styles.topContainer}>
				<MaterialCommunityIcons
					style={styles.icon}
					name="check-circle"
					size={50}
					color="mediumseagreen"
				/>
				<View>
					<AppText style={styles.text}>
						{i18n.t('orderScreen.Order placed Sucessfully!')}
					</AppText>
					<AppText style={styles.subHeading}>
						{i18n.t('orderScreen.Order No')}
						{orderCode}
					</AppText>
				</View>
			</View>
			<View style={styles.textTop}>
				<AppText style={styles.theory}>
					{i18n.t(
						'orderScreen.orderInfo'
					)}
				</AppText>
			</View>
			<View style={styles.buttonContainer}>
				<AppButton
					color2={colors.secondarGreen}
					color1="mediumseagreen"
					text={i18n.t('orderScreen.View Order')}
					borderRadius={3}
					textColor={colors.white}
					textTransform="uppercase"
					handleClick={() => checkStatus()}
				/>
			</View>
		</View>
	);
};

export default SucessCard;

const styles = StyleSheet.create({
	buttonContainer: {
		padding: 10,
		marginTop: 8
	},
	textTop: {
		paddingLeft: 10,
		textAlign: 'center',
		paddingTop: 10
	},
	theory: {
		color: colors.primary2,
		fontSize: 15
	},
	parent: {
		backgroundColor: colors.white,
		margin: 10
	},
	topContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: colors.white,
		margin: 10,
		borderBottomWidth: 1,
		borderColor: colors.primaryShade23,
		paddingBottom: 20
		// borderWidth:3
	},
	text: {
		color: colors.primary1,
		textTransform: 'uppercase',
		fontWeight: 'bold',
		fontSize: 20
	},
	subHeading: {
		color: colors.primaryShade21,
		fontSize: 14,
		fontWeight: 'bold'
	},
	icon: {
		paddingHorizontal: 12
	}
});
