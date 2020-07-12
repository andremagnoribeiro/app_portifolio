import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { ItemCard } from './components/ItemCard';
import { Autores } from './components/Autores';
import { Url } from './components/Url';

const table="pb_capitulo_livro_publicado_organizado";

const useStyles = makeStyles((theme) => ({
  root: {


  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


export const PBCapituloLivroPublicado = (item) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{
      backgroundColor: "rgb(255, 238, 218)",
      maxWidth: 2000,
      margin: 20
    }}>
      <CardHeader
      
        title="Capítulo de Livros Publicado"
        subheader={"publicado em: " + item.ano}

      />
      
      <CardContent>
       
        <Typography component={'span'}  color="textSecondary" gutterBottom> {item.titulo_do_livro}  </Typography>
       
       
        <Typography color="textSecondary" >
          
          {item.palavra_chave_1 !== "NULL" && item.palavra_chave_1 ? "Palavras Chaves:": undefined}
         
          {item.palavra_chave_1 !== "NULL" && item.palavra_chave_1 ? " " + item.palavra_chave_1 : undefined}
          {item.palavra_chave_2 !== "NULL" && item.palavra_chave_2 ? ", " + item.palavra_chave_2 : undefined}
          {item.palavra_chave_3 !== "NULL" && item.palavra_chave_3 ? ", " + item.palavra_chave_3 : undefined}
          {item.palavra_chave_4 !== "NULL" && item.palavra_chave_4 ? ", " + item.palavra_chave_4 : undefined}
          {item.palavra_chave_5 !== "NULL" && item.palavra_chave_5 ? ", " + item.palavra_chave_5 : undefined}
          {item.palavra_chave_6 !== "NULL" && item.palavra_chave_6 ? ", " + item.palavra_chave_6 : undefined}
        </Typography>

        <Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page_do_trabalho} external_url={item.external_url} />
    
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent style={{ backgroundColor: "#363636" }}>
          <Card style={{ marginTop: 30, paddingBottom: 30, backgroundColor: "#d3d3d3" }}>
            <CardHeader
              title="Dados Gerais"
              subheader=""
            />
            {ItemCard("Titulo do Capítulo do Livro:", item.titulo_do_capitulo_do_livro)}
            {ItemCard("Titulo do Livro:", item.titulo_do_livro)}
            {ItemCard("Tipo:", item.tipo)}
            {ItemCard("Natureza:", item.natureza)}
           
            {item.titulo_do_capitulo_do_livro_ingles === '' ? ItemCard("Ingles:", item.titulo_do_capitulo_do_livro_ingles) : undefined}
           
            {ItemCard("Cidade da Editora:", item.cidade_da_editora)}
            {ItemCard("Informacoes Adicionais (Ingles):", item.descricao_informacoes_adicionais, item.descricao_informacoes_adicionais_ingle)}
            {ItemCard("Flag Divulgacão cientifica:", item.flag_divulgacao_cientifica)}
            {ItemCard("Flag Relevancia:", item.flag_relevancia)}

            {ItemCard("Idioma:", item.idioma)}
            {ItemCard("ISBN:", item.isbn)}
            {ItemCard("Meio de Divulgacão:", item.meio_de_divulgacao)}

            {ItemCard("Número da Edicao Revisão:", item.numero_da_edicao_revisao)}
            {ItemCard("Número da Série:", item.numero_da_serie)}
            {ItemCard("Número de Volumes:", item.numero_de_volumes)}


            {ItemCard("Organizadores:", item.organizadores)}
            {ItemCard("Página Final:", item.pagina_final)}
            {ItemCard("Página Inicial:", item.pagina_inicial)}
            {ItemCard("País de Publicacão:", item.pais_de_publicacao)}

            {ItemCard("Setor de Atividade:", item.setor_de_atividade_1,item.setor_de_atividade_2,item.setor_de_atividade_3)}
            {ItemCard("doi:", item.doi)}
            {ItemCard("external_url:", item.external_url)}
            {ItemCard("Home_page_do_trabalho:", item.home_page_do_trabalho)}
            {ItemCard("id:", item.id)}

          </Card>

          <Autores item={item}/>


          <Card style={{ marginTop: 30, paddingBottom: 30, backgroundColor: "#d3d3d3" }}>
            <CardHeader
              title="Area de Conhecimento"
              subheader=""
            />
            {item.nome_grande_area_do_conhecimento_1 ? <Card style={{ margin: 20, paddingBottom: 30, backgroundColor: "#d3d3d3" }}>
              {<Typography component={'span'}  style={{ fontSize: 16 ,margin: 20}} >{item.nome_grande_area_do_conhecimento_1}</Typography >}
                
              {ItemCard("Nome da Area do Conhecimento:", item.nome_da_area_do_conhecimento_1)}
              {ItemCard("Nome da Especialidade:", item.nome_da_especialidade_1)}
              {ItemCard("Nome da sub area do conhecimento:", item.nome_da_sub_area_do_conhecimento_1)}
              {ItemCard("Ordem de Autoria:", item.ordem_de_autoria_1)}
            </Card> : undefined}

            {item.nome_grande_area_do_conhecimento_2 ? <Card style={{ margin: 20, paddingBottom: 30, backgroundColor: "#d3d3d3" }}>
            {<Typography component={'span'}  style={{ marginLeft: 30,fontSize: 16,marginTop: 20 }} >{item.nome_grande_area_do_conhecimento_2}</Typography >}
            
              {ItemCard("Nome da Area do Conhecimento:", item.nome_da_area_do_conhecimento_2)}
              {ItemCard("Nome da Especialidade:", item.nome_da_especialidade_2)}
              {ItemCard("Nome da sub area do conhecimento:", item.nome_da_sub_area_do_conhecimento_2)}
              {ItemCard("Ordem de Autoria:", item.ordem_de_autoria_2)}
            </Card> : undefined}

            {item.nome_grande_area_do_conhecimento_3 ? <Card style={{ margin: 20, paddingBottom: 30, backgroundColor: "#d3d3d3" }}>
            {<Typography component={'span'}  style={{ marginLeft: 30,fontSize: 16,marginTop: 20 }} >{item.nome_grande_area_do_conhecimento_3}</Typography >}
            
              {ItemCard("Nome da Area do Conhecimento:", item.nome_da_area_do_conhecimento_3)}
              {ItemCard("Nome da Especialidade:", item.nome_da_especialidade_3)}
              {ItemCard("Nome da sub area do conhecimento:", item.nome_da_sub_area_do_conhecimento_3)}
              {ItemCard("Ordem de Autoria:", item.ordem_de_autoria_3)}
            </Card> : undefined}
          </Card>









        </CardContent>
      </Collapse>
    </Card>
  );

}

