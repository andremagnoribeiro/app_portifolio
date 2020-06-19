import React, { Component } from 'react';
import './App.css';



import {P_Portfolio_Lattes}  from './containers/userPublic/P_Portfolio_Lattes';
import {P_Portfolio_Siga}  from './containers/userPublic/P_Portfolio_Siga';
import {P_BarraMenu}  from './containers/userPublic/P_BarraMenu';

import {L_Portfolio_Lattes}  from './containers/userLogin/L_Portfolio_Lattes';

import {L_BarraMenu}  from './containers/userLogin/L_BarraMenu';
import {L_EditUser}  from './containers/userLogin/L_EditUser';

import {Home}  from './containers/Home';
import {FormLogin}  from './containers/FormLogin';
import {CreateUser}  from './containers/CreateUser';


import {PrivateRoute} from './PrivateRoute';

import { BrowserRouter , Route, Switch} from "react-router-dom";



class App extends Component {
  render() {
    return (
      // <BrowserRouter >
       <BrowserRouter basename="/ufjfportfolioprofissional/build">
      
      <div style={{width:"100%" }}>
        <PrivateRoute path="/"  componentPrivate={L_BarraMenu} componentPublic={P_BarraMenu}/>

        <Switch>
           
            <Route exact path="/"  component={Home} /> 
            <Route exact path="/createuser"  component={CreateUser} /> 
            <Route  exact path="/portfoliolattes/:user"  component={P_Portfolio_Lattes} />
            <Route  exact path="/portfoliosiga/:user"  component={P_Portfolio_Siga} />
           
            <PrivateRoute exact path="/portfoliolattes/login/:user"  componentPrivate={L_Portfolio_Lattes} componentPublic={Home}  />
           
            <PrivateRoute  exact path='/editUser'  componentPrivate={L_EditUser} componentPublic={FormLogin}/>
            <PrivateRoute  exact path='/formlogin'  componentPrivate={Home} componentPublic={FormLogin}/>
            
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
