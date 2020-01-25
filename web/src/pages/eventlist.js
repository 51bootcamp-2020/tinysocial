import React, {Component} from 'react';
import EventlistFilters from '../components/eventlist-filters';
import EventlistQueryEvent from '../components/eventlist-query-event';
import Grid from '@material-ui/core/Grid';

class EventList extends Component {
  render() {
    return (
        <div className="eventlist">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <EventlistFilters/>
            </Grid>
            <br/>
            <hr/>
            <Grid item xs={12}>
              <EventlistQueryEvent/>
            </Grid>
          </Grid>
        </div>
    );
  }
}

EventList.propTypes = {}

export default EventList;