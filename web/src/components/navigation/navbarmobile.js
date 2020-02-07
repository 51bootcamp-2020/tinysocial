import {
  AppBar,
  Avatar,
  Button,
  Divider,
  Drawer,
  Grid,
  List,
  Toolbar,
  Typography,
} from '@material-ui/core';
import {
  Link,
  withRouter,
} from 'react-router-dom';
import Logo from '../../img/tinysocial-logo.png';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import useStyles from './constant';

function NavBarMobile(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const {profilepic, loggedIn} = props;

  const toggleDrawer = (side, open) => (event) => {
    if (event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({...state, [side]: open});
  };

  const sideList = (side) => (
    <div className={classes.list}
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
      role='presentation'>
      <List>
        <Link to="/" style={{padding: 20}}>
          <img alt='logo' src={Logo}/>
        </Link>
      </List>
      <Divider/>
      <List>
        <Grid container
          direction='column'>
          <Link to='/eventlist' className={classes.listItem}>
            <Typography variant='button' style={{textTransform: 'none'}}>
              Events
            </Typography>
          </Link>
          {/* TODO(YoonYeoHwan) : Need to implement About page. */}
          <Link to='/about' className={classes.listItem}>
            <Typography variant='button' style={{textTransform: 'none'}}>
              About
            </Typography>
          </Link>
          {loggedIn ?
            (
              <Link to='/signout' className={classes.listItem}>
                <Typography variant='button' style={{textTransform: 'none'}}>
                  Sign Out
                </Typography>
              </Link>
            ) :
            (
              <Link to='/signin' className={classes.listItem}>
                <Typography variant='button' style={{textTransform: 'none'}}>
                  Sign In
                </Typography>
              </Link>
            )
          }
        </Grid>
      </List>
    </div>
  );

  return (
    <div className='Navbar'>
      <AppBar color='default' position='sticky'>
        <Toolbar>
          <Grid container
            direction='row'
            alignItems='center'
            justify='space-between'>
            <Grid item xs>
              <Button onClick={toggleDrawer('left', true)}>
                <MenuIcon/>
              </Button>
              <Drawer open={state.left}
                onClose={toggleDrawer('left', false)}>
                {sideList('left')}
              </Drawer>
            </Grid>
            <Grid item>
              <Link to='/' style={{padding: 20}}>
                <img alt='logo' src={Logo}/>
              </Link>
            </Grid>
            <Grid item xs align='right'>
              {loggedIn &&
                <Link to='/userpage'>
                  <Avatar alt='profile' src={profilepic}/>
                </Link>
              }
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(NavBarMobile);
