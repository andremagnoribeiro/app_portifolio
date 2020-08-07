import React from 'react';

import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export const TitleItem = ({ title, valor }) => (
  <div >
    {(valor !== '' && valor && valor !== "NULL") && <div style={{
      marginLeft: 0,marginRight: 10,
    }}>
      <div style={{
        marginLeft: 10
      }}>
        <div>
          <span style={{color:'#b6b6b6'}}>
            {title}:
          </span>
        </div >
        <div style={{ marginLeft: 40 }} >
          <div >
            {valor}
          </div>
        </div >
      </div>
    </div>}
  </div>
)


