import React, { useState } from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {server} from '../var';
import md5 from 'md5';

export const CreateUser = () => {

  const classes = useStyles();

  const [name,setName]=useState("");
  const [nameUser,setNameUser]=useState("");
  const [CPF,setCPF]=useState("");
  const [email,setEmail]=useState("");
  const [passWord,setPassWord]=useState("");


  const createUser = () => {
    if(name===""||nameUser===""||CPF===""||email===""||passWord===""){
      document.getElementById("msg").innerText="Verificar, campo obrigatorio em branco."
    }else{
      let xhr = new XMLHttpRequest();
      xhr.onload = function () {
        if(xhr.responseText==="true"){
          window.location.href ="/ufjfportfolioprofissional/build/formlogin";
        }else if(xhr.responseText==="cpf"){
          document.getElementById("msg").innerText="CPF já Existente!"
        }else if(xhr.responseText==="username"){
          document.getElementById("msg").innerText="Escolher outro nome de Usuário"
        }
      };
  
      xhr.open('POST', server+
      `/ufjfportfolioprofissional/api/createUser.php/?
      name=${name}&
      nameUser=${nameUser}&`+
      `cpf=${CPF}&
      email=${email}&
      password=${md5(passWord)}`, true);
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