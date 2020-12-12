import * as actionTypes from '../actions/actionTypes.js';

const initalState={
    addresses: null,
}

const addressReducer = ( state = initalState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_ADDRESSES: 
            return { ...state, addresses: action.value };
        case actionTypes.DELETE_ADDRESS:
            return { ...state, addresses: state.addresses.filter((item) => { return item.id !== action.id })};
        case actionTypes.ADD_ADDRESS:
                return { ...state, };
        default: return state;
    }
}

export default addressReducer