import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, BackHandler } from 'react-native';
import AppButton from '../../../common/components/AppButton';
import AppText from '../../../common/components/AppText';
import colors from '../../../config/colors';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { placeOrderAction } from '../../../../store/actions';
import {
	PLACE_ORDER,
	REMOVE_PLACE_ORDER
} from '../../../../store/actions/actionTypes';
import Loader from '../../../common/components/Loader';
import i18n from '../../../languages/i18n';

const PlaceOrderBar = ({ scrollViewRef, text, navigationAddress }) => {
	const [loading, setLoading] = useState(false);
	const priceDetails = useSelector(state => state.cart.priceDetails);
	const orderCode = useSelector(state => state.cart.orderCode);

	useEffect(() => {
		if (orderCode) {
			setLoading(false);
			navigation.navigate(navigationAddress, {
				totalPrice: priceDetails.totalDiscountPrice,
				orderCode: orderCode,
				name:i18n.t('appNavigation.ORDER')
			});
		}
		return () => {
			dispatch({ type: REMOVE_PLACE_ORDER });
			BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
		};
	}, [orderCode]);

	const dispatch = useDispatch();
	const navigation = useNavigation();

	const handleBackButton = () => {
		navigation.navigate('Home');
	};

	const handleOrder = () => {
		if (navigationAddress === 'OrderDetails') {
			setLoading(true);
			dispatch(placeOrderAction(PLACE_ORDER));
			BackHandler.addEventListener('hardwareBackPress', handleBackButton);
		} else {
			navigation.navigate(navigationAddress,{name:i18n.t('appNavigation.ADDRESS')});
		}
	};
	return (
		<>
			{loading && <Loader />}
			<View style={styles.parentContainer}>
				<View style={styles.containerLeft}>
					<AppText style={styles.price}>
					{i18n.t('common.SAR')} {priceDetails.totalDiscountPrice.toFixed(2)}
					</AppText>
					<TouchableOpacity
						onPress={() =>
							scrollViewRef.current.scrollToEnd({ animated: true })
						}
					>
						<AppText style={styles.details}>
							{i18n.t('cart.VIEW DETAILS')}
						</AppText>
					</TouchableOpacity>
				</View>
				<View style={styles.containerRight}>
					<AppButton
						color1={colors.primaryShade11}
						color2={colors.primaryShade13}
						text={text}
						borderRadius={3}
						textColor={colors.white}
						paddingText="2%"
						textTransform="uppercase"
						handleClick={() => handleOrder()}
					/>
				</View>
			</View>
		</>
	);
};

export default PlaceOrderBar;

const styles = StyleSheet.create({
	parentContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		// height: '10%',
		padding: 10,
		backgroundColor: colors.white
		// marginBottom: 8,
	},
	containerLeft: { flex: 1 },
	containerRight: {
		flexGrow: 1
	},
	price: {
		color: colors.black,
		fontSize:16
	},
	details: {
		color: 'red',
		fontSize: 12,
		textTransform: 'uppercase',
		fontWeight: 'bold',
		alignSelf:'flex-start'
	}
});
