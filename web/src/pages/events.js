import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import CardDeck from "react-bootstrap/CardDeck";
import CardColumns from "react-bootstrap/CardColumns";

class Events extends Component {
  render() {
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
          Here is the list of events
            <Tabs defaultActiveKey="all">
                <Tab eventKey="all" title="All" class="center-block">
                    {decks}

                </Tab>
                <Tab eventKey="sanfran" title="San Francisco">
                    <p>this is San Francisco</p>
                </Tab>
                <Tab eventKey="sanmateo" title="San Mateo">
                    <p>this is San Mateo</p>
                </Tab>
                <Tab eventKey="mountain" title="Mountain View">
                    <p>this is Mountain View</p>
                </Tab>
            </Tabs>
        </div>
    );
  }
}

Events.propTypes = {};

export default Events;
