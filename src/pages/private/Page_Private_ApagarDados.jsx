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
      <DeleteTable name={'Artigo Publicado'} nameTableSql={'pb_artigo_publicado'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Capítulo Livro Publicado'} nameTableSql={'pb_capitulo_livro_publicado_organizado'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Livro Publicado Organizado'} nameTableSql={'pb_livro_publicado_organizado'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Texto Jornal Revista'} nameTableSql={'pb_texto_jornal_revista'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Trabalho em Evento'} nameTableSql={'pb_trabalho_evento'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Conselho Comissão Consultoria'} nameTableSql={'ap_conselho_comissao_consultoria'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Direção Administração'} nameTableSql={'ap_direcao_administracao'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Pesquisa e Desenvolvimento'} nameTableSql={'ap_pesquisa_desenvolvimento'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Vinculo'} nameTableSql={'ap_vinculo'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Projeto Pesquisa'} nameTableSql={'at_projeto_pesquisa'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Doutorado'} nameTableSql={'fat_doutorado'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Especialização'} nameTableSql={'fat_especializacao'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Graduação'} nameTableSql={'fat_graduacao'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Mestrado'} nameTableSql={'fat_mestrado'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Aperfeiçoamento e Especialização'} nameTableSql={'oa_aperfeicoamento_especializacao'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Doutorado'} nameTableSql={'oa_doutorado'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Graduação'} nameTableSql={'oa_graduacao'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Iniciação Cientifica'} nameTableSql={'oa_iniciacao_cientifica'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Mestrado'} nameTableSql={'oa_mestrado'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Pós-doutorado'} nameTableSql={'oa_posdoutorado'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Participação em Banca de Aperfeiçoamento Especialização'} nameTableSql={'part_banca_aperfeicoamento_especializacao'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Participação em Banca de Doutorado'} nameTableSql={'part_banca_doutorado'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Participação em Banca de Exame Qualificação'} nameTableSql={'part_banca_exame_qualificacao'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Participação em Banca de Graduação'} nameTableSql={'part_banca_graduacao'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Participação em Banca Julgadora de Concurso Publico'} nameTableSql={'part_banca_julgadora_concurso_publico'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Participação em Banca Julgadora Outra'} nameTableSql={'part_banca_julgadora_outra'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Participação em Banca Julgadora de Professor Titular'} nameTableSql={'part_banca_julgadora_professor_titular'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Participação em Banca de Mestrado'} nameTableSql={'part_banca_mestrado'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Participação em Congresso'} nameTableSql={'part_congresso'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Participação em Encontro'} nameTableSql={'part_encontro'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Participação em Oficina'} nameTableSql={'part_oficina'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Participação em Outras'} nameTableSql={'part_evento_congresso_outra'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Participação em Seminário'} nameTableSql={'part_seminario'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Participação em Simpósio'} nameTableSql={'part_simposio'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Prêmio Titulo'} nameTableSql={'pt_premio_titulo'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Curso Curta Duração'} nameTableSql={'fc_curso_curta_duracao'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Disciplina'} nameTableSql={'disciplinas'} user={JSON.parse(localStorage.getItem('user')).user_name}  />
<DeleteTable name={'Projeto'} nameTableSql={'projetos'} user={JSON.parse(localStorage.getItem('user')).user_name}  />  </div>

    </div>
  );
}



const DeleteTable = ({ name, nameTableSql, user }) => {

  const deleteTable = () => {

    let xhr = new XMLHttpRequest();

    xhr.onload = function () {
      if (xhr.status === 200 && xhr.responseText === 'true') {
        document.getElementById("menseger" + nameTableSql).innerHTML = "Arquivos deletados com sucesso! ";
       
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