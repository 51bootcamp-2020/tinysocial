import About from './pages/about';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import EventList from './pages/eventlist';
import Landing from './pages/landing';
import NavBar from './components/navigation/navbar';
import React, {Fragment} from 'react';
import SignInUp from './pages/signInUp';
import Emailvalidation from './pages/emailvalidation';
import Checkout from './pages/checkout';
import JoinEvent from './pages/join-event';

function App() {
  {/* TODO(Myoung-heeSeo) : Add a state to check if the user is logged in now. */}
  return (
    <Fragment>
      <NavBar/>
      <Router>
        <Switch>
          <Route path='/signin' render={() => <SignInUp/>}/>
          <Route path="/checkout" render={() => <Checkout/>} />
          <Route path="/join-event" render={() => <JoinEvent/>} />
          <Route path='/eventlist' render={() => <EventList/>}/>
          <Route path='/about' render={() => <About/>}/>
          <Route path='/' render={() => <Landing/>}/>
          <Route path="/emailvalidation">
            <Emailvalidation/>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
