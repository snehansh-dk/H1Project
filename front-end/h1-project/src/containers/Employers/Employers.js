import React, { useEffect, useCallback } from 'react';
import Page from '../../hoc/Page/Page';
import Search from '../../components/Search/Search';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../../store/actions/index';
import Employer from './Employer/Employer';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ErrorModal from '../../hoc/ErrorModal/ErrorModal';
import * as constants from '../../shared/constants';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));

const Employers = props => {

  const classes = useStyles();

  const dispatch = useDispatch();
  const open = useSelector(state => state.employers.open);
  const options = useSelector(state => state.employers.options);
  const loading = useSelector(state => state.employers.loading);
  const employer = useSelector(state => state.employers.employer);
  const error = useSelector(state => state.employers.error);
  const errorEmployer = useSelector(state => state.employers.errorEmployer);

  useEffect(() => {
    if(props.location.search !== null){
      const queryParams = new URLSearchParams(props.location.search);
      for(let param of queryParams.entries()){
        let paramName = param[0];
        let paramVal = param[1] === undefined ? undefined : (param[1] == null ? null : param[1]);
        if(paramName === constants.employer && paramVal !== undefined && paramVal !== null && paramVal.length > 0){
          dispatch(actions.fetchEmployer(paramVal));
        }
      }
    }
  }, [dispatch, props.location.search]);

  const onContentChange = event => {
    if(event.target.value.length >= 2){
      dispatch(actions.fetchEmployers(event.target.value));
    }else{
      dispatch(actions.fetchEmployersStop());
    }
  }

  const readOptionLabel = option => {
    return option.employer
  }

  const onClose = (event, reason) => {
    dispatch(actions.fetchEmployersStop());
  }

  const optionSelected = (option, value) => {
    return option.id === value.id;
  }

  const valueChange = (event, value, reason) => {
    if(reason === 'select-option'){
      dispatch(actions.setEmployer(value));
    }
  }

  const errorModal = useCallback(() => (error === null ? null : <ErrorModal open errorSnippet={constants.employer + ' - ' 
  + errorEmployer} />), [error, errorEmployer]);

  const content = 
    <div className={classes.root}>
      {errorModal}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={0}>
            <Search open={open} options={options} loading={loading} optionLabel={readOptionLabel} optionSelected={optionSelected}
              onClose={onClose} change={onContentChange} placeholder='Employer name. Min 2 chars.' valueChange={valueChange} />
          </Paper>
        </Grid>
        { employer != null ? 
            <Grid item xs={12}>
                {employer != null ? <Employer empDetails={employer} {...props} /> : null}
            </Grid>
            : null
        }
      </Grid>
    </div>
  ;

  return(
      <Auxiliary>
        <Page title={constants.Employers} content={content} />
      </Auxiliary>
  );
}

export default Employers;
