import React from 'react';


import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';






export const SigaDisciplina = (item) => {
  
  
  


  return (
    <Card style={{
      backgroundColor:"#d3d3d3",
      maxWidth: 2000,
      margin: 20
    }}>
      
      <CardHeader
        title={"Disciplina: "+item.NOME +" - "+item.DISCIPLINA+"-"+item.TURMA}
        subheader={"Ano/Semetre: " + item.ANO +"/"+item.SEMESTRE}
      />
      <CardContent>
      <Typography>Horas de Estágio: {item.HORASESTAGIO}</Typography>
      <Typography>Horas de Laboratório: {item.HORASLAB}</Typography>
      <Typography>Horas de Aula: {item.HORASAULA}</Typography>
      <Typography>Vagas: {item.VAGASOCUP}</Typography>
      </CardContent>

    </Card>
  );

}

