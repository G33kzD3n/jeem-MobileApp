import * as actionTypes from "../actions/actionTypes";

const initalState = {
  orders: null,
};

const orderssReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.GET_ORDERS:
      return { ...state, orders: action.value };
      case actionTypes.GET_MY_ORDERS:
      return { ...state, myOrders: action.value };
      case actionTypes.CANCEL_ORDER:
        return { ...state, cancelOrders: action.value };
    case actionTypes.ORDER_STATUS_CHANGE:
      return { ...state, orders: { orders:state.orders.orders.map((item) => { 
        return (item.id === action.id) ? {
            ...item,
            orderStatus: action.value
        }: { ...item }
    })}};
    default:
      return state;
  }
};

export default orderssReducer;
