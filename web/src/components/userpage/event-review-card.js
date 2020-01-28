import {
  Grid,
  Typography,
} from '@material-ui/core';
import EventReview from './event-review';
import EventSchedule from './event-schedule';
import PropTypes from 'prop-types';
import React, {Component, Fragment} from 'react';
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
      upcoming,
    } = this.props;
    return (
      <Fragment>
        <Grid container>
          <Grid item xs></Grid>
          <Grid item xs={12} sm={8} align='left' style={{paddingLeft: '10px'}}>
            {upcoming && (
              <Typography variant='h5'
                paragraph
                style={{fontWeight: 'bold'}}
                onClick={this.handleEventClick}>
                {eventTitle}
              </Typography>
            )}
          </Grid>
          <Grid item xs></Grid>
        </Grid>
        <Grid container >
          <Grid item sm></Grid>
          <Grid item xs
            sm={8}
            align='center'
            style={{wordBreak: 'break-all', float: 'left'}}>
            <img src={require(`../images/sapiens.png`)}
              style={{paddingBottom: '10px', width: '140px', height: '200px'}}/>
            <Typography variant='h5'>
              {bookTitle}
            </Typography>
            {/* Book author. */}
            <Typography variant='body2'>
            By {bookAuthor}
            </Typography>
          </Grid>
          <Grid item sm></Grid>
        </Grid>
        <Grid container>
          <Grid item xs sm></Grid>
          <Grid item xs={12} sm={8} style={{paddingTop: '10px'}}>
            {upcoming && this.renderSchedules(schedules)}
          </Grid>
          <Grid item xs sm></Grid>
        </Grid>
        <Grid container>
          <Grid item xs sm></Grid>
          <Grid item xs={12} sm={8}>
            <EventReview review={review} bookTitle={bookTitle} eventId={id}/>
          </Grid>
          <Grid item xs sm></Grid>
        </Grid>
      </Fragment>
    );
  }
}

EventReviewCard.propTypes = {};

export default withRouter(EventReviewCard);
