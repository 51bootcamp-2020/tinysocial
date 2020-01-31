import EventReviewCard from './event-review-card';
import {Container} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

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
        title: eventTitle,
        bookTitle,
        bookAuthor,
        thumbnailUrl: bookImage,
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
          review={review}
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
      <Container style={{paddingTop: '10px'}}>
        {this.renderEventReviewCards(events)}
      </Container>
    );
  }
}

EventReviewCardList.propTypes = {
  events: PropTypes.object,
  upcoming: PropTypes.bool,
};

export default EventReviewCardList;
