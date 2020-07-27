import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: 240,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Page = props => {
  const classes = useStyles();
  const [sideDrawerVisible, setSideDrawerVisible] = React.useState(false);

  const closeDrawer = () => {
      setSideDrawerVisible(false);
  }

  const openDrawer = () => {
      setSideDrawerVisible(true);
  }

  const navItemRef = React.createRef();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" onClick={openDrawer} className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {props.title}
          </Typography>
          <Drawer anchor='left' open={sideDrawerVisible} onClose={closeDrawer}>
            <NavigationItems click={closeDrawer} keyDown={closeDrawer} ref={navItemRef}/>
          </Drawer>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.toolbar} />
          {props.content}
      </main>
    </div>
  );
}

export default Page;