import React, { useState, useEffect } from 'react'


import { makeStyles } from '@material-ui/core/styles';

import { deepOrange, deepPurple } from '@material-ui/core/colors';


import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import {getUsers} from "../api/serverAPI";

export const Home=()=> {

  const [users,setUsers]=useState([]);

  useEffect(() => {
    getUsers().then(data => setUsers(data));
  }, []);

  const href =(href)=>{
    window.location.href ="/ufjfportfolioprofissional/build"+href;
    }
  const classes = useStyles();
  return (

    <div >
      <h1 style={{marginLeft:25}}>Usuários</h1>
    { users.map(user=>(
      <Card key={user.name+"aaaa"} style={{margin:20 , backgroundColor:"#4682B4"}}>
        <CardHeader
          avatar={<Avatar className={classes.purple}>{user.name.substring(0, 1)}</Avatar>}
          title={user.name}
          subheader={user.email}
    
        />
       
        <Button style={{margin:15, width:200}} variant="contained" color="primary" disableElevation onClick={()=>href(`/portfoliosiga/${user.user_name}`)} >Portfólio Siga</Button>
        <Button style={{margin:15, width:200}} variant="contained" color="primary" disableElevation onClick={()=>href(`/portfoliolattes/${user.user_name}`)} >Portfólio Lattes</Button>
       
      </Card>

    ))}

    </div>

  );
}




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

