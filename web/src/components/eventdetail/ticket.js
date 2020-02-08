import Cookies from 'js-cookie';
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
    this.state = {
      scheduleOver: false,
    };
  }
  componentDidMount() {
    const today = new Date();
    const {schedule} = this.props.children;
    const lastSchedule = new Date(schedule[schedule.length - 1].startDateTime);
    if (today - lastSchedule > 0) {
      this.setState({
        scheduleOver: true,
      });
    }
  }
  isParticipated = () => {
    if (Cookies.get('token')) {
      const participants = this.props.children.participants;
      const {userId} = this.props;
      for(let i = 0; i<participants.length; ++i) {
        if(participants[i].id === userId) return true;
      }
      return false;
    } else return false;
  }
  ticketMessage = () => {
    if(this.state.scheduleOver) {
      return (
          <Fab style={{
            width: '80%', height: 40, marginTop: 10, color: 'white',
            background: 'gray', textTransform: 'none'}}
               variant='extended' disabled={true}>
            <div>This event is closed</div>
          </Fab>)
    } else if(this.isParticipated()) {
      return (
          <Fab style={{
            width: '80%', height: 40, marginTop: 10, color: 'white',
            background: 'gray', textTransform: 'none'}}
               variant='extended' disabled={true}>
            <div>You already bought this event</div>
          </Fab>)
    } else {
      return (
          <Fab style={{
            width: '80%', height: 40, marginTop: 10, color: 'white',
            background: '#009688', textTransform: 'none', outline: 0}}
               onClick={() => this.props.history.push({
                 pathname: '/checkout',
                 search: `?id=${this.props.children.id}`,
               })}
               variant='extended'>
            <div>Ticket</div>
          </Fab>)
    }
  }
  render() {
    return (
      <Grid container
        direction='column'
        justify='center'
        alignItems='center'
        style={{marginTop: 10, marginBottom: 20}}>
        <Typography variant='h6' style={{color: 'black'}}>
          ${this.props.children.price ? this.props.children.price : 0}
        </Typography>
        {this.ticketMessage()}
      </Grid>
    );
  }
}

Ticket.propTypes = {
  children: PropTypes.object.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(Ticket);
