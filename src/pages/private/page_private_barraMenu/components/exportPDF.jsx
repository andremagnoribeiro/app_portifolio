


import React, { useState } from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Backdrop from '@material-ui/core/Backdrop';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import Snackbar from '@material-ui/core/Snackbar';



import { api_exportPDF } from '../../../../api/serverAPI';
export const ExportPDF = ({  }) => {


  //export PDF
  const runExportPDF = () => {
    api_exportPDF(CallBackExportPdf);
  }

  const CallBackExportPdf = (xhr_response) => {
    const file = new Blob([xhr_response], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL, "_blank");
    //fechar();
    handleClose();
  }

  //open closer snackbar
  const handleClose = () => {
    setOpen(false);
  };

  const [open, setOpen] = useState(false);

  
  return (
    <div>
      <Button id="exportButton" onClick={() => { runExportPDF(); setOpen(true); }} >Exportar Portfolio em PDF</Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        onClose={handleClose}
        message={<div> <div>Processando PDF </div> <LinearProgress /></div>}
        key={"xxxx"}
      />
    </div>
  );

}

