


import React, { useState } from 'react';

import { server } from './../../var';
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


export const ExportPDF = ({ fechar }) => {

  
  const exportpdf=(itens)=>{
    let xhr = new XMLHttpRequest();
    let fd = new FormData();
    fd.append('namesitens',  localStorage.getItem("listExportPDF") );
    xhr.responseType = "blob";
    xhr.onload = function () {
      const file = new Blob([xhr.response], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
        window.open(fileURL, "_blank");
        fechar();
    };
    xhr.open('POST', server + `/ufjfportfolioprofissional/api/exportPDF/?user=${JSON.parse(localStorage.getItem("user")).user_name}&name=${JSON.parse(localStorage.getItem("user")).name}&email=${JSON.parse(localStorage.getItem("user")).email}`, true);
    xhr.send(fd);
  }

 
  
  const handleClose = () => {
    setOpen(false);
  };
  
 
  const [open, setOpen] = useState(false);
  return (
    <div>
    <div id="exportButton" onClick={()=>{exportpdf();setOpen(true);} } >Exportar Portfolio em PDF</div>
    <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        onClose={handleClose}
        message={<div> <div>Processando PDF </div> <LinearProgress/></div>}
        key={"xxxx"}
      />
  
    </div>
  );

}
