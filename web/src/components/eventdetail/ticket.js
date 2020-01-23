import React, {Component} from 'react';
import {
  Typography,
  Grid,
  makeStyles,
  Fab,
} from '@material-ui/core';

// TODO(YoonYeoHwan): Combine with another useStyles(constants.js) after merging
const useStyles = makeStyles(theme => ({
  ticketButton: {
    width: 250,
    height: 40,
    marginTop: 10,
    color: 'white',
    background: '#009688',
    textTransform: 'none',
  },
}));

function Ticket() {
  const classes = useStyles();
  return (
    <div>
      <Grid container
        direction='column'
        justify='center'
        alignItems='center'
        style={{marginTop: 10}}>
        {/* TODO(YoonYeoHwan): Get price from query. */}
        <Typography variant='h6'>
          $30
        </Typography>

        {/* TODO(): Develop payment page and connecting to payment page. */}
        <Fab className={classes.ticketButton}
          variant='extended'>
          <div>
            Ticket
          </div>
        </Fab>
      </Grid>
    </div>
  );
}

export default Ticket;
