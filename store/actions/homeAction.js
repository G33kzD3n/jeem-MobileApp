import { getCarousel } from "../../api/homeApi.js";
import { getSellerCategory } from "../../api/homeApi.js";
import { getProductCategory } from "../../api/homeApi.js";
import { getProductSubCategory } from "../../api/homeApi.js";
import { getProducts } from "../../api/homeApi.js";
import { getProduct } from "../../api/homeApi.js";
import { getAllTagsWithProducts } from "../../api/homeApi.js";
import { searchProduct } from "../../api/homeApi.js";


export const carouselAction = (type) => {
    return async(dispatch) => {
        const data = await getCarousel();
        dispatch({ type: type, value: data.data });
    };
};

export const sellerCategoryAction = (type) => {
    return async(dispatch) => {
        const data = await getSellerCategory();
        dispatch({ type: type, value: data.data });
    };
};

export const productCategoryAction = (type, val) => {
    return async(dispatch) => {
        if (val !== '') {
            const data = await getProductCategory(val);
            if (data !== undefined) {
                dispatch({ type: type, value: data.data });
            }
        }
    };
};

export const productSubCategoryAction = (type, val) => {
    return async(dispatch) => {
        if (val !== '') {
            const data = await getProductSubCategory(val);
            if (data !== undefined) {
                dispatch({ type: type, value: data.data });
            }
        }
    };
};

export const productsAction = (type, val) => {
    return async(dispatch) => {
        if (val !== '') {
            const data = await getProducts(val);
            // console.log(data.data)
            if (data !== undefined) {
                dispatch({ type: type, value: data.data });
            }
        }
    };
};
export const singleProductAction = (type, val) => {
    return async(dispatch) => {
        if (val !== '') {
            const data = await getProduct(val);
            if (data !== undefined) {
                dispatch({ type: type, value: data.data.data });
            }
        }
    };
};

export const offerAction = (type) => {
    return async(dispatch) => {
      const data = await getAllTagsWithProducts();
      dispatch({ type: type, value: data.data });
    };
  };

export const searchAction = (type, values) => {
    return async(dispatch) => {
        const data = await searchProduct(values);
        dispatch({ type: type, value: data });
    };
};