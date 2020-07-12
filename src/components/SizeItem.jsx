import React, { useState, useEffect } from 'react'
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import IconButton from '@material-ui/core/IconButton';
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {
  getUserId
} from "../api/serverAPI";

import { deepOrange, deepPurple } from '@material-ui/core/colors';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

import { PortfolioBusca } from '../components/PortfolioBusca'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { getTable } from "../api/serverAPI";

//
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Navegacao from "../components/Navegacao"



export const SizeItem = ({ heade, num, url, mobile }) => {

  const [expandedFiltro, setExpandedFiltro] = useState(false);


  const handleExpandFiltro = () => {
    setExpandedFiltro(!expandedFiltro);
  };

  const classes = useStyles();

  return ((num.length !== 0 && num.length !== '') &&
    
  
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{
           
    
            backgroundColor: '#aaaaaa',
           
          }}
        >
          <Typography className={classes.heading}> {num.length +"  "+heade }</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
          {num}
          </div>
      
        </ExpansionPanelDetails>
      </ExpansionPanel>
    
  
  )
}


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));