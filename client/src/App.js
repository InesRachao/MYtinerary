import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Landing from './components/Landing';
import Cities from './components/Cities';
import Itineraries from './components/Itineraries';
import Navigation from "./components/Navigation";
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import { Provider } from 'react-redux';
import store from "./store/store";


export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <div className ="App">
        <Navigation/>
        <BrowserRouter>
          <Switch>
            <Route exact path= "/" component={Landing}/>
            <Route path= "/cities" component={Cities}/>
            <Route path= "/itineraries" component={Itineraries}/>
            <Route path= "/createaccount" component={CreateAccount}/>
            <Route path= "/login" component={Login}/>
          </Switch>
        </BrowserRouter>
      </div>
      </Provider>     

    )
  }
}

