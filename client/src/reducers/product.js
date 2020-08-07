import {GET_ALL_PRODUCTS, GET_ALL_PRODUCTS_SUCCESS, GET_ALL_PRODUCTS_ERROR} from '../actions';

const initialState = {
    productsList: {
        data: [],
        isLoading: false,
        products: [],
        pages: 0,
        page: 0,
        count: 0
    }
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                productsList: {
                    ...state.productsList,
                    data: [],
                    isLoading: true,
                }
            };
        case GET_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                productsList: {
                    ...state.productsList,
                    ...action.data.data,
                    data: action.data,
                    isLoading: false,
                }
            };
        case GET_ALL_PRODUCTS_ERROR:
            return {
                ...state,
                productsList: {
                    ...initialState.productsList,
                    isLoading: false,
                }
            };
        default:
            return state;
    }
};

export default productReducer;

