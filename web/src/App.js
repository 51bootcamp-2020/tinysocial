
import React from 'react';
import Landing from './pages/landing';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {
<<<<<<< HEAD
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

import Signin from "./pages/signin"
import Signup from "./pages/signup"
=======
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Signin from './pages/signin';
import Signup from './pages/signup';
>>>>>>> 6790ad4bf175747f2c855428dfc6a5ab4d40048a
import EventList from './pages/eventlist';

const client = new ApolloClient({
  // TODO(arin-kwak): need update uri.
  uri: 'http://localhost:15780'
});

function App() {
  return (
<<<<<<< HEAD
      <ApolloProvider client={client}>
          <Router>
              <Switch>
                  <Route path="/signup">
                      <Signup/>
                  </Route>
                  <Route path="/signin">
                      <Signin/>
                  </Route>
                  <Route path="/">
                    <EventList/>
                  </Route>
              </Switch>
          </Router>
      </ApolloProvider>
=======
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/signin">
            <Signin/>
          </Route>
          <Route path="/">
            <EventList/>
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>

>>>>>>> 6790ad4bf175747f2c855428dfc6a5ab4d40048a
  );
}

export default App;
