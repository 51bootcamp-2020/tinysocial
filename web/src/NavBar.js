import React from 'react';
import Events from './pages/events';
import Signin from './pages/signin';
import Landing from './pages/landing';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import {
  Tabs,
  Tab,
  Grid,
} from '@material-ui/core';

function Navbar() {
  return (
      <BrowserRouter>
        <div className="Navbar">
          <Route
              path="/"
              render={({location}) => (
                  <>
                    {/* TODO : need to make it flex(different UI between mobile web and PC web) */}
                    <Grid container direction="row" justify="space-between">
                      <Grid justify="flex-start">
                        <Tab label="Tiny Social" component={Link} to="/"/>
                      </Grid>
                      <Grid justify="flex-end">
                        <Tabs value={location.pathname}>
                          <Tab label="Events" component={Link} to="/"/>
                          {/* TODO : need to implement About page. Now just linked to landing page */}
                          <Tab label="About" component={Link} to="/landing"/>
                          <Tab label="Sign in" component={Link} to="/signin"/>
                        </Tabs>
                      </Grid>
                    </Grid>
                    <Switch>
                      <Route path="/landing" render={() => <Landing/>}/>
                      <Route path="/signin" render={() => <Signin/>}/>
                      <Route path="/" render={() => <Events/>}/>
                    </Switch>
                  </>
              )}
          />
        </div>
      </BrowserRouter>
  );
}

export default Navbar;