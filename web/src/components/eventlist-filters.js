import {createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core';
import {
  ToggleButton,
  ToggleButtonGroup
} from '@material-ui/lab';
import React, {Component} from 'react';

// Toggle Button css style
const tagButtonStyle = {
  buttonGroup: {
    width: '100%',
    overflow: 'scroll',
    '&::-webkit-scrollbar': {
    display: 'none'
    }
  },
  buttonShape: {
    borderRadius: '30px',
    border: 'solid 1px rgba(0, 0, 0, 0.12)',
    margin: '2%',
    padding: '0 3% 0 3%'
  },
  buttonText: {
    padding: '1% 5% 1% 5%',
  }
};

// Override Toggle style
const theme = createMuiTheme({
  overrides: {
    MuiToggleButton: {
      label: {
        fontFamily: 'LibreFranklin',
        fontSize: '14px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.43,
        letterSpacing: '0.25px',
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.87)'
      }
    }
  }
});

class EventlistFilters extends Component {
  constructor(props) {
    /**
     * Props
     * @param filterNames {Array<object tag>}: Entire tag Information
     * @param onCreate {function()}: HandlerTagName function of parent
     */
    super(props);

    // Save the arrays of filter toggle(selected or not) in state.
    const filterClicked = [];
    for (let tagIndex = 0; tagIndex < this.props.filterNames.length; tagIndex++)
      filterClicked.push(false);

    this.state = {
      filterClicked: filterClicked,
    };
  }

  /**
   * Handler function, When Tag Button is clicked
   * Reverse filterClicked state clicked
   * Send filterClicked to parent component using onCreate function
   * @param {Object} event
   * @param {int} value: index of selected tag
   */
  HandlerTagButton = (event, value) => {
    let filterClicked = [...this.state.filterClicked];

    filterClicked[value] = !this.state.filterClicked[value];
    this.setState({ filterClicked: filterClicked });

    this.props.onCreate(/* selectedTags= */ filterClicked);
  };

  /**
   * Create tag button list
   * @return {Array<ToggleButton>} tagButtonArray
   */
  ViewTagButtons = () => {
    const { classes } = this.props;
    const tagButtonArray = [];

    for (let tagIndex = 0; tagIndex < this.props.filterNames.length; ++tagIndex)
    {
      tagButtonArray.push(
          <ToggleButton variant='outlined'
                        onChange={this.HandlerTagButton}
                        className={classes.buttonShape}
                        value={tagIndex}
                        label={this.props.filterNames[tagIndex].id}
                        selected={this.state.filterClicked[tagIndex]}
          >
            {this.props.filterNames[tagIndex].name}
          </ToggleButton>
      )
    }
    return tagButtonArray;
  };

  // Render of filters component
  render() {
    const { classes } = this.props;
    return (
        <ThemeProvider theme={theme}>
          <ToggleButtonGroup size='large'
                             value={this.state.filterClicked}
                             className={classes.buttonGroup}>
            <this.ViewTagButtons />
          </ToggleButtonGroup>
        </ThemeProvider>
    );
  }
}

EventlistFilters.propTypes = {};
export default withStyles(tagButtonStyle)(EventlistFilters);
