import {
  AppBar,
  Grid,
  Tab,
  Tabs,
} from '@material-ui/core';
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import EventList from '../../pages/eventlist';
import Landing from '../../pages/landing';
import Logo from '../../img/tinysocial-logo.png';
import React from 'react';
import Signin from '../../pages/signin';

function NavBarPC() {
  return (
      <BrowserRouter>
        <div>
          <Route
              path="/"
              render={({location}) => (
                  <>
                    <AppBar color="default">
                      <Grid container alignItems="center" direction="row"
                            justify="space-between">
                        <Grid justify="flex-start">
                          <a href="/" style={{padding: 20}}>
                            <img src={Logo}/>
                          </a>
                        </Grid>
                        <Grid justify="flex-end">
                          <Tabs value={location.pathname}
                                aria-label="Navigation Tabs">
                            <Tab label="Events" component={Link} to="/"
                                 style={{textTransform: 'none'}}/>
                            {/* TODO(YoonYeoHwan) : Need to implement About page. Now just linked to landing page. */}
                            <Tab label="About" component={Link}
                                 style={{textTransform: 'none'}}
                                 to="/landing"/>
                            <Tab label="Sign in" component={Link}
                                 style={{textTransform: 'none'}}
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
