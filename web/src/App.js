import About from './pages/about';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Emailvalidation from './pages/emailvalidation';
import EventList from './pages/eventlist';
import Landing from './pages/landing';
import NavBar from './components/navigation/navbar';
import React from 'react';
import SignInUp from './pages/signInUp';
import UserPage from './pages/userpage';

function App() {
  {/* TODO(Myoung-heeSeo) : Add a state to check if user is logged in now. */}
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path='/about' render={() => <About/>}/>
        <Route path="/emailvalidation" render={() => <Emailvalidation/>}/>
        <Route path='/eventlist' render={() => <EventList/>}/>
        <Route path='/signin' render={() => <SignInUp/>}/>
        <Route path='/userpage' render={() => <UserPage/>}/>
        <Route path='/' render={() => <Landing/>}/>
      </Switch>
    </Router>
  );
}

export default App;
