import {
  Dialog,
  Grid, 
  Typography
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {Component, Fragment} from 'react';
import ReviewWriteButton from './review-write-button';
import ReviewWritePanel from './review-write';
import {REVIEW_WRITE_TEXT} from '../utils';
import {withRouter} from 'react-router-dom';

class EventReview extends Component {
  constructor(props) {
    super(props);
    this.handleReviewButtonClick = this.handleReviewButtonClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      openWritePanel: false,
    }
  }

  handleReviewButtonClick() {
    this.setState({
      openWritePanel: true,
    });
  }

  handleClose() {
    this.setState({
      openWritePanel: false,
    });
  }

  render() {
    // TODO(mskwon1): make eventId as a context.
    const {review, eventId} = this.props
    // TODO(mskwon1): make query using eventId to get bookTitle.
    const bookTitle = 'Sapiens'

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
        <Dialog open={this.state.openWritePanel} onClose={this.handleClose} fullWidth>
          <ReviewWritePanel 
            eventId={eventId}
            review={review}
            onClose={this.handleClose}
          />
        </Dialog>
      </Fragment>
    );
  }
}

EventReview.propTypes = {};

export default withRouter(EventReview);
