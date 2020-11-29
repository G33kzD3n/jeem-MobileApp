import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../../config/colors';
import AppButton from '../../../common/components/AppButton';

const AddressButtons = () => {
	return (
		<View style={styles.addressButtons}>
			<View style={styles.leftButton}>
				<AppButton
					color1={colors.white}
					color2={colors.white}
					icon="delete"
					iconColor="tomato"
					borderRadius={3}
					textColor={colors.primary2}
					customStyle={styles.button}
				/>
			</View>
			<View style={styles.dataContainer}>
				<AppButton
					color1={colors.white}
					color2={colors.white}
					text="EDIT"
					borderRadius={3}
					textColor={colors.primary2}
					customStyle={styles.button}
					textTransform="uppercase"
				/>
			</View>
		</View>
	);
};

export default AddressButtons;

const styles = StyleSheet.create({
	dataContainer: {
		// paddingBottom: 5,
		flex: 4,
		//  justifyContent:'space-around'
	},
	addressButtons: {
		flexDirection: 'row',
		backgroundColor: colors.white,
		marginBottom: 6,
	},
	leftButton: {
		flex: 1,
		paddingHorizontal: 10,
		justifyContent: 'center',
		borderRightWidth: 1,
		borderColor: colors.primaryShade24,
	},
});
