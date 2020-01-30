import React, {Component} from 'react';
import {
  Typography
} from '@material-ui/core';
import {
  ToggleButton,
  ToggleButtonGroup
} from '@material-ui/lab';
import {withStyles, createMuiTheme, ThemeProvider} from '@material-ui/core';

function StandaloneToggleButton() {
  const [selected, setSelected] = React.useState(false);

  return (
      <ToggleButton
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}>
        xx
      </ToggleButton>
  );
}

// tag button style
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

// override Toggle style
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
    // Get area selection from props.
    super(props);

    // Save the arrays of filter names and filter toggle(selected or not) in state.
    // Todo: mapping filterNames string-integer(enum) after db builiding complete.
    const filterToggles = [];

    // for (let filterIndex = 0; filterIndex < filterNames.length; filterIndex++)
    //   filterToggles.push(false);

    this.state = {
      filterToggles: [],
    };
  }

  /**
   * tag button을 눌렀을 때, 콜백함수
   * 부모에게 태그 전달 부모는
   * @param event
   * @param value
   */
  TagButtonOnClick = (event, value) => {
    console.log('ddjdjdj');
    console.log(value);
    this.props.onCreate(value)
  };

  HandlerTagButton = (event, value) => {
    console.log('button ' + value)
  };
  /**
   * tag button list 만들기
   * @param {Array<String>} tagNames : tag가 들어있는 list
   * @return {Array<Button>} tagButtonArray
   */
  ViewTagButtons = (tagNames) => {
    const { classes } = this.props;
    const tagButtonArray = [];

    for (let tagIndex =0; tagIndex < this.props.filterNames.length; ++tagIndex)
    {
      tagButtonArray.push(
          <ToggleButton variant='outlined'
                        onChange={this.HandlerTagButton}
                        className={classes.buttonShape}
                        value={this.props.filterNames[tagIndex].id}
                        label={this.props.filterNames[tagIndex].id}>
            {this.props.filterNames[tagIndex].name}
          </ToggleButton>
      )
    }
    return tagButtonArray;
  };

  // Render of cards component.
  render() {
    const { classes } = this.props;
    return (
        // <Grid>
        <ThemeProvider theme={theme}>
          <ToggleButtonGroup size='large'
                             onChange={this.TagButtonOnClick}
                             value={this.state.filterToggles}
                             className={classes.buttonGroup}>
            <this.ViewTagButtons />
          </ToggleButtonGroup>
        </ThemeProvider>
        // </Grid>

    );
  }
}

EventlistFilters.propTypes = {};
export default withStyles(tagButtonStyle)(EventlistFilters);
