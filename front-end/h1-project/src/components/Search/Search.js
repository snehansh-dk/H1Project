import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

const Search = props => {

  return (
    <Autocomplete
      id="asynchronous-demo"
      style={{ width: 300 }}
      open={props.open}
      onClose={(event, reason) => props.onClose(event, reason)}
      getOptionSelected={(option, value) => props.optionSelected(option, value)}
      getOptionLabel={option => props.optionLabel(option)}
      options={props.options}
      loading={props.loading}
      onChange={props.valueChange}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={props.placeholder}
          label={props.label}
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {props.loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
          onChange={props.change}
        />
      )}
    />
  );
}

export default Search;