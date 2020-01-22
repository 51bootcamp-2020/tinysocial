import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom"
import React from "react";

import Landing from './pages/landing'
import Signin from "./pages/signin"
import Signup from "./pages/signup";

const client = new ApolloClient({
  //TODO(arin-kwak): need update uri.
  uri: "http://localhost:15780"
});

function App() {
  return (
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
                      <Landing/>
                  </Route>
              </Switch>
          </Router>
      </ApolloProvider>
  );
}

export default App;