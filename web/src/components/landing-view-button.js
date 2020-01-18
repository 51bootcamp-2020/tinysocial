import React, {Component} from 'react';
import {Redirect} from 'react-router';
import {Button,
        Grid,
        Box} from '@material-ui/core';

export default function LandiingViewButton() {
  return (
      <Grid container justify="space-between">
        <Grid item xs={1}>
          <Box>Popular</Box>
        </Grid>
        <Grid item xs={1}>
          <Button> View all </Button>
        </Grid>
      </Grid>

  )
}