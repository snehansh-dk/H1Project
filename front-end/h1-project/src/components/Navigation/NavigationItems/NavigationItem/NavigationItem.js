import React from 'react';
import {NavLink} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import WorkIcon from '@material-ui/icons/Work';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import HomeIcon from '@material-ui/icons/Home';
import * as constants from '../../../../shared/constants';
import * as Paths from '../../../../shared/Paths';

const NavigationItem = props => {

    let icon = null;
    let url = props.name.toLowerCase();
    switch(props.name) {
        case constants.Employers : 
            icon = <WorkIcon />; 
            break;
        case constants.Locations :
            icon = <LocationSearchingIcon />;
            break;
        case constants.Home :
            icon = <HomeIcon />;
            url=Paths.home;
            break;
        default:
            icon = <HomeIcon />;
            url=Paths.home;
    };

    const CustomLink = props => <NavLink to={url} {...props} />;

    return(
        <ListItem button key={props.name} component={CustomLink}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={props.name} />
        </ListItem>
    )
}

export default NavigationItem;