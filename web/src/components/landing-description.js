import {Container,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const landing_bg = require('../assets/landing-bg.jpg');
const benefit = [
  require('../assets/benefit1.png'),
  require('../assets/benefit2.png'),
  require('../assets/benefit3.png'),
];

// Main Description css style
const MainDescriptionStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    backgroundImage: `url(${landing_bg})`,
    backgroundSize: 'cover',
    color: 'white',
    height: 400,
    justifyContent: 'center',
    textAlign: 'center',
  },
}));

// Sub Description css style
const SubDescriptionStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
    marginBottom: 50,
  },
  img: {
    width: 100,
    height: 100,
  },
  text: {
    textAlign: 'center',
  },
}));

// Main Description in Landing Page
function MainLandingDescription() {
  const mainDescriptionStyles = MainDescriptionStyles();
  return (
    // TODO(Lhyejin): Add actual text
    <Grid container className={mainDescriptionStyles.root}>
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
  );
}

// Sub Description in Landing Page
function SubLandingDescription() {
  const subDescriptionStyles = SubDescriptionStyles();
  return (
    <Container maxWidth='xl' className={subDescriptionStyles.root}>
      <Grid container justify="space-between" className={subDescriptionStyles.text}>
        {/* TODO(Lhyejin): Add actual text */}
        <Grid item xs='auto' sm={3}>
          <img src={benefit[0]} className={subDescriptionStyles.img} />
          <Typography variant="h6" gutterBottom>
            Learn from a guru
          </Typography>
          <Typography>
            Lorem ipsum door sit amet, consectetur adipiscing
            elit, sed do elusmo
          </Typography>
        </Grid>
        <Grid item xs='auto' sm={3}>
          <img src={benefit[1]} className={subDescriptionStyles.img} />
          <Typography variant="h6" gutterBottom>
            Read with like-minded friends
          </Typography>
          <Typography>
            Lorem ipsum door sit amet, consectetur adipiscing
            elit, sed do elusmo
          </Typography>
        </Grid>
        <Grid item xs='auto' sm={3}>
          <img src={benefit[2]} className={subDescriptionStyles.img} />
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
  );
}

// Description in Landing Page
export default function LandingDescription() {
  return (
    <React.Fragment>
      <MainLandingDescription />
      <SubLandingDescription />
    </React.Fragment>
  );
}
