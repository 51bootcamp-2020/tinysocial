import React from 'react';
import {Card, CardContent, Grid, Typography} from '@material-ui/core';
import ReviewWriteButton from './review-write-button';

// These consts are temporary ... will be removed
const EVENT_TITLE = 'Brife Summary of Human History'
const REVIEW_WRITE_TEXT = 'Write a few sentence of what you took away from the book. This is the most powerful way to remember what you read'
const DATE = 'January 29, 2020'
const TIME = '10:30 AM ~ 1:30 AM'
const LOCATION = '11 N Ellsworth Ave San Mateo, CA 94401'

function EventCard(props) {
  return (
    <Card>
      <CardContent>
        <Grid container item xs={12}>
          {/* Book title */}
          <Grid item xs={12} align='center'>
            <Typography variant='h5' paragraph style={{fontWeight:'bold'}}>
              {EVENT_TITLE}
            </Typography>
          </Grid>
          {/* picture */}
          <Grid item xs={6} align='center'>
            <img src={require("../../images/sapiens.png")}/>
          </Grid>
          {/* Date & time + Location */}
          <Grid container item xs={6} align='left' alignItems='center'>
            <Grid item xs={12}>
              <Typography variant='subtitle2' paragraph style={{fontWeight:'bold'}}>
                Date & Time
              </Typography>
              <Typography variant='body2' paragraph>
                {DATE}
                <br/>
                {TIME}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='subtitle2' paragraph style={{fontWeight:'bold'}}>
                Location
              </Typography>
              <Typography variant='body2' paragraph>
                {LOCATION}
              </Typography>
            </Grid>
          </Grid>
          {/* Review write text */}
          <Grid item xs={12} align='center' style={{margin:'30px'}}>
            <Typography variant='body2' align='left'>
              {REVIEW_WRITE_TEXT}
            </Typography>
          </Grid>
          {/* Review write button */}
          <Grid item xs={12} align='center'>
            <ReviewWriteButton />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default EventCard;
