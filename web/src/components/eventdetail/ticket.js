import {
  Fab,
  Grid,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import {
  withRouter,
} from 'react-router-dom';

class Ticket extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid container
        direction='column'
        justify='center'
        alignItems='center'
        style={{marginTop: 10, marginBottom: 20}}>
        <Typography variant='h6'>
          ${this.props.children.price ? this.props.children.price : 0}
        </Typography>
        <Fab style={{
          width: '80%',
          height: 40,
          marginTop: 10,
          color: 'white',
          background: '#009688',
          textTransform: 'none'}}
        onClick={() => {
          this.props.history.push({
            pathname: '/checkout',
            search: `?id=${this.props.children.id}`,
          });
        }}
        variant='extended'>
          <div>
            Ticket
          </div>
        </Fab>
      </Grid>
    );
  }
}

Ticket.propTypes = {
  children: PropTypes.element.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(Ticket);
