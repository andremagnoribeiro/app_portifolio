import React from 'react';

import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

export const ItemCard = (title, valor) => (
  <div >
 

    {(valor!=='' && valor&& valor!=="NULL") && <div style={{
       marginLeft:20,  
      borderStyle: 'solid none none none ',borderWidth:1 }}>
<div style={{
       marginLeft:20 }}>


      <Typography color={'textSecondary'}>
        {title}
      </Typography >
      <Typography style={{  marginLeft: 40 }} >
        {valor}
      </Typography >
      </div>
    </div>}
 
  </div>
)
