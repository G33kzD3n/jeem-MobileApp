import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppButton from '../../../common/components/AppButton';
import colors from '../../../config/colors';
import i18n from '../../../languages/i18n';

const ProductButtons = ({ handleClick }) => {
	return (
		<View style={styles.topContainer}>
			<AppButton
				color1={colors.white}
				color2={colors.white}
				text={i18n.t('cart.REMOVE')}
				borderRadius={3}
				textColor={colors.primary2}
				customStyle={styles.button}
				textTransform="uppercase"
				handleClick={handleClick}
			/>
		</View>

		// <TouchableOpacity onPress={() => console.log('remove')} >
		// 	<Text>Buttom</Text>
		// </TouchableOpacity>
	);
};

export default ProductButtons;

const styles = StyleSheet.create({
	topContainer: {
		// marginBottom: 8,
	},
});
