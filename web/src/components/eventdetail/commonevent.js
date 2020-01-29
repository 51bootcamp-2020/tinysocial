import {
  Grid,
  Hidden,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Tags from './tags';
import Ticket from './ticket';

class CommonEvent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Grid container direction="row" alignContent='space-between'>
          <Grid item style={{padding: 15}}>
            <Grid style={{marginBottom: 10}}>
              <Typography variant='h5'>
                {this.props.children.title}
              </Typography>
            </Grid>
            <Grid style={{marginBottom: 10, marginTop: 10}}>
              <Tags event={this.props.children}>
                {this.props.children}
              </Tags>
            </Grid>
            <Hidden xsDown>
              <Grid container justify='flex-start'>
                <Ticket event={this.props.children}>
                  {this.props.children}
                </Ticket>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </div>
    );
  }
}

CommonEvent.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CommonEvent;
