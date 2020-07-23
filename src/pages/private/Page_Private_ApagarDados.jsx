import React, { useState } from 'react';


//material ui
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

//variavel
import { server } from '../../var';






export const Page_Private_ApagarDados = ({ update }) => {


  const [expandedDelete, setExpandedDelete] = useState(false);

  const handleExpandClickDelete = ({ update }) => {
    setExpandedDelete(!expandedDelete);
  };



  return (
    <div>

      <div style={{ margin: 20 }}>
        <DeleteTable name={"Artigos Publicados"} nameTableSql={"pb_artigo_publicado"} user={JSON.parse(localStorage.getItem("user")).user_name} update={() => update()} />
        <DeleteTable name={"Capítulo de Livros Publicado"} nameTableSql={"pb_capitulo_livro_publicado_organizado"} user={JSON.parse(localStorage.getItem("user")).user_name} update={() => update()} />
        <DeleteTable name={"Livro Publicado Organizado"} nameTableSql={"pb_livro_publicado_organizado"} user={JSON.parse(localStorage.getItem("user")).user_name} update={() => update()} />
        <DeleteTable name={"Texto Jornal Revista"} nameTableSql={"pb_texto_jornal_revista"} user={JSON.parse(localStorage.getItem("user")).user_name} update={() => update()} />
        <DeleteTable name={"Trabalho Evento"} nameTableSql={"pb_trabalho_evento"} user={JSON.parse(localStorage.getItem("user")).user_name} update={() => update()} />
        {/* <DeleteTable key={487987557} name={"Livro Publicado Organizados"} nameTableSql={"pb_livro_publicado_organizado"} user={JSON.parse(localStorage.getItem("user")).user_name} update={update_f} /> */}
      </div>

    </div>
  );
}



const DeleteTable = ({ name, nameTableSql, user, update }) => {

  const deleteTable = () => {

    let xhr = new XMLHttpRequest();

    xhr.onload = function () {
      if (xhr.status === 200 && xhr.responseText === 'true') {
        document.getElementById("menseger" + nameTableSql).innerHTML = "Arquivos deletados com sucesso! ";
        update();
      }
    };

    xhr.open('POST', server + `/ufjfportfolioprofissional/api/delete.php?user=${user}&table=${nameTableSql}`, true);
    xhr.send();
  }



  return (
    <div style={{ margin: 20 }}    >

      <Button variant="contained"
        color="secondary"

        startIcon={<DeleteIcon />}
        onClick={deleteTable}
        size="small"
      >
        <span > Apagar todas as Informações</span>

      </Button>
      <span>{"  " + name} </span>

      <div id={"menseger" + nameTableSql}> </div>

    </div>
  );
}