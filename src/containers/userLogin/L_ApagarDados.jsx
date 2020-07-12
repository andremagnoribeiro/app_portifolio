import React,{useState} from 'react';
import {DeleteTable} from './components/DeleteTable';

import IconButton from '@material-ui/core/IconButton';
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandLessOutlined';

import Collapse from '@material-ui/core/Collapse';




export const L_ApagarDados = ({ update }) => {

 
  const [expandedDelete, setExpandedDelete] = useState(false);
 
  const handleExpandClickDelete = ({update}) => {
    setExpandedDelete(!expandedDelete);
  };



  return (
    <div>
  
      <div style={{ margin: 20 }}>
        <DeleteTable name={"Artigos Publicados"} nameTableSql={"pb_artigo_publicado"} user={JSON.parse(localStorage.getItem("user")).user_name} update={()=>update()} />
        <DeleteTable name={"Capítulo de Livros Publicado"} nameTableSql={"pb_capitulo_livro_publicado_organizado"} user={JSON.parse(localStorage.getItem("user")).user_name} update={()=>update()} />
        <DeleteTable name={"Livro Publicado Organizado"} nameTableSql={"pb_livro_publicado_organizado"} user={JSON.parse(localStorage.getItem("user")).user_name} update={()=>update()} />
        <DeleteTable name={"Texto Jornal Revista"} nameTableSql={"pb_texto_jornal_revista"} user={JSON.parse(localStorage.getItem("user")).user_name} update={()=>update()} />
        <DeleteTable name={"Trabalho Evento"} nameTableSql={"pb_trabalho_evento"} user={JSON.parse(localStorage.getItem("user")).user_name} update={()=>update()} />
        {/* <DeleteTable key={487987557} name={"Livro Publicado Organizados"} nameTableSql={"pb_livro_publicado_organizado"} user={JSON.parse(localStorage.getItem("user")).user_name} update={update_f} /> */}
      </div>
   
  </div>
  );
}