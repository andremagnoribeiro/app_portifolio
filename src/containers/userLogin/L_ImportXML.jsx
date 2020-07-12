import React, { useState, useEffect } from 'react'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './css/ImportXML.css';
import img_exportXML from './img/exportXML.png';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandLessOutlined';

import Collapse from '@material-ui/core/Collapse';
import { server } from '../../var';



//Class

export const L_ImportXML = (props) => {

  const [info, setInfo] = useState({});
  const [filee, setFilee] = useState({});
  const [expandedImport, setExpandedImport] = useState(false);


  const handleExpandClickImport = () => {
    setExpandedImport(!expandedImport);
  };

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
    document.getElementById("importarDados").style.display = "none";
    document.getElementById("progresso").style.display = "block";
    let xhr = new XMLHttpRequest(),
      fd = new FormData();

    fd.append('file', filee[0]);
    xhr.onload = function () {
      document.getElementById("importarDados").style.display = "none";

      document.getElementById("progresso").style.display = "none";
      document.getElementById("menseger").innerHTML = xhr.responseText;
    };
    xhr.addEventListener("progress", function (evt) {
      document.getElementById("menseger").innerHTML = evt.currentTarget.response;
      var objDiv = document.getElementById("scroll");
      objDiv.scrollTop = objDiv.scrollHeight;
    }, false);

    xhr.open('POST', server + `/ufjfportfolioprofissional/api/importxml.php?user=${JSON.parse(localStorage.getItem("user")).user_name}`, true);
    xhr.send(fd);
  }

  return (


    <div style={{ margin: 20 }}>

      <Card >

        <Box textAlign="center">
          <CardHeader

            title="Importação do Currículo Lattes"
          />
          <Box textAlign="center">
            <Typography>Você pode exportar o aquivo no site <a href="lattes.cnpq.br" rel="noopener noreferrer" target="_blank"  >lattes.cnpq.br</a> conforme a imagem abaixo</Typography>
            <img alt="exportXML" style={{ width: "50%" }} src={img_exportXML} />


          </Box>
          <div className="upload-btn-wrapper" style={{ margin: 20 }}  >
            <div id="btnImportar" style={{ margin: 20 }} className="btn">Abrir Arquivo</div>
            <input style={{ margin: 20, cursor: 'pointer' }} type="file" name="myfile" onChange={(e) => onChange(e)} />
          </div>
          <Typography id="textInput">O arquivo importado deve estar no formato .xml</Typography>
          <Typography id="textInput">Obs: Se tiver URL salvas para um determinado trabalho o sistema não irá deletar mas sim atualizar as informações.</Typography>

        </Box>

        <Box id="posLoadFile" style={{ display: 'none', margin: 20 }} textAlign="center">
          <Typography >Arquivo "{info.nomeArquivoXML}" carregado. </Typography>
          <Typography >Nome Completo: {info.nomeCompleto}  </Typography>
          <Typography >Número Idendificador: {info.numeroidendificador} </Typography>
          <Typography >Sistema de Origem: {info.sistemaOrigem} </Typography>
          <Typography >Última atualização: {info.dataAtualizacao} </Typography>
          <Typography >Última atualização: {info.horaAtualizacao} </Typography>
          <Button id="importarDados" style={{ margin: 20 }} variant="contained" color="primary" onClick={() => onChange2()}>Importar Dados</Button>
          <Button id="voltar" style={{ margin: 20, display: 'none' }} variant="contained" color="primary" onClick={() => props.history.push("/portifolioedit/" + JSON.parse(localStorage.getItem("user")).user_name)}>Voltar</Button>

          <div id="scroll" style={{ width: '70%', height: 200, marginLeft: '15%', overflow: 'auto' }}>
            <Box textAlign="center" className="msg" id="menseger"></Box>
            <div style={{ marginLeft: '50%', marginTop: 30,marginBottom:30 }}>
              <CircularProgress style={{ display: 'none' }} id="progresso" color="inherit" />
            </div>
          </div>



        </Box>

      </Card>
    </div>

  );
}


