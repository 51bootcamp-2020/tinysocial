import {Grid, Typography} from '@material-ui/core';
import React, {Component, Fragment} from 'react';

class Schedule extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {index, startTime, endTime, address} = this.props;

    return (
      <Fragment>
        <Grid item xs={12} align='center'>
          <Typography variant='subtitle1' style={{fontWeight:'bold', color:'#009688'}}>
            Schedule {index}
          </Typography>
        </Grid>
        <Grid container item xs={12} align='center' alignItems='flex-start'>
          <Grid item xs={6}>
            <Typography variant='subtitle2' style={{fontWeight:'bold'}}>
              Date & Time
            </Typography>
            <Typography variant='body2' paragraph>
              {startTime} ~
              <br/>
              {endTime}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant='subtitle2' style={{fontWeight:'bold'}}>
              Location
            </Typography>
            <Typography variant='body2' >
              {address}
            </Typography>
          </Grid>
        </Grid>
      </Fragment>
    )
  }
}

export default Schedule;
