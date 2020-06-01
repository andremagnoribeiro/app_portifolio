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
import {logout} from '../../PrivateRoute';
import {deleteUser} from "../../api/serverAPI";
import Avatar from '@material-ui/core/Avatar';

export const L_BarraMenu = props => {


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
  const [anchorEl_User, setAnchorEl_User] = useState(null);

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

  const handleClickUser= (event) => {
    setAnchorEl_User(event.currentTarget);
  };

  const handleCloseUser = () => {
    setAnchorEl_User(null);
  };
  
  

  const href =(href)=>{
  window.location.href =href;
  }

  const delUser=()=>{
    deleteUser(JSON.parse(localStorage.getItem("user")).user_name);
    window.location.href ="/";
    logout();
  }

  return (


    <AppBar position="relative" style={{ width: "100%" }} >
      <Toolbar>
   
       
        <img  alt="logo ufjf" style={{height:40, margin:10}} src="https://doity.com.br/media/doity/eventos/evento-19789-logo_organizador.png" />
        <Button onClick={()=>href("/")} >Home</Button>
       
     
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
           
            <MenuItem onClick={handleClosePortifolio_Lattes}><Typography onClick={()=>href(`/portifoliosiga/${JSON.parse(localStorage.getItem("user")).user_name}`)}>SIGA</Typography></MenuItem>
            <MenuItem onClick={handleClosePortifolio_Lattes}><Typography onClick={()=>href(`/portifoliolattes/${JSON.parse(localStorage.getItem("user")).user_name}`)}>Lattes</Typography></MenuItem>
          </Menu>
        </IconButton>
         
     

        <Button variant="text" component="span" onClick={handleClickUser} >
        <Avatar>{JSON.parse(localStorage.getItem("user")).name.substring(0, 1)}</Avatar>
        <Typography> {" "+JSON.parse(localStorage.getItem("user")).user_name}</Typography>
        
        </Button>
   
         
           
          <IconButton edge="start"  aria-label="menu">
          
          <Menu
            id="simple-menu"
            anchorEl={anchorEl_User}
            keepMounted
            open={Boolean(anchorEl_User)}
            onClose={handleCloseUser}
          >
           
            <MenuItem onClick={handleCloseUser}><Typography onClick={logout} >Logout</Typography></MenuItem>
            <MenuItem onClick={handleCloseUser}><Typography onClick={()=>href('/editUser')}>Edit</Typography></MenuItem>
            <MenuItem onClick={handleCloseUser}><Typography onClick={delUser}>Delete User</Typography></MenuItem>
          </Menu>
        </IconButton>



        <Typography color="textPrimary" textAling="right" style={{backgroundColor:"white"}}>
            
        </Typography>
      
      </Toolbar>
   
    </AppBar>

  );
}

