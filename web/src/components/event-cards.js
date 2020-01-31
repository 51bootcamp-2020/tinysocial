import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid, Typography,
} from '@material-ui/core';
import {createMuiTheme, withStyles, ThemeProvider} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

// Event Cards css style
const eventCardStyle = {
  cards: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '2%',
   },
  cardContent: {
    height: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
};

// Overriding Card Component css style
const theme = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        height: '450px',
        backgroundColor: '#ffffff',
        margin: '0 7% 10% 7%'
      }
    },
    MuiCardHeader: {
      content: {
        width: '80%'
      },
      title: {
        height: '24px',
        fontFamily: 'LibreFranklin',
        fontSize: '19.9px',
        fontWeight: 500,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: '0.25px',
        color: 'rgba(0, 0, 0, 0.87)',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
      },
      subheader: {
        height: '20px',
        fontFamily: 'LibreFranklin',
        fontSize: '14px',
        fontStretch: 'normal',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 1.43,
        letterSpacing: '0.25px',
        color: 'rgba(0, 0, 0, 0.87)',
      }
    },
    MuiCardMedia: {
      img: {
        height: '55%'
      }
    },
    MuiCardContent: {
      root: {
        height: '20%',
        paddingTop: 0
      }
    }
  }
});

class EventCards extends Component {
  constructor(props) {
    super(props);
  }

  // Redirect to event detail page, When each card is clicked
  CardClicked = (eventId) => {
    return this.props.history.push({
      pathname: '/eventdetail',
      search: `?id=${eventId}`
    })
  };

  // Render of Event Cards
  render() {
    const {classes} = this.props;
    const cards = [];

    for (let cardIndex = 0; cardIndex < this.props.events.length; cardIndex++)
    {
      if (cardIndex % 3 === 0) {
        cards.push([]);
      }
      // Push each card component in cards
      cards[cards.length - 1].push(
          <Grid item xs={12} sm={6} md={4} >
              <Card className={classes.card}
                    key={this.props.events[cardIndex].id}
                    value={this.props.events[cardIndex].id}
                    onClick={
                      () => this.CardClicked(this.props.events[cardIndex].id)
                    }
              >
                  {/* Image section of Card */}
                  {/* image={this.props.events[cardIndex].thumbnailUrl */}
                  <CardMedia
                    component="img"
                    alt="CardsImage"
                    image={require('./images/' + (cardIndex + 1) + '.jpg')}
                    title="Cards Image"
                  />
                  {/* Header section of Card */}
                  {/* src={this.props.events[cardIndex].host.profileImgUrl}*/}
                  {/* subheader={this.props.events[cardIndex].schedule[0].startDateTime*/}
                  <CardHeader
                      avatar={
                        <Avatar alt="Example User Name"
                                src={require('./images/' + (cardIndex + 1) + '.jpg')}
                        />
                      }
                      title={this.props.events[cardIndex].title}
                      subheader="September 14, 2016"
                  />
                  {/* Content section of Card */}
                  <CardContent>
                    { /* 장소:{this.props.events[cardIndex].schedule[0].address}*/ }
                    <Typography> 장소 </Typography>
                    <Typography
                                className={classes.cardContent}>
                      {this.props.events[cardIndex].description}
                    </Typography>
                  </CardContent>
              </Card>
          </Grid>,
      );
    }

    // Push the cards list in decks
    const decks = [];
    for (let cardIndex = 0; cardIndex < cards.length; ++cardIndex)
    {
      decks.push(
            <Grid container xs={12} justify='space-around' className={classes.cards}>
              {cards[cardIndex]}
            </Grid>
      );
    }

    return (
      <ThemeProvider theme={theme}>
        {decks}
      </ThemeProvider>);
  }
}

EventCards.propTypes = {};

export default withRouter(withStyles(eventCardStyle)(EventCards));
