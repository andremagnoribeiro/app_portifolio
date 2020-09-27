import React, { useState, useEffect } from 'react'


//material ui
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandLessOutlined';
import Collapse from '@material-ui/core/Collapse';
import Tooltip from '@material-ui/core/Tooltip';

//imagem
import img_exportXML from './img/exportXML.png';

//css
import './css/ImportXML.css';

//variavel
import { server } from '../../../var';
import {api_getInfoXML , api_importXML} from './../../../api/serverAPI';


//Class
export const Page_Private_ImportXML = (props) => {

  const [expandedImport, setExpandedImport] = useState(false);
  const [filee, setFilee] = useState({});
  const [info, setInfo] = useState({});
  

  //GET INFO XML INICIAL
  const runGetInfoXML=(e)=>{
    let fileInput = e.target.files;
    setFilee(fileInput);
   
      let xhr = new XMLHttpRequest(),fd = new FormData();
      fd.append('file', fileInput[0]);
        xhr.onload = function () {
        calbackGetInforXML(xhr.responseText);
      };
    
      xhr.open('POST', server + `/api/request/post/import-xml-get-Info.php?user=${JSON.parse(localStorage.getItem("user")).user_name}`, true);
      xhr.send(fd);
    
  };

  const calbackGetInforXML=(xhr_responseText)=>{
   
    setInfo(JSON.parse(xhr_responseText));
    document.getElementById("btnImportar").style.display = "none";
    document.getElementById("textInput").style.display = "none";
    document.getElementById("posLoadFile").style.display = "block";
  };

 
  //INSERT OR UPDATE OF WORKS
  const CalbackImportXML1=(xhr_response)=>{
    document.getElementById("importarDados").style.display = "none";
    document.getElementById("progresso").style.display = "none";
    document.getElementById("abrir_portfolio").style.display = "block";
    document.getElementById("menseger").innerHTML = xhr_response;
  }

  const CalbackImportXML2=(evt_currentTarget_response)=>{
    document.getElementById("menseger").innerHTML = evt_currentTarget_response;
    var objDiv = document.getElementById("scroll");
    objDiv.scrollTop = objDiv.scrollHeight;
  };

  const runImportXML=(e)=>{
    document.getElementById("importarDados").style.display = "none";
    document.getElementById("progresso").style.display = "block";
    api_importXML(filee,CalbackImportXML1,CalbackImportXML2);
  };


  return (


    <div style={{ margin: 20 }}>

      <Card style={{ height: 1500 }}>

        <Box textAlign="center">
          <CardHeader

            title="Importação do Currículo Lattes"
          />
          <Box textAlign="center">
            <Typography  >Você pode exportar o arquivo no site <a href="lattes.cnpq.br" rel="noopener noreferrer" target="_blank"  >lattes.cnpq.br</a> conforme a imagem abaixo</Typography>
            <img alt="exportXML" style={{ width: "50%" }} src={img_exportXML} />
          </Box>

          <div className="upload-btn-wrapper" style={{ margin: 20 }} >

            <div id="btnImportar" className="btn">Abrir Arquivo</div>


            <input type="file" name="myfile" onChange={(e) => runGetInfoXML(e)} />
          </div>

          <Typography   id="textInput">O arquivo importado deve estar no formato .xml</Typography>
          <Typography   id="textInput">Obs: Se tiver URL salvas para um determinado trabalho o sistema não irá deletar mas sim atualizar as informações.</Typography>

        </Box>

        <Box id="posLoadFile" style={{ display: 'none', margin: 20 }} textAlign="center">
          <Typography   >Arquivo "{info.nomeArquivoXML}" carregado. </Typography>
          <Typography   >Nome Completo: {info.nomeCompleto}  </Typography>
          <Typography   >Númeroidentificador: {info.numeroidendificador} </Typography>
          <Typography   >Sistema de Origem: {info.sistemaOrigem} </Typography>
          <Typography   >Última atualização: {info.dataAtualizacao} </Typography>
          <Typography   >Última atualização: {info.horaAtualizacao} </Typography>
          <Button id="importarDados" style={{ margin: 20 }} variant="contained" color="primary" onClick={() => runImportXML()}>Importar Dados</Button>

          <div id="scroll" style={{ width: '70%', height: 200, marginLeft: '15%', overflow: 'auto' }}>
            <Box textAlign="center" className="msg" id="menseger"></Box>
            <div style={{ marginLeft: '50%', marginTop: 30, marginBottom: 30 }}>
              <CircularProgress style={{ display: 'none' }} id="progresso" color="inherit" />
            </div>
          <Button id="abrir_portfolio" style={{ margin: 20, display: 'none' }} variant="contained" color="primary" onClick={() => props.history.push("/edit/")}>Ir para Meu Portfólio</Button>
          </div>



        </Box>

      </Card>
    </div>

  );
}


