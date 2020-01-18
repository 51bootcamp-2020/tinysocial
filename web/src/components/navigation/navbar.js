import {
  isWidthUp,
  withWidth,
} from '@material-ui/core';
import NavBarPC from './navbarpc';
import NavBarMobile from './navbarmobile';
import React from 'react';

function Navbar(props) {
  if (isWidthUp('md', props.width)) {
    return (
        <NavBarPC/>
    );
  }
  return (
      <NavBarMobile/>
  );
}

export default withWidth()(Navbar);
