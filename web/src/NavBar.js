import React from 'react';
import Events from './pages/events';
import Signin from './pages/signin';
import Landing from './pages/landing';
import Logo from './img/tinysocial-logo.png';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import {
  AppBar,
  Tabs,
  Tab,
  Grid,
} from '@material-ui/core';

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