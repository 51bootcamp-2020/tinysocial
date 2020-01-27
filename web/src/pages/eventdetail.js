import React from 'react';
import BookClub from '../components/eventdetail/bookclub';
import CommonEvent from '../components/eventdetail/commonevent';
import Eventthumbnail from '../components/eventdetail/eventthumbnail';
import Ticket from '../components/eventdetail/ticket';
import {
  Hidden,
  Divider,
  Grid,
} from '@material-ui/core';

function Eventdetail() {
  return (
    <Grid container>
      <Grid item sm={8} xs={12}>
        <Eventthumbnail/>
      </Grid>
      <Grid item sm={4} xs={12}>
        <CommonEvent/>
      </Grid>
      <Grid item sm={8} xs={12}>
        <BookClub/>
      </Grid>
      <Hidden mdUp>
        <Grid item xs={12}>
          <Divider/>
          <Ticket/>
        </Grid>
      </Hidden>
    </Grid>
  );
}

export default Eventdetail;