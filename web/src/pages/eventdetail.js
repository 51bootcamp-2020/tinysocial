import BookClub from '../components/eventdetail/bookclub';
import CommonEvent from '../components/eventdetail/commonevent';
import EventThumbNail from '../components/eventdetail/eventthumbnail';
import {gql} from 'apollo-boost';
import {
  Hidden,
  Divider,
  Grid,
} from '@material-ui/core';
import Ticket from '../components/eventdetail/ticket';
import {Query} from 'react-apollo';
import queryString from 'query-string'
import React, {Component} from 'react';
import {
  withRouter
} from 'react-router-dom'

// TODO(YoonYeoHwan): Have to delete @client.
const EVENT_DETAIL_REQUEST_QUERY = gql`
  query getEvent($eventId: ID!) {
    event(id: $eventId) @client {
      id,
      title,
      thumbnailUrl,
      description,
      price,
      tags @client {
        id,
        name
      },
      ... on EventBookClub @client {
        bookTitle,
        bookDescription,
        bookAuthor
      },
      schedule @client {
        id,
        startDateTime,
        endDateTime,
        address,
        latitude,
        longitude,
      },
      host @client {
        firstName,
        lastName,
        selfDescription,
        profileImgUrl
      }
    }
  }`;

class EventDetail extends Component{
  constructor(props){
    super(props);
    this.state = {
      eventId: ''
    }
  }

  // TODO(YoonYeoHwan): Catch error if query string didn't come.
  componentDidMount() {
    const query = queryString.parse(this.props.location.search);
    this.setState({
      eventId: query.id
    })
  }

  Event = () => {
    // TODO(YoonYeoHwan): '$id:0' will change to '$id:eventId'.
    return (<Query query={EVENT_DETAIL_REQUEST_QUERY} variables={{eventId:this.state.eventId}}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        return (
          <Grid container>
            <Grid item sm={8} xs={12}>
              <EventThumbNail>
                {data.event}
              </EventThumbNail>
            </Grid>
            <Grid item sm={4} xs={12}>
              <CommonEvent>
                {data.event}
              </CommonEvent>
            </Grid>
            <Grid item sm={8} xs={12}>
              <BookClub>
                {data.event}
              </BookClub>
            </Grid>
            <Hidden smUp>
              <Grid item xs={12}>
                <Divider/>
                <Ticket>
                  {data.event}
                </Ticket>
              </Grid>
            </Hidden>
          </Grid>
        );
    }}
    </Query>)
  }

  render() {
    return (
      <>
        {this.Event()}
      </>
    );
  }
}

export default withRouter(EventDetail);
