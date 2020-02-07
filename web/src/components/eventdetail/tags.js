import {
  Box,
  Grid,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

class Tags extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const tagList = [];
    const {event} = this.props;
    for (let i in event.tags) {
      tagList.push(
          <Box border={1} style={{
            borderColor: '#c7c7c7',
            borderRadius: 5,
            margin: 3,
            padding: 5,
            textAlign: 'center',
            width: 'max-content',
          }}>
            <Typography variant='body2'>
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
  event: PropTypes.element.isRequired,
}

export default Tags;
