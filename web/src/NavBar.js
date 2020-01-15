import React from 'react';
import PropTypes from 'prop-types';
import Events from './pages/events';
import Signup from './pages/signup';
import Signin from './pages/signin';
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
  makeStyles,
} from '@material-ui/core';

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
      <Typography
          component="div"
          role="tabpanel"
          hidden={value !== index}
          id={`nav-tabpanel-${index}`}
          aria-labelledby={`nav-tab-${index}`}
          {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
      <Tab
          component="div"
          onClick={event => {
            event.preventDefault();
          }}
          {...props}
      />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

// TODO : fix UI flexible to suit in mobile too.
// TODO : fix details colors, align, etc
function NavNar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title">
              Tiny Social
            </Typography>
            <Tabs
                variant="standard"
                value={value}
                onChange={handleChange}
                // aria-label="nav tabs example"
            >
              {/* TODO : Events and Sign Up don't need in v0 */}
              <LinkTab label="Events" href="./pages/events" {...a11yProps(0)} />
              <LinkTab label="Sign In" href="./pages/signin" {...a11yProps(1)} />
              <LinkTab label="Sign Up" href="./pages/signup" {...a11yProps(2)} />
            </Tabs>
          </Toolbar>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Events/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Signin/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Signup/>
        </TabPanel>
      </div>
  );
};

export default NavNar;