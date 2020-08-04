import axios from 'axios';

import { server } from '../var';


export const getUsers = () => axios
.get(`${server}/ufjfportfolioprofissional/api/getUsers.php`)
.then(({ data }) => {
 
  return data;
})

export const getUserId = (user_name) => axios
.get(`${server}/ufjfportfolioprofissional/api/getUserId.php?username=${user_name}`)
.then(({ data }) => {
  
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
 
  return data;
})

export const getAllTable = (userName) => axios
.get(`${server}/ufjfportfolioprofissional/api/getAllTable.php?user=${userName}`)
.then(({ data }) => {
 
  return data;
})


export const getMaxMinAno = (userName) => axios
.get(`${server}/ufjfportfolioprofissional/api/getMaxMinAno.php?user=${userName}`).then(({ data }) => {
 console.log(">>>>",data);
  return data;
})


export const getSizeTable = (userName,filter,table,respost) =>{

  let xhr = new XMLHttpRequest();

  xhr.onload = function(e) {
    if (this.status == 200) {
      respost(JSON.parse(this.responseText)['count(*)']);
     
    }else{
      respost(false);
    }
  };

  xhr.open('GET', `${server}/ufjfportfolioprofissional/api/getsize.php?user=${userName}&name=${table}&filtertext=${filter.text}&filterano=${filter.ano}`, true);
  xhr.send();

}


export const importXML = ( filee ,calback,calback2) => {
 
  let xhr = new XMLHttpRequest(),
    fd = new FormData();

  fd.append('file', filee[0]);
  xhr.onload = function () {
    calback(xhr.responseText);
  }
  xhr.addEventListener("progress", function (evt) {
    calback2(xhr.response);
  }, false);

  xhr.open('POST', server + `/ufjfportfolioprofissional/api/importxml.php?user=${JSON.parse(localStorage.getItem("user")).user_name}`, true);
  xhr.send(fd);
}

export const getInfoXML = (fileInput,calback) => {
 
  
  let xhr = new XMLHttpRequest(),
    fd = new FormData();

  fd.append('file', fileInput[0]);
  xhr.onload = function () {
    calback(xhr.responseText);
  };
  xhr.open('POST', server + `/ufjfportfolioprofissional/api/importxmlgetInfo.php?user=${JSON.parse(localStorage.getItem("user")).user_name}`, true);
  xhr.send(fd);
}


