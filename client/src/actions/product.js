export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_ALL_PRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS';
export const GET_ALL_PRODUCTS_ERROR = 'GET_ALL_PRODUCTS_ERROR';

export const getAllProducts = (payload) => {
    return {
        type: GET_ALL_PRODUCTS,
        payload,
    }
};

export const getAllProductsSuccess = (data) => {
    return {
        type: GET_ALL_PRODUCTS_SUCCESS,
        data
    }
};

export const getAllProductsError = (error) => {
    return {
        type: GET_ALL_PRODUCTS_ERROR,
        error
    }
};
