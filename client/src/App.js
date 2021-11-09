// import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router';
import React from 'react';
// import AddTraveler from './components/AddTraveler';
import AddTrip from './components/AddTrip';
import EditTraveler from './components/EditTraveler';
import EditTrip from './components/EditTrip';
import Error from './components/Errors';
import AllTrips from './components/AllTrips'
import OneTrip from './components/OneTrip';
import OneTraveler from './components/OneTraveler'
//import Login from './components/Login'
// import Registration from './components/Registration';
import LogReg from './views/LogReg';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <AddTraveler path="/"/> */}
        <LogReg path = "/"/>
        {/* <Login path = "/login"/> */}
        {/* <Registration path=""/> */}
        <AllTrips path="/dashboard"/>
        <AddTrip path="/trip/add"/>
        <OneTrip path="/trip/:id"/>
        <OneTraveler path="/traveler/:id"/>
        <EditTrip path="edit/trip/:id"/>
        <EditTraveler path="edit/traveler/:id"/>
        <Error path="/errors"/>
      </Router>
      
    </div>
  );
}

export default App;
