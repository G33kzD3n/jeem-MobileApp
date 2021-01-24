import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import AppDivider from '../../../common/components/AppDivider';
import AppText from '../../../common/components/AppText';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../../config/colors';
import i18n from '../../../languages/i18n';

const PaymentOptions = () => {
	return (
		<View>
			<AppDivider />
			<TouchableOpacity style={styles.container}>
				<View style={styles.innerContainer}>
					<MaterialCommunityIcons
						name={'radiobox-marked'}
						size={24}
						color={colors.primary1}
					/>
					<AppText style={styles.text}>{i18n.t('paymentScreen.Pay on delivery')}</AppText>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default PaymentOptions;

const styles = StyleSheet.create({
	innerContainer: {
		flexDirection: 'row',
		paddingLeft: 40
	},
	container: {
		backgroundColor: colors.white,
		height: 40,
		// borderColor:'red',
		// borderWidth:3,
		justifyContent: 'center'
		// paddingLeft: 18,
	},
	text: {
		color: colors.primary1,
		textTransform: 'uppercase',
		fontSize: 14,
		paddingLeft: 22
	}
});
