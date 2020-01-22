import React from 'react';
import {withRouter} from 'react-router-dom'
import {Button,
        Grid,
        Box} from '@material-ui/core';

const LandiingViewButton = props => {
  return (
      <Grid container justify="space-between">
        <Grid item xs={1}>
          <Box>Popular</Box>
        </Grid>
        <Grid item xs={1}>
          <Button onClick={ () => {
            return props.history.push('/eventlist')
          }
          }> View all </Button>
        </Grid>
      </Grid>
  )
};

export default withRouter(LandiingViewButton);