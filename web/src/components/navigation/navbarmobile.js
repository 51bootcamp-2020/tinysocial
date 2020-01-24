import {
  AppBar,
  Button,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  Toolbar,
  Typography,
} from '@material-ui/core';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Logo from '../../img/tinysocial-logo.png';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import useStyles from './constant';

function NavBarMobile() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type == 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({...state, [side]: open});
  };

  const sideList = side => (
    <div className={classes.list}
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
      role="presentation">
      <List>
        <a href="/" style={{padding: 20}}>
          <img src={Logo} height="18" width="130"/>
        </a>
      </List>
      <Divider/>
      <List>
        <Grid container
              direction="column">
          <a href="/events" className={classes.listItem}>
            <Typography variant="button" style={{textTransform: 'none'}}>
              Events
            </Typography>
          </a>
          {/* TODO(YoonYeoHwan) : Need to implement About page. Now just linked to landing page. */}
          <a href="/about" className={classes.listItem}>
            <Typography variant="button" style={{textTransform: 'none'}}>
              About
            </Typography>
          </a>
          <a href="/signin" className={classes.listItem}>
            <Typography variant="button" style={{textTransform: 'none'}}>
              Sign in
            </Typography>
          </a>
        </Grid>
      </List>
    </div>
  );

  return (
      <div>
        <BrowserRouter>
          <div className="Navbar">
            <Route path="/"
              render={({location}) => (
                <>
                  <AppBar color="default" position="static">
                    <Toolbar>
                      <Grid container alignItems="center">
                        <Grid item xs={3}>
                          <IconButton aria-label="menu" color="inherit"
                                      edge="start">
                            <Button onClick={toggleDrawer('left', true)}>
                              <MenuIcon/>
                            </Button>
                            <Drawer open={state.left}
                                    onClose={toggleDrawer('left', false)}>
                              {sideList('left')}
                            </Drawer>
                          </IconButton>
                        </Grid>
                        <Grid item justify="center" xs={3}>
                          <a href="/" style={{padding: 20}}>
                            <img src={Logo}/>
                          </a>
                        </Grid>
                        <Grid item xs={3}></Grid>
                      </Grid>
                    </Toolbar>
                  </AppBar>
                </>
              )}
            />
          </div>
        </BrowserRouter>
      </div>
  );
}

export default NavBarMobile;
