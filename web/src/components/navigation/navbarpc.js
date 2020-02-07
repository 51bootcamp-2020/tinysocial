import {
  AppBar,
  Avatar,
  Grid,
  Typography,
} from '@material-ui/core';
import {
  Link,
} from 'react-router-dom';
import Logo from '../../img/tinysocial-logo.png';
import React from 'react';

function NavBarPC(props) {
  const {profilepic, loggedIn} = props;

  return (
    <AppBar position='sticky' color='default'>
      <Grid container alignItems='center' direction='row'
        justify='space-between'
        style={{paddingTop: 10, paddingBottom: 10}}>
        <Grid justify='flex-start'>
          <a href='/' style={{padding: 20}}>
            <img alt='logo' src={Logo}/>
          </a>
        </Grid>
        <Grid justify='flex-end'>
          <Grid container direction='row'>
            <Link to='eventlist'>
              <Typography variant='h6'
                style={{
                  textTransform: 'none',
                  color: 'black',
                  marginLeft: 20,
                  marginRight: 20}}>
                Events
              </Typography>
            </Link>
            <Link to='/about'>
              {/* TODO(YoonYeoHwan) : Need to implement About page. */}
              <Typography variant='h6'
                style={{
                  textTransform: 'none',
                  color: 'black',
                  marginLeft: 20,
                  marginRight: 20}}>
                About
              </Typography>
            </Link>
            {
              loggedIn ?
              (
                <Link to="/signout">
                  <Typography variant='h6'
                    style={{
                      textTransform: 'none',
                      color: 'black',
                      marginLeft: 20,
                      marginRight: 30}}>
                    Sign Out
                  </Typography>
                </Link>
              ) :
              (
                <Link to="/signin">
                  <Typography variant='h6'
                    style={{
                      textTransform: 'none',
                      color: 'black',
                      marginLeft: 20,
                      marginRight: 30}}>
                    Sign In
                  </Typography>
                </Link>
              )
            }
            {loggedIn &&
              <Link to='/userpage' style={{height: '100%', paddingRight: '20px'}}>
                <Avatar alt='seulgi' src={profilepic} style={{height: '30px', width: '30px'}}/>
              </Link>
            }
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default NavBarPC;
