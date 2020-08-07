import React, {  useState } from 'react'

//material ui
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

//variavel
import {server} from '../../var';

//md5
import md5 from 'md5';
import {api_getInfoLogin} from '../../api/serverAPI';

//class
export const Page_Public_FormLogin = (props) => {

  const classes = useStyles();
  
  const [textEmail,setTextEmail]= useState("");
  const [textPassWord,setTextPassWord]= useState("");

  const runLogin=()=>{
    api_getInfoLogin(textEmail,md5(textPassWord),loginCallback);
  }

  const loginCallback=(xhr_responseText)=>{
    if(xhr_responseText!=="false"){
      const user=JSON.parse(xhr_responseText);
      localStorage.setItem("user",JSON.stringify(user));
      props.history.push("/");
    }else{
      document.getElementById('msg').style.display="block";
    }
    
  }
 
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
       
        <form className={classes.form} noValidate>
        <Typography id="msg" component="span" color="secondary" variant="p" style={{display:"none"}}>
          CPF ou senha incorretos!

        </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="CPF"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={e=>setTextEmail(e.target.value)}
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
            onChange={e=>setTextPassWord(e.target.value)}
          />
        
          <Button
            onClick={runLogin}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <a href="/createuser" variant="body2">
                {"Criar Usuário"}
              </a>
            </Grid>
          </Grid>
        </form>
      </div>
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