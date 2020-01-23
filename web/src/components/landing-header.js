import React from 'react';
import {Container,
        Grid,
        Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LandiingViewButton from './landing-view-button';

const landing_bg = require('../assets/landing-bg.jpg');
const benefit = [
  require('../assets/benefit1.png'),
  require('../assets/benefit2.png'),
  require('../assets/benefit3.png')
];

// Main Header css style
const mainHeaderStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundImage: `url(${landing_bg})`,
    backgroundSize: 'cover',
    color:'white',
    textAlign: 'center',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center'
  },

}));

// Sub Explanation css style
const subExplanationStyles = makeStyles(theme => ({
  root: {
    marginTop: 100,
    marginBottom: 50,
    marginLeft: 20,
    marginRight: 20
  },
  img: {
    width: 100,
    height: 100
  },
  text: {
    textAlign: 'center'
  }
}));

// Sub Header in Landing Page
function LandingSubExplanation() {
  const subStyle = subExplanationStyles();
  return (
    <div className={subStyle.root}>
      <Grid container justify="space-between" className={subStyle.text}>
        <Grid item xs='auto' sm={3}>
          <img src={benefit[0]} className={subStyle.img} />
          <Typography variant="h6" gutterBottom>
            Learn from a guru
          </Typography>
          <Typography>
            Lorem ipsum door sit amet, consectetur adipiscing
            elit, sed do elusmo
          </Typography>
        </Grid>
        <Grid Item xs='auto' sm={3}>
          <img src={benefit[1]} className={subStyle.img} />
          <Typography variant="h6" gutterBottom>
            Read with like-minded friends
          </Typography>
          <Typography>
            Lorem ipsum door sit amet, consectetur adipiscing
            elit, sed do elusmo
          </Typography>
        </Grid>
        <Grid item xs='auto' sm={3}>
          <img src={benefit[2]} className={subStyle.img} />
          <Typography variant="h6" gutterBottom>
            Read, drink and be merry
          </Typography>
          <Typography>
            Lorem ipsum door sit amet, consectetur adipiscing
            elit, sed do elusmo
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

// Header in Landing Page including main & sub
export default function LandingHeader() {
  const mainStyle = mainHeaderStyles();
  return (
    <React.Fragment>
      <Grid container className={mainStyle.root}>
        <Grid item xs={12}>
          <Typography variant='h4' paragraph>
            Reinventing the Book club
          </Typography>
          <Typography variant='h6' paragraph>
            Meaningful Conversations With<br/>
            Like-Minded People
          </Typography>
        </Grid>
      </Grid>
    <Container maxWidth='xl'>
      <LandingSubExplanation />
    </Container>
    <Container maxWidth='xl'>
      <LandiingViewButton/>
    </Container>

    </React.Fragment>
  )
}