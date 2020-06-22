import React from 'react';

import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import CardHeader from '@material-ui/core/CardHeader';
export const Autores = ({item}) => (
  <Card style={{ marginTop: 30, paddingBottom: 30, backgroundColor: "#d3d3d3" }}>
  <CardHeader
    title="Autores"
    subheader=""
  />

{[1, 2, 3, 4, 5, 6, 7, 8].map(i => {
    if(item[`nome_completo_do_autor_${i}`] && item[`nome_completo_do_autor_${i}`] !=="NULL"){
    return (<Card key={item.id} style={{ margin:10, backgroundColor: "#d3d388"}}>
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
)
