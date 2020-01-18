import React from 'react';
import {Container,
        Grid,
        CssBaseline,
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

// Header css style
// TODO(Lhyejin):
const mainHeaderStyles = makeStyles(theme => ({
  main_image: {
    width: '100%',
    height: 500,
    backgroundImage: `url(${landing_bg})`,
    backgroundSize: 'cover',
  },
  main_text: {
    padding: 150,
    color:'white',

  }
}));

// Sub Header css style
const subHeaderStyles = makeStyles(theme => ({
  root: {
    margin: 100
  },
  img: {
    width: 100,
    height: 100,
  }
}));

// Sub Header in Landing Page
function LandingSubHeader() {
  const subStyle = subHeaderStyles();
  return (
      <div className={subStyle.root}>
        <Grid container justify="space-between">
          <Grid item xs={12} sm={3}>
            <img src={benefit[0]} className={subStyle.img} />
            <Typography variant="h6" gutterBottom>
              Learn from a guru
            </Typography>
            <Typography>
              Lorem ipsum door sit amet, consectetur adipiscing
              elit, sed do elusmo
            </Typography>
          </Grid>
          <Grid Item xs={12} sm={3}>
              <img src={benefit[1]} className={subStyle.img} />
              <Typography variant="h6" gutterBottom>
                Read with like-minded friends
              </Typography>
              <Typography>
                Lorem ipsum door sit amet, consectetur adipiscing
                elit, sed do elusmo
              </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
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
      <CssBaseline />
      <Container maxWidth='xl' className={mainStyle.main_image}>
        <div className={mainStyle.main_text}>
          <Typography variant='h4' paragraph align='center'>
            Reinventing the Book club
          </Typography>
          <Typography variant='h6' paragraph align='center'>
            Meaningful Conversations With<br/>
            Like-Minded People
          </Typography>
        </div>
      </Container>
    <Container maxWidth='xl'>
      <LandingSubHeader />
    </Container>
    <Container maxWidth='xl'>
      <LandiingViewButton/>
    </Container>

    </React.Fragment>
  )
}