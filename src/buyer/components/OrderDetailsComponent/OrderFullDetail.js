import React, { useState, useEffect } from 'react';
import { StyleSheet,  View, ScrollView, Image } from 'react-native';
import AppText from '../../../common/components/AppText';
import colors from '../../../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppButton from '../../../common/components/AppButton';
import { useSelector, useDispatch } from 'react-redux';
import { cancelBuyerOrdersAction } from '../../../../store/actions';
import {
	CANCEL_ORDER,
	CANCEL_ORDER_STATUS
} from '../../../../store/actions/actionTypes';
import appAlert from '../../../common/components/appAlert';
import Loader from '../../../common/components/Loader';
import { useNavigation } from '@react-navigation/native';
import i18n from '../../../languages/i18n';

const OrderFullDetail = ({ route }) => {
	const { order } = route.params;
	const navigation = useNavigation();
	const [loading, setLoading] = useState(false);
	const address = JSON.parse(order.orderShippingAddress);
	const myOrdersStatus = useSelector(
		state => state.order && state.order.cancelOrders
	);
	useEffect(() => {
		if (myOrdersStatus) {
			setLoading(false);
			dispatch({ type: CANCEL_ORDER_STATUS });
			navigation.goBack();
		}
	}, [myOrdersStatus]);

	// console.log(myOrdersStatus);
	const dispatch = useDispatch();
	const handleCancel = id => {
		// console.log(id,'idddd');
		appAlert(i18n.t('orderScreen.CANCEL'),i18n.t('orderScreen.Are you sure you want to cancel this order?'), () =>
			handleOk(id)
		);
	};
	const handleOk = id => {
		dispatch(cancelBuyerOrdersAction(CANCEL_ORDER, id));
		setLoading(true);
	};

	const handleReview = order => {
		navigation.navigate('AddReview', { order: order });
	};

	return (
		<>
			{loading && <Loader />}
			<ScrollView style={styles.parent}>
				<View style={styles.child1}>
					<Image source={{ uri: order.productImage }} style={styles.image} />
					<AppText style={styles.heading}>{order.productName}</AppText>
					<AppText style={styles.subHeading}>{order.productAddInfo}</AppText>
					<View style={styles.priceContainer}>
						<AppText style={{ color: colors.primary2, fontSize: 12 }}>
						 {i18n.t('orderScreen.Sold by:')}
						</AppText>
						<AppText
							style={{
								color: colors.primary1,
								fontSize: 12,
								alignSelf: 'center'
							}}
						>
							{' '}
							{order.seller}
						</AppText>
					</View>
				</View>
				<View style={styles.topContainer}>
					<View style={styles.orderStatus1}>
						<MaterialCommunityIcons
							style={styles.icon}
							name={
								order.orderStatus === 'cancelled'
									? 'close-circle'
									: 'package-variant-closed'
							}
							size={40}
							color={
								order.orderStatus === 'cancelled'
									? colors.primaryShade22
									: 'mediumseagreen'
							}
						/>
						<View>
							<AppText style={styles.text}>{order.orderStatus}</AppText>
							<AppText style={styles.subHeading}>
								{i18n.t('orderScreen.On')} {new Date(order.created_at).toDateString()}
							</AppText>
						</View>
					</View>
					{order.orderStatus !== 'cancelled' && (
						<View style={styles.orderStatus2}>
							<AppButton
								color1={colors.primaryShade11}
								color2={colors.primaryShade13}
								text={i18n.t('orderScreen.Cancel Order')}
								borderRadius={3}
								textColor={colors.white}
								paddingText="1%"
								textTransform="uppercase"
								handleClick={() => handleCancel(order.id)}
							/>
						</View>
					)}
				</View>
				<View style={styles.parentContainer}>
					<View style={styles.container}>
						<AppText style={styles.total}>{i18n.t('orderScreen.Total Order Price')}</AppText>
						<AppText style={styles.total}>${order.orderPrice}</AppText>
					</View>
					<AppText style={styles.subHeading}>
					{i18n.t('orderScreen.You saved')} ${order.orderDiscount} {i18n.t('orderScreen.on this order')}
					</AppText>
				</View>
				<View style={styles.newView}>
					<AppText style={[styles.total, { paddingBottom: 6 }]}>
					{i18n.t('orderScreen.Updates sent to')}
					</AppText>
					<View style={styles.contactInfo}>
						<MaterialCommunityIcons
							style={styles.contactIcon}
							name={'phone'}
							size={20}
							color={colors.primaryShade22}
						/>
						<AppText style={styles.subHeading}>{address.phonenumber}</AppText>
					</View>
					<View style={styles.contactInfo}>
						<MaterialCommunityIcons
							style={styles.contactIcon}
							name={'email'}
							size={20}
							color={colors.primaryShade22}
						/>
						<AppText
							style={[styles.subHeading, { textTransform: 'lowercase' }]}
						>
							{address.email}
						</AppText>
					</View>
				</View>
				<View style={styles.newView}>
					<AppText style={[styles.subHeading, { textTransform: 'uppercase' }]}>
					{i18n.t('orderScreen.ORDER ID')} {order.orderCode}
					</AppText>
				</View>
				{order.orderStatus === 'delivered' && (
					<View style={styles.appButton}>
						<AppButton
							color1={colors.primaryShade11}
							color2={colors.primaryShade13}
							text={i18n.t('orderScreen.REVIEW ORDER')}
							borderRadius={3}
							textColor={colors.white}
							textTransform="uppercase"
							handleClick={() => handleReview(order)}
						/>
					</View>
				)}
			</ScrollView>
		</>
	);
};

export default OrderFullDetail;

const styles = StyleSheet.create({
	appButton: {
		padding: 5,
		backgroundColor: colors.primaryShade24
	},
	contactIcon: {
		paddingRight: 6
	},
	contactInfo: {
		flexDirection: 'row'
	},
	newView: {
		marginTop: 8,
		padding: 10,
		backgroundColor: colors.white
	},
	parentContainer: {
		backgroundColor: colors.white,

		padding: 10,
		marginTop: 8
	},
	total: {
		color: colors.primary1,
		fontWeight: 'bold'
	},
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingBottom: 5
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
	topContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: colors.white,
		paddingVertical: 20,
		paddingHorizontal: 10,
		flex: 1
	},
	orderStatus1: {
		alignItems: 'center',
		flexDirection: 'row',
		flex: 2
	},
	orderStatus2: {
		// borderColor:'red',
		// borderWidth:10
		flex: 1,
		alignItems: 'center'
	},
	icon: {
		paddingHorizontal: 12
	},
	image: {
		height: 200,
		width: 150,
		alignSelf: 'center'
	},
	parent: {
		backgroundColor: colors.primaryShade24
	},
	child1: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 45
		// borderColor: 'red',
		// borderWidth: 3,
	},
	child2: {
		flex: 1
	},
	heading: {
		color: colors.primary1,
		fontSize: 18,
		fontWeight: 'bold',
		paddingBottom: 2,
		paddingTop: 8
	},
	subHeading: {
		color: colors.primary2,
		fontSize: 16,
		paddingBottom: 2
	},
	priceContainer: {
		flexDirection: 'row'
		// alignItems:'center'
	}
});
