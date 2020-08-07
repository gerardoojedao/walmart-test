import {all, fork} from 'redux-saga/effects';
import {getProducts} from './product';

function* rootSaga() {
    yield all([fork(getProducts)]);
}

export default rootSaga;
