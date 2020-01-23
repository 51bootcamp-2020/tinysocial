import React from 'react';
import CommonEvent from '../components/eventdetail/commonevent';
import BookClub from '../components/eventdetail/bookclub';
import Ticket from '../components/eventdetail/ticket';
import {
  Hidden,
  Divider,
} from '@material-ui/core';

function Eventdetail() {
  return (
    <div>
      <CommonEvent/>
      <BookClub/>
      <Hidden smUp>
        <Divider/>
        <Ticket/>
      </Hidden>
    </div>
  );
}

export default Eventdetail;