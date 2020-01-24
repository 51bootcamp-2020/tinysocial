import EventReviewCard from './event-review-card';
import {gql} from 'apollo-boost';
import {Grid} from '@material-ui/core';
import PropTypes from 'prop-types';
import {Query} from 'react-apollo';
import React, {Component} from 'react';
import {SAMPLE_EVENTS} from './sample-data';

// TODO(mskwon1): Implement GraphQL Query statements.
class EventReviewCardList extends Component {
  constructor(props) {
    super(props);
  }

  // Render EventReviewCard components list.
  renderEventReviewCards(events) {
    // Map event objects to EventReviewCard component.
    events = events.map((event) => {
      const {
        id, 
        eventTitle, 
        bookTitle, 
        bookAuthor, 
        bookImage, 
        schedules, 
        review
      } = event;
      const upcoming = this.props.currentTab == 'upcoming' ? true : false;
      
      return (
        <EventReviewCard 
          key={id}
          id={id} 
          eventTitle={eventTitle} 
          bookTitle={bookTitle}
          bookAuthor={bookAuthor}
          bookImage={bookImage}
          schedules={schedules} 
          review={review} 
          upcoming={upcoming}
        />
      );
    });

    // Render the components.
    return events;
  }

  render() {
    return (
      <Grid container align="center">
        {/* TODO(mskwon1): Add a Query component to get data from server. */}
        {this.renderEventReviewCards(SAMPLE_EVENTS)}
      </Grid>
    );
  }
}

EventReviewCardList.propTypes = {};

export default EventReviewCardList;
