import {put} from 'redux-saga/effects';
import axios from '../../axios-h1';
import * as actions from '../actions/index';

export function* fetchEmployersSaga(action){
    yield put(actions.fetchEmployersStart());
    try{
        let searchQ = encodeURIComponent(String(action.query).toUpperCase());
        const url = `/employers.json?orderBy="employer"&startAt="${searchQ}"&endAt="${searchQ}\uf8ff"&limitToFirst=10`;
        const response = yield axios.get(url);
        let employers = [];
        for(let key in response.data){
            employers.push({...response.data[key], id: key});
        }
        yield put(actions.fetchEmployersSuccess(employers));
    }catch(error){
        yield put(actions.fetchEmployersFail(error.response.data.error));
    }
}

export function* fetchEmployerSaga(action){
    let searchQ = encodeURIComponent(action.employer);
    yield put(actions.fetchEmployerStart());
    try{
        const url = `/employers.json?orderBy="employer"&equalTo="${searchQ}"`;
        const response = yield axios.get(url);
        let employers = [];
        for(let key in response.data){
            employers.push({...response.data[key], id: key});
        }
        if(employers.length > 0){
            yield put(actions.fetchEmployerSuccess(employers[0]));
        }
    }catch(error){
        yield put(actions.fetchEmployerFail(error.response.data.error, searchQ));
    }
}