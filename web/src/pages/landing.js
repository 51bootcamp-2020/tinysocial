import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LandingDescription from '../components/landing-description';
import EventCardsQuery from '../components/event-cards-query';
import {withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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

    this.state = {
      currentCursor: 0
    }
  }

  /**
   * Set cursor received from EventCardsQuery Component to currentCursor state
   * @param cursor {int} : cursor viewed in current landing page
   */
  HandlerCurrentCursor = (cursor) => {
    this.setState({currentCursor: cursor})
  };

  render() {
    const {classes} = this.props;
    return (
        <Grid container justify="space-between" className={classes.root}>
          <Grid item xs={12}>
            <LandingDescription />
            <EventCardsQuery pageSize={6}
                             after={this.state.currentCursor}
                             onCreate={this.HandlerCurrentCursor}/>
          </Grid>
        </Grid>
    );
  }
}

Landing.propTypes = {};

export default withStyles(landingPageStyle)(Landing);
