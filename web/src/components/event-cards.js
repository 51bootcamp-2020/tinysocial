import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Avatar, Button,
  Card,
  CardActionArea, CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid, Typography,
} from '@material-ui/core';
import {withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

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

// Event Card css overriding
const theme = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        height: '450px',
        backgroundColor: '#ffffff',
        margin: '0 10% 10% 10%'
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
        height: '30%'
      }
    }
  }
});

class EventCards extends Component {
  constructor(props) {
    super(props);
  }

  CardClicked = () => {
    console.log('click success')
  };

  render() {
    const {classes} = this.props;
    const cards = [];

    for (let cardIndex = 0; cardIndex < this.props.children.length; cardIndex++) {

      if (cardIndex % 3 === 0) {
        cards.push([]);
      }
      // Push each card component in cards

      /* image={this.props.children[cardIndex].thumbnailUrl */
      /* src={this.props.children[cardIndex].host.profileImgUrl} */
      /*  */
      cards[cards.length - 1].push(
          <Grid item xs={12} sm={6} md={4} key={this.props.children[cardIndex].id} >
              <Card className={classes.card}
                    onClick={this.CardClicked}>
                  {/* Image section of Card */}
                  <CardMedia
                    component="img"
                    alt="CardsImage"
                    image={require('./images/' + (cardIndex + 1) + '.jpg')}
                    title="Cards Image"
                  />
                  {/* Header section of Card */}
                  <CardHeader
                      avatar={
                        <Avatar alt="Example User Name"
                                src={require('./images/' + (cardIndex + 1) + '.jpg')}
                        />
                      }
                      title={this.props.children[cardIndex].title}
                      subheader="September 14, 2016"
                  />
                  {/* Content section of Card */}
                  <CardContent>
                    <Typography
                                className={classes.cardContent}>
                      {this.props.children[cardIndex].description}
                    </Typography>
                  </CardContent>
                {/* Button below the card content */}
                <CardActions>
                  <Button color="primary">Detail</Button>
                </CardActions>
              </Card>
          </Grid>,
      );
    }

    const decks = [];
    // Push the cards list in decks
    for (let cardIndex = 0; cardIndex < cards.length; ++cardIndex) {
      decks.push(
          <ThemeProvider theme={theme}>
            <Grid container xs={12} justify='space-around' className={classes.cards}>
              {cards[cardIndex]}
            </Grid>
          </ThemeProvider>
      );
    }
    return decks;
  }
}

EventCards.propTypes = {};

export default withStyles(eventCardStyle)(EventCards);
