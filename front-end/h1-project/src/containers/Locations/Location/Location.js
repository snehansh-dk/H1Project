import React from 'react';
import SearchResults from '../../../components/SearchResults/SearchResults';
import * as constants from '../../../shared/constants';

const Location = (props) => {

  return ( 
      <SearchResults sortID={constants.employer} listTitle="Employer" rows={props.locDetails.employers} 
      title={props.locDetails.location} {...props}/>
  );
}

export default Location;