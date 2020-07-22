import React from 'react';

import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { ItemCard } from './ItemCard';
import CardHeader from '@material-ui/core/CardHeader';
import Box from '@material-ui/core/Box';
import { TitleItem } from './TitleItem';

export const Autores = ({ item }) => (
  <Card style={{ marginTop: 30, paddingBottom: 30, backgroundColor: "#d3d3d3" }}>
    <CardHeader
      title="Autores"
      subheader=""
    />

    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => {
      if (item[`nome_completo_do_autor_${i}`] && item[`nome_completo_do_autor_${i}`] !== "NULL") {
        return (
          <Card key={item.id} style={{ margin: 10 }}>
            <CardContent>

              <Typography fontWeight="fontWeightBold" >
                <Box fontSize={16} m={1}>
                  {item[`nome_completo_do_autor_${i}`]}
                </Box>
              </Typography >

              <TitleItem title={'Nome para Citação:'} valor={item[`nome_para_citacao_${i}`]} />

              {(item[`cpf_${i}`] !== '' && item[`cpf_${i}`] !== 'NULL') &&
                <TitleItem title={'CPF:'} valor={item[`cpf_${i}`]} />}

              {(item[`ordem_de_autoria_${i}`] !== '' && item[`ordem_de_autoria_${i}`] !== 'NULL') &&

                <TitleItem title={'Ordem de Autoria:'} valor={item[`ordem_de_autoria_${i}`]} />}

              {(item[`nro_id_cnpq_${i}`] !== '' && item[`nro_id_cnpq_${i}`] !== 'NULL') &&
                <TitleItem title={'ID CNPQ:'} valor={item[`nro_id_cnpq_${i}`]} />}

            </CardContent>
          </Card>)
      }
      return undefined;

    })}
  </Card>
)
