import React from 'react'
import img_exportXML from '../img/exportXML.png'; 
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import './ImportXML.css';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

function ImportXML() {


  const onChange = (e) => {
    let fileInput = e.target.files;

    let xhr = new XMLHttpRequest(),
      fd = new FormData();


    fd.append('file', fileInput[0]);
    xhr.onload = function () {
      document.getElementById("menseger").innerHTML = xhr.responseText;

    };

    xhr.open('POST', process.env.REACT_APP_API_URL+'/api/importxml.php?user=11962413683', true);
    xhr.send(fd);
  }

  return (

    <Container fixed="true">
      <div className="main">
        <Card >
          <Box textAlign="center">
            <CardHeader

              title="Import Curriculo Lattes "
              subheader="O arquivo importado deve ser .xml, ele deve ser baixado como demostrado na imagem"
            />
            
            <div className="upload-btn-wrapper"  >
              <button className="btn">Upload a file</button>
              <input type="file" name="myfile" onChange={(e) => onChange(e)} />
            </div>
           
          </Box>
          <img  alt="exportXML" style={{width:"100%"}} src={img_exportXML} />

          <div className="msg" id="menseger"></div>
        </Card>
      </div>
    </Container>
  );
}

export default ImportXML




/*import React, {  useState} from 'react';

import Collapse from '@material-ui/core/Collapse';

import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ItemCard } from '../ItemCard';

import { Url } from '../Url';


const table = "pb_artigo_publicado";


export const ArtigoPublicado = (item) => {

  const [expanded, setExpanded] = useState(false);



  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Card style={{
      backgroundColor:"#d3d3d3",
      maxWidth: 2000,
      margin: 20
    }}>

      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Artigo Publicado"
        subheader={"publicado em: " + item.ano_do_artigo}
      />

<CardContent>

       <Typography component={'span'} variant="h5" color="textSecondary" gutterBottom> {item.titulo_do_artigo}  </Typography>


       <Typography component={'span'} variant="h6" color="textSecondary" gutterBottom>
         Palavras Chaves:
            {item.palavra_chave_1!=="NULL" &&item.palavra_chave_1? " " + item.palavra_chave_1 : undefined}
            {item.palavra_chave_2!=="NULL" &&item.palavra_chave_1? ", " + item.palavra_chave_2 : undefined}
            {item.palavra_chave_3!=="NULL" &&item.palavra_chave_1? ", " + item.palavra_chave_3 : undefined}
            {item.palavra_chave_4!=="NULL" &&item.palavra_chave_1? ", " + item.palavra_chave_4 : undefined}
            {item.palavra_chave_5!=="NULL" &&item.palavra_chave_1? ", " + item.palavra_chave_5 : undefined}
            {item.palavra_chave_6!=="NULL" &&item.palavra_chave_1? ", " + item.palavra_chave_6 : undefined}
       </Typography>

       <Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page_do_trabalho} external_url={item.external_url} />

     </CardContent>

      <CardActions disableSpacing>
        <IconButton

          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Abrir

        </IconButton>


      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent style={{ backgroundColor: "#363636" }}>
          <Card style={{ marginTop: 30, paddingBottom: 30, backgroundColor: "#d3d3d3" }}>
            <CardHeader
              title="Dados Gerais"
              subheader=""
            />
            {ItemCard("Titulo do Capitulo do Livro:", item.titulo_do_capitulo_do_livro)}
            {ItemCard("Titulo do Livro:", item.titulo_do_livro)}
            {ItemCard("Tipo:", item.tipo)}
            {ItemCard("Natureza:", item.natureza)}

            {item.titulo_do_capitulo_do_livro_ingles === '' ? ItemCard("Ingles:", item.titulo_do_capitulo_do_livro_ingles) : undefined}

            {ItemCard("Cidade da Editora:", item.cidade_da_editora)}
            {ItemCard("Informacoes Adicionais (Ingles):", item.descricao_informacoes_adicionais, item.descricao_informacoes_adicionais_ingle)}
            {ItemCard("Flag Divulgacão cientifica:", item.flag_divulgacao_cientifica)}
            {ItemCard("Flag Relevancia:", item.flag_relevancia)}

            {ItemCard("Idioma:", item.idioma)}
            {ItemCard("ISBN:", item.isbn)}
            {ItemCard("Meio de Divulgacão:", item.meio_de_divulgacao)}

            {ItemCard("Número da Edicao Revisão:", item.numero_da_edicao_revisao)}
            {ItemCard("Número da Série:", item.numero_da_serie)}
            {ItemCard("Número de Volumes:", item.numero_de_volumes)}


            {ItemCard("Organizadores:", item.organizadores)}
            {ItemCard("Página Final:", item.pagina_final)}
            {ItemCard("Página Inicial:", item.pagina_inicial)}
            {ItemCard("País de Publicacão:", item.pais_de_publicacao)}

            {ItemCard("Setor de Atividade:", item.setor_de_atividade_1,item.setor_de_atividade_2,item.setor_de_atividade_3)}
            {ItemCard("doi:", item.doi)}
            {ItemCard("external_url:", item.external_url)}
            {ItemCard("Home_page_do_trabalho:", item.home_page_do_trabalho)}
            {ItemCard("id:", item.id)}

          </Card>

          <Card style={{ marginTop: 30, paddingBottom: 30, backgroundColor: "#d3d3d3" }}>
            <CardHeader
              title="Autores"
              subheader=""
            />
            {item.nome_completo_do_autor_1 ? ItemCard("Autor 1:", item.nome_completo_do_autor_1, item.cpf_1, item.nome_para_citacao_1 ? "[" + item.nome_para_citacao_1 + "]" : 'NULL') : undefined}

            {item.nome_completo_do_autor_2 ? ItemCard("Autor 2:", item.nome_completo_do_autor_2, item.cpf_2, item.nome_para_citacao_2 ? "[" + item.nome_para_citacao_2 + "]" : 'NULL') : undefined}

            {item.nome_completo_do_autor_3 ? ItemCard("Autor 3:", item.nome_completo_do_autor_3, item.cpf_3, item.nome_para_citacao_3 ? "[" + item.nome_para_citacao_3 + "]" : 'NULL') : undefined}

            {item.nome_completo_do_autor_4 ? ItemCard("Autor 4:", item.nome_completo_do_autor_4, item.cpf_4, item.nome_para_citacao_4 ? "[" + item.nome_para_citacao_4 + "]" : 'NULL') : undefined}

          </Card>
          <Card style={{ marginTop: 30, paddingBottom: 30, backgroundColor: "#d3d3d3" }}>
            <CardHeader
              title="Area de Conhecimento"
              subheader=""
            />
            {item.nome_grande_area_do_conhecimento_1 ? <Card style={{ margin: 20, paddingBottom: 30, backgroundColor: "#d3d3d3" }}>
              {<Typography component={'span'}  style={{ fontSize: 16 ,margin: 20}} >{item.nome_grande_area_do_conhecimento_1}</Typography >}
              {ItemCard("Nome da Area do Conhecimento:", item.nome_da_area_do_conhecimento_1)}
              {ItemCard("Nome da Especialidade:", item.nome_da_especialidade_1)}
              {ItemCard("Nome da sub area do conhecimento:", item.nome_da_sub_area_do_conhecimento_1)}
              {ItemCard("Ordem de Autoria:", item.ordem_de_autoria_1)}
            </Card> : undefined}
            {item.nome_grande_area_do_conhecimento_2 ? <Card style={{ margin: 20, paddingBottom: 30, backgroundColor: "#d3d3d3" }}>
            {<Typography component={'span'}  style={{ marginLeft: 30,fontSize: 16,marginTop: 20 }} >{item.nome_grande_area_do_conhecimento_2}</Typography >}
              {ItemCard("Nome da Area do Conhecimento:", item.nome_da_area_do_conhecimento_2)}
              {ItemCard("Nome da Especialidade:", item.nome_da_especialidade_2)}
              {ItemCard("Nome da sub area do conhecimento:", item.nome_da_sub_area_do_conhecimento_2)}
              {ItemCard("Ordem de Autoria:", item.ordem_de_autoria_2)}
            </Card> : undefined}
            {item.nome_grande_area_do_conhecimento_3 ? <Card style={{ margin: 20, paddingBottom: 30, backgroundColor: "#d3d3d3" }}>
            {<Typography component={'span'}  style={{ marginLeft: 30,fontSize: 16,marginTop: 20 }} >{item.nome_grande_area_do_conhecimento_3}</Typography >}
              {ItemCard("Nome da Area do Conhecimento:", item.nome_da_area_do_conhecimento_3)}
              {ItemCard("Nome da Especialidade:", item.nome_da_especialidade_3)}
              {ItemCard("Nome da sub area do conhecimento:", item.nome_da_sub_area_do_conhecimento_3)}
              {ItemCard("Ordem de Autoria:", item.ordem_de_autoria_3)}
            </Card> : undefined}
          </Card>
        </CardContent>
      </Collapse>

    </Card>
  );

}


/*
ano_do_artigo: "2013"

cpf_1: null

cpf_2: null

cpf_3: null

cpf_4: null

cpf_5: null

cpf_6: null

cpf_7: null

cpf_8: null

descricao_informacoes_adicionais: null

descricao_informacoes_adicionais_ingles: null

doi: null

external_url: null

fasciculo: null

flag_divulgacao_cientifica: "NAO"

flag_relevancia: "NAO"

home_page_do_trabalho: null

id: "77"

idioma: "Portuguï¿½s"

issn: "22369619"

local_de_publicacao: null

meio_de_divulgacao: "VARIOS"

natureza: "COMPLETO"

nome_completo_do_autor_1: "Samuel da Costa Alves Basï¿½lio"

nome_completo_do_autor_2: "marcelo ferreira moreno"

nome_completo_do_autor_3: "Eduardo Barrere"

nome_completo_do_autor_4: null

nome_completo_do_autor_5: null

nome_completo_do_autor_6: null

nome_completo_do_autor_7: null

nome_completo_do_autor_8: null

nome_da_area_do_conhecimento_1: null

nome_da_area_do_conhecimento_2: null

nome_da_area_do_conhecimento_3: null

nome_da_especialidade_1: null

nome_da_especialidade_2: null

nome_da_especialidade_3: null

nome_da_sub_area_do_conhecimento_1: null

nome_da_sub_area_do_conhecimento_2: null

nome_da_sub_area_do_conhecimento_3: null

nome_grande_area_do_conhecimento_1: null

nome_grande_area_do_conhecimento_2: null

nome_grande_area_do_conhecimento_3: null

nome_para_citacao_1: "BASILIO, S. C. A."

nome_para_citacao_2: "MORENO, M. F."

nome_para_citacao_3: "BARRERE, E.;BARRï¿½RE, EDUARDO"

nome_para_citacao_4: null

nome_para_citacao_5: null

nome_para_citacao_6: null

nome_para_citacao_7: null

nome_para_citacao_8: null

nro_id_cnpq_1: null

nro_id_cnpq_2: null

nro_id_cnpq_3: null

nro_id_cnpq_4: null

nro_id_cnpq_5: null

nro_id_cnpq_6: null

nro_id_cnpq_7: null

nro_id_cnpq_8: null

ordem_de_autoria_1: null

ordem_de_autoria_2: null

ordem_de_autoria_3: null

ordem_de_autoria_4: null

ordem_de_autoria_5: null

ordem_de_autoria_6: null

ordem_de_autoria_7: null

ordem_de_autoria_8: null

pagina_final: "70"

pagina_inicial: "60"

pais_de_publicacao: null

palavra_chave_1: null

palavra_chave_2: null

palavra_chave_3: null

palavra_chave_4: null

palavra_chave_5: null

palavra_chave_6: null

serierefd: null

setor_de_atividade_1: "Telecomunicaï¿½ï¿½es"

setor_de_atividade_2: null

setor_de_atividade_3: null

titulo_do_artigo: "ANï¿½LISE DE AUDIï¿½NCIA E INTERAï¿½ï¿½O DE USUï¿½RIOS DE SISTEMAS DE TV INTERATIVA"

titulo_do_artigo_ingles: null

titulo_do_periodico_ou_revista: "Revista de RadioDifusï¿½o"

userid: "11962413683"

volume: "7"

*/