import {
  Card, 
  CardContent, 
  Grid, 
  Typography
} from '@material-ui/core';
import EventReview from './event-review';
import EventSchedule from './event-schedule';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class EventReviewCard extends Component {
  constructor(props) {
    super(props);
  }

  // Render Schedule object list into a EventSchedule component list.
  renderSchedules(schedules) {
    // This is for displaying schedule number.
    let index = 1;

    // Map Schedule objects to EventSchedule components.
    schedules = schedules.map((schedule) => {
      const {id, startTime, endTime, address} = schedule;
      return (
        <EventSchedule key={id}
          index={index++} 
          startTime={startTime} 
          endTime={endTime} 
          address={address} 
        />
      );
    });

    // Render the EventSchedule components list.
    return schedules;
  }

  // Redirect to the event detail page
  handleEventClick() {
    // TODO(mskwon1): Redirect to the event detail page with event info
  }

  render() {
    const {
      id, 
      eventTitle, 
      bookTitle,
      bookAuthor,
      bookImage, 
      schedules, 
      review, 
      upcoming
    } = this.props;
    
    return (
      <Card>
        <CardContent>
          <Grid container item xs={12}>
            {/* Event title - will be shown only on upcoming events. */}
            {upcoming && (
              <Grid item xs={12} align='center'>
                <Typography variant='h5' 
                  paragraph 
                  style={{fontWeight:'bold'}} 
                  onClick={this.handleEventClick}>
                  {eventTitle}
                </Typography>
              </Grid>
            )}
            {/* Book thumbnail. */}
            <Grid item xs={6} align='center' style={{marginBottom:'10px'}}>
              {/* TODO(mskwon1): Make this as a CardMedia component. */}
              <img src={require(`../images/${bookImage}`)}/>
            </Grid>
            <Grid container item xs={6} align='left' alignItems='flex-start'>
              <Grid item xs={12}>
                {/* Book title. */}
                <Typography variant='h5'>
                  {bookTitle}
                </Typography>
                {/* Book author. */}
                <Typography variant='body2'>
                  By {bookAuthor}
                </Typography>
              </Grid>
            </Grid>
            {/* Schedules - will be shown only on upcoming events. */}
            {upcoming && this.renderSchedules(schedules)}
            {/* User review. */}
            <EventReview review={review} eventId={id}/>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

EventReviewCard.propTypes = {};

export default withRouter(EventReviewCard);
