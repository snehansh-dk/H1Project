import {takeLatest} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {fetchEmployersSaga, fetchEmployerSaga} from './employers';
import {fetchLocationsSaga, fetchLocationSaga} from './locations';

export function* watchEmployers() {
    yield takeLatest(actionTypes.FETCH_EMPLOYERS, fetchEmployersSaga);
    yield takeLatest(actionTypes.FETCH_EMPLOYER, fetchEmployerSaga);
}

export function* watchLocations() {
    yield takeLatest(actionTypes.FETCH_LOCATIONS, fetchLocationsSaga);
    yield takeLatest(actionTypes.FETCH_LOCATION, fetchLocationSaga);
}