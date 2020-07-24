import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export const Page_Public_BarraMenu = props => {

  const href = (href) => {
    window.location.href = "/ufjfportfolioprofissional/build" + href;
  }
  return (
    <AppBar position="relative" style={{ width: "100%",zIndex:3 }} >
      <Toolbar>
      <img alt="logo ufjf" style={{ height: 40, margin: 10 }} src="https://doity.com.br/media/doity/eventos/evento-19789-logo_organizador.png" />
        <Grid
          justify="space-between"
          container
          spacing={1}
        >
          <Grid item>
              <Button variant="outlined" style={{ marginLeft: 20 }} onClick={() => props.history.push('/')} >Home</Button>
              <Button variant="outlined" style={{ marginLeft: 20 }} onClick={() => props.history.push("/formlogin")} >Login</Button>
          </Grid>
          <Grid item>
            
          </Grid>
        </Grid>



      </Toolbar>

    </AppBar>

  );
}

