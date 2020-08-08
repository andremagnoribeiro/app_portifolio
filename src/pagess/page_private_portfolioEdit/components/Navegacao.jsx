import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';



export default function Navegacao({ anteriores, atual },props) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {anteriores.map((item) => 
        <div onClick={() => props.history.push(item.url)} >
          {item.name}
        </div>


      )}
      <Typography color="textPrimary">{atual}</Typography>
    </Breadcrumbs>
  );
}