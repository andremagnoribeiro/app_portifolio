import axios from 'axios';

import { server } from '../var';


export const api_getUsers = () => axios
.get(`${server}/ufjfportfolioprofissional/api/getUsers.php`)
.then(({ data }) => {
 
  return data;
})

export const api_getUserId = (user_name) => axios
.get(`${server}/ufjfportfolioprofissional/api/getUserId.php?username=${user_name}`)
.then(({ data }) => {
  
  return data;
})

export const api_deleteUser = (user_name) => {
  let xhr = new XMLHttpRequest();
  xhr.open('POST', server +
    `/ufjfportfolioprofissional/api/deleteUser.php/?user_name=${JSON.parse(localStorage.getItem("user")).user_name}`, true);
  xhr.send();
}


export const api_getTable = (userName,name) => axios
.get(`${server}/ufjfportfolioprofissional/api/getTable.php?user=${userName}&name=${name}`)
.then(({ data }) => {
 
  return data;
})

export const api_getAllTable = (userName) => axios
.get(`${server}/ufjfportfolioprofissional/api/getAllTable.php?user=${userName}`)
.then(({ data }) => {
 
  return data;
})


export const api_getMaxMinAno = (userName) => axios
.get(`${server}/ufjfportfolioprofissional/api/getMaxMinAno.php?user=${userName}`).then(({ data }) => {
 console.log(">>>>",data);
  return data;
})




export const api_importXML = ( filee ,calback,calback2) => {
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

export const api_getInfoXML = (fileInput,calback) => {
  let xhr = new XMLHttpRequest(),fd = new FormData();
  fd.append('file', fileInput[0]);
    xhr.onload = function () {
    calback(xhr.responseText);
  };

  xhr.open('POST', server + `/ufjfportfolioprofissional/api/importxmlgetInfo.php?user=${JSON.parse(localStorage.getItem("user")).user_name}`, true);
  xhr.send(fd);
}


export const api_deleteTable = (nameTableSql,callback) => {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if(xhr.status===200&&xhr.responseText==='true'){
      callback();
    }
  };
  xhr.open('POST', server + `/ufjfportfolioprofissional/api/delete.php?user=${JSON.parse(localStorage.getItem("user")).user_name}&table=${nameTableSql}`,true);
  xhr.send();
}

export const api_exportPDF=(callback)=>{
  let xhr = new XMLHttpRequest();
  let fd = new FormData();
  fd.append('namesitens',  localStorage.getItem("listExportPDF") );
  xhr.responseType = "blob";
  xhr.onload = function () {
    callback(xhr.response);
  };
  xhr.open('POST', server + `/ufjfportfolioprofissional/api/exportPDF/?user=${JSON.parse(localStorage.getItem("user")).user_name}&name=${JSON.parse(localStorage.getItem("user")).name}&email=${JSON.parse(localStorage.getItem("user")).email}`, true);
  xhr.send(fd);
}
