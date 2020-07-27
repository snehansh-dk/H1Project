import * as actionTypes from './actionTypes';

export const fetchEmployersStart = () => {
    return {
        type: actionTypes.FETCH_EMPLOYERS_START
    };
};

export const fetchEmployersSuccess = (emps) => {
    return {
        type: actionTypes.FETCH_EMPLOYERS_SUCCESS,
        employers: emps
    };
};

export const fetchEmployersFail = (err) => {
    return {
        type: actionTypes.FETCH_EMPLOYERS_FAIL,
        error: err
    };
};

export const fetchEmployersStop = () => {
    return {
        type: actionTypes.FETCH_EMPLOYERS_STOP
    };
};

export const fetchEmployers = (searchQuery) => {
    return {
        type: actionTypes.FETCH_EMPLOYERS,
        query: searchQuery
    };
};

export const closeEmployersOptionsModal = () => {
    return {
        type: actionTypes.CLOSE_EMPLOYERS_OPTIONS_MODAL
    };
};

export const fetchEmployer = (emp) => {
    return {
        type: actionTypes.FETCH_EMPLOYER,
        employer: emp
    };
};

export const fetchEmployerStart = () => {
    return {
        type: actionTypes.FETCH_EMPLOYER_START
    };
};

export const fetchEmployerSuccess = (empDetails) => {
    return {
        type: actionTypes.FETCH_EMPLOYER_SUCCESS,
        employerDetails: empDetails
    };
};

export const fetchEmployerFail = (err, emp) => {
    return {
        type: actionTypes.FETCH_EMPLOYER_FAIL,
        error: err,
        errorEmployer: emp
    };
};

export const setEmployer = (empDetails) => {
    return {
        type: actionTypes.SET_EMPLOYER,
        employerDetails: empDetails
    };
};