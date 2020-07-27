import React from 'react';
import SearchResults from '../../../components/SearchResults/SearchResults';

const Employer = (props) => {

  return (
      <SearchResults sortID="locationString" listTitle="Location" 
      rows={props.empDetails.locations} title={props.empDetails.employer} {...props}/>
  );
}

export default Employer;