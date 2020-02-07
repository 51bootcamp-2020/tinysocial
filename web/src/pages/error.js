import ErrorImage from '../../src/img/error-page.png';
import {
  Fab,
  Grid,
  Typography,
} from '@material-ui/core';
import React, {Component} from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';

class Error extends Component {
  render() {
    return (
      <Grid container
        alignItems='center'
        direction='column'
        justify='center'>
        <img alt='errorImage'
          src={ErrorImage}
          style={{height: 270, marginBottom: '5%',
            marginTop: '5%', width: 270}}/>
        <Typography variant='body1' style={{marginBottom: 20}}>
          Oh no! Page not found.
        </Typography>
        <Link to={'/'}>
          <Fab style={{
            width: 250,
            height: 40,
            marginTop: 10,
            color: 'white',
            background: '#009688',
            textTransform: 'none'}}
          variant='extended'>
            <div>
              Return to Homepage
            </div>
          </Fab>
        </Link>
      </Grid>
    );
  }
}

export default withRouter(Error);
