import React, {Component} from 'react';
import EventlistFilters from '../components/eventlist-filters';
import EventQuery from '../components/event-query';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import {ToggleButton, ToggleButtonGroup} from '@material-ui/lab';

class EventList extends Component {

  constructor() {
    super();
    this.state = {

    }
  }
  HandlerTagName = (data) => {
    console.log('page' + data)
  };

  render() {
    return (
          <Grid container justify="space-between" style={{padding: '2% 5% 0 5%'}}>
            <Grid item xs md xl>
              <EventlistFilters
                onCreate={this.HandlerTagName}
              />
            </Grid>
            <Grid item>
              <EventQuery pageSize='9' />
            </Grid>
          </Grid>
    );
  }
}

EventList.propTypes = {};

export default EventList;