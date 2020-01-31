import React, {Component} from 'react';
import {Fab, Container, Grid, Typography} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

// Styles
const containerStyle = {
  width: '100%',
  height: '200px',
};

const returnBtnStyle = {
  fontSize: '14px',
  fontWeight: '500',
  color: 'white',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: '0.5px',
  textAlign: 'centter',
};

const h4Style = {
  fontSize: '25px',
  fontFamily: 'Roboto',
  fontWeight: '500',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: '0.25px',
};

// Component when event-user participate is successed after payment.
class ParticipateSuccess extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
        <Container style={{containerStyle}}>
          <Grid container direction="row"
                style={{justifyContent: 'center', textAlign: 'center'}}>
            <Grid item xs={12} style={{paddingTop: '4%', paddingBottom: '12%'}}>
              <CheckCircleOutlineIcon style={{fontSize: 70}}/>
            </Grid>
            <Grid item xs={12} style={{padding: '2%'}}>
              <Typography variant="h4" style={h4Style}>Payment
                Success!</Typography>
            </Grid>
            <Grid item xs={12} style={{padding: '2%'}}>
              <Typography variant="subtitle1" style={{fontSize: '20px'}}>Your
                payment of ${this.props.price} <br/>was successfully completed.</Typography>
            </Grid>
            <Grid item xs={12} style={{padding: '10%'}}>
              {/* Button redirect to homepage. */}
              <Fab
                  variant="extended"
                  style={{
                    width: '220px',
                    height: '44px',
                    backgroundColor: '#009688',
                  }} onClick={() => this.props.history.push('/')}
              >
                <Typography style={returnBtnStyle}>Return to
                  homepage</Typography>
              </Fab>
            </Grid>
          </Grid>
        </Container>

    );
  }
}

export default withRouter(ParticipateSuccess);
