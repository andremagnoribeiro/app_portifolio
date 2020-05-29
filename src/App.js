import React, { Component } from 'react';
import './App.css';

import HeaderMenu from './containers/HeaderMenu'
import {Portifolio_Lattes} from './containers/Portifolio_Lattes'
import {Login} from './containers/Login'
import ImportXML from './containers/ImportXML'

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
      <div style={{width:"100%" }}>
        <HeaderMenu/>
        <Switch>
           
            <Route exact path="/" component={Portifolio_Lattes} /> 

            <Route path="/importxml" component={ImportXML} /> 
            <Route path="/login" component={Login} /> 
        </Switch>
       
      </div>

    </Router>
    );
  }
}

export default App;
