import EventCardsQuery from '../components/event-cards-query';
import Footer from '../components/navigation/footer';
import Grid from '@material-ui/core/Grid';
import LandingDescription from '../components/landing-description';
import LandingViewButton from '../components/landing-view-button';
import React, {Component} from 'react';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.pageSize = 6;
  }

  render() {
    const {classes} = this.props;
    return (
        <Grid container justify="space-between">
          <Grid item xs={12}>
            <LandingDescription />
          </Grid>
          <Grid item xs={12} style={{paddingLeft: '2%', paddingRight: '2%'}}>
            <LandingViewButton />
          </Grid>
          <Grid item xs={12} style={{paddingLeft: '2%', paddingRight: '2%'}}>
            <EventCardsQuery pageSize={this.pageSize}/>
            <Footer/>
          </Grid>
        </Grid>
    );
  }
}

Landing.propTypes = {};

export default Landing;
