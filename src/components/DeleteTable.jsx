import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

import Button from '@material-ui/core/Button';


const server = "http://localhost";


export const DeleteTable = ({ name, nameTableSql, user,update }) => {

  const deleteTable = () => {

    let xhr = new XMLHttpRequest();

    xhr.onload = function () {
      if(xhr.status===200&&xhr.responseText=='true'){
        document.getElementById("menseger"+nameTableSql).innerHTML = "Arquivos deletados com sucesso! ";
        update();
      }
    };

    xhr.open('POST', server + `/api/delete.php?user=${user}&table=${nameTableSql}`,true);
    xhr.send();
  }



  return (
    <div style={{margin:20}}    >
     
      <Button variant="contained"
        color="secondary"
       
        startIcon={<DeleteIcon />}
        onClick={deleteTable}
        size="small"
      >
       <span > Apagar todas as Informações</span> 

      </Button>
      <span>{"  "+name} </span>

      <div id={"menseger"+nameTableSql}> </div>

    </div>
  );
}