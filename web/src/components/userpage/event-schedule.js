import {
  Grid,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {Component, Fragment} from 'react';

class EventSchedule extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {index, startTime, endTime, address} = this.props;

    return (
      <Fragment>
        <Grid item xs={12} align='center'>
          {/* Schedule title with index. */}
          <Typography variant='subtitle1'
            style={{fontWeight: 'bold', color: '#009688'}}>
            Schedule {index}
          </Typography>
        </Grid>
        <Grid container item xs={12} align='center' alignItems='flex-start'>
          <Grid item xs sm>
            {/* Date & Time header. */}
            <Typography variant='subtitle2' style={{fontWeight: 'bold'}}>
              Date & Time
            </Typography>
            {/* Date & time content. */}
            <Typography variant='body2' paragraph>
              {startTime} ~
              <br/>
              {endTime}
            </Typography>
          </Grid>
          <Grid item xs sm>
            {/* Location header. */}
            <Typography variant='subtitle2' style={{fontWeight: 'bold'}}>
              Location
            </Typography>
            {/* Location content. */}
            <Typography variant='body2' >
              {address}
            </Typography>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

EventSchedule.propTypes = {};

export default EventSchedule;
