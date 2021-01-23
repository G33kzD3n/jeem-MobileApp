import { sellerOrders, updateShipmentStatus } from '../../api/sellerOrdersApi';
import { cancelOrder, myOrders } from '../../api/homeApi';

export const getBuyerOrdersAction = type => {
	return async dispatch => {
		const data = await myOrders();
		dispatch({ type: type, value: data.data });
	};
};

export const cancelBuyerOrdersAction = (type, id) => {
	return async dispatch => {
		const data = await cancelOrder(id);
		dispatch({ type: type, value: data.data.message });
	};
};

export const getOrdersAction = (type, value) => {
	return async dispatch => {
		const response = await sellerOrders();
		if (response.status === 200) {
			dispatch({
				type: type,
				value: response.data
			});
		} else {
			dispatch({
				type: type,
				value: {
					message: 'Something went wrong'
				}
			});
		}
	};
};

export const updateOrderStatusAction = (
	type,
	order_id,
	value,
	callback,
	error
) => {
	return async dispatch => {
		const response = await updateShipmentStatus(order_id, { data: value });
		if (response.status === 200) {
			dispatch({ type: type, value: value, id: order_id });
			callback(response.data);
		} else {
			error(response.error);
		}
	};
};
