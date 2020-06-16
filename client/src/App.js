import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Landing from './components/Landing';
import Cities from './components/Cities';
import Itineraries from './components/Itineraries';
import { Provider } from 'react-redux';
import store from "./store/store";



export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <div className ="App">
        <BrowserRouter>
          <Switch>
            <Route exact path= "/" component={Landing}/>
            <Route path= "/cities" component={Cities}/>
            <Route path= "/itineraries" component={Itineraries}/>
          </Switch>
        </BrowserRouter>
      </div>
      </Provider>     

    )
  }
}

