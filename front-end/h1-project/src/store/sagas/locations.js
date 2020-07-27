import {put} from 'redux-saga/effects';
import axios from '../../axios-h1';
import * as actions from '../actions/index';

export function* fetchLocationsSaga(action){
    yield put(actions.fetchLocationsStart());
    try{
        let searchQ = encodeURIComponent(String(action.query).toUpperCase());
        const url = `/locations.json?orderBy="location"&startAt="${searchQ}"&endAt="${searchQ}\uf8ff"&limitToFirst=10`;
        const response = yield axios.get(url);
        let locations = [];
        for(let key in response.data){
            locations.push({...response.data[key], id: key});
        }
        yield put(actions.fetchLocationsSuccess(locations));
    }catch(error){
        yield put(actions.fetchLocationsFail(error.response.data.error));
    }
}

export function* fetchLocationSaga(action){
    let searchQ = encodeURIComponent(action.location);
    yield put(actions.fetchLocationStart());
    try{
        const url = `/locations.json?orderBy="location"&equalTo="${searchQ}"`;
        const response = yield axios.get(url);
        let locations = [];
        for(let key in response.data){
            locations.push({...response.data[key], id: key});
        }
        if(locations.length > 0){
            yield put(actions.fetchLocationSuccess(locations[0]));
        }
    }catch(error){
        yield put(actions.fetchLocationFail(error.response.data.error, searchQ));
    }
}