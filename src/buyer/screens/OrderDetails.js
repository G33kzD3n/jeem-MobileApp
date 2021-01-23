import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import AppDivider from '../../common/components/AppDivider';
import AppText from '../../common/components/AppText';
import ComponentHeading from '../../common/components/ComponentHeading';
import colors from '../../config/colors';
import AddressCard from '../components/AddressPageComponents/AddressCard';
import SucessCard from '../components/OrderDetailsComponent/SucessCard';
import { useSelector, useDispatch } from 'react-redux';
import { activeAddressesAction } from '../../../store/actions/addressesAction';
import {
	GET_ACTIVE_ADDRESS,
	REMOVE_ACTIVE_ADDRESS
} from '../../../store/actions/actionTypes';
import Loader from '../../common/components/Loader';

const OrderDetails = ({ route }) => {
	const { totalPrice, orderCode } = route.params;

	const currentAddress = useSelector(state => state.address.activeAddress);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(activeAddressesAction(GET_ACTIVE_ADDRESS)); //get called if the user refreshes the page to get data
		return () => dispatch({ type: REMOVE_ACTIVE_ADDRESS });
	}, []);

	if (!currentAddress)
		return (
			<>
				<Loader />
			</>
		);

	return (
		<View>
			<SucessCard orderCode={orderCode} />
			<View>
				<ComponentHeading text="ORDER DETAILS" />
				<View style={styles.details}>
					<View style={styles.totalParent}>
						<AppText style={styles.total}>$ {totalPrice}</AppText>
						<AppText style={styles.subHeading}>
							Amount due at the time of delivery
						</AppText>
					</View>
					<AppDivider />
					<View style={styles.addressBar}>
						<AddressCard data={currentAddress} />
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
		margin: 10
	},
	headText: {
		fontWeight: '300',
		color: colors.primary1,
		fontSize: 15
	},
	noteBodyText: {
		color: colors.primaryShade22,
		fontSize: 14
	},
	addressBar: {
		paddingTop: 16
	},
	totalParent: {
		paddingVertical: 10
	},
	details: {
		backgroundColor: colors.white,
		padding: 10,
		margin: 10
	},
	total: {
		fontWeight: 'bold',
		color: colors.primary1
	},
	subHeading: {
		color: colors.primary2,
		fontSize: 15,
		paddingBottom: 10
	}
});
