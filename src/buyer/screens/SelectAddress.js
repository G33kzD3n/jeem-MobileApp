import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	ScrollView,
	View,
	TouchableWithoutFeedback,
} from 'react-native';
import colors from '../../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppButton from '../../common/components/AppButton';
import AddressCard from '../components/AddressPageComponents/AddressCard';
import ComponentHeading from '../../common/components/ComponentHeading';
import AddressButtons from '../components/AddressPageComponents/AddressButtons';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { addressesAction, deleteAddressAction } from '../../../store/actions';
import {
	DELETE_ADDRESS,
	GET_ADDRESSES,
} from '../../../store/actions/actionTypes';
import Loader from '../../common/components/Loader';

const SelectAddress = () => {
	const [selectedItem, onSelectedItem] = useState(0);
	const [loading, setLoading] = useState(false);
	const navigation = useNavigation();

	const getAddresses = useSelector((state) => state.address.addresses);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(addressesAction(GET_ADDRESSES)); //get called if the user refreshes the page to get data
	}, []);

	useEffect(() => {
		if (getAddresses) {
			setLoading(false);
		}
	}, [getAddresses]);

	const handlePayment = () => {
		navigation.navigate('Payments');
	};
	const addAddress = () => {
		navigation.navigate('AddAddress');
	};

	const removeAddress = (id) => {
		// console.log(id, '>>>>');
		setLoading(true);
		dispatch(deleteAddressAction(DELETE_ADDRESS, id));
	};
	if (getAddresses.length === 0)
		//means data not yet retreived
		return <Loader />;

	return (
		<>
			{loading && <Loader />}
			<ScrollView style={{ backgroundColor: colors.primaryShade24 }}>
				<View style={styles.addAdressContainer}>
					<View style={styles.addAdress}>
						<AppButton
							color1={colors.white}
							color2={colors.white}
							text="Add New Address"
							textColor={colors.primary1}
							paddingVertical="2.5%"
							textTransform="uppercase"
							handleClick={addAddress}
						/>
					</View>
				</View>
				<ComponentHeading text="SELECT ADDRESS" />
				{getAddresses.map((item, index) => (
					<React.Fragment key={index}>
						<TouchableWithoutFeedback onPress={() => onSelectedItem(index)}>
							<View style={styles.topContainer}>
								<View style={styles.cartImage}>
									<MaterialCommunityIcons
										name={
											selectedItem === index
												? 'radiobox-marked'
												: 'radiobox-blank'
										}
										size={24}
										color={colors.primary1}
									/>
								</View>
								<View style={styles.dataContainer}>
									<AddressCard data={item} />
								</View>
							</View>
						</TouchableWithoutFeedback>
						<AddressButtons removeAddress={() => removeAddress(item.id)} />
					</React.Fragment>
				))}
			</ScrollView>
			<View style={styles.appButton}>
				<AppButton
					color1={colors.primaryShade11}
					color2={colors.primaryShade13}
					text="CONFIRM"
					borderRadius={3}
					textColor={colors.white}
					textTransform="uppercase"
					handleClick={() => handlePayment()}
				/>
			</View>
		</>
	);
};

export default SelectAddress;

const styles = StyleSheet.create({
	topContainer: {
		backgroundColor: colors.white,
		marginBottom: 1,
		flexDirection: 'row',
		flex: 1,
		// height: 150,
		borderColor: 'red',
		padding: 10,
		justifyContent: 'space-evenly',
	},
	cartImage: {
		flex: 1,
		paddingRight: 10,
		alignItems: 'center',
		justifyContent: 'center',
		// borderColor: colors.primary1,
		// borderWidth: 1,
	},
	dataContainer: {
		// paddingBottom: 5,
		flex: 4,
		//  justifyContent:'space-around'
	},
	addAdressContainer: {
		padding: 10,
		backgroundColor: colors.white,
	},
	addAdress: {
		borderColor: colors.primary1,
		borderWidth: 1,
		borderRadius: 3,
	},
	appButton: {
		padding: 5,
		backgroundColor: colors.white,
	},
});
