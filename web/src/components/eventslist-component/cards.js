import React, {Component, useState} from 'react';
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {ToggleButton, ToggleButtonGroup} from 'react-bootstrap';

class Cards extends Component {
  constructor(props) {
    // get area selection from props
    super(props);
    this.state = {
      area: props.area,
      filterList: [0, 0, 0, 0, 0],
      filtervalue: 0,
      flag: 'hi'
    }
  }


  render() {
    // letValue

    let ToggleButtonGroupControlled = () => {
      const [value, setValue] = useState(0, 3);
      // console.log('value: ', this.state.value);

      const handleChange = val => {
          setValue(val);
          console.log(value)
    }

      const filterName = ['BookClub',"Movie", "Wine", "SciFi", "Sport"]
      let headers = []
      let filters = [];

      for(let i=0; i<filterName.length; i++){
        filters.push(<ToggleButton value={i}>{filterName[i]}</ToggleButton>)}

      headers.push(<ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
        {filters}
      </ToggleButtonGroup>)
      return headers
    }




    let cards = [[]];
    for(let i = 1; i <= 7; i++){
      if((i - 1) % 3 === 0)
        cards.push([]);
      cards[cards.length - 1].push(<Card style={{ width: '18rem', maxWidth: '18rem'}}>
        <Card.Img variant="top" src={require('../images/' + i + '.jpg')} />
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
    for(let i = 0; i < cards.length; i++){
      decks.push(<CardDeck>
        {cards[i]}
      </CardDeck>);
    }

    return (

        <div>
          <p>This is {this.props.area}</p>
          <ToggleButtonGroupControlled/>
          {decks}
        </div>
    );
  }
}

Card.propTypes = {};

export default Cards;
