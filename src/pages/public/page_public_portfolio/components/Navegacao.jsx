import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';



export default function Navegacao(props) {


  console.log(props);
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {props.anteriores.map((item) =>{
        //console.log(">>>>6", item.url);
        return <div onClick={() => props.history.push(item.url)} >
          {item.name}
        </div>
      }
      )}
      <Typography color="textPrimary">{props.atual}</Typography>
    </Breadcrumbs>
  );
}