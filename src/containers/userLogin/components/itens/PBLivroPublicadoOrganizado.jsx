

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
import { Autores } from './components/Autores';
import { DadosGerais } from './components/DadosGerais';
import { PalavraChave } from './components/PalavraChave';
import { AreaConhecimento } from './components/AreaConhecimento';
import { Url } from './components/Url';


const table = "pb_livro_publicado_organizado";


export const PBLivroPublicadoOrganizado = (item) => {

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ backgroundColor: "rgb(208, 255, 212)", margin: 20 }}>
      <CardHeader title="Livro Publicado Organizado" subheader={"publicado em: " + item.ano}
      />
      <CardContent>


<Typography component={'span'} variant="h5" color="textSecondary" gutterBottom> {item.titulo_do_livro}  </Typography>
    <PalavraChave item={item} />

<Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page_do_trabalho} external_url={item.external_url} />
  </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Abrir
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" >
        <CardContent style={{ backgroundColor: "#363636" }}>
          <Card style={{ marginTop: 30, paddingBottom: 30, backgroundColor: "#d3d3d3" }}>
            <CardHeader
              title="Dados Gerais"
              subheader=""
            />
            
    
            <ItemCard title={"Titulo do Livro:"} valor={item.titulo_do_livro} />
            < ItemCard title={"Titulo em Ingles"} valor={item.titulo_do_livro_ingles} />
            <DadosGerais item={item} />
          </Card>
          <Autores item={item} />
          <AreaConhecimento item={item} />
        </CardContent>
      </Collapse>
    </Card>
  );

}
