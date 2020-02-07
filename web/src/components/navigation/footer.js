import {
  AppBar,
  Grid,
  Typography,
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <AppBar position='sticky' style={{top: 'auto',
        bottom: 0, background: 'white'}}>
        <Grid container
          direction='row'
          justify='flex-end'
          alignItems='center'
          style={{color: 'black', height: 40}}>
          <Link to='/about'>
            <Typography variant='body2'
              style={{color: 'black', marginRight: 20}}>
              About
            </Typography>
          </Link>
          <Link to='./privacy'>
            <Typography variant='body2'
              style={{color: 'black', marginRight: 20}}>
              Privacy
            </Typography>
          </Link>
        </Grid>
      </AppBar>
    );
  }
}

Footer.propTypes = {};

export default Footer;
