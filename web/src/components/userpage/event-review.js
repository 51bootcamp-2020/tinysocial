import {
  Grid, 
  Typography
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {Component, Fragment} from 'react';
import ReviewWriteButton from './review-write-button';
import {REVIEW_WRITE_TEXT} from '../utils';
import {withRouter} from 'react-router-dom';

class EventReview extends Component {
  constructor(props) {
    super(props);
    this.handleReviewButtonClick = this.handleReviewButtonClick.bind(this);
  }

  // Redirect to the review-write page with eventId state.
  handleReviewButtonClick() {
    this.props.history.push({
      pathname: '/review-write',
      state: {
        eventId: this.props.id,
      },
    });
  }

  render() {
    const {review} = this.props
    return (
      <Fragment>
        <Grid item xs={12} align='center' style={{margin:'15px'}}>
          {/* Review title, null if title is undefined. */}
          <Typography 
            variant='subtitle2' 
            align='left' 
            style={{fontWeight:'bold'}}>
            {review ? review.title : null}
          </Typography>
          {/* Review content, sample write text if content is undefined.  */}
          <Typography variant='body2' align='left'>
            {review ? review.content : REVIEW_WRITE_TEXT}
          </Typography>
        </Grid>
        <Grid item xs={12} align='center'>
          {/* Review 'Write' button. */}
          <ReviewWriteButton 
            isWrite={review === undefined} 
            onClick={this.handleReviewButtonClick} />
        </Grid>
      </Fragment>
    );
  }
}

EventReview.propTypes = {};

export default withRouter(EventReview);
