import {AppBar, Grid, Tabs, Tab} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {Component, Fragment} from 'react';
import {withStyles} from '@material-ui/core/styles';

const styles = (theme) => ({
  indicator: {
    background: '#ffff8c',
  },
});

class ReviewTabs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes, currentTab, onTabChange} = this.props;

    return (
      <Fragment>
        {/* Upcoming / Past header tabs. */}
        <AppBar position="static" style={{background: '#009688'}}>
          <Grid container>
            <Grid item xs sm></Grid>
            <Grid item xs={12} sm={8}>
              <Tabs variant="fullWidth"
                value={currentTab}
                onChange={(event, value) => {
                  onTabChange(value);
                }}
                style={{background: '#009688'}}
                classes={{
                  indicator: classes.indicator,
                }}>
                <Tab value="upcoming" label="Upcoming" style={{
                  textTransform: 'none',
                }}/>
                <Tab value="past" label="Past" style={{
                  textTransform: 'none',
                }}/>
              </Tabs>
            </Grid>
            <Grid item xs sm></Grid>
          </Grid>
        </AppBar>
      </Fragment>
    );
  }
}

ReviewTabs.propTypes = {
  classes: PropTypes.object,
  currentTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(ReviewTabs);
