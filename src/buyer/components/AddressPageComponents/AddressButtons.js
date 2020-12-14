import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../../config/colors';
import AppButton from '../../../common/components/AppButton';
import appAlert from '../../../common/components/appAlert';

const AddressButtons = () => {
	const [deleteAddress, setDeleteAddress] = useState(false);

	const handleDelete = () => {
		appAlert('DELETE', 'Are you sure you want to delete?', setDeleteAddress);
	};
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
					handleClick={handleDelete}
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
