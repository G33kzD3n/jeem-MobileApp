import * as actionTypes from '../actions/actionTypes.js';

const initalState={
    profileStatus: null,
    error: false,
    data: null
}

const profileReducer = ( state = initalState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_PROFILE: 
            return { ...state, data:action.value, error:false};
        case actionTypes.SET_PROFILE: 
            return { ...state, data:action.value, error:false};
        case actionTypes.PROFILE_ERROR:
            return { ...state, login: null, data:action.value, error:false };
        default: return state;
    }
}

export default profileReducer