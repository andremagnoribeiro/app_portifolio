import React from 'react';

import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import {ItemCard }from './ItemCard';
import CardHeader from '@material-ui/core/CardHeader';
export const Autores = ({ item }) => (
  <Card style={{ marginTop: 30, paddingBottom: 30, backgroundColor: "#d3d3d3" }}>
    <CardHeader
      title="Autores"
      subheader=""
    />

    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => {
      if (item[`nome_completo_do_autor_${i}`] && item[`nome_completo_do_autor_${i}`] !== "NULL") {
        return (<Card key={item.id} style={{ margin: 10, backgroundColor: "#d3d388" }}>
          <CardContent>
            <ItemCard title={'Nome Completo:'} valor={item[`nome_completo_do_autor_${i}`]} />
                
            
                
            
            <div style={{ marginLeft: 20 }}>
              <Typography color={'textSecondary'} style={{ fontSize: 16, width: '100%' }} gutterBottom>
                Nome para Citação:
              </Typography>
              <Typography style={{ fontSize: 16, width: '100%', marginLeft: 10  }} gutterBottom>
                {item[`nome_para_citacao_${i}`]}
              </Typography>
            </div>
          {(item[`cpf_${i}`]!=='' && item[`cpf_${i}`]!=='NULL') &&  <div style={{ marginLeft: 20 }}>
              <Typography color={'textSecondary'} style={{ fontSize: 16, width: '100%' }} gutterBottom>
                CPF:
            </Typography>
              <Typography style={{ fontSize: 16, width: '100%', marginLeft: 10 }} gutterBottom>
                {item[`cpf_${i}`]}
              </Typography>
            </div>}
            {(item[`ordem_de_autoria_${i}`]!=='' && item[`ordem_de_autoria_${i}`]!=='NULL') &&   <div style={{ marginLeft: 20 }}>
              <Typography color={'textSecondary'} style={{ fontSize: 16, width: '100%' }} gutterBottom>
                Ordem de Autoria:
            </Typography>
              <Typography style={{ fontSize: 16, width: '100%', marginLeft: 10 }} gutterBottom>
                {item[`ordem_de_autoria_${i}`]}
              </Typography>
            </div>}
           {(item[`nro_id_cnpq_${i}`]!=='' && item[`nro_id_cnpq_${i}`]!=='NULL') &&   <div style={{ marginLeft: 20 }}>
              <Typography color={'textSecondary'} style={{ fontSize: 16, width: '100%' }} gutterBottom>
                ID CNPQ:
        </Typography>
              <Typography style={{ fontSize: 16, width: '100%', marginLeft: 10 }} gutterBottom>
                {item[`nro_id_cnpq_${i}`]}
              </Typography>
            </div>}

          </CardContent>
        </Card>)
      }
      return undefined;

    })}
  </Card>
)
