import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	ScrollView,
	View,
	TouchableWithoutFeedback
} from 'react-native';
import colors from '../../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppButton from '../../common/components/AppButton';
import AddressCard from '../components/AddressPageComponents/AddressCard';
import ComponentHeading from '../../common/components/ComponentHeading';
import AddressButtons from '../components/AddressPageComponents/AddressButtons';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import {
	addAddressAction,
	addressesAction,
	deleteAddressAction
} from '../../../store/actions';
import {
	ADD_ADDRESS,
	DELETE_ADDRESS,
	GET_ADDRESSES,
	REMOVE_ADDRESS_MESSAGE
} from '../../../store/actions/actionTypes';
import Loader from '../../common/components/Loader';
import appAlert from '../../common/components/appAlert';
import i18n from '../../languages/i18n';

const SelectAddress = () => {
	// const [selectedItem, onSelectedItem] = useState(0);
	const [loading, setLoading] = useState(false);
	const navigation = useNavigation();

	const getAddresses = useSelector(state => state.address.addresses);
	const response = useSelector(state => state.address.message);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(addressesAction(GET_ADDRESSES)); //get called if the user refreshes the page to get data
	}, []);

	useEffect(() => {
		//response for updating  address
		if (response) {
			setLoading(false);
			dispatch({ type: REMOVE_ADDRESS_MESSAGE });
		}
	}, [response]);

	useEffect(() => {
		if (getAddresses) {
			setLoading(false);
		}
	}, [getAddresses]);

	const handlePayment = () => {
		navigation.navigate('Payments',{name:i18n.t('appNavigation.PAYMENT')});
	};
	const addAddress = () => {
		  if(getAddresses.length>=3){
				appAlert(i18n.t('addresses.ALERT'),i18n.t('addresses.Please remove one of the addresses and try again'));
			}else{
		    navigation.navigate('AddAddress',{name:i18n.t('appNavigation.ADD ADDRESS')});
			}
	};

	const removeAddress = item => {
		if (item.isActive) {
			appAlert(i18n.t('addresses.ALERT'),i18n.t('addresses.Please deselect the address and try again'));
		} else {
			setLoading(true);
			dispatch(deleteAddressAction(DELETE_ADDRESS, item.id));
		}
	};

	const handleAddressChange = item => {
		setLoading(true);
		dispatch(addAddressAction(ADD_ADDRESS, { id: item.id }));
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
							text={i18n.t('addresses.Add New Address')}
							textColor={colors.primary1}
							paddingVertical="2.5%"
							textTransform="uppercase"
							handleClick={addAddress}
						/>
					</View>
				</View>
				<ComponentHeading text={i18n.t('addresses.SELECT ADDRESS')} />
				{getAddresses.map((item, index) => (
					<React.Fragment key={index}>
						<TouchableWithoutFeedback onPress={() => handleAddressChange(item)}>
							<View style={styles.topContainer}>
								<View style={styles.cartImage}>
									<MaterialCommunityIcons
										name={item.isActive ? 'radiobox-marked' : 'radiobox-blank'}
										size={24}
										color={colors.primary1}
									/>
								</View>
								<View style={styles.dataContainer}>
									<AddressCard data={item} />
								</View>
							</View>
						</TouchableWithoutFeedback>
						<AddressButtons removeAddress={() => removeAddress(item)} />
					</React.Fragment>
				))}
			</ScrollView>
			<View style={styles.appButton}>
				<AppButton
					color1={colors.primaryShade11}
					color2={colors.primaryShade13}
					text={i18n.t('addresses.CONFIRM')}
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
		justifyContent: 'space-evenly'
	},
	cartImage: {
		flex: 1,
		paddingRight: 10,
		alignItems: 'center',
		justifyContent: 'center'
		// borderColor: colors.primary1,
		// borderWidth: 1,
	},
	dataContainer: {
		// paddingBottom: 5,
		flex: 4
		//  justifyContent:'space-around'
	},
	addAdressContainer: {
		padding: 10,
		backgroundColor: colors.white
	},
	addAdress: {
		borderColor: colors.primary1,
		borderWidth: 1,
		borderRadius: 3
	},
	appButton: {
		padding: 5,
		backgroundColor: colors.white
	}
});
