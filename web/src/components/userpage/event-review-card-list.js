import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {
  Grid, 
} from '@material-ui/core';
import EventCard from './event-card'
import {gql} from 'apollo-boost';
import {Query} from 'react-apollo'

const UPCOMING_EVENTS_QUERY = gql`
  query($userId: Int) {
    upcomingEvents(userId: $userId) {
      id
      # book_title
      # image
      schedule {
        startDateTime
        country
        state
        city
        zip
        street
        additionalAddress
      }
    }
  }
`

// Temporary list ... will be removed
const EventCards = [
  <EventCard key="1" />,
  <EventCard key="2" />,
  <EventCard key="3" />,
  <EventCard key="4" />,
  <EventCard key="5" />
]

class EventReviewCardList extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }

  makeEventCards(events) {
    // events.map((event) => {
    //   const {street, }
    //   <EventCard 
    //     key={event.id}
    //     startTime={event.schedule[0].startDateTime}
    //     >
        
    //   </EventCard>
    // })
  }

  render() {
    const {currentTab} = this.props
    
    return (
      <Fragment>
      {/* //   <Query query={UPCOMING_EVENTS_QUERY}>
      //     {({error, data}) => {
      //       if (error) return <Fragment>Error</Fragment>
            
      //       const eventsToRender = data.upcomingEvents

      //       this.makeEventCards(eventsToRender)
      //     }}
      //   </Query> */}
        <Grid container align="center">
          {EventCards}
        </Grid>
      </Fragment>
    );
  }
}

EventReviewCardList.propTypes = {};

export default EventReviewCardList;
