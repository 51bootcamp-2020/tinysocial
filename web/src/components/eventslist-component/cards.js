import React, {Component, useState} from 'react';

import {
    Card,
    CardDeck,
    CardGroup,
    Button,
    ToggleButton,
    ToggleButtonGroup,
    Jumbotron,
    Container,
    Row,
    Col,
} from 'react-bootstrap';

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

    FeaturedCardComponent = () => {
        let featuredCard = [];
        featuredCard.push(<Jumbotron>
            <Container>
                <Row>
                    <Col xs={6}>
                        <Card.Img style={{width: '80%', maxWidth: '100%'}}
                                  src={require('../images/' + 1 + '.jpg')}/>
                    </Col>
                    <Col>
                        <h1>Featured Event 1</h1>
                        <p>
                            I'm example featured event 1 description.
                        </p>
                        <p>
                            <Button variant="primary">Detail</Button>
                        </p>
                    </Col>
                </Row>


            </Container>
        </Jumbotron>);

        return featuredCard;
    };

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

        return filtersComp;
    };

    CardsComponent = () => {
        let cards = [[]];
        for (let i = 1; i <= 9; i++) {
            if ((i - 1) % 3 === 0)
                cards.push([]);

            cards[cards.length - 1].push(
                <div style={{maxWidth: '33.3%'}}>
                    <Card style={{margin: '2px'}}>
                        <Card.Img variant="top" src={require('../images/' + i + '.jpg')} style={{height: '17rem'}}/>
                        <Card.Body>
                            <Card.Title>Example Event{i}</Card.Title>
                            <Card.Text>
                                Hello, world? I'm Example Event{i}. Nice to meet you.
                            </Card.Text>
                            <Button variant="primary">Detail</Button>
                        </Card.Body>
                    </Card>
                </div>
            );
        }

        let decks = [];
        for (let i = 0; i < cards.length; i++) {
            decks.push(
                <CardGroup>
                    {cards[i]}
                </CardGroup>);
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
                {this.FeaturedCardComponent()}
                <hr/>
                {this.CardsComponent()}
            </div>
        );
    }
}

Cards.propTypes = {};

export default Cards;
