import React from 'react';
import Landing from '../../pages/landing';
import Signin from '../../pages/signin';
import EventList from '../../pages/eventlist';
import Logo from '../../img/tinysocial-logo.png';
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

function NavBarPC() {
  return (
      <BrowserRouter>
        <div>
          <Route
              path="/"
              render={({location}) => (
                  <>
                    <AppBar color="default">
                      <Grid container direction="row" justify="space-between"
                            alignItems="center">
                        <Grid justify="flex-start">
                          <a href="/" style={{padding: 20}}>
                            <img src={Logo} width="130" height="18"/>
                          </a>
                        </Grid>
                        <Grid justify="flex-end">
                          <Tabs value={location.pathname}
                                aria-label="Navigation Tabs">
                            <Tab label="Events" component={Link} to="/"/>
                            {/* TODO(YoonYeoHwan) : Need to implement About page. Now just linked to landing page. */}
                            <Tab label="About" component={Link}
                                 to="/landing"/>
                            <Tab label="Sign in" component={Link}
                                 to="/signin"/>
                          </Tabs>
                        </Grid>
                      </Grid>
                    </AppBar>
                    <Switch>
                      <Route path='/landing' render={() => <Landing/>}/>
                      <Route path="/signin" render={() => <Signin/>}/>
                      <Route path='/' render={() => <EventList/>}/>
                    </Switch>
                  </>
              )}
          />
        </div>
      </BrowserRouter>
  );
}
export default NavBarPC;