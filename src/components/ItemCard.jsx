import React from 'react';

import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

export const ItemCard = (title, valor, valor1, valor2, valor3, valor4, valor5) => (
  <div >
    <Card style={{ marginTop: 3, marginLeft:10 ,marginRight:10,paddingLeft:20,paddingRight:20,backgroundColor: "#DCDCDC"  }}>
    <CardContent  >
      <Typography component={'span'} style={{ fontSize: 16 }} color="textSecondary" gutterBottom>
        {title}
      </Typography>

      {valor!=='NULL' && valor ? (
        <Typography component={'span'} variant="body1" style={{ marginLeft: 30 }} >
          {valor}
        </Typography>
      ) :undefined }
      {valor1!=='NULL' && valor1 ? (
        <Typography component={'span'} variant="body1" style={{ marginLeft: 30 }} >
          {valor1}
        </Typography>
      ) :undefined }
      {valor2!=='NULL' && valor2  ? (
        <Typography component={'span'} variant="h6" style={{ marginLeft: 30 }} >
          {valor2}
        </Typography>
      ) : undefined}
      {valor3!=='NULL' && valor3  ? (
        <Typography component={'span'} variant="h6" style={{ marginLeft: 30 }} >
          {valor3}
        </Typography>
      ) :undefined}

      {valor4!=='NULL' && valor4  ? (
        <Typography component={'span'} variant="h6" style={{ marginLeft: 30 }} >
          {valor4}
        </Typography>
      ) :undefined}

      {valor5!=='NULL' && valor5  ? (
        <Typography component={'span'} variant="h6" style={{ marginLeft: 30 }} >
          {valor5}
        </Typography>
      ) :undefined }


    </CardContent>
    </Card>
  </div>
)
