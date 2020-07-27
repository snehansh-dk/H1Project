import React, {useEffect} from 'react';
import Page from '../../hoc/Page/Page';
import Search from '../../components/Search/Search';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../../store/actions/index';
import Location from './Location/Location';
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

const Locations = props => {

  const classes = useStyles();

  const dispatch = useDispatch();
  const open = useSelector(state => state.locations.open);
  const options = useSelector(state => state.locations.options);
  const loading = useSelector(state => state.locations.loading);
  const location = useSelector(state => state.locations.location);
  const error = useSelector(state => state.locations.error);
  const errorLocation = useSelector(state => state.locations.errorLocation);

  useEffect(() => {
    if(props.location.search !== null){
      const queryParams = new URLSearchParams(props.location.search);
      for(let param of queryParams.entries()){
        let paramName = param[0];
        let paramVal = param[1] === undefined ? undefined : (param[1] == null ? null : param[1]);
        if(paramName === constants.location && paramVal !== undefined && paramVal !== null && paramVal.length > 0){
          dispatch(actions.fetchLocation(paramVal));
        }
      }
    }
  }, [dispatch, props.location.search]);

  const onContentChange = event => {
    if(event.target.value.length >= 2){
      dispatch(actions.fetchLocations(event.target.value));
    }else{
      dispatch(actions.fetchLocationsStop());
    }
  }

  const readOptionLabel = option => {
    return option.location
  }

  const onClose = (event, reason) => {
    dispatch(actions.fetchLocationsStop());
  }

  const optionSelected = (option, value) => {
    return option.id === value.id;
  }

  const valueChange = (event, value, reason) => {
    if(reason === 'select-option'){
        dispatch(actions.setLocation(value));
    }
  }

  let errorModal = error === null ? null : <ErrorModal open errorSnippet={constants.location + ' - ' 
  + errorLocation} />;

  const content = (
    <div className={classes.root}>
      {errorModal}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={0}>
            <Search open={open} options={options} loading={loading} optionLabel={readOptionLabel} optionSelected={optionSelected}
              onClose={onClose} change={onContentChange} placeholder='City/State/Zip. Min 2 chars.' valueChange={valueChange} />
          </Paper>
        </Grid>
        { location != null ? 
            <Grid item xs={12}>
                {location != null ? <Location locDetails={location} {...props}/> : null}
            </Grid>
            : null
        }
      </Grid>
    </div>
  );

  return(
      <Auxiliary>
      <Page title={constants.Locations} content={content} />
      </Auxiliary>
  );
}

export default Locations;
