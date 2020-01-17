import React, {Component} from 'react';

import Cards from "../components/eventslist-component/cards";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
      <Typography
          component="div"
          role="tabpanel"
          hidden={value !== index}
          id={`scrollable-auto-tabpanel-${index}`}
          aria-labelledby={`scrollable-auto-tab-${index}`}
          {...other}
      >
        {/* if value == index, return the children(cards component) for each panel */}
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
  );
}
// define the type of prop of TabPanel
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

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
      places: places,
      selectedTap: 0
    };
  }

  // each tab component of of event places
  TabComponents = () => {
    const components = [];

    for(let j = 0; j < this.state.places.length; j++){
      components.push(<Tab label={this.state.places[j].title} />);
    }

    return components;
  };

  // panel(filter, cards) of selected tab
  TabPanelComponents = () => {
    const components = [];

    // match the aligned cards to each place panel
    for(let j = 0; j < this.state.places.length; j++){
      components.push(<TabPanel value={this.state.selectedTap} index={j}>
        <Cards area={this.state.places[j].eventKey}/>
      </TabPanel>);
    }

    return components;
  };

  // update the selectedTab value to new selected value of tabs
  handleChange = (event, newValue) => {
    this.setState({
      selectedTap: newValue
    });
  }

  // eventslist render
  render() {
    return (
        <div>
          <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
              style={{ minHeight: '100vh' }}
          >

            <Grid item xs={8}>
              <Paper className={{flexGrow: 1}}>
                <Tabs
                    value={this.state.selectedTap}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                >
                  {/* show tab components which can select place of events */}
                  {this.TabComponents()}
                </Tabs>

                {/* show tab panel components which show cards list by selected place tab */}
                {this.TabPanelComponents()}
              </Paper>
            </Grid>

          </Grid>
          <br/>

        </div>
    )
  }
}

Eventslist.propTypes = {};

export default Eventslist;