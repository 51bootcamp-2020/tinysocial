import React, {Component} from 'react';
import EventlistFilters from '../components/eventlist-filters';
import EventQuery from '../components/event-query';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';

class EventList extends Component {
  render() {
    return (
          <Grid container justify="space-between">
            <Grid item xs='auto'>
              <EventlistFilters/>
            </Grid>
            <br/>
            <hr/>
              <EventQuery pageSize='9' />
          </Grid>
    );
  }
}

EventList.propTypes = {};

export default EventList;