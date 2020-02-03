import {Container, Typography} from '@material-ui/core';
import EventReviewCard from './event-review-card';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

class EventReviewCardList extends Component {
  constructor(props) {
    super(props);
  }

  // Render EventReviewCard components list.
  renderEventReviewCards(events) {
    if (events.length === 0) {
      const upcomingOrPast = this.props.upcoming ? 'upcoming' : 'past';
      return (
        <Typography variant='h5' align='center'>
          You have no {upcomingOrPast} events ... let's take one!
        </Typography>
      );
    }
    // Map event objects to EventReviewCard component.
    events = events.map((event) => {
      const {
        id,
        title: eventTitle,
        bookTitle,
        bookAuthor,
        bookImageUrl: bookImage,
        schedule: schedules,
        reviews: review,
      } = event;
      const {upcoming} = this.props;

      return (
        <EventReviewCard key={id}
          id={Number(id)}
          eventTitle={eventTitle}
          bookTitle={bookTitle}
          bookAuthor={bookAuthor}
          bookImage={bookImage}
          schedules={schedules}
          review={review[0]}
          upcoming={upcoming}
        />
      );
    });

    // Render the components.
    return events;
  }

  render() {
    const {events} = this.props;

    return (
      <Container style={{paddingTop: '20px'}}>
        {this.renderEventReviewCards(events)}
      </Container>
    );
  }
}

EventReviewCardList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object),
  upcoming: PropTypes.bool,
};

export default EventReviewCardList;
