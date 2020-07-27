import * as actionTypes from './actionTypes';

export const fetchLocationsStart = () => {
    return {
        type: actionTypes.FETCH_LOCATIONS_START
    };
};

export const fetchLocationsSuccess = (locations) => {
    return {
        type: actionTypes.FETCH_LOCATIONS_SUCCESS,
        locations: locations
    };
};

export const fetchLocationsFail = (err) => {
    return {
        type: actionTypes.FETCH_LOCATIONS_FAIL,
        error: err
    };
};

export const fetchLocationsStop = () => {
    return {
        type: actionTypes.FETCH_LOCATIONS_STOP
    };
};

export const fetchLocations = (searchQuery) => {
    return {
        type: actionTypes.FETCH_LOCATIONS,
        query: searchQuery
    };
};

export const closeLocationsOptionsModal = () => {
    return {
        type: actionTypes.CLOSE_LOCATIONS_OPTIONS_MODAL
    };
};

export const fetchLocation = (loc) => {
    return {
        type: actionTypes.FETCH_LOCATION,
        location: loc
    };
};

export const fetchLocationStart = () => {
    return {
        type: actionTypes.FETCH_LOCATION_START
    };
};

export const fetchLocationSuccess = (locDetails) => {
    return {
        type: actionTypes.FETCH_LOCATION_SUCCESS,
        locationDetails: locDetails
    };
};

export const fetchLocationFail = (err, loc) => {
    return {
        type: actionTypes.FETCH_LOCATION_FAIL,
        error: err,
        errorLocation: loc
    };
};

export const setLocation = (locDetails) => {
    return {
        type: actionTypes.SET_LOCATION,
        locationDetails: locDetails
    };
};