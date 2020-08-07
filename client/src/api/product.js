import {call, put} from 'redux-saga/effects';
import axios from 'axios';
import * as Actions from '../actions';

export function* GetAllProducts(action) {
    try {
        const response = yield call(axios, {
            method: 'post',
            url: `/product/search`,
            data: action.payload,
        });

        yield put(Actions.getAllProductsSuccess(response.data))
    } catch (e) {
        const message = 'Se ha producido un error al obtener los productos';
        yield put(Actions.getAllProductsError(message));
    }
};
