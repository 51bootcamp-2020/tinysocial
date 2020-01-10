import React, {Component, useState} from 'react';

import {Card, CardDeck, Button, ToggleButton, ToggleButtonGroup} from 'react-bootstrap';

class Cards extends Component {
    constructor(props) {
        // get area selection from props
        super(props);

        const filterNames = ['BookClub', "Movie", "Wine", "SciFi", "Sport"];
        const filterToggles = [];

        for(let j = 0; j < filterNames.length; j++)
            filterToggles.push(false);

        this.state = {
            filterNames: filterNames,
            filterToggles: filterToggles,
        };
    }

    toggleHandler = val => {
        console.log('toggle:', val);

        const newFilterToggles = [];
        for(let j = 0; j < this.state.filterToggles.length; j++)
            newFilterToggles.push(false);
        for(let j = 0; j < val.length; j++)
            newFilterToggles[val[j]] = true;

        this.setState({
            filterToggles: newFilterToggles
        });
    };

    ToggleButtonGroupControlled = () => {
        const filtersComp = [];

        for (let i = 0; i < this.state.filterNames.length; i++){
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

    CardsComponent = () => {
        let cards = [[]];
        for (let i = 1; i <= 7; i++) {
            if ((i - 1) % 3 === 0)
                cards.push([]);

            cards[cards.length - 1].push(
                <Card style={{width: '18rem', maxWidth: '18rem'}}>
                    <Card.Img variant="top" src={require('../images/' + i + '.jpg')}/>
                    <Card.Body>
                        <Card.Title>Example Event{i}</Card.Title>
                        <Card.Text>
                            Hello, world? I'm Example Event{i}. Nice to meet you.
                        </Card.Text>
                        <Button variant="primary">Detail</Button>
                    </Card.Body>
                </Card>);
        }

        let decks = [];
        for (let i = 0; i < cards.length; i++) {
            decks.push(
                <CardDeck>
                    {cards[i]}
                </CardDeck>);
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
