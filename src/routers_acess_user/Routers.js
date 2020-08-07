import React, { Component } from 'react';

//Pages Public
import { Page_Public_Home } from '../pages/public/Page_Public_Home';
import { Page_Public_BarraMenu } from '../pages/public/Page_Public_BarraMenu';
import { Page_Public_Portfolio } from '../pages/public/page_public_portfolio/Page_Public_Portfolio';
import { Page_Public_CreateUser } from '../pages/public/Page_Public_CreateUser';
import { Page_Public_FormLogin } from '../pages/public/Page_Public_FormLogin';

//Pages Private
import { Page_Private_PortfolioEdit } from '../pages/private/page_private_portfolioEdit/Page_Private_PortfolioEdit';
import { Page_Private_BarraMenu } from '../pages/private/page_private_barraMenu/Page_Private_BarraMenu';
import { Page_Private_EditUser } from '../pages/private/Page_Private_EditUser';
import { Page_Private_ImportXML } from '../pages/private/page_private_importxml/Page_Private_ImportXML';
//import { ExportPDF } from '../pages/private/page_private_portfolioEdit/components/exportPDF';

//Admin 
import { Page_Admin_BarraMenu } from '../pages/admin/Page_Admin_BarraMenu';
import { Page_Admin_ImportDataSiga } from '../pages/admin/Page_Admin_ImportDataSiga';
import { Page_Admin_Home } from '../pages/admin/Page_Admin_Home';


import { PrivateRoute } from './Login';

import { BrowserRouter, Route, Switch } from "react-router-dom";



class App extends Component {
    render() {
        return (
// <BrowserRouter>
<BrowserRouter basename={'/portfolio'} >

<div style = {
    { width: "100%" }
} >
<PrivateRoute path = "/"
componentPrivate = { Page_Private_BarraMenu }
componentPublic = { Page_Public_BarraMenu }
componentAdmin = { Page_Admin_BarraMenu }/>

<Switch >
   { /* Rotas Publicas*/ }
    <PrivateRoute exact path = "/"
componentPublic = { Page_Public_Home }
componentPrivate = { Page_Public_Home }
componentAdmin = { Page_Admin_Home }
/>  <Route exact path = "/createuser"
component = { Page_Public_CreateUser }
/>  <Route exact path = '/portfolio/:user'
component = { Page_Public_Portfolio }
/>

{ /* Rotas Privadas*/ }

    <PrivateRoute exact path = '/portfolioEdit/'
      componentPrivate = { Page_Private_PortfolioEdit }
      componentPublic = { Page_Public_FormLogin }
    /> 

    <PrivateRoute exact path = '/editUser'
    componentPrivate = { Page_Private_EditUser }
    componentPublic = { Page_Public_FormLogin }
    /> 

    <PrivateRoute exact path = '/import'
    componentPrivate = { Page_Private_ImportXML }
    componentPublic = { Page_Public_FormLogin }
    /> 

    <PrivateRoute exact path = '/formlogin'
      componentPrivate = { Page_Public_Home }
      componentPublic = { Page_Public_FormLogin }
    /> 


<PrivateRoute path = "/importDataSiga"
componentAdmin = { Page_Admin_ImportDataSiga }
/>

</Switch> 

</div > </BrowserRouter>
        );
    }
}


export default App;