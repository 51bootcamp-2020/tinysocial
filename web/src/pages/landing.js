import EventCardsQuery from '../components/event-cards-query';
import Grid from '@material-ui/core/Grid';
import LandingDescription from '../components/landing-description';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';

// TODO(Lhyejin): Bring user information from server and Fix eventQuery.

// LandingPage css style
const landingPageStyle = {
  root: {
    paddingLeft: '2%',
    paddingRight: '2%',
  }
};

class Landing extends Component {
  constructor(props) {
    super(props);
    this.pageSize = 6;
  }

  render() {
    const {classes} = this.props;
    return (
        <Grid container justify="space-between" className={classes.root}>
          <Grid item xs={12}>
            <LandingDescription />
            <EventCardsQuery pageSize={this.pageSize}/>
          </Grid>
        </Grid>
    );
  }
}

Landing.propTypes = {};

export default withStyles(landingPageStyle)(Landing);
