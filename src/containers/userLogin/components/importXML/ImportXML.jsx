import React, { useState, useEffect } from 'react'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './ImportXML.css';
import img_exportXML from './img/exportXML.png';

const server = "http://localhost"

//Class

export const ImportXML = ({ update ,fechar}) => {

  const [info, setInfo] = useState({});
  const [filee, setFilee] = useState({});
 
  useEffect(() => {


    console.log(info);


  }, [info]);

  const onChange = (e) => {
    let fileInput = e.target.files;
  
    setFilee(fileInput);
    let xhr = new XMLHttpRequest(),
      fd = new FormData();

    fd.append('file', fileInput[0]);
    xhr.onload = function () {
      setInfo(JSON.parse(xhr.responseText));

      document.getElementById("btnImportar").style.display = "none";
      document.getElementById("textInput").style.display = "none";
      document.getElementById("posLoadFile").style.display = "block";
    };

    xhr.open('POST', server + `/ufjfportfolioprofissional/api/importxmlgetInfo.php?user=${JSON.parse(localStorage.getItem("user")).user_name}`, true);
    xhr.send(fd);
  }

  const onChange2 = (e) => {
   

    let xhr = new XMLHttpRequest(),
      fd = new FormData();

    fd.append('file', filee[0]);
    xhr.onload = function () {
      document.getElementById("importarDados").style.display = "none";
      document.getElementById("fechar").style.display = "block";
      document.getElementById("menseger").innerHTML = xhr.responseText;
      update();
    };

    xhr.open('POST', server + `/ufjfportfolioprofissional/api/importxml.php?user=${JSON.parse(localStorage.getItem("user")).user_name}`, true);
    xhr.send(fd);
  }

  return (


    <Card >

      <Box textAlign="center">
        <CardHeader

          title="Importação do Currículo Lattes"
        />
        <Box textAlign="center">
          <Typography>Você pode exportalo no site <a href="lattes.cnpq.br" rel="noopener noreferrer" target="_blank"  >lattes.cnpq.br</a> conforme a imagem abaixo</Typography>
          <img alt="exportXML" style={{ width: "50%" }} src={img_exportXML} />

         
        </Box>
        <div className="upload-btn-wrapper"  >
          <button id="btnImportar" style={{margin:20}} className="btn">Abrir Arquivo</button>
          <input type="file" name="myfile"  onChange={(e) => onChange(e)} />
        </div>
        <Typography id="textInput">O arquivo importado deve estar no formato .xml</Typography>

      </Box>

      <Box id="posLoadFile" style={{display:'none', margin:20}} textAlign="center">
        <Typography >Arquivo "{info.nomeArquivoXML}" carregado. </Typography>
        <Typography >Nome Completo: {info.nomeCompleto}  </Typography>
        <Typography >Numero Idendificador: {info.numeroidendificador} </Typography>
        <Typography >Sistema de Origem: {info.sistemaOrigem} </Typography>
        <Typography >Última atualização: {info.dataAtualizacao} </Typography>
        <Typography >Última atualização: {info.horaAtualizacao} </Typography>
        <Button id="importarDados" style={{margin:20}} variant="contained" color="primary" onClick={()=>onChange2()}>Importar Dados</Button>
        <div className="msg" id="menseger"></div>
        <Button id="fechar" style={{margin:20, display:'none'}} variant="contained" color="primary" onClick={fechar}>Fechar</Button>
     
      </Box>
     
    </Card>

  );
}


