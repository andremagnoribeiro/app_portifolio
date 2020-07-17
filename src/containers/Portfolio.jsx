// import React, { useState, useEffect } from 'react'
// import Box from '@material-ui/core/Box';
// import LinearProgress from '@material-ui/core/LinearProgress';
// import IconButton from '@material-ui/core/IconButton';
// import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';
// import ExpandMoreIcon from '@material-ui/icons/ExpandLessOutlined';
// import Menu from '@material-ui/core/Menu';
// import Collapse from '@material-ui/core/Collapse';
// import MenuItem from '@material-ui/core/MenuItem';
// import Fade from '@material-ui/core/Fade';

// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import {
//   getUserId
// } from "../api/serverAPI";

// import { deepOrange, deepPurple } from '@material-ui/core/colors';

// import { PortfolioBusca } from '../components/PortfolioBusca'
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import Button from '@material-ui/core/Button';
// import Avatar from '@material-ui/core/Avatar';
// import { getTable } from "../api/serverAPI";
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// //
// import Backdrop from '@material-ui/core/Backdrop';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import Navegacao from "../components/Navegacao"
// import { SizeItem } from "../components/SizeItem"

// import { PBArtigoPublicado } from './userLogin/components/itens/PBArtigoPublicado';
// import { PBCapituloLivroPublicado } from './userLogin/components/itens/PBCapituloLivroPublicado';
// import { PBLivroPublicadoOrganizado } from './userLogin/components/itens/PBLivroPublicadoOrganizado';
// import { PBTextoJornalRevista } from './userLogin/components/itens/PBTextoJornalRevista';
// import { PBTrabalhosEvento } from './userLogin/components/itens/PBTrabalhosEvento';
// import { SigaDisciplina } from './userLogin/components/itens/SigaDisciplina';
// import { SigaProjeto } from './userLogin/components/itens/SigaProjeto';

// //
// export const Portfolio = (props) => {


//   const userName = props.match.params.user

//   const [user, setUser] = useState([]);

//   const [sizePBArtigoPublicado, setSizePBArtigoPublicado] = useState('');
//   const [sizePBCapituloLivroPublicado, setSizePBCapituloLivroPublicado] = useState('');
//   const [sizePBLivroPublicadoOrganizado, setSizePBLivroPublicadoOrganizado] = useState('');
//   const [sizePBTextoJornalRevista, setSizePBTextoJornalRevista] = useState('');
//   const [sizePBTrabalhosEvento, setSizePBTrabalhosEvento] = useState('');
//   const [sizeAPConselhoComissaoConsultoria, setSizeAPConselhoComissaoConsultoria] = useState('');
//   const [sizeAPDirecaoAdministracao, setSizeAPDirecaoAdministracao] = useState('');
//   const [sizeAPPesquisaDesenvolvimento, setSizeAPPesquisaDesenvolvimento] = useState('');
//   const [sizeAPVinculo, setSizeAPVinculo] = useState('');
//   const [sizeFATDoutorado, setSizeFATDoutorado] = useState('');
//   const [sizeFATEspecializacao, setSizeFATEspecializacao] = useState('');
//   const [sizeFATGraduacao, setSizeFATGraduacao] = useState('');
//   const [sizeFATMestrado, setSizeFATMestrado] = useState('');
//   const [sizeOAAperfeicoamentoEspecializacao, setSizeOAAperfeicoamentoEspecializacao] = useState('');
//   const [sizeOADoutorado, setSizeOADoutorado] = useState('');
//   const [sizeOAGraduacao, setSizeOAGraduacao] = useState('');
//   const [sizeOAIniciacaoCientifica, setSizeOAIniciacaoCientifica] = useState('');
//   const [sizeOAMestrado, setSizeOAMestrado] = useState('');
//   const [sizeOAPosDoutorado, setSizeOAPosDoutorado] = useState('');
//   const [sizePartBancaAperfeicoamentoEspecializacao, setSizePartBancaAperfeicoamentoEspecializacao] = useState('');
//   const [sizePartBancaDoutorado, setSizePartBancaDoutorado] = useState('');
//   const [sizePartBancaExameQualificacao, setSizePartBancaExameQualificacao] = useState('');
//   const [sizePartBancaGraduacao, setSizePartBancaGraduacao] = useState('');
//   const [sizePartBancaJulgadoraConcursoPublico, setSizePartBancaJulgadoraConcursoPublico] = useState('');
//   const [sizePartBancaJulgadoraOutra, setSizePartBancaJulgadoraOutra] = useState('');
//   const [sizePartBancaJulgadoraProfessorTitular, setSizePartBancaJulgadoraProfessorTitular] = useState('');
//   const [sizePartBancaMestrado, setSizePartBancaMestrado] = useState('');
//   const [sizePartCongresso, setSizePartCongresso] = useState('');
//   const [sizePartEncontro, setSizePartEncontro] = useState('');
//   const [sizePartOficina, setSizePartOficina] = useState('');
//   const [sizePartOutras, setSizePartOutras] = useState('');
//   const [sizePartSeminario, setSizePartSeminario] = useState('');
//   const [sizePartSimposio, setSizePartSimposio] = useState('');
//   const [sizePTPremioTitulo, setSizePTPremioTitulo] = useState('');
//   const [sizeATProjetoPesquisa, setSizeATProjetoPesquisa] = useState('');
//   const [sizeFCCursoCurtaDuracao, setSizeFCCursoCurtaDuracao] = useState('');

//   const [sizeSigaDisciplina, setSizeSigaDisciplina] = useState('');
//   const [sizeSigaProjeto, setSizeSigaProjeto] = useState('');


//   const [filterText, setFilterText] = useState('');
//   const [sliderMin, setSliderMin] = React.useState(1980);
//   const [sliderMax, setSliderMax] = React.useState(2020);
//   const [filterAno, setFilterAno] = useState(["2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "2000", "1999", "1998", "1997", "1996", "1995", "1994", "1993", "1992", "1991"]);


//   const [mobile, setMobile] = useState(false);

//   const classes = useStyles();
//   const classes2 = useStyles2();

//   const sizeDiv = mobile ? 320 : 1000;
//   const divMax_ = mobile ? divMaxMobile() : divMax();
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };



//   const [acabouPBArtigoPublicado, setAcabouPBArtigoPublicado] = useState(false);
//   const [acabouPBCapituloLivroPublicado, setAcabouPBCapituloLivroPublicado] = useState(false);
//   const [acabouPBLivroPublicadoOrganizado, setAcabouPBLivroPublicadoOrganizado] = useState(false);
//   const [acabouPBTextoJornalRevista, setAcabouPBTextoJornalRevista] = useState(false);
//   const [acabouPBTrabalhosEvento, setAcabouPBTrabalhosEvento] = useState(false);
//   const [acabouAPConselhoComissaoConsultoria, setAcabouAPConselhoComissaoConsultoria] = useState(false);
//   const [acabouAPDirecaoAdministracao, setAcabouAPDirecaoAdministracao] = useState(false);
//   const [acabouAPPesquisaDesenvolvimento, setAcabouAPPesquisaDesenvolvimento] = useState(false);
//   const [acabouAPVinculo, setAcabouAPVinculo] = useState(false);
//   const [acabouATProjetoPesquisa, setAcabouATProjetoPesquisa] = useState(false);
//   const [acabouFATDoutorado, setAcabouFATDoutorado] = useState(false);
//   const [acabouFATEspecializacao, setAcabouFATEspecializacao] = useState(false);
//   const [acabouFATGraduacao, setAcabouFATGraduacao] = useState(false);
//   const [acabouFATMestrado, setAcabouFATMestrado] = useState(false);
//   const [acabouOAAperfeicoamentoEspecializacao, setAcabouOAAperfeicoamentoEspecializacao] = useState(false);
//   const [acabouOADoutorado, setAcabouOADoutorado] = useState(false);
//   const [acabouOAGraduacao, setAcabouOAGraduacao] = useState(false);
//   const [acabouOAIniciacaoCientifica, setAcabouOAIniciacaoCientifica] = useState(false);
//   const [acabouOAMestrado, setAcabouOAMestrado] = useState(false);
//   const [acabouOAPosDoutorado, setAcabouOAPosDoutorado] = useState(false);
//   const [acabouPartBancaAperfeicoamentoEspecializacao, setAcabouPartBancaAperfeicoamentoEspecializacao] = useState(false);
//   const [acabouPartBancaDoutorado, setAcabouPartBancaDoutorado] = useState(false);
//   const [acabouPartBancaExameQualificacao, setAcabouPartBancaExameQualificacao] = useState(false);
//   const [acabouPartBancaGraduacao, setAcabouPartBancaGraduacao] = useState(false);
//   const [acabouPartBancaJulgadoraConcursoPublico, setAcabouPartBancaJulgadoraConcursoPublico] = useState(false);
//   const [acabouPartBancaJulgadoraOutra, setAcabouPartBancaJulgadoraOutra] = useState(false);
//   const [acabouPartBancaJulgadoraProfessorTitular, setAcabouPartBancaJulgadoraProfessorTitular] = useState(false);
//   const [acabouPartBancaMestrado, setAcabouPartBancaMestrado] = useState(false);
//   const [acabouPartCongresso, setAcabouPartCongresso] = useState(false);
//   const [acabouPartEncontro, setAcabouPartEncontro] = useState(false);
//   const [acabouPartOficina, setAcabouPartOficina] = useState(false);
//   const [acabouPartOutras, setAcabouPartOutras] = useState(false);
//   const [acabouPartSeminario, setAcabouPartSeminario] = useState(false);
//   const [acabouPartSimposio, setAcabouPartSimposio] = useState(false);
//   const [acabouPTPremioTitulo, setAcabouPTPremioTitulo] = useState(false);
//   const [acabouFCCursoCurtaDuracao, setAcabouFCCursoCurtaDuracao] = useState(false);
//   const [acabouSigaDisciplina, setAcabouSigaDisciplina] = useState(false);
//   const [acabouSigaProjeto, setAcabouSigaProjeto] = useState(false);


//   const [acabou, setAcabou] = useState();
//   //////////////////////////////////////////////////////////////////////////////////////////////////////////
//   //////////////////////////////////////////////////////////////////////////////////////////////////////////
//   //////////////////////////////////////////////////////////////////////////////////////////////////////////


//   useEffect(() => {
//     getUserId(userName).then(data => setUser(data));

//     getTable(userName, 'siga_disciplina').then((size) => { setSizeSigaDisciplina(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ANO) !== -1).map((item) => <SigaDisciplina key={item.id} {...item} />)); }).then(() => { setAcabouSigaDisciplina(true) });
//     getTable(userName, 'siga_projeto').then((size) => { setSizeSigaProjeto(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ANO) !== -1).map((item) => <SigaProjeto key={item.id} {...item} />)); }).then(() => { setAcabouSigaProjeto(true) });

//     getTable(userName, 'pb_artigo_publicado').then((size) => { setSizePBArtigoPublicado(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano_do_artigo) !== -1).map((item) => <PBArtigoPublicado key={item.id} {...item} />)); }).then(() => { setAcabouPBArtigoPublicado(true) });
//     getTable(userName, 'pb_capitulo_livro_publicado_organizado').then((size) => { setSizePBCapituloLivroPublicado(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano) !== -1).map((item) => <PBCapituloLivroPublicado key={item.id} {...item} />)); }).then(() => { setAcabouPBCapituloLivroPublicado(true) });
//     getTable(userName, 'pb_livro_publicado_organizado').then((size) => { setSizePBLivroPublicadoOrganizado(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano) !== -1).map((item) => <PBLivroPublicadoOrganizado key={item.id} {...item} />)); }).then(() => { setAcabouPBLivroPublicadoOrganizado(true) });
//     getTable(userName, 'pb_texto_jornal_revista').then((size) => { setSizePBTextoJornalRevista(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano_do_texto) !== -1).map((item) => <PBTextoJornalRevista key={item.id} {...item} />)); }).then(() => { setAcabouPBTextoJornalRevista(true) });
//     getTable(userName, 'pb_trabalho_evento').then((size) => { setSizePBTrabalhosEvento(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano_do_trabalho) !== -1).map((item) => <PBTrabalhosEvento key={item.id} {...item} />)); }).then(() => { setAcabouPBTrabalhosEvento(true) });
//     /*getTable(userName, 'ap_conselho_comissao_consultoria').then((size) => { setSizeAPConselhoComissaoConsultoria(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano_inicio ) !== -1).map((item) => <APConselhoComissaoConsultoria key={item.id} {...item} />)); }) .then(() => { setAcabouAPConselhoComissaoConsultoria(true) });
  
//       getTable(userName, 'ap_direcao_administracao').then((size) => { setSizeAPDirecaoAdministracao(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano_de_inicio ) !== -1).map((item) => <APDirecaoAdministracao key={item.id} {...item} />)); }) .then(() => { setAcabouAPDirecaoAdministracao(true) });
//       getTable(userName, 'ap_pesquisa_desenvolvimento').then((size) => { setSizeAPPesquisaDesenvolvimento(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano_inicio ) !== -1).map((item) => <APPesquisaDesenvolvimento key={item.id} {...item} />)); }) .then(() => { setAcabouAPPesquisaDesenvolvimento(true) });
//       getTable(userName, 'ap_vinculo').then((size) => { setSizeAPVinculo(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano_inicio ) !== -1).map((item) => <APVinculo key={item.id} {...item} />)); }) .then(() => { setAcabouAPVinculo(true) });
//       getTable(userName, 'at_projeto_pesquisa').then((size) => { setSizeATProjetoPesquisa(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano_inicio ) !== -1).map((item) => <ATProjetoPesquisa key={item.id} {...item} />)); }) .then(() => { setAcabouATProjetoPesquisa(true) });
//       getTable(userName, 'fat_doutorado').then((size) => { setSizeFATDoutorado(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano_inicio ) !== -1).map((item) => <FATDoutorado key={item.id} {...item} />)); }) .then(() => { setAcabouFATDoutorado(true) });
//       getTable(userName, 'fat_especializacao').then((size) => { setSizeFATEspecializacao(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano_inicio ) !== -1).map((item) => <FATEspecializacao key={item.id} {...item} />)); }) .then(() => { setAcabouFATEspecializacao(true) });
//       getTable(userName, 'fat_graduacao').then((size) => { setSizeFATGraduacao(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano_inicio ) !== -1).map((item) => <FATGraduacao key={item.id} {...item} />)); }) .then(() => { setAcabouFATGraduacao(true) });
//       getTable(userName, 'fat_mestrado').then((size) => { setSizeFATMestrado(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano_inicio ) !== -1).map((item) => <FATMestrado key={item.id} {...item} />)); }) .then(() => { setAcabouFATMestrado(true) });
//       getTable(userName, 'oa_aperfeicoamento_especializacao').then((size) => { setSizeOAAperfeicoamentoEspecializacao(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano ) !== -1).map((item) => <OAAperfeicoamentoEspecializacao key={item.id} {...item} />)); }) .then(() => { setAcabouOAAperfeicoamentoEspecializacao(true) });
//       getTable(userName, 'oa_doutorado').then((size) => { setSizeOADoutorado(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano ) !== -1).map((item) => <OADoutorado key={item.id} {...item} />)); }) .then(() => { setAcabouOADoutorado(true) });
//       getTable(userName, 'oa_graduacao').then((size) => { setSizeOAGraduacao(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano ) !== -1).map((item) => <OAGraduacao key={item.id} {...item} />)); }) .then(() => { setAcabouOAGraduacao(true) });
//       getTable(userName, 'oa_iniciacao_cientifica').then((size) => { setSizeOAIniciacaoCientifica(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano ) !== -1).map((item) => <OAIniciacaoCientifica key={item.id} {...item} />)); }) .then(() => { setAcabouOAIniciacaoCientifica(true) });
//       getTable(userName, 'oa_mestrado').then((size) => { setSizeOAMestrado(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano ) !== -1).map((item) => <OAMestrado key={item.id} {...item} />)); }) .then(() => { setAcabouOAMestrado(true) });
//       getTable(userName, 'oa_posdoutorado').then((size) => { setSizeOAPosDoutorado(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano ) !== -1).map((item) => <OAPosDoutorado key={item.id} {...item} />)); }) .then(() => { setAcabouOAPosDoutorado(true) });
//       getTable(userName, 'part_banca_aperfeicoamento_especializacao').then((size) => { setSizePartBancaAperfeicoamentoEspecializacao(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano ) !== -1).map((item) => <PartBancaAperfeicoamentoEspecializacao key={item.id} {...item} />)); }) .then(() => { setAcabouPartBancaAperfeicoamentoEspecializacao(true) });
//       getTable(userName, 'part_banca_doutorado').then((size) => { setSizePartBancaDoutorado(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano ) !== -1).map((item) => <PartBancaDoutorado key={item.id} {...item} />)); }) .then(() => { setAcabouPartBancaDoutorado(true) });
//       getTable(userName, 'part_banca_exame_qualificacao').then((size) => { setSizePartBancaExameQualificacao(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano ) !== -1).map((item) => <PartBancaExameQualificacao key={item.id} {...item} />)); }) .then(() => { setAcabouPartBancaExameQualificacao(true) });
//       getTable(userName, 'part_banca_graduacao').then((size) => { setSizePartBancaGraduacao(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano ) !== -1).map((item) => <PartBancaGraduacao key={item.id} {...item} />)); }) .then(() => { setAcabouPartBancaGraduacao(true) });
//       getTable(userName, 'part_banca_julgadora_concurso_publico').then((size) => { setSizePartBancaJulgadoraConcursoPublico(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano ) !== -1).map((item) => <PartBancaJulgadoraConcursoPublico key={item.id} {...item} />)); }) .then(() => { setAcabouPartBancaJulgadoraConcursoPublico(true) });
//       getTable(userName, 'part_banca_julgadora_outra').then((size) => { setSizePartBancaJulgadoraOutra(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano ) !== -1).map((item) => <PartBancaJulgadoraOutra key={item.id} {...item} />)); }) .then(() => { setAcabouPartBancaJulgadoraOutra(true) });
//       getTable(userName, 'part_banca_julgadora_professor_titular').then((size) => { setSizePartBancaJulgadoraProfessorTitular(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano ) !== -1).map((item) => <PartBancaJulgadoraProfessorTitular key={item.id} {...item} />)); }) .then(() => { setAcabouPartBancaJulgadoraProfessorTitular(true) });
//       getTable(userName, 'part_banca_mestrado').then((size) => { setSizePartBancaMestrado(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano ) !== -1).map((item) => <PartBancaMestrado key={item.id} {...item} />)); }) .then(() => { setAcabouPartBancaMestrado(true) });
//       getTable(userName, 'part_congresso').then((size) => { setSizePartCongresso(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano ) !== -1).map((item) => <PartCongresso key={item.id} {...item} />)); }) .then(() => { setAcabouPartCongresso(true) });
//       getTable(userName, 'part_encontro').then((size) => { setSizePartEncontro(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano ) !== -1).map((item) => <PartEncontro key={item.id} {...item} />)); }) .then(() => { setAcabouPartEncontro(true) });
//       getTable(userName, 'part_evento_congresso_outra').then((size) => { setSizePartOficina(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano ) !== -1).map((item) => <PartOficina key={item.id} {...item} />)); }) .then(() => { setAcabouPartOficina(true) });
//       getTable(userName, 'part_oficina').then((size) => { setSizePartOutras(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano ) !== -1).map((item) => <PartOutras key={item.id} {...item} />)); }) .then(() => { setAcabouPartOutras(true) });
//       getTable(userName, 'part_seminario').then((size) => { setSizePartSeminario(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano ) !== -1).map((item) => <PartSeminario key={item.id} {...item} />)); }) .then(() => { setAcabouPartSeminario(true) });
//       getTable(userName, 'part_simposio').then((size) => { setSizePartSimposio(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano ) !== -1).map((item) => <PartSimposio key={item.id} {...item} />)); }) .then(() => { setAcabouPartSimposio(true) });
//       getTable(userName, 'pt_premio_titulo').then((size) => { setSizePTPremioTitulo(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano_da_premiacao ) !== -1).map((item) => <PTPremioTitulo key={item.id} {...item} />)); }) .then(() => { setAcabouPTPremioTitulo(true) });
//       getTable(userName, 'fc_curso_curta_duracao').then((size) => { setSizeFCCursoCurtaDuracao(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano_de_inicio ) !== -1).map((item) => <FCCursoCurtaDuracao key={item.id} {...item} />)); }) .then(() => { setAcabouFCCursoCurtaDuracao(true) });
//       getTable(userName, 'siga_disciplina').then((size) => { setSizeSigaDisciplina(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ANO ) !== -1).map((item) => <SigaDisciplina key={item.id} {...item} />)); }) .then(() => { setAcabouSigaDisciplina(true) });
//       getTable(userName, 'siga_projeto').then((size) => { setSizeSigaProjeto(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ANO ) !== -1).map((item) => <SigaProjeto key={item.id} {...item} />)); }) .then(() => { setAcabouSigaProjeto(true) });
//       */

//   }, [filterAno, filterText]);

//   useEffect(() => {
//     if (window.innerWidth >= 1000) {
//       setMobile(false);
//     } else {
//       setMobile(true);
//     }

//   }, [])


//   useEffect(() => {
//     setAcabou((
//       acabouPBArtigoPublicado &&
//       acabouPBCapituloLivroPublicado &&
//       acabouPBLivroPublicadoOrganizado &&
//       acabouPBTextoJornalRevista &&
//       acabouPBTrabalhosEvento &&
//       acabouAPConselhoComissaoConsultoria &&
//       acabouAPDirecaoAdministracao &&
//       acabouAPPesquisaDesenvolvimento &&
//       acabouAPVinculo &&
//       acabouATProjetoPesquisa &&
//       acabouFATDoutorado &&
//       acabouFATEspecializacao &&
//       acabouFATGraduacao &&
//       acabouFATMestrado &&
//       acabouOAAperfeicoamentoEspecializacao &&
//       acabouOADoutorado &&
//       acabouOAGraduacao &&
//       acabouOAIniciacaoCientifica &&
//       acabouOAMestrado &&
//       acabouOAPosDoutorado &&
//       acabouPartBancaAperfeicoamentoEspecializacao &&
//       acabouPartBancaDoutorado &&
//       acabouPartBancaExameQualificacao &&
//       acabouPartBancaGraduacao &&
//       acabouPartBancaJulgadoraConcursoPublico &&
//       acabouPartBancaJulgadoraOutra &&
//       acabouPartBancaJulgadoraProfessorTitular &&
//       acabouPartBancaMestrado &&
//       acabouPartCongresso &&
//       acabouPartEncontro &&
//       acabouPartOficina &&
//       acabouPartOutras &&
//       acabouPartSeminario &&
//       acabouPartSimposio &&
//       acabouPTPremioTitulo &&
//       acabouFCCursoCurtaDuracao &&
//       acabouSigaDisciplina &&
//       acabouSigaProjeto
//     )
//     )
//   }, [
//     acabouPBArtigoPublicado,
//     acabouPBCapituloLivroPublicado,
//     acabouPBLivroPublicadoOrganizado,
//     acabouPBTextoJornalRevista,
//     acabouPBTrabalhosEvento,
//     acabouAPConselhoComissaoConsultoria,
//     acabouAPDirecaoAdministracao,
//     acabouAPPesquisaDesenvolvimento,
//     acabouAPVinculo,
//     acabouATProjetoPesquisa,
//     acabouFATDoutorado,
//     acabouFATEspecializacao,
//     acabouFATGraduacao,
//     acabouFATMestrado,
//     acabouOAAperfeicoamentoEspecializacao,
//     acabouOADoutorado,
//     acabouOAGraduacao,
//     acabouOAIniciacaoCientifica,
//     acabouOAMestrado,
//     acabouOAPosDoutorado,
//     acabouPartBancaAperfeicoamentoEspecializacao,
//     acabouPartBancaDoutorado,
//     acabouPartBancaExameQualificacao,
//     acabouPartBancaGraduacao,
//     acabouPartBancaJulgadoraConcursoPublico,
//     acabouPartBancaJulgadoraOutra,
//     acabouPartBancaJulgadoraProfessorTitular,
//     acabouPartBancaMestrado,
//     acabouPartCongresso,
//     acabouPartEncontro,
//     acabouPartOficina,
//     acabouPartOutras,
//     acabouPartSeminario,
//     acabouPartSimposio,
//     acabouPTPremioTitulo,
//     acabouFCCursoCurtaDuracao,
//     acabouSigaDisciplina,
//     acabouSigaProjeto])

//   //////////////////////////////////////////////////////////////////////////////////////////////////////////
//   //////////////////////////////////////////////////////////////////////////////////////////////////////////
//   //////////////////////////////////////////////////////////////////////////////////////////////////////////


//   window.addEventListener('resize', function () {

//     if (window.innerWidth >= 1000) {
//       setMobile(false);
//     } else {
//       setMobile(true);
//     }
//   });


//   const Filtros = (TextBusca, anoSelect) => {//formato= (palavra, [2012,2020])
//     setAcabou(false);
//     //setItens([]);
//     setFilterText(TextBusca);
//     var date = anoSelect[1];
//     const dates = [];
//     while (date >= anoSelect[0]) {
//       dates.push(String(date));
//       date = date - 1;
//     }
//     setFilterAno(dates);
//     console.log("filtrosano", dates)
//     console.log("filtrosXXX=", TextBusca, anoSelect)

//   }
//   //////////////////////////////////////////////////////////////////////////////////////////////////////////
//   //////////////////////////////////////////////////////////////////////////////////////////////////////////
//   //////////////////////////////////////////////////////////////////////////////////////////////////////////

//   return (
//     <Box >
//       {/*<Backdrop className={classesbackdrop.backdrop} open={open} >
//       <CircularProgress color="inherit" />
// </Backdrop>*/}
//       <div style={{ marginLeft: 20, marginTop: 15 }}>
//         <Navegacao atual={'Portfólio'} anteriores={[
//           {
//             "name": "Home",
//             "url": "/ufjfportfolioprofissional/build"
//           }
//         ]} />
//       </div>
//       <PortfolioBusca getSearch={Filtros} filterAno={filterAno} sliderMin={1989} sliderMax={2020} />
//       <Card key={user.name + "aaaa"} style={{ margin: 20 }}>
//         <CardHeader
//           avatar={<Avatar className={classes.purple}></Avatar>}
//           title={user.name}
//           subheader={user.email}
//         />
//         <Box display="flex" justifyContent="center" p={0.5} bgcolor="background.paper">

//           <Card className={divMax_.root}>
//             <CardHeader
//               title={"Portfólio Siga"}

//             />
//             {(sizeSigaDisciplina === '' ||
//               sizeSigaProjeto === '') && <LinearProgress />}
//             {


//               (
//                 (sizeSigaDisciplina !== '0' && sizeSigaDisciplina !== '') ||
//                 (sizeSigaProjeto !== '0' && sizeSigaProjeto !== '')
//               ) && <div>




//                 <SizeItem user={user} heade={'Disciplinas'} url={'disciplina'} num={sizeSigaDisciplina} />
//                 <SizeItem user={user} heade={'Projetos'} url={'projeto'} num={sizeSigaProjeto} />


//               </div>}
//           </Card>
//         </Box>
//         <Box display="flex" justifyContent="center" p={0.5} bgcolor="background.paper">
//           <Card className={divMax_.root}>
//             <CardHeader
//               title={"Portfólio Lattes"/*<Button style={{ margin: 15, width: 200 }} color="primary" disableElevation onClick={() => href(`/portfolio/lattes/${user.user_name}`)} >Abrir Todos</Button>*/}
//               action={
//                 <div>
//                   <IconButton aria-label="settings" onClick={handleClick}>
//                     <MoreVertIcon />
//                   </IconButton>

//                   <Menu
//                     id="fade-menu"
//                     anchorEl={anchorEl}
//                     keepMounted
//                     open={open}
//                     onClose={handleClose}
//                     TransitionComponent={Fade}
//                   >
//                     <MenuItem onClick={handleClose}>Importar Currículo Lattes</MenuItem>
//                     <MenuItem onClick={handleClose}>Apagar Infomações</MenuItem>
//                   </Menu>
//                 </div>
//               }

//             />

//             {(
//               (sizePBArtigoPublicado === '0' && sizePBArtigoPublicado !== '') ||
//               (sizePBCapituloLivroPublicado !== '0' && sizePBCapituloLivroPublicado !== '') ||
//               (sizePBLivroPublicadoOrganizado !== '0' && sizePBLivroPublicadoOrganizado !== '') ||
//               (sizePBTextoJornalRevista !== '0' && sizePBTextoJornalRevista !== '') ||
//               (sizePBTrabalhosEvento !== '0' && sizePBTrabalhosEvento !== '')
//             ) && <div  >
//                 {(
//                   sizePBArtigoPublicado === '' ||
//                   sizePBCapituloLivroPublicado === '' ||
//                   sizePBLivroPublicadoOrganizado === '' ||
//                   sizePBTextoJornalRevista === '' ||
//                   sizePBTrabalhosEvento === '') && <LinearProgress />}


//                 <SizeItem user={user} heade={'Artigos Publicados'} url={'PBArtigoPublicado'} num={sizePBArtigoPublicado} />
//                 <SizeItem user={user} heade={'Capítulos de Livros Publicados'} url={'PBCapituloLivroPublicado'} num={sizePBCapituloLivroPublicado} />
//                 <SizeItem user={user} heade={'Livros Publicados e Organizados'} url={'PBLivroPublicadoOrganizado'} num={sizePBLivroPublicadoOrganizado} />
//                 <SizeItem user={user} heade={'Textos Jornais e Revistas'} url={'PBTextoJornalRevista'} num={sizePBTextoJornalRevista} />
//                 <SizeItem user={user} heade={'Trabalhos em Eventos'} url={'PBTrabalhosEvento'} num={sizePBTrabalhosEvento} />

//               </div>}

//             {!(
//               sizeOAIniciacaoCientifica === '0' || sizeOAIniciacaoCientifica === '' ||
//               sizeOAGraduacao === '0' || sizeOAGraduacao === '' ||
//               sizeOAMestrado === '0' || sizeOAMestrado === '' ||
//               sizeOADoutorado === '0' || sizeOADoutorado === '' ||
//               sizeOAPosDoutorado === '0' || sizeOAPosDoutorado === '' ||
//               sizeOAAperfeicoamentoEspecializacao === '0' || sizeOAAperfeicoamentoEspecializacao === ''
//             ) && <div >
//                 {(
//                   sizeOAIniciacaoCientifica === '' ||
//                   sizeOAGraduacao === '' ||
//                   sizeOAMestrado === '' ||
//                   sizeOADoutorado === '' ||
//                   sizeOAPosDoutorado === '' ||
//                   sizeOAAperfeicoamentoEspecializacao === '') && <LinearProgress />}


//                 <SizeItem user={user} heade={'Iniciação Cientifica'} url={'OAIniciacaoCientifica'} num={sizeOAIniciacaoCientifica} />
//                 <SizeItem user={user} heade={'Mestrado'} url={'OAMestrado'} num={sizeOAMestrado} />
//                 <SizeItem user={user} heade={'Graduação'} url={'OAGraduacao'} num={sizeOAGraduacao} />
//                 <SizeItem user={user} heade={'Doutorado'} url={'OADoutorado'} num={sizeOADoutorado} />
//                 <SizeItem user={user} heade={'Pós-doutorado'} url={'OAPosDoutorado'} num={sizeOAPosDoutorado} />
//                 <SizeItem user={user} heade={'Aperfeiçoamento e Especialização'} url={'OAAperfeicoamentoEspecializacao'} num={sizeOAAperfeicoamentoEspecializacao} />


//               </div>}

//             {(
//               (sizeFATGraduacao !== '0' && sizeFATGraduacao !== '') ||
//               (sizeFATDoutorado !== '0' && sizeFATDoutorado !== '') ||
//               (sizeFATMestrado !== '0' && sizeFATMestrado !== '') ||
//               (sizeFATEspecializacao !== '0' && sizeFATEspecializacao !== '')) &&
//               <div >
//                 {(
//                   sizeFATGraduacao === '0' ||
//                   sizeFATDoutorado === '0' ||
//                   sizeFATMestrado === '0' ||
//                   sizeFATEspecializacao === '0') && <LinearProgress />}


//                 <SizeItem user={user} heade={'Graduação'} url={'FATGraduacao'} num={sizeFATGraduacao} />
//                 <SizeItem user={user} heade={'Mestrado'} url={'FATMestrado'} num={sizeFATMestrado} />
//                 <SizeItem user={user} heade={'Doutorado'} url={'FATDoutorado'} num={sizeFATDoutorado} />
//                 <SizeItem user={user} heade={'Especialização'} url={'FATEspecializacao'} num={sizeFATEspecializacao} />


//               </div>}

//             {(
//               (sizeAPConselhoComissaoConsultoria !== '0' && sizeAPConselhoComissaoConsultoria !== '') ||
//               (sizeAPDirecaoAdministracao !== '0' && sizeAPDirecaoAdministracao !== '') ||
//               (sizeAPPesquisaDesenvolvimento !== '0' && sizeAPPesquisaDesenvolvimento !== '') ||
//               (sizeATProjetoPesquisa !== '0' && sizeATProjetoPesquisa !== '') ||
//               (sizeAPVinculo !== '0' && sizeAPVinculo !== '')) && <div >
//                 {(
//                   sizeAPConselhoComissaoConsultoria === '' ||
//                   sizeAPDirecaoAdministracao === '' ||
//                   sizeAPPesquisaDesenvolvimento === '' ||
//                   sizeATProjetoPesquisa === '' ||
//                   sizeAPVinculo === '') && <LinearProgress />}



//                 <SizeItem user={user} heade={'Conselho Comissão Consultoria'} url={'APConselhoComissaoConsultoria'} num={sizeAPConselhoComissaoConsultoria} />
//                 <SizeItem user={user} heade={'Direção Administração'} url={'APDirecaoAdministracao'} num={sizeAPDirecaoAdministracao} />
//                 <SizeItem user={user} heade={'Pesquisa e Desenvolvimento'} url={'APPesquisaDesenvolvimento'} num={sizeAPPesquisaDesenvolvimento} />
//                 <SizeItem user={user} heade={'Vinculo'} url={'APVinculo'} num={sizeAPVinculo} />
//                 <SizeItem user={user} heade={'Projeto Pesquisa'} url={'ATProjetoPesquisa'} num={sizeATProjetoPesquisa} />


//               </div>}
//             {(
//               (sizePartBancaGraduacao !== '0' && sizePartBancaGraduacao !== '') ||
//               (sizePartBancaMestrado !== '0' && sizePartBancaMestrado !== '') ||
//               (sizePartBancaDoutorado !== '0' && sizePartBancaDoutorado !== '') ||
//               (sizePartBancaAperfeicoamentoEspecializacao !== '0' && sizePartBancaAperfeicoamentoEspecializacao !== '') ||
//               (sizePartBancaExameQualificacao !== '0' && sizePartBancaExameQualificacao !== '') ||
//               (sizePartBancaJulgadoraConcursoPublico !== '0' && sizePartBancaJulgadoraConcursoPublico !== '') ||
//               (sizePartBancaJulgadoraProfessorTitular !== '0' && sizePartBancaJulgadoraProfessorTitular !== '') ||
//               (sizePartBancaJulgadoraOutra !== '0' && sizePartBancaJulgadoraOutra !== '')) && <div >
//                 {(
//                   sizePartBancaGraduacao === '' ||
//                   sizePartBancaMestrado === '' ||
//                   sizePartBancaDoutorado === '' ||
//                   sizePartBancaAperfeicoamentoEspecializacao === '' ||
//                   sizePartBancaExameQualificacao === '' ||
//                   sizePartBancaJulgadoraConcursoPublico === '' ||
//                   sizePartBancaJulgadoraProfessorTitular === '' ||
//                   sizePartBancaJulgadoraOutra === '') && <LinearProgress />}


//                 <SizeItem user={user} heade={'Graduação'} url={'PartBancaGraduacao'} num={sizePartBancaGraduacao} />
//                 <SizeItem user={user} heade={'Mestrado'} url={'PartBancaMestrado'} num={sizePartBancaMestrado} />
//                 <SizeItem user={user} heade={'Doutorado'} url={'PartBancaDoutorado'} num={sizePartBancaDoutorado} />
//                 <SizeItem user={user} heade={'Aperfeiçoamento Especialização'} url={'PartBancaAperfeicoamentoEspecializacao'} num={sizePartBancaAperfeicoamentoEspecializacao} />
//                 <SizeItem user={user} heade={'Exame Qualificação'} url={'PartBancaExameQualificacao'} num={sizePartBancaExameQualificacao} />
//                 <SizeItem user={user} heade={'Julgadora de Professor Titular'} url={'PartBancaJulgadoraProfessorTitular'} num={sizePartBancaJulgadoraProfessorTitular} />
//                 <SizeItem user={user} heade={'Julgadora de Concurso Publico'} url={'PartBancaJulgadoraConcursoPublico'} num={sizePartBancaJulgadoraConcursoPublico} />
//                 <SizeItem user={user} heade={'Julgadora Outra'} url={'PartBancaJulgadoraOutra'} num={sizePartBancaJulgadoraOutra} />


//               </div>}
//             {(
//               (sizePartEncontro !== '0' && sizePartEncontro !== '') ||
//               (sizePartCongresso !== '0' && sizePartCongresso !== '') ||
//               (sizePartOficina !== '0' && sizePartOficina !== '') ||
//               (sizePartOutras !== '0' && sizePartOutras !== '') ||
//               (sizePartSeminario !== '0' && sizePartSeminario !== '') ||
//               (sizePartSimposio !== '0' && sizePartSimposio !== '')) && <div >
//                 {(
//                   sizePartEncontro === '' ||
//                   sizePartCongresso === '' ||
//                   sizePartOficina === '' ||
//                   sizePartOutras === '' ||
//                   sizePartSeminario === '' ||
//                   sizePartSimposio === '') && <LinearProgress />}


//                 <SizeItem user={user} heade={'Congresso'} url={'PartCongresso'} num={sizePartCongresso} />
//                 <SizeItem user={user} heade={'Encontro'} url={'PartEncontro'} num={sizePartEncontro} />
//                 <SizeItem user={user} heade={'Oficina'} url={'PartOficina'} num={sizePartOficina} />
//                 <SizeItem user={user} heade={'Seminário'} url={'PartSeminario'} num={sizePartSeminario} />
//                 <SizeItem user={user} heade={'Simpósio'} url={'PartSimposio'} num={sizePartSimposio} />
//                 <SizeItem user={user} heade={'Outras'} url={'PartOutras'} num={sizePartOutras} />


//               </div>}

//             {((sizeFCCursoCurtaDuracao !== '0' && sizeFCCursoCurtaDuracao !== '')) && <div >
//               {(sizeFCCursoCurtaDuracao === '') && <LinearProgress />}


//               <SizeItem user={user} heade={'Curso Curta Duração'} url={'FCCursoCurtaDuracao'} num={sizeFCCursoCurtaDuracao} />

//             </div>}

//             {((sizePTPremioTitulo !== '0' && sizePTPremioTitulo !== '')) && <div >
//               {(sizePTPremioTitulo === '') && <LinearProgress />}


//               <SizeItem user={user} heade={'Prêmio Titulo'} url={'PTPremioTitulo'} num={sizePTPremioTitulo} />

//             </div>}


//           </Card>
//         </Box>
//       </Card>
//     </Box >

//   );

// }


// //////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////
// const useStyles = makeStyles((theme) => ({
//   root: {

//     display: 'flex',
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
//   orange: {
//     color: theme.palette.getContrastText(deepOrange[500]),
//     backgroundColor: deepOrange[500],
//   },
//   purple: {
//     color: theme.palette.getContrastText(deepPurple[500]),
//     backgroundColor: deepPurple[500],
//   },

// }));

// const useStyles2 = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,

//   },
//   paper: {
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));


// const divMax = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     backgroundColor: "#9d98b3",
//   },
// }));


// const divMaxMobile = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
// }));

// const useStylesBackdrop = makeStyles((theme) => ({
//   backdrop: {
//     zIndex: theme.zIndex.drawer + 1,
//     color: '#fff',
//   },
// }));
