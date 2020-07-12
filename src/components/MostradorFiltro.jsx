


import React, { useState, useEffect } from 'react'

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';


export const MostradorFiltro = ({apagarFiltro,text}) => {
 
//filtro mostrador StyledBreadcrumb
const clickFiltroApagar=()=>{
  apagarFiltro();
}
  return (
    <div>
     <StyledBreadcrumb
        label={text+" x "}
        onClick={clickFiltroApagar}
      />
    </div>
  );

}


const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    marginLeft: 20,
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip); 
