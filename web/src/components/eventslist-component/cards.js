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

    //will add Skeleton component during loading
    CardsComponent = () => {
        let cards = [[]];
        for (let i = 1; i <= 9; i++) {
            if ((i - 1) % 3 === 0)
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
                                image={require('../images/' + i + '.jpg')}
                                title="Cards Image"
                            />
                        {/*<Card.Img variant="top" src={require('../images/' + i + '.jpg')} style={{height: '17em'}}/>*/}
                            <CardContent>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar alt="Example User Name" src={require('../images/' + i + '.jpg')} />

                                    </ListItemAvatar>
                                    <ListItemText primary={'Card Title'+i} secondary="July 20, 2014" />
                                </ListItem>
                                <Typography>
                                    Hello, world? I'm Example Event{i}. Nice to meet you.
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
                {this.CardsComponent()}
            </div>
        );
    }
}

Card.propTypes = {};

export default Cards;
