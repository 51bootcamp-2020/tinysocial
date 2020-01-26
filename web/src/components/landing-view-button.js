import {Button,
  Box,
  Grid,
} from '@material-ui/core';
import React from 'react';
import {withRouter} from 'react-router-dom'

// Redirect 'Popular' and 'View All' Button to event list page
// TODO(Lhyejin): Add css style
const LandingViewButton = props => {
  return (
      <Grid container justify="space-between">
        <Grid item>
          <Box>Popular</Box>
        </Grid>
        <Grid item>
          <Button onClick={() => {
            return props.history.push('/eventlist')
          }
          }> View all </Button>
        </Grid>
      </Grid>
  )
};

export default withRouter(LandingViewButton);