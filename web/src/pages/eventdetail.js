import React, {Component} from 'react';
import BookClub from '../components/eventdetail/bookclub';
import CommonEvent from '../components/eventdetail/commonevent';
import EventThumbNail from '../components/eventdetail/eventthumbnail';
import {gql} from 'apollo-boost';
import Ticket from '../components/eventdetail/ticket';
import {Query} from 'react-apollo';
import {
  Hidden,
  Divider,
  Grid,
} from '@material-ui/core';

const EVENT_DETAIL_REQUEST_QUERY = gql`
  query getEvent($id:Int!) {
    event(id:$id) @client { 
      id,
      title,
      thumbnailUrl,
      description,
      price,
      tags,
      bookTitle,
      bookDescription,
      bookAuthor,
      address,
      host @client {
        firstName,
        lastName,
        description,
        profileImgUrl
      }
    }
  }`;

class EventDetail extends Component{
  constructor(props){
    super(props);
  }

  Event = ( event_id ) => {
    return (<Query query={EVENT_DETAIL_REQUEST_QUERY} variables={{$id:0}}>
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

export default EventDetail;
