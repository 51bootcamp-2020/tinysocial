import {
  Fab,
  Grid,
  Typography,
} from '@material-ui/core';
import {gql} from 'apollo-boost';
import {
  withRouter,
} from 'react-router-dom';
import React, {Component} from 'react';

class Ticket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventId: '',
      price: '',
    };
  }
  render() {
    const {eventId, price} = this.state;
    return (
      <div>
        <Grid container
          direction='column'
          justify='center'
          alignItems='center'
          style={{marginTop: 10, marginBottom: 20}}>
          {/* TODO(YoonYeoHwan): Get price from query. */}
          <Typography variant='h6'>
            ${this.state.price ? this.state.price : 0}
          </Typography>

          {/* TODO(): Develop payment page and connecting to payment page. */}
          {/* TODO(): Have to make redirect? */}
          <Fab style={{
            width: 300,
            height: 40,
            marginTop: 10,
            color: 'white',
            background: '#009688',
            textTransform: 'none'}}
          onClick={() => {
            this.props.history.push('./payment');
          }}
          variant='extended'>
            <div>
              Ticket
            </div>
          </Fab>
        </Grid>
      </div>
    );
  }
}

export default withRouter(Ticket);
