import React, { useState, useEffect } from 'react'


import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

//api
import { getUsers } from "../../api/serverAPI";

export const Page_Admin_Home = (props) => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(data => setUsers(data));
  }, []);



  return (

    <div >
      <h1 style={{ marginLeft: 25 }}>Usuários</h1>
      {users.map(user =>
        <Card key={user.name + "aaaa"} style={{ margin: 20, cursor:'pointer' }} onClick={() => props.history.push("/portfolio/"+user.user_name)}  >
          <CardHeader
            avatar={<Avatar >{user.name.substring(0, 1)}</Avatar>}
            title={user.name}
            subheader={user.email}
            action={<div>deletar</div>}
          />
        </Card>)}
    </div>

  );
}


