import EventCard from './event-card';
import {gql} from 'apollo-boost';
import {Grid} from '@material-ui/core';
import PropTypes from 'prop-types';
import {Query} from 'react-apollo'
import React, {Component, Fragment} from 'react';
import {SAMPLE_EVENTS} from './sample-data'

// TODO(mskwon1): Implement query statements.

class EventReviewCardList extends Component {
  constructor(props) {
    super(props);
  }

  renderEventCards(events) {
    events = events.map((event) => {
      const {id, title, image, schedules, review} = event;
      const upcoming = this.props.currentTab == 'upcoming' ? true : false;
      return (
        <EventCard 
          key={id}
          id={id} 
          title={title} 
          image={image} 
          schedules={schedules} 
          review={review} 
          upcoming={upcoming}
        />
      )
    })

    return events;
  }

  render() {
    return (
      <Grid container align="center">
        {/* TODO(mskwon1): Change this to a Query component */}
        {this.renderEventCards(SAMPLE_EVENTS)}
      </Grid>
    );
  }
}

EventReviewCardList.propTypes = {};

export default EventReviewCardList;
