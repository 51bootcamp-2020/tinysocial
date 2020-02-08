import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Grid, Typography,
} from '@material-ui/core';
import {
  createMuiTheme,
  withStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import Datetime from './dateTime';
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

// Event Cards css style
const eventCardStyle = {
  cards: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '2%',
  },
  cardContent: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical',
    wordBreak: 'keep-all'
  },
  subTitleText: {
    height: '20px',
    fontFamily: 'LibreFranklin',
    fontSize: '14px',
    fontStretch: 'normal',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 1.43,
    letterSpacing: '0.25px',
    color: 'rgba(0, 0, 0, 0.87)'
  },
  card: {
    height: '450px',
    backgroundColor: '#ffffff',
    margin: '0 7% 10% 7%',
  }
};

// Overriding Card Component css style
const theme = createMuiTheme({
  overrides: {
    MuiCardHeader: {
      root: {
        height: '20%',
        padding: '2% 3% 3% 3%'
      },
      content: {
        width: '80%',
        wordBreak: 'keep-all',
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
        textOverflow: 'ellipsis',
        textTransform: 'capitalize',
      }
    },
    MuiCardContent: {
      root: {
        height: '20%',
        paddingTop: 0,
      },
    },
  },
});

class EventCards extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Set Scroll Event Listener
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // Remove Scroll Event Listener
    window.removeEventListener('scroll', this.handleScroll);
  }

  // Scroll Event Handler
  handleScroll = (e) => {
    if (
      window.scrollY + e.target.scrollingElement.clientHeight >=
      e.target.scrollingElement.scrollHeight
    ) {
      this.props.onLoadMore();
    }
  };

  /**
   *  Redirect to event detail page, When each card is clicked
   *  @param {int} eventId
   */
  CardClicked = (eventId) => {
    return this.props.history.push({
      pathname: '/eventdetail',
      search: `?id=${eventId}`,
    });
  };

  /**
   *  Check Schedule Date of each Event
   *  @param {int} cardIndex : Event Card Index
   *  @return {(boolean|number|string)[]}
   */
  FilterSchedule = (cardIndex) => {
    // If Schedule is null, return false
    if (this.props.events[cardIndex].schedule === undefined ||
      this.props.events[cardIndex].schedule.length === 0)
      return [false, -1, 'No Schedule'];

    const nowDate = new Date();
    let scheduleDate = null;
    for(let scheduleIndex = 0;
      scheduleIndex < this.props.events[cardIndex].schedule.length;
      ++scheduleIndex){
      scheduleDate = new Date(this.props.events[cardIndex].
        schedule[scheduleIndex].startDateTime);
      if(scheduleDate > nowDate){
        return [true, scheduleIndex, <Datetime>{this.props.events[cardIndex].
          schedule[scheduleIndex]}</Datetime>]
      }
    }
    return [true, this.props.events[cardIndex].schedule.length - 1, 'Ended']
  };

  // Event Cards Component
  Cards = () => {
    const {classes} = this.props;
    const cards = [];
    // Push each card component in cards
    for (let cardIndex = 0; cardIndex < this.props.events.length; cardIndex++){
      // Check Schedule
      let [isSchedule, scheduleIndex, scheduleText]
        = this.FilterSchedule(cardIndex);
      cards.push(
        <Grid item xs={12} sm={6} md={4} key={this.props.events[cardIndex].id}>
            <Card value={this.props.events[cardIndex].id}
                  className={classes.card}
                  key={this.props.events[cardIndex].id}
                  onClick={
                    () => this.CardClicked(this.props.events[cardIndex].id)}>
              <CardActionArea style={{height:'100%'}}>
              {/* Image section of Card */}
                <CardMedia
                  component="img"
                  alt="CardsImage"
                  height="55%"
                  image={this.props.events[cardIndex].thumbnailUrl}
                  title="Cards Image"/>
                {/* Header section of Card */}
                <CardHeader avatar={<Avatar alt="Example User Name"
                            src={this.props.events[cardIndex].host.profileImgUrl}/>}
                            title={this.props.events[cardIndex].title}
                            subheader={
                              <div>
                                <Typography className={classes.subTitleText}>
                                  {scheduleText}
                                </Typography>
                                { isSchedule &&
                                  <Typography className={classes.subTitleText}>
                                    {this.props.events[cardIndex]
                                      .schedule[scheduleIndex].city + ', ' +
                                    this.props.events[cardIndex]
                                      .schedule[scheduleIndex].state}
                                  </Typography>
                                }
                              </div>} />
                {/* Content section of Card */}
                <CardContent>
                  <Typography className={classes.cardContent}>
                    {this.props.events[cardIndex].description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </Grid>
      );
    }
    return cards;

  };
  // Render of Event Cards
  render() {
    const {classes} = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Grid container justify='space-around'
              className={classes.cards}>
          <this.Cards />
        </Grid>
      </ThemeProvider>);
  }
}

EventCards.propTypes = {};

export default withRouter(withStyles(eventCardStyle)(EventCards));
