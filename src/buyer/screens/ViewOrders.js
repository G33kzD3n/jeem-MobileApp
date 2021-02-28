import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AppText from '../../common/components/AppText';
import colors from '../../config/colors';
import OrderInfoCards from '../components/OrderDetailsComponent/OrderInfoCards';
import { useSelector, useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { getBuyerOrdersAction } from '../../../store/actions';
import {
	CLEAR_GET_MY_ORDERS,
	GET_MY_ORDERS
} from '../../../store/actions/actionTypes';
import Loader from '../../common/components/Loader';
import i18n from '../../languages/i18n';

const ViewOrders = () => {
	const isFocused = useIsFocused();
	const navigation = useNavigation();

	const [loading, setLoading] = useState(false);

	const myOrders = useSelector(state => state.order && state.order.myOrders);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getBuyerOrdersAction(GET_MY_ORDERS));
		setLoading(true);
	}, [isFocused]);

	useEffect(() => {
		if (myOrders) {
			setLoading(false);
		}
	}, [myOrders]);

	useEffect(() => {
		return () => dispatch({ type: CLEAR_GET_MY_ORDERS });
	}, []);
	const checkStatus = () => {
		// navigation.navigate('ViewOrders');
	};

	const handleBackButton = () => {
		navigation.navigate('Home');
	};

	if (!myOrders) return <Loader />;
	if (myOrders.length === 0) {
		return <NotFound name={i18n.t('orderScreen.No Items')} />;
	}

	return (
		<>
			{loading && <Loader />}
			<ScrollView style={styles.parent}>
				{myOrders.map((order, index) => (
					<View style={styles.parentContainer} key={index}>
						{console.log(order.orderStatus)}
						<View style={styles.topContainer}>
							<MaterialCommunityIcons
								style={styles.icon}
								name={
									order.orderStatus === 'cancelled' ||
									order.orderStatus === 'ملغي'
										? 'close-circle'
										: 'package-variant-closed'
								}
								size={40}
								color={
									order.orderStatus === 'cancelled' ||
									order.orderStatus === 'ملغي'
										? colors.primaryShade22
										: 'mediumseagreen'
								}
							/>
							<View>
								<AppText style={styles.text}>
									{order.orderStatus === 'ordered'
										? 'تم الطلب'
										: order.orderStatus}
								</AppText>
								<AppText style={styles.subHeading}>
									{i18n.t('orderScreen.On')}{' '}
									{new Date(order.created_at).toDateString()}
								</AppText>
							</View>
						</View>
						<OrderInfoCards order={order} />
					</View>
				))}
			</ScrollView>
		</>
	);
};

export default ViewOrders;

const styles = StyleSheet.create({
	parentContainer: {
		backgroundColor: colors.white,
		margin: 10,
		padding: 6,
		marginBottom: 0
	},

	parent: {
		backgroundColor: colors.primaryShade24
	},
	topContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	text: {
		color: colors.primary1,
		textTransform: 'uppercase',
		fontWeight: 'bold',
		fontSize: 17
	},
	subHeading: {
		color: colors.primaryShade21,
		fontSize: 14,
		fontWeight: 'bold'
	},
	icon: {
		paddingHorizontal: 12
	}
});
