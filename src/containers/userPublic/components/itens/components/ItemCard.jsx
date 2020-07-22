import React from 'react';

import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export const ItemCard = ({ title, valor }) => (
  <div >
    {(valor !== '' && valor && valor !== "NULL") && <div style={{
      marginLeft: 10,marginRight: 10,
      borderStyle: ' none  none solid none ', borderWidth: 1
    }}>
      <div style={{
        marginLeft: 10
      }}>


        <Typography fontWeight="fontWeightBold" >
          <Box fontSize={14} fontWeight="fontWeightBold" m={1}>
            {title}
          </Box>

        </Typography >
        <Typography style={{ marginLeft: 40 }} >
          <Box fontSize={14} m={1}>
            {valor}
          </Box>
        </Typography >
      </div>
    </div>}

  </div>
)
