import {call, put, takeEvery} from 'redux-saga/effects';
import * as types from '../types';
import {addCarsAction, addCarsActionError} from "../actions/carActions";
import {fetchMyCars} from "../../api/api";

export function* getCarsSaga() {
    try {
        const cars = yield call(fetchMyCars);
        yield put(addCarsAction(cars));
    } catch (e) {
        yield put(addCarsActionError());
    }
}

export function* watchGetCarsSaga() {
    yield takeEvery(types.START_LOADING_CARS, getCarsSaga)
}

