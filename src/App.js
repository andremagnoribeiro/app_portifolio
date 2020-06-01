import React, { Component } from 'react';
import './App.css';



import {P_Portifolio_Lattes}  from './containers/userPublic/P_Portifolio_Lattes';
import {P_Portifolio_Siga}  from './containers/userPublic/P_Portifolio_Siga';
import {P_BarraMenu}  from './containers/userPublic/P_BarraMenu';

import {L_Portifolio_Lattes}  from './containers/userLogin/L_Portifolio_Lattes';
import {L_Portifolio_Siga}  from './containers/userLogin/L_Portifolio_Siga';
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
      // <BrowserRouter basename="/build">
      <BrowserRouter >
      <div style={{width:"100%" }}>
        <PrivateRoute path="/"  componentPrivate={L_BarraMenu} componentPublic={P_BarraMenu}/>

        <Switch>
           
            <Route exact path="/"  component={Home} /> 
            <Route exact path="/createuser"  component={CreateUser} /> 
            <PrivateRoute  exact path='/editUser'  componentPrivate={L_EditUser} componentPublic={FormLogin}/>
            <PrivateRoute  exact path='/formlogin'  componentPrivate={Home} componentPublic={FormLogin}/>
            <PrivateRoute  exact path="/portifoliolattes/:user"  componentPrivate={L_Portifolio_Lattes} componentPublic={P_Portifolio_Lattes} />
            <PrivateRoute  exact path="/portifoliosiga/:user"  componentPrivate={L_Portifolio_Siga} componentPublic={P_Portifolio_Siga}/>
            
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
