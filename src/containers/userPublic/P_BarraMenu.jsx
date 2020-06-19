import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';



export const P_BarraMenu = props => {








  
  

  const href =(href)=>{
  window.location.href ="/ufjfportfolioprofissional/build"+href;
  }
  return (


    <AppBar position="relative" style={{ width: "100%" }} >
      <Toolbar>
        <img  alt="logo ufjf" style={{height:40, margin:10}} src="https://doity.com.br/media/doity/eventos/evento-19789-logo_organizador.png" />
  
        <Button onClick={()=>href("/")} >Home</Button>
        <Button onClick={()=>href("/formlogin")} >Login</Button>
        
      </Toolbar>

    </AppBar>

  );
}

