import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Avatar, Button,
    Card,
    CardActionArea, CardActions,
    CardContent,
    CardMedia,
    Grid, ListItem, ListItemAvatar, ListItemText, Typography,
} from '@material-ui/core';


class EventCards extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        let cards = [[]];

        for (let i = 0; i < this.props.children.length; i++) {
            if (i % 3 === 0)
                cards.push([]);

            // Push each card component in cards
            cards[cards.length - 1].push(
                <Grid item xs={4} key={this.props.children[i].id}>
                    <Card style={{marginBottom: '10px'}}>
                        <CardActionArea>
                            {/* Image section of Card */}
                            <CardMedia
                                component="img"
                                alt="CardsImage"
                                height="200em"
                                image={require('../images/' + (i + 1) + '.jpg')}
                                title="Cards Image"
                            />
                            {/* Content section of Card */}
                            <CardContent>
                                <ListItem style={{height: '100px'}}>
                                    <ListItemAvatar>
                                        <Avatar alt="Example User Name"
                                                src={require('../images/' + (i + 1) + '.jpg')} />
                                    </ListItemAvatar>
                                    <ListItemText primary={this.props.children[i].title}
                                                  secondary="July 20, 2014" />
                                </ListItem>
                                <Typography style={{height: '150px'}}>
                                    {this.props.children[i].description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                        {/* Button below the card content */}
                        <CardActions>
                            <Button color="primary">Detail</Button>
                        </CardActions>
                    </Card>
                </Grid>
            );
        }

        let decks = [];
        // Push the cards list in decks
        for (let i = 0; i < cards.length; i++) {
            decks.push(
                <Grid container spacing={2} justify='center'>
                    {cards[i]}
                </Grid>

            );
        }

        return decks;
    }
}

EventCards.propTypes = {};

export default EventCards;
