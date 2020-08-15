import {put, takeEvery} from 'redux-saga/effects';
import * as types from '../types';
import {addCarsAction} from "../actions/carActions";

function* getCarsSaga() {
    const cars = yield fetch('http://localhost:3002/myCars').then(res => res.json());
    yield put(addCarsAction(cars));
}

export function* watchGetCarsSaga() {
    yield takeEvery(types.START_LOADING_CARS, getCarsSaga)
}

