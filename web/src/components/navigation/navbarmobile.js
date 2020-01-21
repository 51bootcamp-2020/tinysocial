import React from 'react';
import Logo from '../../img/tinysocial-logo.png';
import MenuIcon from '@material-ui/icons/Menu';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Grid,
  IconButton,
  Drawer,
  List,
  Divider,
  Button,
  Typography,
} from '@material-ui/core';
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
          role="presentation"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}>
        <List>
          <a href="/" style={{padding: 20}}>
            <img src={Logo} width="130" height="18"/>
          </a>
        </List>
        <Divider/>
        <List>
          <Grid container
              direction="column">
            <a href="/eventlist" className={classes.listItem}>
              <Typography variant="button">
                Events
              </Typography>
            </a>
            {/* TODO(YoonYeoHwan) : Need to implement About page. Now just linked to landing page. */}
            <a href="/landing" className={classes.listItem}>
              <Typography variant="button">
                About
              </Typography>
            </a>
            <a href="/singin" className={classes.listItem}>
              <Typography variant="button">
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
            <Route
                path="/"
                render={({location}) => (
                    <>
                      <AppBar position="" color="default">
                        <Toolbar>
                          <Grid container alignItems="center">
                            <Grid item xs={3}>
                              <IconButton edge="start" color="inherit"
                                          aria-label="menu">
                                <Button onClick={toggleDrawer('left', true)}>
                                  <MenuIcon/>
                                </Button>
                                <Drawer open={state.left}
                                        onClose={toggleDrawer('left', false)}>
                                  {sideList('left')}
                                </Drawer>
                              </IconButton>
                            </Grid>
                            <Grid item xs={3} justify="center">
                              <a href="/" style={{padding: 20}}>
                                <img src={Logo} width="130" height="18"/>
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