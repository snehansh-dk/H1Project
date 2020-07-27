import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
    open: false,
    options: [],
    loading: false,
    employer: null,
    error: null,
    errorEmployer: null
}

const fetchEmployersStart = (state, action) => {
    return updateObject(state, {open: true, loading: true, error: null});
}

const fetchEmployersSuccess = (state, action) => {
    return updateObject(state, {options: action.employers, loading: false, open: true, error: null});
}

const fetchEmployersFail = (state, action) => {
    return updateObject(state, {open: false, loading: false, options: [], error: action.error});
}

const fetchEmployersStop = (state, action) => {
    return updateObject(state, {open: false, loading: false, options: []});
}

const closeEmployersOptionsModal = (state, action) => {
    return updateObject(state, {open: false});
}

const fetchEmployerStart = (state, action) => {
    return updateObject(state, {employer: null, error: null, errorEmployer: null});
}

const fetchEmployerSuccess = (state, action) => {
    return setEmployer(state, action);
}

const setEmployer = (state, action) => {
    return updateObject(state, {employer: action.employerDetails, error: null, errorEmployer: null});
}

const fetchEmployerFail = (state, action) => {
    return updateObject(state, {employer: null, error: action.error, errorEmployer: action.errorEmployer});
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.FETCH_EMPLOYERS_START): return fetchEmployersStart(state, action);
        case(actionTypes.FETCH_EMPLOYERS_SUCCESS): return fetchEmployersSuccess(state, action);
        case(actionTypes.FETCH_EMPLOYERS_FAIL): return fetchEmployersFail(state, action);
        case(actionTypes.FETCH_EMPLOYERS_STOP): return fetchEmployersStop(state, action);
        case(actionTypes.CLOSE_EMPLOYERS_OPTIONS_MODAL): return closeEmployersOptionsModal(state, action);
        case(actionTypes.FETCH_EMPLOYER_START): return fetchEmployerStart(state, action);
        case(actionTypes.FETCH_EMPLOYER_SUCCESS): return fetchEmployerSuccess(state, action);
        case(actionTypes.FETCH_EMPLOYER_FAIL): return fetchEmployerFail(state, action);
        case(actionTypes.SET_EMPLOYER): return setEmployer(state, action);
        default: return state;
    }
}

export default reducer;