import React from 'react';

import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { TitleItem } from './TitleItem';
import CardHeader from '@material-ui/core/CardHeader';
export const DadosGerais = ({ item }) =>

  (
    <div>

      <TitleItem title={"Pais do Evento"} valor={item.pais_do_evento} />
      <TitleItem title={"Cidade do Evento"} valor={item.cidade_do_evento} />
      <TitleItem title={"Local de PublicaÃ§Ã£o"} valor={item.local_de_publicacao} />
      <TitleItem title={"Cidade da Editora:"} valor={item.cidade_da_editora} />
      <TitleItem title={"Informacoes Adicionais (Ingles):"} valor={item.descricao_informacoes_adicionais, item.descricao_informacoes_adicionais_ingle} />
      <TitleItem title={"Flag Relevancia:"} valor={item.flag_relevancia} />
      <TitleItem title={"Flag de Divulgação Ciêntifica"} valor={item.flag_divulgacao_cientifica} />
      <TitleItem title={"Natureza:"} valor={item.natureza} />
      <TitleItem title={"Tipo:"} valor={item.tipo} />
      <TitleItem title={"Idioma:"} valor={item.idioma} />
      <TitleItem title={"ISSN"} valor={item.issn} />
      <TitleItem title={"ISBN:"} valor={item.isbn} />
      <TitleItem title={"Meio de Divulgacão:"} valor={item.meio_de_divulgacao} />
      <TitleItem title={"Número da Edicao Revisão:"} valor={item.numero_da_edicao_revisao} />
      <TitleItem title={"Número da Série:"} valor={item.numero_da_serie} />
      <TitleItem title={"Número de Volumes:"} valor={item.numero_de_volumes} />
      <TitleItem title={"Número de paginas"} valor={item.numero_de_paginas} />
      <TitleItem title={"Organizadores:"} valor={item.organizadores} />
      <TitleItem title={"Página Final:"} valor={item.pagina_final} />
      <TitleItem title={"Página Inicial:"} valor={item.pagina_inicial} />
      <TitleItem title={"País de Publicacão:"} valor={item.pais_de_publicacao} />
      <TitleItem title={"Fasciculo"} valor={item.fasciculo} />
      <TitleItem title={"Setor de Atividade 1:"} valor={item.setor_de_atividade_1} />
      <TitleItem title={"Setor de Atividade 2:"} valor={item.setor_de_atividade_2} />
      <TitleItem title={"Setor de Atividade 3:"} valor={item.setor_de_atividade_3} />


    </div>

  )
