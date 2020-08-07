import {takeLatest} from 'redux-saga/effects';
import * as Actions from '../actions';
import * as Api from '../api';

export function* getProducts() {
    yield takeLatest(Actions.GET_ALL_PRODUCTS, Api.GetAllProducts);
}
