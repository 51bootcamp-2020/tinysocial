import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import React from "react";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <Signup/>
        </Route>
        <Route path="/signin">
          <Signin/>
        </Route>
        <Route path="/">
          Main
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
