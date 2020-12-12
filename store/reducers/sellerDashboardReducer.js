import * as actionTypes from "../actions/actionTypes";

const initalState = {
  seller_stats : null,
  seller_profile : null
};

const sellerDashboardReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.GET_SELLER_STATS:
      return { ...state, seller_stats: action.value };
    case actionTypes.GET_SELLER_PROFILE:
      return { ...state, seller_profile: action.value };
    case actionTypes.UPDATE_SELLER_PROFILE:
      return { ...state, seller_profile: action.value };
    default:
      return state;
  }
};

export default sellerDashboardReducer;
