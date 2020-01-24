import {Container,
        Grid,
        Typography
} from '@material-ui/core';
import React from 'react';
import LandingViewButton from './landing-view-button';
import { makeStyles } from '@material-ui/core/styles';

const landing_bg = require('../assets/landing-bg.jpg');
const benefit = [
  require('../assets/benefit1.png'),
  require('../assets/benefit2.png'),
  require('../assets/benefit3.png')
];

// First Body Details css style
const FirstBodyStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    backgroundImage: `url(${landing_bg})`,
    backgroundSize: 'cover',
    color:'white',
    height: 400,
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%'
  },
}));

// Second Body Details css style
const SecondBodyStyles = makeStyles(theme => ({
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

// First Body Details in Landing Page
function FirstBodyDetails() {
  const firstBodyStyles = FirstBodyStyles();
  return(
    // TODO(Lhyejin): Add actual text
    <Grid container className={firstBodyStyles.root}>
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
  )
}

// Second Body Details in Landing Page
function SecondBodyDetails() {
  const secondBodyStyles = SecondBodyStyles();
  return (
    <Container maxWidth='xl' className={secondBodyStyles.root}>
      <Grid container justify="space-between" className={secondBodyStyles.text}>
        {/* TODO(Lhyejin): Add actual text */}
        <Grid item xs='auto' sm={3}>
          <img src={benefit[0]} className={secondBodyStyles.img} />
          <Typography variant="h6" gutterBottom>
            Learn from a guru
          </Typography>
          <Typography>
            Lorem ipsum door sit amet, consectetur adipiscing
            elit, sed do elusmo
          </Typography>
        </Grid>
        <Grid Item xs='auto' sm={3}>
          <img src={benefit[1]} className={secondBodyStyles.img} />
          <Typography variant="h6" gutterBottom>
            Read with like-minded friends
          </Typography>
          <Typography>
            Lorem ipsum door sit amet, consectetur adipiscing
            elit, sed do elusmo
          </Typography>
        </Grid>
        <Grid item xs='auto' sm={3}>
          <img src={benefit[2]} className={secondBodyStyles.img} />
          <Typography variant="h6" gutterBottom>
            Read, drink and be merry
          </Typography>
          <Typography>
            Lorem ipsum door sit amet, consectetur adipiscing
            elit, sed do elusmo
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

// Body Details in Landing Page
export default function LandingBodyDetails() {
  return (
    <React.Fragment>
      <FirstBodyDetails />
      <SecondBodyDetails />
      <LandingViewButton />
    </React.Fragment>
  )
}