import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

import Button from '@material-ui/core/Button';


import {api_deleteTable} from '../../../../api/serverAPI';



export const DeleteTable = ({ name, nameTableSql, user,update }) => {

  //Delete Table or itens
  const runDeleteTable=()=>{
    api_deleteTable(deleteTableCallBack);
  }
  const deleteTableCallBack=()=>{
    document.getElementById("menseger"+nameTableSql).innerHTML = "Arquivos deletados com sucesso! ";
  }

  return (
    <div style={{margin:20}}    >
     
      <Button variant="contained"
        color="secondary"
       
        startIcon={<DeleteIcon />}
        onClick={runDeleteTable}
        size="small"
      >
       <span > Apagar Dados</span> 

      </Button>
      <span>{"  "+name} </span>

      <div id={"menseger"+nameTableSql}> </div>

    </div>
  );
}