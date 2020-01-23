import React, {Component} from 'react';
import {Card, CardContent, Grid, Typography} from '@material-ui/core';
import Review from './event-review'
import Schedule from './event-schedule';
import {withRouter} from 'react-router-dom';

// These consts are temporary ... will be removed.
const BOOK_TITLE = 'Sapiens';
const BOOK_AUTHOR = 'Yuval Harari';

class EventCard extends Component {
  constructor(props) {
    super(props);
  }

  renderSchedules(schedules) {
    let index = 1
    schedules = schedules.map((schedule) => {
      const {id, startTime, endTime, address} = schedule;
      return (
        <Schedule 
          key={id}
          index={index++} 
          startTime={startTime} 
          endTime={endTime} 
          address={address} 
        />
      )
    })

    return schedules
  }

  handleEventClick(review) {
    // Redirect to review page with reviewId state.
    this.props.history.push({
      pathname: '/review',
      state: {
        // TODO(mskwon1): send reviewId dynamically.
        reviewId: 1
      }
    })
  }

  render() {
    const {id, title, image, schedules, review, upcoming} = this.props;
    return (
      <Card>
        <CardContent>
          <Grid container item xs={12}>
            {/* Event title. */}
            {upcoming && (
              <Grid item xs={12} align='center'>
                <Typography 
                  variant='h5' 
                  paragraph 
                  style={{fontWeight:'bold'}} 
                  onClick={() => {this.handleEventClick(review)}}>
                  {title}
                </Typography>
              </Grid>
            )}
            {/* Book thumbnail. */}
            <Grid item xs={6} align='center' style={{marginBottom:'10px'}}>
              {/* TODO(mskwon1): Make this as a CardMedia component. */}
              <img src={require(`../../images/${image}`)}/>
            </Grid>
            <Grid container item xs={6} align='left' alignItems='flex-start'>
              <Grid item xs={12}>
                <Typography variant='h5'>
                  {BOOK_TITLE}
                </Typography>
                <Typography variant='body2'>
                  By {BOOK_AUTHOR}
                </Typography>
              </Grid>
            </Grid>
            {/* Schedule section. */}
            {upcoming && this.renderSchedules(schedules)}
            {/* Review section. */}
            <Review review={review} eventId={id}/>
          </Grid>
        </CardContent>
      </Card>
    )
  }
}

export default withRouter(EventCard);
