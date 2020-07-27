import React, { useMemo } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import NavigationItem from './NavigationItem/NavigationItem';
import * as constants from '../../../shared/constants';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const NavigationItems = React.forwardRef((props, ref) => {
    const classes = useStyles();
     
    const listItems = useMemo(() => {
      return(
        [constants.Home, constants.Employers, constants.Locations].map((text) => (
          <NavigationItem name={text} key={text}/>
        ))
      )
    }, []);

    return(
    <div
      ref={ref}
      className={clsx(classes.list)}
      role="presentation"
      onClick={props.click}
      onKeyDown={props.keyDown}
    >
      <List>
        {listItems}
      </List>
    </div>
    );
});

export default NavigationItems;