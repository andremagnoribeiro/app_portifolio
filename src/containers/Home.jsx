import React, { useState, useEffect } from 'react'


import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { getUsers, getSizeTable } from "../api/serverAPI";

export const Home = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(data => setUsers(data));
  }, []);



  return (

    <div >
      <h1 style={{ marginLeft: 25 }}>Usuários</h1>
      {users.map(user =>
        <Card key={user.name + "aaaa"} style={{ margin: 20, cursor:'pointer' }} onClick={()=> window.location.href = "/ufjfportfolioprofissional/build/portfolioedit/"+user.user_name} >
          <CardHeader
            avatar={<Avatar >{user.name.substring(0, 1)}</Avatar>}
            title={user.name}
            subheader={user.email}
          />
        </Card>)}
    </div>

  );
}


