import {
  AppBar,
  Grid,
  Typography,
} from '@material-ui/core';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Logo from '../../img/tinysocial-logo.png';
import React from 'react';

function NavBarPC() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/"
          render={({location}) => (
            <>
              <AppBar position='static' color='default'>
                <Grid container alignItems='center' direction='row'
                  justify='space-between'
                  style={{paddingTop: 10, paddingBottom: 10}}>
                  <Grid justify='flex-start'>
                    <a href='/' style={{padding: 20}}>
                      <img src={Logo}/>
                    </a>
                  </Grid>
                  <Grid justify='flex-end'>
                    <Grid container direction='row'>
                      <a href='/eventlist'>
                        <Typography variant='h6'
                          style={{
                            textTransform: 'none',
                            color: 'black',
                            marginLeft: 20,
                            marginRight: 20}}>
                          Events
                        </Typography>
                      </a>
                      <a href='/about'>
                        {/* TODO(YoonYeoHwan) : Need to implement About page.*/}
                        {/*  Now just linked to landing page.*/}
                        <Typography variant='h6'
                          style={{
                            textTransform: 'none',
                            color: 'black',
                            marginLeft: 20,
                            marginRight: 20}}>
                          About
                        </Typography>
                      </a>
                      <a href="/signin">
                        <Typography variant='h6'
                          style={{
                            textTransform: 'none',
                            color: 'black',
                            marginLeft: 20,
                            marginRight: 30}}>
                          Sign in
                        </Typography>
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
              </AppBar>
            </>
          )}
        />
      </div>
    </BrowserRouter>
  );
}

export default NavBarPC;
