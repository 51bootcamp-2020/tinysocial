import React, {Component} from 'react';
import EventFilters from '../components/eventslist-component/EventFilters';
import EventCards from '../components/eventslist-component/EventCards';
import Grid from '@material-ui/core/Grid';

import {gql} from 'apollo-boost';
import { Query } from "react-apollo";

/* Query requests event list to server */
const EVENT_LIST_REQUEST_QUERY = gql`
    query{
        events(pageSize: 9){
            cursor,
            hasMore,
            events{
                id,
                title,
                description
            }
        }
    }`;

class EventList extends Component {
  constructor(props) {
    // get area selection from props
    super(props);

  }


  // Not Used:: Featured Information component for landing page
  FeaturedInfoComponent = () => {
    let featuredInfo = [];
    featuredInfo.push(
    )
    return featuredInfo;
  };

  // Will add Skeleton component during loading

  Items = () => {
    return (<Query query={EVENT_LIST_REQUEST_QUERY}>
      {({loading, error, data}) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        //will add Skeleton component during loading
        return(<EventCards>{data.events.events}</EventCards>)
      }}
    </Query>);
  };



  // Render of cards component
  render() {
    return (
        <div className="eventlist">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <EventFilters/>
            </Grid>
            <br/>
            <hr/>
            <Grid item xs={12}>
              {this.Items()}
            </Grid>
          </Grid>
        </div>
    );
  }
}

EventList.propTypes = {}

export default EventList;
