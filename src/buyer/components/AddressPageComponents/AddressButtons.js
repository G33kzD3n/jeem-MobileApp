import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../../../config/colors';
import AppButton from '../../../common/components/AppButton';
import appAlert from '../../../common/components/appAlert';
import i18n from '../../../languages/i18n';

const AddressButtons = ({ removeAddress }) => {
	// const [deleteAddress, setDeleteAddress] = useState(false);

	const handleDelete = () => {
		appAlert(i18n.t('addresses.DELETE'),i18n.t('addresses.Are you sure you want to delete?'), handleOk);
	};
	const handleOk = () => {
		removeAddress();
		// setDeleteAddress(true);
		// dispatch(deleteAddressAction(DELETE_ADDRESS,id)
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
					handleClick={() => handleDelete()}
				/>
			</View>
			<View style={styles.dataContainer}>
				<AppButton
					color1={colors.white}
					color2={colors.white}
					text={i18n.t('addresses.DELETE')}
					textAlign="left"
					borderRadius={3}
					textColor="red"
					customStyle={styles.button}
					textTransform="uppercase"
					handleClick={() => handleDelete()}
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
		textAlign: 'left'
	},
	addressButtons: {
		flexDirection: 'row',
		backgroundColor: colors.white,
		marginBottom: 6
	},
	leftButton: {
		flex: 1,
		paddingHorizontal: 10,
		// justifyContent: 'center',
		// borderRightWidth: 1,
		borderColor: colors.primaryShade24
	},
	button: {}
});
