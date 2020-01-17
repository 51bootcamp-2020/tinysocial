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

        const filterNames = ['BookClub', 'Movie', 'Wine', 'SciFi', 'Sport'];
        const filterToggles = [];

        for (let j = 0; j < filterNames.length; j++)
            filterToggles.push(false);

        this.state = {
            filterNames: filterNames,
            filterToggles: filterToggles,
        };
    }

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

    ToggleButtonGroupControlled = () => {
        const filtersComp = [];

        for (let i = 0; i < this.state.filterNames.length; i++) {
            filtersComp.push(
                <ToggleButton id={i} value={i}>
                    {this.state.filterNames[i]}
                </ToggleButton>);
        }

        return (
            <ToggleButtonGroup type="checkbox" onChange={this.toggleHandler}>
                {filtersComp}
            </ToggleButtonGroup>);
    };

    //Featured Information component for landing page
    FeaturedInfoComponent = () => {
        let featuredInfo = [];
        featuredInfo.push(
        )
        return featuredInfo;
    };

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

            cards[cards.length - 1].push(
                // <div className="col-md-4">
                <Grid item xs={4} >
                    <Card style={{marginBottom: '10px'}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="CardsImage"
                                height="200em"
                                image={require('../images/' + (i + 1) + '.jpg')}
                                title="Cards Image"
                            />
                        {/*<Card.Img variant="top" src={require('../images/' + i + '.jpg')} style={{height: '17em'}}/>*/}
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
                        <CardActions>
                            <Button color="primary">Detail</Button>
                        </CardActions>
                    </Card>
                </Grid>
            );
        }

        let decks = [];
        for (let i = 0; i < cards.length; i++) {
            decks.push(
                // <CardGroup>
                <Grid container xs={12} spacing={2} justify='center'>
                    {cards[i]}
                </Grid>

                // </CardGroup>
            );
        }

        return decks;
    };

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
