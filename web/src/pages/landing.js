import EventCardsQuery from '../components/event-cards-query';
import Grid from '@material-ui/core/Grid';
import LandingDescription from '../components/landing-description';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom'

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
    this.currentCursor = 0;
    this.pageSize = 5;
  }

  // Initialize currentCursor, When Redirect Link Button clicked.
  componentWillReceiveProps(nextProps) {
    (nextProps.location.state === 'reload') && (this.currentCursor = 0);
  }

  /**
   * Set cursor received from EventCardsQuery Component to currentCursor
   * @param cursor {int} : cursor viewed in current landing page
   */
  HandlerCurrentCursor = (cursor) => {
    this.currentCursor = 0
  };

  render() {
    const {classes} = this.props;
    return (
        <Grid container justify="space-between" className={classes.root}>
          <Grid item xs={12}>
            <LandingDescription />
            <EventCardsQuery pageSize={this.pageSize}
                             after={this.currentCursor}
                             onCreate={this.HandlerCurrentCursor}/>
          </Grid>
        </Grid>
    );
  }
}

Landing.propTypes = {};

export default withRouter(withStyles(landingPageStyle)(Landing));
