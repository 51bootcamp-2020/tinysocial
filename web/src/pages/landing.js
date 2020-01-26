import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LandingDescription from '../components/landing-description';
import EventQuery from '../components/event-query';
import {withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const landingPageStyle = {
  root: {
    paddingLeft: '2%',
    paddingRight: '2%',
  }
};

class Landing extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {classes} = this.props;
    return (
        <Grid container justify="space-between" className={classes.root}>
          <Grid item xs='auto'>
            <LandingDescription />
            <EventQuery pageSize='6' />
          </Grid>
        </Grid>
    );
  }
}

Landing.propTypes = {};

export default withStyles(landingPageStyle)(Landing);