import React, { Component } from 'react';

//Pages Public
import {Page_Public_Home}  from '../pages/public/Page_Public_Home';
import {Page_Public_BarraMenu}  from '../pages/public/Page_Public_BarraMenu';
import {Page_Public_Portfolio}  from '../pages/public/page_public_portfolio/Page_Public_Portifolio';
import {Page_Public_CreateUser}  from '../pages/public/Page_Public_CreateUser';
import {Page_Public_FormLogin}  from '../pages/public/Page_Public_FormLogin';

//Pages Private
import {Page_Private_PortfolioEdit}  from '../pages/private/page_private_portfolioEdit/Page_Private_PortfolioEdit';
import {Page_Private_BarraMenu}  from '../pages/private/Page_Private_BarraMenu';
import {Page_Private_EditUser}  from '../pages/private/Page_Private_EditUser';
import {Page_Private_ApagarDados}  from '../pages/private/Page_Private_ApagarDados';
import {Page_Private_ImportXML}  from '../pages/private/page_private_importxml/Page_Private_ImportXML';



import {PrivateRoute} from './Login';

import { BrowserRouter , Route, Switch} from "react-router-dom";



class App extends Component {
  render() {
    return (
      // <BrowserRouter >
       <BrowserRouter basename="/ufjfportfolioprofissional/build">
      
      <div style={{width:"100%" }}>
        <PrivateRoute path="/"  componentPrivate={Page_Private_BarraMenu} componentPublic={Page_Public_BarraMenu}/>

        <Switch>
           {/* Rotas Publicas*/ }
            <Route exact path="/"  component={Page_Public_Home} /> 
            <Route exact path="/createuser"  component={Page_Public_CreateUser} /> 
            <Route  exact path='/portfolio/:user'  component={Page_Public_Portfolio}/>
            
            
            {/* Rotas Privadas*/ }
            <PrivateRoute  exact path='/portfolioEdit/:user'  componentPrivate={Page_Private_PortfolioEdit} componentPublic={Page_Public_FormLogin}/>
            <PrivateRoute  exact path='/editUser'  componentPrivate={Page_Private_EditUser} componentPublic={Page_Public_FormLogin}/>
            <PrivateRoute  exact path='/import'  componentPrivate={Page_Private_ImportXML} componentPublic={Page_Public_FormLogin}/>
            <PrivateRoute  exact path='/apagar'  componentPrivate={Page_Private_ApagarDados} componentPublic={Page_Public_FormLogin}/>
            <PrivateRoute  exact path='/formlogin'  componentPrivate={Page_Public_Home} componentPublic={Page_Public_FormLogin}/>
            
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
