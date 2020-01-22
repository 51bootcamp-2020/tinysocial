<<<<<<< HEAD
import React from 'react';
import {withRouter} from 'react-router-dom'
=======
import React, {Component} from 'react';
import {Redirect} from 'react-router';
>>>>>>> 758888d24672f208eecc1384a9f60cc92241e822
import {Button,
        Grid,
        Box} from '@material-ui/core';

<<<<<<< HEAD
const LandiingViewButton = props => {
=======
export default function LandiingViewButton() {
>>>>>>> 758888d24672f208eecc1384a9f60cc92241e822
  return (
      <Grid container justify="space-between">
        <Grid item xs={1}>
          <Box>Popular</Box>
        </Grid>
        <Grid item xs={1}>
<<<<<<< HEAD
          <Button onClick={ () => {
            return props.history.push('/eventlist')
          }
          }> View all </Button>
        </Grid>
      </Grid>
  )
};

export default withRouter(LandiingViewButton);
=======
          <Button onClick={() => {
            return <Redirect to='/events' />
          }}> View all </Button>
        </Grid>
      </Grid>
  )
}
>>>>>>> 758888d24672f208eecc1384a9f60cc92241e822
