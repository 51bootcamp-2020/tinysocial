import {
  Box,
  Grid,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

class Tags extends Component {
  render() {
    const tagList = [];
    const {event} = this.props;
    for (const i in event.tags) {
      tagList.push(
          <Box key={event.tags[i].id} border={1} style={{
            borderColor: '#c7c7c7',
            borderRadius: 5,
            margin: 3,
            padding: 5,
            textAlign: 'center',
            width: 'max-content',
          }}>
            <Typography key={event.tags[i].id} variant='body2'>
              {event.tags[i].name}
            </Typography>
          </Box>,
      );
    }
    return (
      <Grid container direction='row'>
        {tagList}
      </Grid>
    );
  }
}

Tags.propTypes = {
  event: PropTypes.object.isRequired,
};

export default Tags;
