import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
    open: false,
    options: [],
    loading: false,
    location: null,
    error: null,
    errorLocation: null
}

const fetchLocationsStart = (state, action) => {
    return updateObject(state, {open: true, loading: true, error: null});
}

const fetchLocationsSuccess = (state, action) => {
    return updateObject(state, {options: action.locations, loading: false, open: true, error: null});
}

const fetchLocationsFail = (state, action) => {
    return updateObject(state, {open: false, loading: false, options: [], error: action.error});
}

const fetchLocationsStop = (state, action) => {
    return updateObject(state, {open: false, loading: false, options: []});
}

const closeLocationsOptionsModal = (state, action) => {
    return updateObject(state, {open: false});
}

const fetchLocationStart = (state, action) => {
    return updateObject(state, {location: null, error: null, errorLocation: null});
}

const fetchLocationSuccess = (state, action) => {
    return setLocation(state, action);
}

const setLocation = (state, action) => {
    return updateObject(state, {location: action.locationDetails, error: null, errorLocation: null});
}

const fetchLocationFail = (state, action) => {
    return updateObject(state, {location: null, error: action.error, errorLocation: action.errorLocation});
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.FETCH_LOCATIONS_START): return fetchLocationsStart(state, action);
        case(actionTypes.FETCH_LOCATIONS_SUCCESS): return fetchLocationsSuccess(state, action);
        case(actionTypes.FETCH_LOCATIONS_FAIL): return fetchLocationsFail(state, action);
        case(actionTypes.FETCH_LOCATIONS_STOP): return fetchLocationsStop(state, action);
        case(actionTypes.CLOSE_LOCATIONS_OPTIONS_MODAL): return closeLocationsOptionsModal(state, action);
        case(actionTypes.FETCH_LOCATION_START): return fetchLocationStart(state, action);
        case(actionTypes.FETCH_LOCATION_SUCCESS): return fetchLocationSuccess(state, action);
        case(actionTypes.FETCH_LOCATION_FAIL): return fetchLocationFail(state, action);
        case(actionTypes.SET_LOCATION): return setLocation(state, action);
        default: return state;
    }
}

export default reducer;