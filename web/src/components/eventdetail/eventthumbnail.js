import {
  Grid,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

class Eventthumbnail extends Component {
  render() {
    return (
      <Grid style={{padding: 15, height: 400}}>
        <div style={{height: '100%', width: '100%', overflow: 'hidden'}}>
          <img alt='eventThumbnail' style={{height: '100%', width: '100%',
            objectFit: 'cover'}} src={this.props.children.thumbnailUrl}/>
        </div>
      </Grid>
    );
  }
}

Eventthumbnail.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Eventthumbnail;
