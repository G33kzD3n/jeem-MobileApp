import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppText from '../../../common/components/AppText';
import colors from '../../../config/colors';
import i18n from '../../../languages/i18n';

const AddressCard = ({ data }) => {
	return (
		<>
			<AppText style={styles.heading}>{data.name}</AppText>
			<AppText style={styles.subHeading}>{data.address}</AppText>
			<AppText style={styles.subHeading}>({data.address1})</AppText>
			<AppText style={styles.subHeading}>
				{data.city}, {data.state}, {data.pincode}
			</AppText>

			{/* <AppText style={styles.taxesMessage}>inclusive of all taxes</AppText> */}
			<View style={styles.priceContainer}>
				<AppText style={{ color: colors.primary2, fontSize: 14 }}>
					{i18n.t('addresses.Mobile:')}
					<AppText
					style={{
						color: colors.primary1,
						fontSize: 14,
						alignSelf: 'center',
						fontWeight: 'bold'
					}}
				>
					{` ${data.phoneNumber}`}
					{/* {data.mobile} */}
				</AppText>
				</AppText>
			</View>
		</>
	);
};
export default AddressCard;

const styles = StyleSheet.create({
	heading: {
		color: colors.primary1,
		fontSize: 18,
		fontWeight: 'bold',
		paddingBottom: 2
	},
	subHeading: {
		color: colors.primary2,
		fontSize: 14,
		paddingBottom: 2
	},
	priceContainer: {
		flexDirection: 'row',
		paddingTop: 7
		// alignItems:'center'
	}
});
