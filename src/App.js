import React, { Component } from 'react';
import './App.css';

import HeaderMenu from './containers/HeaderMenu'
import {Portifolio} from './containers/Portifolio'
import ImportXML from './containers/ImportXML'

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
      <div style={{width:"100%" }}>
        <HeaderMenu/>
        <Switch>
           
            <Route exact path="/" component={Portifolio} /> 

            <Route path="/importxml" component={ImportXML} /> 
        </Switch>
       
      </div>

    </Router>
    );
  }
}

export default App;
