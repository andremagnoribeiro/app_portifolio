

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

import { ItemCard } from './components/ItemCard';
import { TitleItem } from './components/TitleItem';
import { Autores } from './components/Autores';
import { DadosGerais } from './components/DadosGerais';
import { PalavraChave } from './components/PalavraChave';
import { AreaConhecimento } from './components/AreaConhecimento';
import { Url } from './components/Url';

const table = 'ap_conselho_comissao_consultoria';/**/

export const APConselhoComissaoConsultoria = (item) => {

  const [expanded, setExpanded] = useState(false);



  return (
    <Card style={{ backgroundColor: 'rgb(208, 255, 212)', margin: 20 }}>
      <CardHeader
        title='Conselho Comissão Consultoria'
        subheader={'Período de (mes/ano): ' + item.mes_inicio + "/" + item.ano_inicio +" a "+item.mes_fim + "/" + item.ano_fim}
      />
      <CardContent>
        <TitleItem title={'Especificações:'} valor={item.especificacao} />
        <TitleItem title={'Nome do Orgão:'} valor={item.nome_orgao} />

        <TitleItem title={ 'Flag de Periodo:'} valor={item.flag_periodo} />
       
        <TitleItem title={ 'Código do Orgão:'} valor={item.codigo_orgao} />
        
        <TitleItem title={ 'Nome da Unidade:'} valor={item.nome_unidade} />
        
        <TitleItem title={ 'Código da Unidade:'} valor={item.codigo_unidade} />

        <Url key={item.id} table={table} id={item.id} external_url={item.external_url} />
      </CardContent>
    </Card>
  );

}