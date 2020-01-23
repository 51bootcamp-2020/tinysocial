import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';

// TODO(YoonYeoHwan): Combine with another useStyles(constants.js) after merging
const useStyles = makeStyles(theme => ({
  tags: {
    margin: 3,
    borderRadius: 5,
    borderColor: '#c7c7c7',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 5,
    paddingBottom: 5,
  },
}));

function Tags() {
  const classes = useStyles();
  return (
      // TODO(YoonYeoHwan): Get event tags from query.
      <div>
        <Grid container direction='row'>
          <Box className={classes.tags} border={1}>
            <Typography variant='body2'>
              Science
            </Typography>
          </Box>
          <Box className={classes.tags} border={1}>
            <Typography variant='body2'>
              History
            </Typography>
          </Box>
          <Box className={classes.tags} border={1}>
            <Typography variant='body2'>
              Non fiction
            </Typography>
          </Box>
          <Box className={classes.tags} border={1}>
            <Typography variant='body2'>
              tag
            </Typography>
          </Box>
          <Box className={classes.tags} border={1}>
            <Typography variant='body2'>
              Silicon Valley Bootcamp
            </Typography>
          </Box>
        </Grid>
      </div>
  );
}

export default Tags;
