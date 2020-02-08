import {
  ArrowBackIos,
  ArrowForwardIos
}from '@material-ui/icons';
import {
  Typography,
  withStyles
} from '@material-ui/core';
import {
  ToggleButton,
  ToggleButtonGroup,
} from '@material-ui/lab';
import React, {Component} from 'react';

// Toggle Button css style
const tagButtonStyle = {
  buttonGroup: {
    width: '98%',
    overflow: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  buttonShape: {
    borderRadius: '30px',
    width: '60%',
    border: 'solid 1px rgba(0, 0, 0, 0.12)',
    margin: '1.5%',
    padding: '0 2% 0 2%',
    '&:disabled': {
      backgroundColor: 'rgba(0, 0, 0, 0.2)'
    }
  },
  buttonText: {
    padding: '1% 5% 1% 5%',
    fontFamily: 'LibreFranklin',
    fontSize: '100%',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.43,
    letterSpacing: '0.25px',
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.87)'
  }
};

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
      filterClicked: filterClicked
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
   * Check each tag that there is no event
   * @return {Array<ToggleButton>} tagButtonArray
   */
  ViewTagButtons = () => {
    const { classes } = this.props;
    const tagButtonArray = [];
    for(let tagIndex = 0; tagIndex < this.props.filterNames.length; ++tagIndex){
      if(this.props.filterNames[tagIndex].events.length === 0){
        tagButtonArray.push(
          <ToggleButton variant='outlined'
                        onChange={this.HandlerTagButton}
                        className={classes.buttonShape}
                        value={tagIndex}
                        key={this.props.filterNames[tagIndex].id}
                        selected={this.state.filterClicked[tagIndex]}
                        disabled disableRipple disableFocusRipple>
            <Typography className={classes.buttonText}>
              {this.props.filterNames[tagIndex].name}
            </Typography>
          </ToggleButton>)
      }
      else {
        tagButtonArray.push(
          <ToggleButton variant='outlined'
                        onChange={this.HandlerTagButton}
                        className={classes.buttonShape}
                        value={tagIndex}
                        key={this.props.filterNames[tagIndex].id}
                        selected={this.state.filterClicked[tagIndex]}>
            <Typography className={classes.buttonText}>
              {this.props.filterNames[tagIndex].name}
            </Typography>
          </ToggleButton>
        )
      }
    }
    return tagButtonArray;
  };

  // Render of filters component
  render() {
    const { classes } = this.props;
    return (
      <div style={{position: 'relative'}}>
        <ArrowBackIos style={{float: 'left', position: 'absolute',
          top: '35%', color: '#DCDCDC'}}/>
        <ToggleButtonGroup size='large'
                           value={this.state.filterClicked}
                           className={classes.buttonGroup}>
          <this.ViewTagButtons />
        </ToggleButtonGroup>
        <ArrowForwardIos  style={{right: 0, float: 'right', position: 'absolute',
          top: '35%', color: '#DCDCDC'}}/>
      </div>
    );
  }
}

EventlistFilters.propTypes = {};
export default withStyles(tagButtonStyle)(EventlistFilters);
