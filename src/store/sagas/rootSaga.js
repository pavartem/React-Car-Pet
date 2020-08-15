import {all} from 'redux-saga/effects';
import {watchGetCarsSaga} from "./cars";


export default function* rootSaga() {
    yield all([
        watchGetCarsSaga(),
    ])
}
