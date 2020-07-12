import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';



export default function Navegacao({ anteriores, atual }) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {anteriores.map((item) => 
        <Link color="inherit" href={item.url} >
          {item.name}
        </Link>


      )}
      <Typography color="textPrimary">{atual}</Typography>
    </Breadcrumbs>
  );
}