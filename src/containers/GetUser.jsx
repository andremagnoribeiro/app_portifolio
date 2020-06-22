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
   
    </div>

  );
}



