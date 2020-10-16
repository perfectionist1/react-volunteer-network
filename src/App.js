import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import CreateAccount from './components/CreateAccount/CreateAccount';
import Login from './components/Login/Login';
import NoMatch from './components/NoMatch/NoMatch';
import RegisteredUser from './components/RegisteredUser/RegisteredUser';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">          
          <Home/>
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/createAccount">
          <CreateAccount />
        </Route>
        <Route path="/registeredUser">
          <RegisteredUser />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
