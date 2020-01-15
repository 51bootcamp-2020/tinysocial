import {
  AppBar,
  Grid,
  Tabs,
  Tab,
} from '@material-ui/core';
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Events from './pages/eventlist';
import Landing from './pages/landing';
import Logo from './img/tinysocial-logo.png';
import React from 'react';
import Signin from './pages/signin';

function Navbar() {
  return (
      <BrowserRouter>
        <nav className="Navbar">
          <Route
              path="/"
              render={({location}) => (
                  <>
                    {/* TODO : need to make it flex(different UI between mobile web and PC web) */}
                    <AppBar color="default">
                      <Grid container direction="row" justify="space-between" alignItems="center">
                        <Grid justify="flex-start">
                          <a href="/" style={{ padding : 20 }}>
                            <img src={Logo} width="130" height="18"/>
                          </a>
                        </Grid>
                        <Grid justify="flex-end">
                          <Tabs value={location.pathname}
                                aria-label="Navigation Tabs">
                            <Tab label="Events" component={Link} to="/"/>
                            {/* TODO : need to implement About page. Now just linked to landing page */}
                            <Tab label="About" component={Link} to="/landing"/>
                            <Tab label="Sign in" component={Link} to="/signin"/>
                          </Tabs>
                        </Grid>
                      </Grid>
                    </AppBar>
                    <Switch>
                      <Route path='/landing' render={() => <Landing/>}/>
                      <Route path="/signin" render={() => <Signin/>}/>
                      <Route path='/' render={() => <Events/>}/>
                    </Switch>
                  </>
              )}
          />
        </nav>
      </BrowserRouter>
  );
}

export default Navbar;
