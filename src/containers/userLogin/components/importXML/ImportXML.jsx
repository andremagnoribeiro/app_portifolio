import React from 'react'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import './ImportXML.css';
import img_exportXML from './img/exportXML.png'; 

const server="http://localhost"

//Class

export const ImportXML=({update})=> {


  const onChange = (e) => {
    let fileInput = e.target.files;

    let xhr = new XMLHttpRequest(),
      fd = new FormData();


    fd.append('file', fileInput[0]);
    xhr.onload = function () {
      document.getElementById("menseger").innerHTML = xhr.responseText;
      update();
    };

    xhr.open('POST', server+`/api/importxml.php?user=${JSON.parse(localStorage.getItem("user")).user_name}`, true);
    xhr.send(fd);
  }

  return (

   
        <Card >
          <Box textAlign="center">
            <CardHeader

              title="Importe de Curriculo Lattes "
              subheader="O arquivo importado deve estar no formato .xml."
            />
            
            <div className="upload-btn-wrapper"  >
              <button className="btn">Abrir Arquivo</button>
              <input type="file" name="myfile" onChange={(e) => onChange(e)} />
            </div>
         
          </Box>
          <Box textAlign="center">
            <Typography>Você pode exportalo no site   
              <a href=" lattes.cnpq.br" rel="noopener noreferrer" target="_blank"  >lattes.cnpq.br</a> conforme a imagem abaixo</Typography>
            <img  alt="exportXML" style={{width:"50%"}} src={img_exportXML} />
         
          <div className="msg" id="menseger"></div>
          </Box>
        </Card>
    
  );
}




