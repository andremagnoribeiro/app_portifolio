import React from 'react';

import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { ItemCard } from './ItemCard';
import CardHeader from '@material-ui/core/CardHeader';
export const DadosGerais = ({ item }) =>

  (
    <div>




      <ItemCard title={"Pais do Evento"} valor={item.pais_do_evento} />
      <ItemCard title={"Cidade do Evento"} valor={item.cidade_do_evento} />
      <ItemCard title={"Local de PublicaÃ§Ã£o"} valor={item.local_de_publicacao} />
      <ItemCard title={"Cidade da Editora:"} valor={item.cidade_da_editora} />
      <ItemCard title={"Informacoes Adicionais (Ingles):"} valor={item.descricao_informacoes_adicionais, item.descricao_informacoes_adicionais_ingle} />
      <ItemCard title={"Flag Relevancia:"} valor={item.flag_relevancia} />
      <ItemCard title={"Flag de Divulgação Ciêntifica"} valor={item.flag_divulgacao_cientifica} />


      <ItemCard title={"Natureza:"} valor={item.natureza} />
      <ItemCard title={"Tipo:"} valor={item.tipo} />

      <ItemCard title={"Idioma:"} valor={item.idioma} />
      <ItemCard title={"ISSN"} valor={item.issn} />
      <ItemCard title={"ISBN:"} valor={item.isbn} />
      <ItemCard title={"Meio de Divulgacão:"} valor={item.meio_de_divulgacao} />

      <ItemCard title={"Número da Edicao Revisão:"} valor={item.numero_da_edicao_revisao} />
      <ItemCard title={"Número da Série:"} valor={item.numero_da_serie} />
      <ItemCard title={"Número de Volumes:"} valor={item.numero_de_volumes} />
      < ItemCard title={"Número de paginas"} valor={item.numero_de_paginas} />

      <ItemCard title={"Organizadores:"} valor={item.organizadores} />
      <ItemCard title={"Página Final:"} valor={item.pagina_final} />
      <ItemCard title={"Página Inicial:"} valor={item.pagina_inicial} />
      <ItemCard title={"País de Publicacão:"} valor={item.pais_de_publicacao} />
      <ItemCard title={"Meio de DivulgaÃ§Ã£o"} valor={item.meio_de_divulgacao} />
      <ItemCard title={"Fasciculo"} valor={item.fasciculo} />

      <ItemCard title={"Setor de Atividade 1:"} valor={item.setor_de_atividade_1} />
      <ItemCard title={"Setor de Atividade 2:"} valor={item.setor_de_atividade_2} />
      <ItemCard title={"Setor de Atividade 3:"} valor={item.setor_de_atividade_3} />










    </div>

  )
