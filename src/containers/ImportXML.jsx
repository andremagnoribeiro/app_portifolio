import React from 'react'
import img_exportXML from '../img/exportXML.png'; 
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import './ImportXML.css';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


const server="http://localhost"


function ImportXML({update}) {


  const onChange = (e) => {
    let fileInput = e.target.files;

    let xhr = new XMLHttpRequest(),
      fd = new FormData();


    fd.append('file', fileInput[0]);
    xhr.onload = function () {
      document.getElementById("menseger").innerHTML = xhr.responseText;
      update();
    };

    xhr.open('POST', server+'/api/importxml.php?user=11962413683', true);
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

export default ImportXML



