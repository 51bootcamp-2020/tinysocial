import React, {Component} from 'react';
import 'typeface-roboto';
import {Grid, Paper, ButtonBase, Typography} from '@material-ui/core';
import {withRouter} from 'react-router-dom';

// Styles
const eventNameStyle = {
  fontWeight: 300,
  fontFamily: 'Roboto',
  fontSize: '20px',
  fontWeight: 'normal',
  letterspacing: 'normal',
  lineHeight: 1,
};

const bookTitleStyle = {
  fontWeight: 300,
  fontFamily: 'Roboto',
  fontSize: '15px',
  fontWeight: 'normal',
  letterspacing: 'normal',
  lineHeight: 1,
};

const priceStyle = {
  fontFamily: 'Roboto',
  fontSize: '20px',
  fontWeight: 500,
  textAlign: 'right',
};

const cancelBtnStyle = {
  cursor: 'pointer',
  color: '#009688',
  fontFamily: 'Roboto',
  fontSize: '15px',
  fontWeight: 500,
};

// Todo(Myoung-hee): Redirect to error page when error occured.
// Purchase Event Item box component.
class PurchaseEventItem extends Component {
  constructor(props) {
    super(props);
  }

  // Redirect to eventlist page or root page if the cancel button is clicked.
  cancelBtnRedirect = () => {
    if (this.props.eventId != '') {
      // Todo(Myoung-hee) : Change history to event detail with id.
      this.props.history.goBack();
    } else this.props.history.push('/');
  };

  render() {
    return (
        // Purchase event item with event information props received from checkout page.
        <Paper style={{padding: '5%', marginTop: '3%'}}>
          <Grid container spacing={2} style={{height: '150px'}}>
            <Grid item xs={3} sm={2}>
              <ButtonBase style={{width: '100%', height: '80%'}}>
                <img alt="complex"
                     src={this.props.imageUrl}
                     style={{width: '100%', height: '100%'}}/>
              </ButtonBase>
            </Grid>
            <Grid item xs={9} sm={10} container direction="row" spacing={1}>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1"
                            style={eventNameStyle}>
                  {this.props.eventName}
                </Typography>
                <Typography gutterBottom variant="subtitle2"
                            style={bookTitleStyle}>
                  {this.props.bookTitle}
                </Typography>
              </Grid>
              <Grid item xs={12} style={{paddingTop: '10px'}}>
                <Typography variant="subtitle1" align='right'
                            style={priceStyle}>${this.props.price}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justify="flex-end" style={{marginTop: '3%'}}>
            <Grid item>
              {/* Cancel Button */}
              <Typography variant="body2" style={cancelBtnStyle}
                          onClick={this.cancelBtnRedirect}>
                Cancel
              </Typography>
            </Grid>
          </Grid>
        </Paper>
    );
  }
}

export default withRouter(PurchaseEventItem);
