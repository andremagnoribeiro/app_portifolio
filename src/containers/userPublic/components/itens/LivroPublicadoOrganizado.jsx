import React, { useState } from 'react';

import Collapse from '@material-ui/core/Collapse';

import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { ItemCard } from '../ItemCard';

import { Url } from '../Url';


const table = "pb_livro_publicado_organizado";


export const LivroPublicadoOrganizado = (item) => {

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
        title="Livro Publicado Organizado"
        subheader={"publicado em: " + item.ano}
      />

      <CardContent>

        <Typography component={'span'} variant="h5" color="textSecondary" gutterBottom> {item.titulo_do_livro}  </Typography>


        <Typography  component={'span'} variant="h5" color="textSecondary" gutterBottom >

          {item.palavra_chave_1 !== "NULL" && item.palavra_chave_1 ? "Palavras Chaves:" : undefined}

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

          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Abrir

        </IconButton>


      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent style={{ backgroundColor: "#363636" }}>
          <Card style={{ marginTop: 30, paddingBottom: 30, backgroundColor: "#d3d3d3" }}>
            <CardHeader
              title="Dados Gerais"
              subheader=""
            />
           
           <ItemCard title={"Tipo"} valor={item.tipo)}                          
           <ItemCard title={"Pais de Publicação"} valor={item.pais_de_publicacao)}                          
           <ItemCard title={"Cidade da Editora"} valor={item.cidade_da_editora)}                          
           <ItemCard title={"Natureza"} valor={item.natureza)}                          
           <ItemCard title={"ISBN"} valor={item.isbn)}                          
           <ItemCard title={"Meio de Divulgação"} valor={item.meio_de_divulgacao)}                          
           <ItemCard title={"Idioma"} valor={item.idioma)}                          
          
           <ItemCard title={"volumes"} valor={item.numero_de_volumes)}                          
           <ItemCard title={"Número de paginas"} valor={item.numero_de_paginas)}                          
           <ItemCard title={"Número de Serie"} valor={item.numero_da_serie)}                          
           <ItemCard title={"Número da Edição Revisão"} valor={item.numero_da_edicao_revisao)}                          
          
           <ItemCard title={"Flag de Divulgação Científica"} valor={item.flag_divulgacao_cientifica)}                          
           <ItemCard title={"Flag de Relevancia"} valor={item.flag_relevancia)}                          
           <ItemCard title={"Titulo em Ingles"} valor={item.titulo_do_livro_ingles)}                          
           <ItemCard title={"Informações Adicionais"} valor={item.descricao_informacoes_adicionais, item.descricao_informacoes_adicionais_ingles)}                          

          </Card>

          <Card style={{ marginTop: 30, paddingBottom: 30, backgroundColor: "#d3d3d3" }}>
            <CardHeader
              title="Autores"
              subheader=""
            />

{[1, 2, 3, 4, 5, 6, 7, 8].map(i => {
              if(item[`nome_completo_do_autor_${i}`] && item[`nome_completo_do_autor_${i}`] !=="NULL"){
              return (<Card key={item.id} style={{ margin:10, backgroundColor: "#d3d3d3"}}>
                <CardContent>
                  <Typography >
                    Nome Completo: {item[`nome_completo_do_autor_${i}`]}
                  </Typography >
                  <Typography style={{ fontSize: 16, width: '100%' }} gutterBottom>
                    Nome para Citação: {item[`nome_para_citacao_${i}`]}
                  </Typography>
                  <Typography style={{ fontSize: 16, width: '100%' }} gutterBottom>
                    CPF: {item[`cpf_${i}`]}
                  </Typography>
                  <Typography style={{ fontSize: 16, width: '100%' }} gutterBottom>
                    ID CNPQ: {item[`nro_id_cnpq_${i}`]}
                  </Typography>
                  <Typography style={{ fontSize: 16, width: '100%' }} gutterBottom>
                    Ordem de Autoria: {item[`ordem_de_autoria_${i}`]}
                  </Typography>
                </CardContent>
              </Card>)
              }
              return undefined;
              
            })}

          </Card>
          {item.nome_grande_area_do_conhecimento_1 && <Card style={{ marginTop: 30, paddingBottom: 30, backgroundColor: "#d3d3d3" }}>
            <CardHeader
              title="Area de Conhecimento"
              subheader=""
            />
            {item.nome_grande_area_do_conhecimento_1 ? <Card style={{ margin: 20, paddingBottom: 30, backgroundColor: "#d3d3d3" }}>
              {<Typography component={'span'} style={{ fontSize: 16, margin: 20 }} >{item.nome_grande_area_do_conhecimento_1}</Typography >}
              <ItemCard title={"Nome da Area do Conhecimento:"} valor={item.nome_da_area_do_conhecimento_1)}
              <ItemCard title={"Nome da Especialidade:"} valor={item.nome_da_especialidade_1)}
              <ItemCard title={"Nome da sub area do conhecimento:"} valor={item.nome_da_sub_area_do_conhecimento_1)}
              <ItemCard title={"Ordem de Autoria:"} valor={item.ordem_de_autoria_1)}
            </Card> : undefined}
            {item.nome_grande_area_do_conhecimento_2 ? <Card style={{ margin: 20, paddingBottom: 30, backgroundColor: "#d3d3d3" }}>
              {<Typography component={'span'} style={{ marginLeft: 30, fontSize: 16, marginTop: 20 }} >{item.nome_grande_area_do_conhecimento_2}</Typography >}
              <ItemCard title={"Nome da Area do Conhecimento:"} valor={item.nome_da_area_do_conhecimento_2)}
              <ItemCard title={"Nome da Especialidade:"} valor={item.nome_da_especialidade_2)}
              <ItemCard title={"Nome da sub area do conhecimento:"} valor={item.nome_da_sub_area_do_conhecimento_2)}
              <ItemCard title={"Ordem de Autoria:"} valor={item.ordem_de_autoria_2)}
            </Card> : undefined}
            {item.nome_grande_area_do_conhecimento_3 ? <Card style={{ margin: 20, paddingBottom: 30, backgroundColor: "#d3d3d3" }}>
              {<Typography component={'span'} style={{ marginLeft: 30, fontSize: 16, marginTop: 20 }} >{item.nome_grande_area_do_conhecimento_3}</Typography >}
              <ItemCard title={"Nome da Area do Conhecimento:"} valor={item.nome_da_area_do_conhecimento_3)}
              <ItemCard title={"Nome da Especialidade:"} valor={item.nome_da_especialidade_3)}
              <ItemCard title={"Nome da sub area do conhecimento:"} valor={item.nome_da_sub_area_do_conhecimento_3)}
              <ItemCard title={"Ordem de Autoria:"} valor={item.ordem_de_autoria_3)}
            </Card> : undefined}
          </Card>}
        </CardContent>
      </Collapse>

    </Card>
  );

}

