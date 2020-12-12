import * as actionTypes from "../actions/actionTypes";

const initalState = {
  carousals: null,
  carousal: null
};

const carousalsReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.GET_SELLER_CAROUSALS:
        return { ...state, carousals: action.value };

    case actionTypes.GET_SELLER_CAROUSAL:
        return { ...state, carousal: action.value };

    case actionTypes.DELETE_SELLER_CAROUSAL:
        return {
            ...state,
            delete_response: action.value.message,
            // tags: action.value.tagsData,
        };

    case actionTypes.ADD_SELLER_CAROUSAL:
        return {
            ...state,
            addCarousal_response: action.value.message,
        };

    case actionTypes.UPDATE_SELLER_CAROUSAL:
        return {
            ...state,
            updateCarousal_response: action.value.message,
        };
    case actionTypes.SUCCESS_TAG:
        return {
            ...state, addCarousal_response:action.value
        }

    default:
        return state;
  }
};

export default carousalsReducer;
