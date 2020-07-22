import React, { Component } from 'react';
import './App.css';



import {Portfolio}  from './containers/Portfolio';
import {P_BarraMenu}  from './containers/userPublic/P_BarraMenu';
import {P_PortfolioEdit}  from './containers/userPublic/P_PortfolioEdit';


import {L_PortfolioEdit}  from './containers/userLogin/L_PortfolioEdit';
import {L_ViewItem}  from './containers/userLogin/L_ViewItem';
import {L_BarraMenu}  from './containers/userLogin/L_BarraMenu';
import {L_EditUser}  from './containers/userLogin/L_EditUser';
import {L_ApagarDados}  from './containers/userLogin/L_ApagarDados';
import {L_ImportXML}  from './containers/userLogin/L_ImportXML';

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
            <Route  exact path="/portfolio/:user"  component={Portfolio} />
            <Route  exact path="/portfolio/:item/:user"  component={L_ViewItem} />
            
            
            {/* <PrivateRoute  exact path="/portfolio/:item/:user"  component={L_ViewItem} /> */}
            <PrivateRoute  exact path='/portfolioEdit/:user'  componentPrivate={L_PortfolioEdit} componentPublic={P_PortfolioEdit}/>
            <PrivateRoute  exact path='/editUser'  componentPrivate={L_EditUser} componentPublic={FormLogin}/>
            <PrivateRoute  exact path='/import'  componentPrivate={L_ImportXML} componentPublic={FormLogin}/>
            <PrivateRoute  exact path='/apagar'  componentPrivate={L_ApagarDados} componentPublic={FormLogin}/>
            <PrivateRoute  exact path='/formlogin'  componentPrivate={Home} componentPublic={FormLogin}/>
            
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
