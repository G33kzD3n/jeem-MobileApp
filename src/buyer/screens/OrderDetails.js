import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppDivider from '../../common/components/AppDivider';
import AppText from '../../common/components/AppText';
import ComponentHeading from '../../common/components/ComponentHeading';
import colors from '../../config/colors';
import AddressCard from '../components/AddressPageComponents/AddressCard';
import SucessCard from '../components/OrderDetailsComponent/SucessCard';

const data = {
	id: 1,
	name: 'Basit Mir',
	address: 'Naseem Bagh, Habak, Near Masjid yasir',
	locality: 'Naseem Bagh',
	city: 'Srinagar',
	state: 'Jammu & Kashmir',
	pincode: '190006',
	mobile: '9858536852',
};
const OrderDetails = () => {
	return (
		<View>
			<SucessCard />
			<View>
				<ComponentHeading text="ORDER DETAILS" />
				<View style={styles.details}>
					<View style={styles.totalParent}>
						<AppText style={styles.total}>$526</AppText>
						<AppText style={styles.subHeading}>
							Amount due at the time of delivery
						</AppText>
					</View>
					<AppDivider />
					<View style={styles.addressBar}>
						<AddressCard data={data} />
					</View>
				</View>
			</View>
			<View style={styles.note}>
				<AppText style={styles.headText}>
					{`Note: `}
					<AppText style={styles.noteBodyText}>
						We do not demand your banking and credit card details verbally or
						telephonically. Please do not divulge your details to fraudsters and
						imposters falsely claiming to be calling on Jeem's behalf.
					</AppText>
				</AppText>
			</View>
		</View>
	);
};

export default OrderDetails;

const styles = StyleSheet.create({
	note: {
		flexDirection: 'row',
		backgroundColor: colors.white,
		padding: 10,
		margin: 10,
	},
	headText: {
		fontWeight: '300',
		color: colors.primary1,
		fontSize: 15,
	},
	noteBodyText: {
		color: colors.primaryShade22,
		fontSize: 14,
	},
	addressBar: {
		paddingTop: 16,
	},
	totalParent: {
		paddingVertical: 10,
	},
	details: {
		backgroundColor: colors.white,
		padding: 10,
		margin: 10,
	},
	total: {
		fontWeight: 'bold',
		color: colors.primary1,
	},
	subHeading: {
		color: colors.primary2,
		fontSize: 15,
		paddingBottom: 10,
	},
});
