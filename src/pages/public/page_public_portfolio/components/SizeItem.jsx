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
  getUserId,
  getTable
} from "../../../../api/serverAPI";


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

//
import Backdrop from '@material-ui/core/Backdrop';
import Navegacao from "./Navegacao";

import {
  PBArtigoPublicado,
  PBCapituloLivroPublicado,
  PBLivroPublicadoOrganizado,
  PBTextoJornalRevista,
  PBTrabalhosEvento,
  SigaDisciplina,
  SigaProjeto,
  APConselhoComissaoConsultoria,
  APDirecaoAdministracao,
  APPesquisaDesenvolvimento,
  APVinculo,
  ATProjetoPesquisa,
  FATDoutorado,
  FATEspecializacao,
  FATGraduacao,
  FATMestrado,
  OAAperfeicoamentoEspecializacao,
  OADoutorado,
  OAGraduacao,
  OAIniciacaoCientifica,
  OAMestrado,
  OAPosDoutorado,
  PartBancaAperfeicoamentoEspecializacao,
  PartBancaDoutorado,
  PartBancaExameQualificacao,
  PartBancaGraduacao,
  PartBancaJulgadoraConcursoPublico,
  PartBancaJulgadoraOutra,
  PartBancaJulgadoraProfessorTitular,
  PartBancaMestrado,
  PartCongresso,
  PartEncontro,
  PartOficina,
  PartOutras,
  PartSeminario,
  PartSimposio,
  PTPremioTitulo,
  FCCursoCurtaDuracao
} from "./itens/Itens";



export const SizeItem = ({ heade, num, url, mobile }) => {

  const [expandedFiltro, setExpandedFiltro] = useState(false);

  const [expandirItem, setExpandirItem] = useState([]);




  const classes = useStyles();

  const expandir = () => {


    setExpandirItem(Abrir());

    setExpandedFiltro(!expandedFiltro);
  }


  const Abrir = () => {
    if (heade === "Disciplinas") {
      return num.map((item) => <SigaDisciplina key={item.id} {...item} />);
    }
    else if (heade === "Projetos") {
      return num.map((item) => <SigaProjeto key={item.id} {...item} />);
    }
    else if (heade === "Artigos Publicados") {
      return num.map((item) => <PBArtigoPublicado key={item.id} {...item} />);
    }
    else if (heade === "Capítulos de Livros Publicados") {
      return num.map((item) => <PBCapituloLivroPublicado key={item.id} {...item} />);
    }
    else if (heade === "Livros Publicados e Organizados") {
      return num.map((item) => <PBLivroPublicadoOrganizado key={item.id} {...item} />);
    }
    else if (heade === "Textos Jornais e Revistas") {
      return num.map((item) => <PBTextoJornalRevista key={item.id} {...item} />);
    }
    else if (heade === "Trabalhos em Eventos") {
      return num.map((item) => <PBTrabalhosEvento key={item.id} {...item} />);
    }
    else if (heade === "Orientações em Andamendo de Iniciação Cientifica") {
      return num.map((item) => <OAIniciacaoCientifica key={item.id} {...item} />);
    }
    else if (heade === "Orientações em Andamendo de Mestrado") {
      return num.map((item) => <OAMestrado key={item.id} {...item} />);
    }
    else if (heade === "Orientações em Andamendo de Graduação") {
      return num.map((item) => <OAGraduacao key={item.id} {...item} />);
    }
    else if (heade === "Orientações em Andamendo de Doutorado") {
      return num.map((item) => <OADoutorado key={item.id} {...item} />);
    }
    else if (heade === "Orientações em Andamendo de Pós-doutorado") {
      return num.map((item) => <OAPosDoutorado key={item.id} {...item} />);
    }
    else if (heade === "Orientações em Andamendo de Aperfeiçoamento e Especialização") {
      return num.map((item) => <OAAperfeicoamentoEspecializacao key={item.id} {...item} />);
    }
    else if (heade === "Graduação") {
      return num.map((item) => <FATGraduacao key={item.id} {...item} />);
    }
    else if (heade === "Mestrado") {
      return num.map((item) => <FATMestrado key={item.id} {...item} />);
    }
    else if (heade === "Doutorado") {
      return num.map((item) => <FATDoutorado key={item.id} {...item} />);
    }
    else if (heade === "Especialização") {
      return num.map((item) => <FATEspecializacao key={item.id} {...item} />);
    }
    else if (heade === "Conselho Comissão Consultoria") {
      return num.map((item) => <APConselhoComissaoConsultoria key={item.id} {...item} />);
    }
    else if (heade === "Direção Administração") {
      return num.map((item) => <APDirecaoAdministracao key={item.id} {...item} />);
    }
    else if (heade === "Pesquisa e Desenvolvimento") {
      return num.map((item) => <APPesquisaDesenvolvimento key={item.id} {...item} />);
    }
    else if (heade === "Vínculo") {
      return num.map((item) => <APVinculo key={item.id} {...item} />);
    }
    else if (heade === "Projeto Pesquisa") {
      return num.map((item) => <ATProjetoPesquisa key={item.id} {...item} />);
    }
    else if (heade === "Banca Julgadora de Graduação") {
      return num.map((item) => <PartBancaGraduacao key={item.id} {...item} />);
    }
    else if (heade === "Banca Julgadora de Mestrado") {
      return num.map((item) => <PartBancaMestrado key={item.id} {...item} />);
    }
    else if (heade === "Banca Julgadora de Doutorado") {
      return num.map((item) => <PartBancaDoutorado key={item.id} {...item} />);
    }
    else if (heade === "Banca Julgadora de Aperfeiçoamento Especialização") {
      return num.map((item) => <PartBancaAperfeicoamentoEspecializacao key={item.id} {...item} />);
    }
    else if (heade === "Banca Julgadora de Banca de Exame Qualificação") {
      return num.map((item) => <PartBancaExameQualificacao key={item.id} {...item} />);
    }
    else if (heade === "Banca Julgadora de Professor Titular") {
      return num.map((item) => <PartBancaJulgadoraProfessorTitular key={item.id} {...item} />);
    }
    else if (heade === "Banca Julgadora de Concurso Publico") {
      return num.map((item) => <PartBancaJulgadoraConcursoPublico key={item.id} {...item} />);
    }
    else if (heade === "Banca Julgadora Outra") {
      return num.map((item) => <PartBancaJulgadoraOutra key={item.id} {...item} />);
    }

    else if (heade === "Congresso") {
      return num.map((item) => <PartCongresso key={item.id} {...item} />);
    }
    else if (heade === "Encontro") {
      return num.map((item) => <PartEncontro key={item.id} {...item} />);
    }
    else if (heade === "Oficina") {
      return num.map((item) => <PartOficina key={item.id} {...item} />);
    }
    else if (heade === "Seminário") {
      return num.map((item) => <PartSeminario key={item.id} {...item} />);
    }
    else if (heade === "Simpósio") {
      return num.map((item) => <PartSimposio key={item.id} {...item} />);
    }
    else if (heade === "Outras") {
      return num.map((item) => <PartOutras key={item.id} {...item} />);
    }
    else if (heade === "Cursos de Curta Duração") {
      return num.map((item) => <FCCursoCurtaDuracao key={item.id} {...item} />);
    }
    else if (heade === "Prêmios Titulos") {
      return num.map((item) => <PTPremioTitulo key={item.id} {...item} />);
    }
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", heade);

  }


 //return (true && <div>
  return ((num.length !== 0 && num.length !== '') &&<div>
 


    <ExpansionPanel>
      <ExpansionPanelSummary
        onClick={expandir}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        style={{
          backgroundColor: '#aaaaaa',

        }}

      >
        <Typography className={classes.heading}> {num.length + "  " + heade}  </Typography>

      </ExpansionPanelSummary>

    </ExpansionPanel>

    <Collapse in={expandedFiltro} timeout={200} TransitionProps={{ unmountOnExit: true }} >
      <div>
        {expandirItem}
      </div>
    </Collapse>
  </div>
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