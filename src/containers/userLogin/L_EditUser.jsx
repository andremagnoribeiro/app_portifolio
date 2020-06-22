import React, { useEffect, useState } from 'react'

import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';


import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {getUserId} from "../../api/serverAPI";
import {logout} from '../../PrivateRoute';

import {server} from '../../var';


export const L_EditUser = () => {

  const classes = useStyles();

  const [name,setName]=useState("");
  const [user_name,setUser_name]=useState("");
  const [email,setEmail]=useState("");


  useEffect(()=>{
      getUserId(JSON.parse(localStorage.getItem("user")).user_name)
        .then(data =>{
          setName(data.name);
          setUser_name(data.user_name);
          setEmail(data.email);
        } );
  },[])


  const createUser = () => {
    if(name===""||user_name===""||email===""){
      document.getElementById("msg").innerText="Verificar, campo obrigatorio em branco."
    }else{
      let xhr = new XMLHttpRequest();
      xhr.onload = function () {
        if(xhr.responseText==="true"){
          logout();
          window.location.href ="/ufjfportfolioprofissional/build/formlogin";
        }else if(xhr.responseText==="cpf"){
          document.getElementById("msg").innerText="CPF já Existente!"
        }else if(xhr.responseText==="username"){
          document.getElementById("msg").innerText="Escolher outro nome de Usuário"
        }
      };
  
      xhr.open('POST', server+
      `/ufjfportfolioprofissional/api/editUser.php/?user_name=${
        JSON.parse(localStorage.getItem("user")).user_name
      }&update_user_name=${user_name}&update_email=${email}&update_name=${name}`, true);

      xhr.send();
    }
  }


  return (
    <Container component="main" maxWidth="xs">
      <h1>Editar Usuário</h1>
          <TextField
            value={name}
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
            value={user_name}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Nome do Usuário"
            name="Nome do Usuário"
            autoFocus
            onChange={e=>setUser_name(e.target.value)}
          />
    

          <TextField
            value={email}
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

          <div id="msg"></div>
          <Button
            onClick={createUser}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
           Salvar
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