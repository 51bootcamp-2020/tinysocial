import {
  Button,
  Box,
  Grid,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';
import {withRouter} from 'react-router-dom'

// View Button css style
const LandingViewButtonStyle = makeStyles(theme => ({
  root: {
    padding: '0 3% 0 3%'
  },
  popularText: {
    fontFamily: 'Roboto',
    fontSize: '25px',
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#009688'
  },
  buttonText: {
    fontFamily: 'Roboto',
    fontSize: '20px',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.5px',
    textAlign: 'center',
    color: '#009688'
  }

}));

// Redirect 'Popular' and 'View All' Button to event list page
const LandingViewButton = props => {
  const landingViewButtonStyle = LandingViewButtonStyle();
  return (
      <Grid container justify="space-between"
                      className={landingViewButtonStyle.root}>
        <Grid item>
          <Box className={landingViewButtonStyle.popularText}>
            Popular
          </Box>
        </Grid>
        <Grid item>
          <Button onClick={() => {
                    return props.history.push('/eventlist')
                    }}
                  className={landingViewButtonStyle.buttonText}
          > View all </Button>
        </Grid>
      </Grid>
  )
};

export default withRouter(LandingViewButton);
