import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Cards from "../components/eventslist-component/cards";

import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";

import CardColumns from "react-bootstrap/CardColumns";

class Eventslist extends Component {
  render() {

    return(
        <div>
          Here is the list of events
          <Tabs defaultActiveKey="all">
            <Tab eventKey="all" title="All" class="center-block">
              <Cards area={"all"} />
            </Tab>
            <Tab eventKey="sanfran" title="San Francisco">
              {/*<p>this is San Francisco!!!!!</p>*/}
              <Cards area={"sanfran"} />

            </Tab>
            <Tab eventKey="sanmateo" title="San Mateo">
              {/*<p>this is San Mateo</p>*/}
              <Cards area={"sanmateo"} />

            </Tab>
            <Tab eventKey="mountainview" title="Mountain View">
              {/*<p>this is Mountain View</p>*/}
              <Cards area={"mountainview"} />
            </Tab>
          </Tabs>
        </div>

    )

  }
}

Eventslist.propTypes = {};

export default Eventslist;
