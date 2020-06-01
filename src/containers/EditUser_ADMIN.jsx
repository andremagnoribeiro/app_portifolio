import React, { useEffect, useState } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import {login} from "../PrivateRoute"
import md5 from 'md5';
const server="http://localhost"

export const CreateUser = () => {

  const classes = useStyles();

  const [name,setName]=useState("");
  const [nameUser,setNameUser]=useState("");
  const [CPF,setCPF]=useState("");
  const [email,setEmail]=useState("");
  const [passWord,setPassWord]=useState("");



  useEffect(()=>{


    setName()
    setNameUser()
    setCPF()
    setEmail()
    setPassWord()
  },[])


  const createUser = () => {
    if(name==""||nameUser==""||CPF==""||email==""||passWord==""){
      document.getElementById("msg").innerText="Verificar, campo obrigatorio em branco."
    }else{
      let xhr = new XMLHttpRequest();
      xhr.onload = function () {
        if(xhr.responseText=="true"){
          window.location.href ="/login";
        }else if(xhr.responseText=="cpf"){
          document.getElementById("msg").innerText="CPF já Existente!"
        }else if(xhr.responseText=="username"){
          document.getElementById("msg").innerText="Escolher outro nome de Usuário"
        }
      };
  
      xhr.open('POST', server+
      `/api/createUser.php/?name=${name}&nameUser=${nameUser}&`+
      `cpf=${CPF}&email=${email}&password=${md5(passWord)}`, true);
      xhr.send();
    }
  }


  return (
    <Container component="main" maxWidth="xs">
      <h1>Criar Usuário</h1>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Nome Completo"
            name="Nome"
            autoFocus
            onChange={e=>setName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Nome do Usuário"
            name="Nome do Usuário"
            autoFocus
            onChange={e=>setNameUser(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="CPF"
            name="CPF"
            autoFocus
            onChange={e=>setCPF(e.target.value)}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={e=>setEmail(e.target.value)}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e=>setPassWord(e.target.value)}
          />
          <div id="msg"></div>
          <Button
            onClick={createUser}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
           Criar User
          </Button>
       
    </Container>
  );


  
}


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));