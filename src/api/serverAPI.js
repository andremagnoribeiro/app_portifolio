import axios from 'axios';

import { server } from '../var';


export const api_getUsers = () => axios
.get(`${server}/ufjfportfolioprofissional/api/request/get/users.php`)
.then(({ data }) => {
 
  return data;
})

export const api_getUserId = (user_name) => axios
.get(`${server}/ufjfportfolioprofissional/api/request/get/userid.php?username=${user_name}`)
.then(({ data }) => {
  
  return data;
})

export const api_deleteUser = () => {
  let xhr = new XMLHttpRequest();
  xhr.open('DELETE', server +
    `/ufjfportfolioprofissional/api/request/delete/user.php/?user_name=${JSON.parse(localStorage.getItem("user")).user_name}`, true);
  xhr.send();
}


export const api_getTable = (userName,name) => axios
.get(`${server}/ufjfportfolioprofissional/api/request/getTable.php?user=${userName}&name=${name}`)
.then(({ data }) => {
 
  return data;
})

export const api_getAllTable = (userName) => axios
.get(`${server}/ufjfportfolioprofissional/api/request/get/tables.php?user=${userName}`)
.then(({ data }) => {
 
  return data;
})


export const api_getMaxMinAno = (userName) => axios
.get(`${server}/ufjfportfolioprofissional/api/request/get/maxminano.php?user=${userName}`).then(({ data }) => {
 console.log(">>>>",data);
  return data;
})

export const api_getInfoLogin = (textEmail,md5_textPassWord, callBack) => {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {

    if(xhr.responseText==="false"&&xhr.status!==200){
      document.getElementById("msg").style.display="block";
      callBack(false);
    }else{
      callBack(xhr.responseText);
    }

  };

  xhr.open('GET', server+`/ufjfportfolioprofissional/api/request/get/authenticate.php/?user=${textEmail}&password=${md5_textPassWord}`, true);
  xhr.send();

}


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

  xhr.open('POST', server + `/ufjfportfolioprofissional/api/request/post/import-xml.php?user=${JSON.parse(localStorage.getItem("user")).user_name}`, true);
  xhr.send(fd);
}

export const api_getInfoXML = (fileInput,callback) => {
  let xhr = new XMLHttpRequest(),fd = new FormData();
  fd.append('file', fileInput[0]);
    xhr.onload = function () {
    callback(xhr.responseText);
  };

  xhr.open('POST', server + `/ufjfportfolioprofissional/api/request/post/import-xml-get-Info.php?user=${JSON.parse(localStorage.getItem("user")).user_name}`, true);
  xhr.send(fd);
}


export const api_deleteTable = (nameTableSql,callback) => {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if(xhr.status===200&&xhr.responseText==='true'){
      callback(true);
    }else{
      callback(false);
    } 
  };
  xhr.open('DELETE', server + `/ufjfportfolioprofissional/api/request/delete/table.php?user=${JSON.parse(localStorage.getItem("user")).user_name}&table=${nameTableSql}`,true);
  xhr.send();
}

export const api_deleteAllTableCurriculoLattes = (callback) => {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if(xhr.status===200&&xhr.responseText==='true'){
      callback(true);
    }else{
      callback(false);
    }
  };
  xhr.open('DELETE', server + `/ufjfportfolioprofissional/api/request/delete/tables-portfolio-lattes.php?user=${JSON.parse(localStorage.getItem("user")).user_name}`,true);
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
  xhr.open('POST', server + `/ufjfportfolioprofissional/api/request/post/export-pdf.php?user=${JSON.parse(localStorage.getItem("user")).user_name}&name=${JSON.parse(localStorage.getItem("user")).name}&email=${JSON.parse(localStorage.getItem("user")).email}`, true);
  xhr.send(fd);
}
