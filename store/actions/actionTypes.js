// common actionTypes
export const LOGIN = 'LOGIN';
export const REMOVE_LOGIN_ERROR = 'REMOVE_LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';
export const FORGOT_PASSWORD='FORGOT_PASSWORD';
export const CLEAR_FORGOT_PASSWORD='CLEAR_FORGOT_PASSWORD';
export const LOADER = 'LOADER';

//  seller products actionTypes
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const ERROR_RESPONSE = 'ERROR_RESPONSE';
export const GET_SELLER_PRODUCT_CATEGORY = 'GET_SELLER_PRODUCT_CATEGORY';
export const UN_SET_ERROR_RESPONSE = 'UN_SET_ERROR_RESPONSE';

// seller orders actionTypes
export const GET_ORDERS = 'GET_ORDERS';
export const ORDER_STATUS_CHANGE = 'ORDER_STATUS_CHANGE';

// seller carousal actionTypes
export const GET_SELLER_CAROUSALS = 'GET_SELLER_CAROUSALS';
export const GET_SELLER_CAROUSAL = 'GET_SELLER_CAROUSAL';
export const DELETE_SELLER_CAROUSAL = 'DELETE_SELLER_CAROUSAL';
export const ADD_SELLER_CAROUSAL = 'ADD_SELLER_CAROUSAL';
export const UPDATE_SELLER_CAROUSAL = 'UPDATE_SELLER_CAROUSAL';

// seller tags actionTypes
export const GET_TAGS = 'GET_TAGS';
export const GET_TAG = 'GET_TAG';
export const DELETE_TAG = 'DELETE_TAG';
export const ADD_TAG = 'ADD_TAG';
export const UPDATE_TAG = 'UPDATE_TAG';
export const SUCCESS_TAG = 'SUCCESS_TAG';
// export const UNSET_SUCCESS_TAG = "UNSET_SUCCESS_TAG"

export const GET_SELLER_STATS = 'GET_SELLER_STATS';
export const GET_SELLER_PROFILE = 'GET_SELLER_PROFILE';
export const UPDATE_SELLER_PROFILE = 'UPDATE_SELLER_PROFILE';
export const SELLER_PROFILE_SUCCESS = 'SELLER_PROFILE_SUCCESS';

// buyer actionTypes for Home Page
export const CAROUSEL = 'CAROUSEL';
export const SELLER_CATEGORY = 'SELLER_CATEGORY';
export const GET_ALL_TAGS = 'GET_ALL_TAGS';
export const DEALS_OF_THE_DAY = 'DEALS_OF_THE_DAY';
export const BEST_BUYS = 'BEST_BUYS';
export const TOP_TRENDS = 'TOP_TRENDS';
export const FEATURED_PRODUCTS = 'FEATURED_PRODUCTS';
export const GET_SELLER_WITH_TAGS = 'GET_SELLER_WITH_TAGS';
export const REMOVE_SELLER_WITH_TAGS = 'REMOVE_SELLER_WITH_TAGS';
// export const GET_TAGS_PRODUCT = 'GET_TAGS_PRODUCT';

// buyer product category
export const GET_PRODUCT_CATEGORY = 'GET_PRODUCT_CATEGORY';
export const GET_PRODUCT_SUB_CATEGORY = 'GET_PRODUCT_SUB_CATEGORY';
export const GET_PRODUCTS_FOR_BUYER = 'GET_PRODUCTS_FOR_BUYER';
export const GET_SINGLE_PRODUCT_FOR_BUYER = 'GET_SINGLE_PRODUCT_FOR_BUYER';
export const GET_PRODCUTCATEGORY = 'GET_PRODCUTCATEGORY'; //get without passing params
export const GET_PRODUCTSUBCATEGORY = 'GET_PRODUCTSUBCATEGORY'; //get without passing params
export const REMOVE_PRODUCTS_FROM_STORE = 'REMOVE_PRODUCTS_FROM_STORE';
export const CURRENT_LANGUAGE = 'CURRENT_LANGUAGE';
export const GET_REVIEWS_OF_PRODUCT='GET_REVIEWS_OF_PRODUCT';
export const CLEAN_REVIEWS_OF_PRODUCT='CLEAN_REVIEWS_OF_PRODUCT';
export const ADD_REVIEWS_OF_PRODUCT='ADD_REVIEWS_OF_PRODUCT';
export const REMOVE_REVIEWS_OF_PRODUCT='REMOVE_REVIEWS_OF_PRODUCT';

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const ADD_PRODUCT_TO_CART_ERROR = 'ADD_PRODUCT_TO_CART_ERROR';

export const GET_CART_ITEMS = 'GET_CART_ITEMS';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const GET_COUNT = 'GET_COUNT';
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';
export const PRICE_DETAILS = 'PRICE_DETAILS';

export const PLACE_ORDER = 'PLACE_ORDER';
export const REMOVE_PLACE_ORDER = 'REMOVE_PLACE_ORDER';
export const GET_MY_ORDERS = 'GET_MY_ORDERS';
export const CLEAR_GET_MY_ORDERS='CLEAR_GET_MY_ORDERS';
export const CANCEL_ORDER = 'CANCEL_ORDER';
export const CANCEL_ORDER_STATUS = 'CANCEL_ORDER_STATUS';
export const RESET_CART_AFTER_LOGOUT = 'RESET_CART_AFTER_LOGOUT';

export const GET_PROFILE = 'GET_PROFILE';
export const SET_PROFILE = 'SET_PROFILE';
export const PROFILE_ERROR = 'PROFILE_ERROR';
export const EDIT_PROFILE = 'EDIT_PROFILE';
export const HELP_QUERY = 'HELP_QUERY';
export const REMOVE_HELP_QUERY = 'REMOVE_HELP_QUERY';
export const REMOVE_EDIT_PROFILE = 'REMOVE_EDIT_PROFILE';

export const GET_ADDRESSES = 'GET_ADDRESSES';
export const GET_ACTIVE_ADDRESS = 'GET_ACTIVE_ADDRESS';
export const REMOVE_ACTIVE_ADDRESS = 'REMOVE_ACTIVE_ADDRESS';
export const DELETE_ADDRESS = 'DELETE_ADDRESS';
export const ADD_ADDRESS = 'ADD_ADDRESS';
export const REMOVE_ADDRESS_MESSAGE = 'REMOVE_ADDRESS_MESSAGE';


export const GET_CAROUSAL_ITEMS = 'GET_CAROUSAL_ITEMS';
export const GET_CAROUSAL_PRODUCTS = 'GET_CAROUSAL_PRODUCTS';

export const GET_OFFERS = 'GET_OFFERS';
export const SEARCH = 'SEARCH';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export const CLEAR_SIGNUP = 'CLEAR_SIGNUP';
export const REVIEW_ORDER = 'REVIEW_ORDER';

export const GET_SELLER_PRODUCTS = 'GET_SELLER_PRODUCTS';
export const REMOVE_SELLER_PRODUCTS='REMOVE_SELLER_PRODUCTS'