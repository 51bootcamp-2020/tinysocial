import React, {Component} from 'react';

import {
    ToggleButton,
    ToggleButtonGroup,
    Jumbotron
} from 'react-bootstrap';

import {
    Avatar,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    Typography,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText
} from '@material-ui/core';

import {gql} from 'apollo-boost';
import { Query } from "react-apollo";

/* Query requests event list to server */
const EVENT_LIST_REQUEST_QUERY = gql`
    query{
        events(pageSize: 9){
            cursor,
            hasMore,
            events{
                id,
                title,
                description
            }
        }
    }`;

class Cards extends Component {
    constructor(props) {
        // get area selection from props
        super(props);

        // save the arrays of filter names and filter toggle(selected or not) in state
        const filterNames = ['BookClub', 'Movie', 'Wine', 'SciFi', 'Sport'];
        const filterToggles = [];

        for (let j = 0; j < filterNames.length; j++)
            filterToggles.push(false);

        this.state = {
            filterNames: filterNames,
            filterToggles: filterToggles,
        };
    }

    // Function for update filter toggled value to new value
    toggleHandler = val => {
        console.log('toggle:', val);

        const newFilterToggles = [];
        for (let j = 0; j < this.state.filterToggles.length; j++)
            newFilterToggles.push(false);
        for (let j = 0; j < val.length; j++)
            newFilterToggles[val[j]] = true;

        this.setState({
            filterToggles: newFilterToggles,
        });
    };

    // Function for display toggle button group for event filter
    ToggleButtonGroupControlled = () => {
        const filtersComp = [];

        // Match each toggle button to filterNames for display
        for (let i = 0; i < this.state.filterNames.length; i++) {
            filtersComp.push(
                <ToggleButton id={i} value={i}>
                    {this.state.filterNames[i]}
                </ToggleButton>);
        }

        // Show the filter-button group
        return (
            <ToggleButtonGroup type="checkbox" onChange={this.toggleHandler}>
                {filtersComp}
            </ToggleButtonGroup>);
    };

    // Not Used:: Featured Information component for landing page
    FeaturedInfoComponent = () => {
        let featuredInfo = [];
        featuredInfo.push(
        )
        return featuredInfo;
    };

    // Will add Skeleton component during loading

    Items = () => {
        return (<Query query={EVENT_LIST_REQUEST_QUERY}>
            {({loading, error, data}) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;


                return this.CardsComponent(data.events.events);
            }}
        </Query>);
    };

    //will add Skeleton component during loading
    CardsComponent = (items) => {
        let cards = [[]];

        for (let i = 0; i < items.length; i++) {
            if (i % 3 === 0)
                cards.push([]);

            // Push each card component in cards
            cards[cards.length - 1].push(
                <Grid item xs={4} >
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
                                        <Avatar alt="Example User Name" src={require('../images/' + (i + 1) + '.jpg')} />
                                    </ListItemAvatar>
                                    <ListItemText primary={items[i].title} secondary="July 20, 2014" />
                                </ListItem>
                                <Typography style={{height: '150px'}}>
                                    {items[i].description}
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
                <Grid container xs={12} spacing={2} justify='center'>
                    {cards[i]}
                </Grid>

            );
        }

        return decks;
    };

    // Render of cards component
    render() {
        return (
            <div>
                <p>This is {this.props.area}</p>
                <this.ToggleButtonGroupControlled/>
                <br/>
                <hr/>
                {this.Items()}
            </div>
        );
    }
}

Card.propTypes = {};

export default Cards;
