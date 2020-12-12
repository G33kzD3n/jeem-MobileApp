import * as actionTypes from "../actions/actionTypes";

const initalState = {
  tags: null,
  tag: null
};

const tagsReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.GET_TAGS:
      return { ...state, tags: action.value };

    case actionTypes.GET_TAG:
      return { ...state, tag: action.value };

    case actionTypes.DELETE_TAG:
      return {
        ...state,
        delete_response: action.value.message,
        // tags: action.value.tagsData,
      };

    case actionTypes.ADD_TAG:
      return {
        ...state,
        addTag_response: action.value.message,
      };

    case actionTypes.UPDATE_TAG:
      return {
        ...state,
        updateTag_response: action.value.message,
      };
      case actionTypes.SUCCESS_TAG:
        return {
          ...state, addTag_response:action.value
        }

    default:
      return state;
  }
};

export default tagsReducer;
