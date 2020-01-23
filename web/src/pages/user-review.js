import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Grid,
  Card,
  CardContent,
} from '@material-ui/core'
import ReviewWriteButton from '../components/userpage/review-write-button'

const REVIEW_WRITE_TEXT = 'Write a few sentence of what you took away' +
  ' from the book. This is the most powerful way to remember what you read';
const BOOK_TITLE = 'Sapiens';
const BOOK_AUTHOR = 'Yuval Harari';

class UserReview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {reviewId} = this.props.location.state
    return(
      // TODO(mskwon1): add query for getting the review content.
      <Card>
        <CardContent>
          <Grid container item xs={12}>
            {/* Book picture */}
            <Grid item xs={6} align='center'>
              <img src={require("../images/sapiens.png")}/>
            </Grid>
            {/* Book title + author */}
            <Grid container item xs={6} align='left' alignItems='flex-start'>
              <Grid item xs={12}>
                <Typography variant='h5'>
                  {BOOK_TITLE}
                </Typography>
                <Typography variant='body2' paragraph>
                  By {BOOK_AUTHOR}
                </Typography>
              </Grid>
            </Grid>
            {/* Review write text, must show  */}
            <Fragment>
              <Grid item xs={12} align='center' style={{margin:'30px'}}>
                <Typography variant='body2' align='left'>
                  {REVIEW_WRITE_TEXT}
                </Typography>
              </Grid>
              {/* Review write button */}
              <Grid item xs={12} align='center'>
                <ReviewWriteButton />
              </Grid>
            </Fragment>
          </Grid>
        </CardContent>
      </Card>
    )
  }
}

export default UserReview;
