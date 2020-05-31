import React, { useState, useEffect } from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import {logout} from '../PrivateRoute';


export const BarraMenu = props => {


  window.addEventListener('resize', function () {
   
    if (window.innerWidth <= 800) {
      setMenuIcon("block");
    } else {
      setMenuIcon("none");
    }
  });

  useEffect(() => {
    if (window.innerWidth <= 800) {
      setMenuIcon("block");
    } else {
      setMenuIcon("none");
    }

  }, [])

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl_Portifolio_Lattes, setAnchorEl_Portifolio_Lattes] = useState(null);

  const [menuIcon, setMenuIcon] = useState('none');




  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickPortifolio_Lattes = (event) => {
    setAnchorEl_Portifolio_Lattes(event.currentTarget);
  };

  const handleClosePortifolio_Lattes = () => {
    setAnchorEl_Portifolio_Lattes(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const href =(href)=>{
  window.location.href =href;
  }
  return (


    <AppBar position="relative" style={{ width: "100%" }} >
      <Toolbar>
        {/* <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon style={{ display: String(menuIcon) }} onClick={handleClick} />
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
           
            <MenuItem onClick={handleClose}><Link component={Typography} to={`/`}>Trabalhos Realizados</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link component={Typography} to={`/importxml`}>Import XML</Link></MenuItem>
          </Menu>
        </IconButton> */}
       
        <img  alt="logo ufjf" style={{height:40, margin:10}} src="https://doity.com.br/media/doity/eventos/evento-19789-logo_organizador.png" />
         
          <Button color="textPrimary" onClick={handleClickPortifolio_Lattes} >
            PORTIFÓLIO
          </Button>
           
          <IconButton edge="start"  aria-label="menu">
          
          <Menu
            id="simple-menu"
            anchorEl={anchorEl_Portifolio_Lattes}
            keepMounted
            open={Boolean(anchorEl_Portifolio_Lattes)}
            onClose={handleClosePortifolio_Lattes}
          >
           
            <MenuItem onClick={handleClosePortifolio_Lattes}><Typography onClick={()=>href("/portifoliosiga")}>SIGA</Typography></MenuItem>
            <MenuItem onClick={handleClosePortifolio_Lattes}><Typography onClick={()=>href("/portifoliolattes")}>Lattes</Typography></MenuItem>
          </Menu>
        </IconButton>
         
        <Button onClick={()=>href("/login")} >Home</Button>
        <Button onClick={logout} >Logout</Button>
        


      </Toolbar>

    </AppBar>

  );
}
