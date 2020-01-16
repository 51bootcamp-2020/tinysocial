import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Cards from "../components/eventslist-component/cards";

import {Container, Row, Col, Tabs, Tab} from 'react-bootstrap';


class Eventslist extends Component {
  constructor(props) {
    super(props);

    const places = [
      {eventKey: "all", title: "All"},
      {eventKey: "sanfran", title: "San Francisco"},
      {eventKey: "sanmateo", title: "San Mateo"},
      {eventKey: "mountainview", title: "Mountain View"},
    ];

    this.state = {
      places: places
    };
  }

  TabComponents = () => {
    const components = [];

    for(let j = 0; j < this.state.places.length; j++){
      components.push(<Tab eventKey={this.state.places[j].eventKey} title={this.state.places[j].title} class="center-block">
        <Cards area={this.state.places[j].eventKey}/>
      </Tab>);
    }

    return components;
  };

  render() {
    return (
        <div>
          <br/>
          <Container>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <Tabs defaultActiveKey={this.state.places[0].eventKey}>
                  {this.TabComponents()}
                </Tabs>
              </Col>
            </Row>
          </Container>
        </div>
    )
  }
}

Eventslist.propTypes = {};

export default Eventslist;