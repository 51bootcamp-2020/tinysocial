import React, {Component, Fragment} from 'react';
import {Grid, Typography} from '@material-ui/core';
import ReviewWriteButton from './review-write-button';
import {REVIEW_WRITE_TEXT} from '../utils';
import {withRouter} from 'react-router-dom';

class Review extends Component {
  constructor(props) {
    super(props);
    this.handleReviewButtonClick = this.handleReviewButtonClick.bind(this)
  }

  handleReviewButtonClick() {
    // Redirect to review write page.
    this.props.history.push({
      pathname: '/review-write',
      state: {
        // TODO(mkswon1): send user id too.
        eventId: this.props.id
      }
    })
  }

  render() {
    const {review} = this.props
    return (
      <Fragment>
        <Grid item xs={12} align='center' style={{margin:'15px'}}>
          <Typography 
            variant='subtitle2' 
            align='left' 
            style={{fontWeight:'bold'}}>
            {review ? review.title : null}
          </Typography>
          <Typography variant='body2' align='left'>
            {review ? review.content : REVIEW_WRITE_TEXT}
          </Typography>
        </Grid>
        <Grid item xs={12} align='center'>
          <ReviewWriteButton 
            write={review === undefined} 
            onClick={this.handleReviewButtonClick} />
        </Grid>
      </Fragment>
    );
  }
}

export default withRouter(Review);
