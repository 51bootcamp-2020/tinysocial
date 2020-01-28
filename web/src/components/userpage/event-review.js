import {
  Dialog,
  Grid,
  Typography,
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
    this.handleDone = this.handleDone.bind(this);
    this.state = {
      openWritePanel: false,
      title: '',
      content: '',
      isPublic: false,
    };
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

  handleDone(title, content, isPublic) {
    this.setState({
      openWritePanel: false,
      title: title,
      content: content,
      isPublic: isPublic,
    });
  }

  componentDidMount() {
    const {review} = this.props;
    this.setState({
      title: review ? review.title : '',
      content: review ? review.content : '',
      isPublic: review ? review.isPublic : false,
    });
  }

  render() {
    // TODO(mskwon1): make event  Id as a context.
    const {bookTitle, eventId} = this.props;
    const review = {
      title: this.state.title,
      content: this.state.content,
      isPublic: this.state.isPublic,
    };

    return (
      <Fragment>
        <Grid item sm></Grid>
        <Grid item xs={12} align='center' style={{margin: '15px'}}>
          {/* Review title, null if title is undefined. */}
          <Typography variant='subtitle2'
            align='left'
            style={{fontWeight: 'bold'}}>
            {this.state.title === '' ? null : this.state.title}
          </Typography>
          {/* Review content, sample write text if content is undefined.  */}
          <Typography variant='body2' align='left'>
            {this.state.title === '' ? REVIEW_WRITE_TEXT : this.state.content}
          </Typography>
        </Grid>
        <Grid item sm></Grid>
        <Grid item xs={12} align='center'>
          {/* Review 'Write' button. */}
          <ReviewWriteButton userHasReview={review}
            onClick={this.handleReviewButtonClick} />
        </Grid>
        <Dialog open={this.state.openWritePanel}
          onClose={this.handleClose} fullWidth>
          <ReviewWritePanel eventId={eventId}
            bookTitle={bookTitle}
            review={review}
            onClose={this.handleClose}
            handleDone={this.handleDone}
          />
        </Dialog>
      </Fragment>
    );
  }
}

EventReview.propTypes = {};

export default withRouter(EventReview);
