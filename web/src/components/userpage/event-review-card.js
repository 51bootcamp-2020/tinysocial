import {
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import EventReview from './event-review';
import EventSchedule from './event-schedule';
import PropTypes from 'prop-types';
import React, {Component, Fragment} from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import {withRouter} from 'react-router-dom';

class EventReviewCard extends Component {
  constructor(props) {
    super(props);
    this.handleEventClick = this.handleEventClick.bind(this);
  }
  // Render Schedule object list into a EventSchedule component list.
  renderSchedules(schedules) {
    // This is for displaying schedule number.
    let index = 1;

    // Map Schedule objects to EventSchedule components.
    schedules = schedules.map((schedule) => {
      const {id, startDateTime, endDateTime, address} = schedule;
      const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      };
      // The format will be like : 1/30/2020, 10:42 PM.
      const startTime= new Date(startDateTime).toLocaleString('en-US', options);
      const endTime = new Date(endDateTime).toLocaleString('en-US', options);
      return (
        <EventSchedule key={Number(id)}
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
    this.props.history.push({
      pathname: '/eventdetail',
      search: '?id=' + this.props.id,
    });
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
        <Paper style={{margin: '5px -10px 10px'}}>
          <Grid container justify='center' style={{paddingTop: '10px'}}>
            <Grid item xs={12}
              sm={8}
              align='center' style={{paddingLeft: '10px'}}>
              {upcoming && (
                <Typography variant='h5'
                  paragraph
                  style={{fontWeight: 'bold'}}
                  onClick={this.handleEventClick}>
                    {eventTitle}
                </Typography>
              )}
            </Grid>
          </Grid>
          <Grid container justify='center'>
            <Grid item xs
              sm={8}
              align='center'
              style={{wordBreak: 'break-all'}}>
              <img src={bookImage}
                alt='book_image'
                style={{
                  paddingBottom: '10px',
                  width: '140px',
                  height: '200px'}}/>
              <Typography variant='h5'>
                {bookTitle}
              </Typography>
              {/* Book author. */}
              <Typography variant='body2'>
              By {bookAuthor}
              </Typography>
            </Grid>
          </Grid>
          <Grid container style={{paddingTop: '10px', paddingLeft: '20px'}}>
            <Grid item xs sm></Grid>
            <Grid item xs={12} sm={8} style={{paddingTop: '10px'}}>
              {upcoming && this.renderSchedules(schedules)}
            </Grid>
            <Grid item xs sm></Grid>
          </Grid>
          <Grid container
            justify='center'
            style={{padding: '0px 20px 20px 20px'}}>
            <Grid item xs={12} sm={8} align='left'>
              <Typography variant='subtitle1'
                style={{fontWeight: 'bold', color: '#009688'}}>
                  Review
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <EventReview review={review} bookTitle={bookTitle} eventId={id}/>
            </Grid>
          </Grid>
        </Paper>
      </Fragment>
    );
  }
}

EventReviewCard.propTypes = {
  id: PropTypes.number,
  eventTitle: PropTypes.string,
  bookTitle: PropTypes.string,
  bookAuthor: PropTypes.string,
  bookImage: PropTypes.string,
  schedules: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    startDateTime: PropTypes.string,
    endDateTime: PropTypes.string,
    address: PropTypes.string,
  })),
  review: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    isPublic: PropTypes.bool,
  }),
  upcoming: PropTypes.bool,
  history: ReactRouterPropTypes.history,
};

export default withRouter(EventReviewCard);
