import React from 'react';
import Page from '../../hoc/Page/Page';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import HomeCard from '../../components/UI/HomeCard/HomeCard';
import * as constants from '../../shared/constants';
import * as Paths from '../../shared/Paths';

const Home = props => {

    const employerClickHandler = () => {
        props.history.push(Paths.employers);
    }

    const locationClickHandler = () => {
        props.history.push(Paths.locations);
    }

    const content =
    <Auxiliary>
        <HomeCard cardTitle={constants.Employers} cardDescription="Search employers who worked with H1 visas in 2019."
            buttonText="Employer search" click={employerClickHandler} />
        <br/>
        <HomeCard cardTitle={constants.Locations} cardDescription="Search locations for which H1 visas were filed in 2019."
            buttonText="Location search" click={locationClickHandler} />
    </Auxiliary> 
    ;

    return(
        <Page title='Home' content={content}/>
    );
}

export default Home;