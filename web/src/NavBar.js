import React from 'react';
import NavBarPC from './NavBarPC';
import NavBarMobile from './NavBarMobile';
import {
  withWidth,
  isWidthUp,
} from '@material-ui/core';

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
