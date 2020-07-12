import axios from 'axios';

import { server } from '../var';


export const getUsers = () => axios
.get(`${server}/ufjfportfolioprofissional/api/getUsers.php`)
.then(({ data }) => {
  console.log("API_users", data);
  return data;
})

export const getUserId = (user_name) => axios
.get(`${server}/ufjfportfolioprofissional/api/getUserId.php?username=${user_name}`)
.then(({ data }) => {
  console.log("API_userid", data);
  return data;
})

export const deleteUser = (user_name) => {
  let xhr = new XMLHttpRequest();
  xhr.open('POST', server +
    `/ufjfportfolioprofissional/api/deleteUser.php/?user_name=${JSON.parse(localStorage.getItem("user")).user_name}`, true);
  xhr.send();
}


export const getTable = (userName,name) => axios
.get(`${server}/ufjfportfolioprofissional/api/getTable.php?user=${userName}&name=${name}`)
.then(({ data }) => {
  console.log(name, data);
  return data;
})


export const getSizeTable = (userName,filter,table,respost) =>{

  let xhr = new XMLHttpRequest();

  xhr.onload = function(e) {
    if (this.status == 200) {
      respost(JSON.parse(this.responseText)['count(*)']);
      console.log(JSON.parse(this.responseText));
    }else{
      respost(false);
    }
  };

  xhr.open('GET', `${server}/ufjfportfolioprofissional/api/getsize.php?user=${userName}&name=${table}&filtertext=${filter.text}&filterano=${filter.ano}`, true);
  xhr.send();

}


