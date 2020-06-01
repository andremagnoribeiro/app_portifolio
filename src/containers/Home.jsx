import React, { useState, useEffect } from 'react'



import { emphasize, withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import {getUsers} from "../api/serverAPI";

export const Home=()=> {

  const [users,setUsers]=useState([]);

  useEffect(() => {
    getUsers()
      .then(data => setUsers(data));
  

  }, []);

  const href =(href)=>{
    window.location.href =href;
  }

  return (


    <div>
      <h1>Usuários</h1>
    { users.map(user=>(
      <Card style={{marginTop:20}}>
        <CardHeader
          avatar={<Avatar>{user.name.substring(0, 1)}</Avatar>}
          title={user.name}
          subheader={user.email}
    
        />
        <Button style={{marginTop:5, width:'100%'}} variant="contained" color="primary" disableElevation onClick={()=>href(`/portifoliosiga/${user.user_name}`)}>PORTIFÓLIO DO SIGA</Button>
        <Button style={{marginTop:5, width:'100%'}} variant="contained" color="primary" disableElevation onClick={()=>href(`/portifoliolattes/${user.user_name}`)}>PORTIFÓLIO DO Lattes</Button>
      </Card>

    ))}

    </div>

  );
}