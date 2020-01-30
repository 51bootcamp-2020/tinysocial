import React, {Component} from 'react';
import 'typeface-roboto';
import {Grid, Paper, ButtonBase, Typography} from '@material-ui/core';
import {withRouter} from 'react-router-dom';

const eventNameStyle = {
  fontWeight: 300,
  fontFamily: 'Roboto',
  fontSize: '20px',
  fontWeight: 'normal',
  letterspacing: 'normal',
  lineHeight: 1,
};

const priceStyle = {
  fontFamily: 'Roboto',
  fontSize: '20px',
  fontWeight: 500,
};

const removeBtnStyle = {
  cursor: 'pointer',
  color: '#009688',
  fontFamily: 'Roboto',
  fontSize: '14px',
  fontWeight: 500,
};

// Purchase Event Item box component.
class PurchaseEventItem extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   price: props.price,
    //   eventName: props.eventName,
    //   schedule: props.schedule,
    //   imageUrl: props.imageUrl,
    // };
  }

  render() {
    return (
        <Paper style={{padding: '5%', marginTop: '3%'}}>
          <Grid container spacing={2}>
            <Grid item xs={3} sm={2}>
              <ButtonBase>
                <img style={{width: '100%', height: '70%'}} alt="complex"
                     src={require('./images/1.jpg')}/>
              </ButtonBase>
            </Grid>
            <Grid item xs={7} sm container direction="row" spacing={1}>
              <Grid item xs={10} sm={7}>
                <Typography gutterBottom variant="subtitle1"
                            style={eventNameStyle}>
                  {this.props.eventName}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={2} style={{textAlign: 'right', paddingTop: '40px'}}>
              <Typography variant="subtitle1"
                          style={priceStyle}>{this.props.price}</Typography>
            </Grid>
          </Grid>
          <Grid container justify="flex-end" style={{marginTop: '10%'}}>
            <Grid item>
              <Typography variant="body2" style={removeBtnStyle} onClick={()=> {this.props.history.goBack()}}>
                Remove
              </Typography>
            </Grid>
          </Grid>
        </Paper>
    );
  }
}

export default withRouter(PurchaseEventItem);
