import About from './pages/about';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Emailvalidation from './pages/emailvalidation';
import Error from './pages/error';
import Eventdetail from './pages/eventdetail';
import EventList from './pages/eventlist';
import Landing from './pages/landing';
import NavBar from './components/navigation/navbar';
import Payment from './pages/payment';
import React, {Fragment} from 'react';
import SignInUp from './pages/signInUp';
import UserPage from './pages/userpage';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path='/about' render={() => <About/>}/>
        <Route path='/emailvalidation' render={() => <Emailvalidation/>}/>
        <Route path='/error' render={() => <Error/>}/>
        <Route path='/eventdetail' render={() => <Eventdetail/>}/>
        <Route path='/eventlist' render={() => <EventList/>}/>
        <Route path='/payment' render={() => <Payment/>}/>
        <Route path='/signin' render={() => <SignInUp/>}/>
        <Route path='/userpage' render={() => <UserPage/>}/>
        <Route path='/' render={() => <Landing/>}/>
      </Switch>
    </Router>
  );
}

export default App;
