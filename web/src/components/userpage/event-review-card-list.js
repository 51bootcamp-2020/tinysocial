import EventReviewCard from './event-review-card';
import {gql} from 'apollo-boost';
import {Grid, Typography} from '@material-ui/core';
import PropTypes from 'prop-types';
import {Query} from 'react-apollo';
import React, {Component} from 'react';
import {SAMPLE_EVENTS} from './sample-data';

export const USER_EVENTS_QUERY = gql`
query getUserEvents($upcomingOrPast: String!) {
  userEvents(upcomingOrPast: $upcomingOrPast) {
    id
    title
    thumbnailUrl
    schedule {
      id
      startDateTime
      endDateTime
      address
    }
    ... on EventBookClub {
      bookTitle
      bookAuthor
    }
    reviews {
      title
      content
    }
  }
}
`

// TODO(mskwon1): Implement GraphQL Query statements.
class EventReviewCardList extends Component {
  constructor(props) {
    super(props);
  }

  // Render EventReviewCard components list.
  renderEventReviewCards(events) {
    // Map event objects to EventReviewCard component.
    events = events.userEvents.map((event) => {
      const {
        id, 
        title: eventTitle, 
        bookTitle, 
        bookAuthor, 
        thumbnailUrl: bookImage, 
        schedule: schedules, 
        reviews: review
      } = event;
      const {currentTab} = this.props;

      return (
        <EventReviewCard key={id}
          id={Number(id)} 
          eventTitle={eventTitle} 
          bookTitle={bookTitle}
          bookAuthor={bookAuthor}
          bookImage={bookImage}
          schedules={schedules} 
          review={review} 
          upcoming={currentTab === 'upcoming' ? true : false}
        />
      );
    });

    // Render the components.
    return events;
  }

  sendUserEventsQuery() {
    return (
      <Query query={USER_EVENTS_QUERY} 
        variables={{upcomingOrPast: this.props.currentTab}}>
        {({loading, error, data}) => {
          // TODO(mskwon1): Add data loading page.
          if (loading) return <p>Fetching Data ...</p>
          if (error) return this.renderEventReviewCards(SAMPLE_EVENTS)
          return (this.renderEventReviewCards(data))
        }}
      </Query>
    )
  }

  render() {
    return (
      <Grid container align="center">
        {this.sendUserEventsQuery()}
        {/* TODO(mskwon1): Add a Query component to get data from server. */}
        {/* {this.renderEventReviewCards(SAMPLE_EVENTS)} */}
      </Grid>
    );
  }
}

EventReviewCardList.propTypes = {};

export default EventReviewCardList;
