import {
  Grid,
  Hidden,
  Typography,
} from '@material-ui/core';
import React, {Component} from 'react';
import Tags from './tags';
import Ticket from './ticket';

class Commonevent extends Component {
  render() {
    return (
      <div>
        <Grid container direction="row" alignContent='space-between'>
          <Grid item style={{padding: 15}}>
            <Grid style={{marginBottom: 10}}>
              {/* TODO(YoonYeoHwan): Get event name from query. */}
              <Typography variant='h5'>
                Brief summary of Human History
              </Typography>
            </Grid>
            <Grid>
              <Typography style={{
                whiteSpace: 'pre-line',
                color: '#b7b7b7',
                fontSize: 13,
              }}>
                {/* TODO(YoonYeoHwan): Get event description from query. */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmo Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmo
              </Typography>
            </Grid>
            <Grid style={{marginBottom: 10, marginTop: 10}}>
              <Tags/>
            </Grid>
            <Hidden smDown>
              <Grid container justify='flex-start'>
                <Ticket/>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Commonevent;
