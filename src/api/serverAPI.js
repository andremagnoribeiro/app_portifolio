import axios from 'axios';

import {server} from '../var';


export const pb_artigo_publicado = (user) => axios
.get(`${server}/ufjfportfolioprofissional/api/getTable.php?user=${user}&name=pb_artigo_publicado&a1=titulo_do_artigo&a2=titulo_do_periodico_ou_revista`)
.then(({ data }) => {
    console.log("API_pb_artigo_publicado", data);
    return data;
  })

export const pb_capitulo_livro_publicado_organizado = (user, search_word) => axios
.get(`${server}/ufjfportfolioprofissional/api/getTable.php?user=${user}&name=pb_capitulo_livro_publicado_organizado&a1=tipo&a2=titulo_do_capitulo_do_livro&a3=titulo_do_livro&a4=nome_da_editora`)
  .then(({ data }) => {
    console.log("API_livro_publicado_organizad", data);
    return data;
  })


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

export const deleteUser = (user_name) =>{
  let xhr = new XMLHttpRequest();
  xhr.open('POST', server+
  `/ufjfportfolioprofissional/api/deleteUser.php/?user_name=${JSON.parse(localStorage.getItem("user")).user_name}`, true);
  xhr.send();
} 


export const siga_disciplinas = (user) => axios
  .get(`${server}/ufjfportfolioprofissional/api/getTable.php?user=${user}&name=siga_disciplinas`)
  .then(({ data }) => {
    console.log("API_siga_disciplinas", data);
    return data;
})


export const siga_projetos = (user) => axios
.get(`${server}/ufjfportfolioprofissional/api/getTable.php?user=${user}&name=siga_projetos`)
.then(({ data }) => {
  console.log("API_siga_projetos", data);
  return data;
})


export const pb_livro_publicado_organizado = (user) => axios
.get(`${server}/ufjfportfolioprofissional/api/getTable.php?user=${user}&name=pb_livro_publicado_organizado`)
.then(({ data }) => {
  console.log("API_pb_livro_publicado_organizado_api", data);
  return data;
})
               

export const pb_texto_jornal_revista = (user) => axios
.get(`${server}/ufjfportfolioprofissional/api/getTable.php?user=${user}&name=pb_texto_jornal_revista`)
.then(({ data }) => {
  console.log("API_pb_texto_jornal_revista", data);
  return data;
})

export const pb_trabalho_evento = (user) => axios
.get(`${server}/ufjfportfolioprofissional/api/getTable.php?user=${user}&name=pb_trabalho_evento`)
.then(({ data }) => {
  console.log("API_pb_trabalho_evento", data);
  return data;
})
