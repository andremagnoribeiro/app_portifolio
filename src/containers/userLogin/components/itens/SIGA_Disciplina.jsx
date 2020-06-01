import React, {  useState} from 'react';

import Collapse from '@material-ui/core/Collapse';

import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ItemCard } from '../ItemCard';

import { Url } from '../Url';


const table = "siga_disciplinas";


export const SIGA_Disciplina = (item) => {
  
  
  const [expanded, setExpanded] = useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


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

