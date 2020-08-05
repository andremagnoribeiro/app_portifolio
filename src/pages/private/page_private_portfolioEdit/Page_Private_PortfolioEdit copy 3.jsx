import React, { useState, useEffect, useLayoutEffect } from 'react'


//Material-UI
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Backdrop from '@material-ui/core/Backdrop';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//Components
import { PortfolioBusca } from './components/PortfolioBusca'
import { SizeItem } from "./components/SizeItem"
import Navegacao from "./components/Navegacao"
//API
import { getAllTable ,getUserId,getMaxMinAno} from "../../../api/serverAPI";
import { TimelapseOutlined } from '@material-ui/icons';

const useStylesback = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));




/////////
/////////
/////////
/////////
/////////
/////////
/////////
//Classe
export const Page_Private_PortfolioEdit = (props) => {


  //////////////////////
  ///////////////////////
  ///////////////////////
  ///////////////////////
  ///////////////////////
  ///////////////////////
  ///////////////////////
  //Costantes
  const classesbackdrop = useStylesback();

  const userName = JSON.parse(localStorage.getItem('user')).user_name;
  
  const classes = useStyles();

  

  ///////////////////////////////////////
  ///////////////////////////////////////
  ///////////////////////////////////////
  ///////////////////////////////////////
  ///////////////////////////////////////
  ///////////////////////////////////////
  ///////////////////////////////////////
  //STATE
  const [user, setUser] = useState([]);
  
  const [ComponenteBusca, setComponenteBusca] = useState(<div></div>);
  
const [stateItens,setStateItens]=useState({});
 



  
  
  
  const [sizePBArtigoPublicado, setSizePBArtigoPublicado] = useState([]);
  const [sizePBCapituloLivroPublicado, setSizePBCapituloLivroPublicado] = useState([]);
  const [sizePBLivroPublicadoOrganizado, setSizePBLivroPublicadoOrganizado] = useState([]);
  const [sizePBTextoJornalRevista, setSizePBTextoJornalRevista] = useState([]);
  const [sizePBTrabalhosEvento, setSizePBTrabalhosEvento] = useState([]);
  const [sizeAPConselhoComissaoConsultoria, setSizeAPConselhoComissaoConsultoria] = useState([]);
  const [sizeAPDirecaoAdministracao, setSizeAPDirecaoAdministracao] = useState([]);
  const [sizeAPPesquisaDesenvolvimento, setSizeAPPesquisaDesenvolvimento] = useState([]);
  const [sizeAPVinculo, setSizeAPVinculo] = useState([]);
  const [sizeATProjetoPesquisa, setSizeATProjetoPesquisa] = useState([]);
  const [sizeFATDoutorado, setSizeFATDoutorado] = useState([]);
  const [sizeFATEspecializacao, setSizeFATEspecializacao] = useState([]);
  const [sizeFATGraduacao, setSizeFATGraduacao] = useState([]);
  const [sizeFATMestrado, setSizeFATMestrado] = useState([]);
  const [sizeOAAperfeicoamentoEspecializacao, setSizeOAAperfeicoamentoEspecializacao] = useState([]);
  const [sizeOADoutorado, setSizeOADoutorado] = useState([]);
  const [sizeOAGraduacao, setSizeOAGraduacao] = useState([]);
  const [sizeOAIniciacaoCientifica, setSizeOAIniciacaoCientifica] = useState([]);
  const [sizeOAMestrado, setSizeOAMestrado] = useState([]);
  const [sizeOAPosDoutorado, setSizeOAPosDoutorado] = useState([]);
  const [sizePartBancaAperfeicoamentoEspecializacao, setSizePartBancaAperfeicoamentoEspecializacao] = useState([]);
  const [sizePartBancaDoutorado, setSizePartBancaDoutorado] = useState([]);
  const [sizePartBancaExameQualificacao, setSizePartBancaExameQualificacao] = useState([]);
  const [sizePartBancaGraduacao, setSizePartBancaGraduacao] = useState([]);
  const [sizePartBancaJulgadoraConcursoPublico, setSizePartBancaJulgadoraConcursoPublico] = useState([]);
  const [sizePartBancaJulgadoraOutra, setSizePartBancaJulgadoraOutra] = useState([]);
  const [sizePartBancaJulgadoraProfessorTitular, setSizePartBancaJulgadoraProfessorTitular] = useState([]);
  const [sizePartBancaMestrado, setSizePartBancaMestrado] = useState([]);
  const [sizePartCongresso, setSizePartCongresso] = useState([]);
  const [sizePartEncontro, setSizePartEncontro] = useState([]);
  const [sizePartOficina, setSizePartOficina] = useState([]);
  const [sizePartOutras, setSizePartOutras] = useState([]);
  const [sizePartSeminario, setSizePartSeminario] = useState([]);
  const [sizePartSimposio, setSizePartSimposio] = useState([]);
  const [sizePTPremioTitulo, setSizePTPremioTitulo] = useState([]);
  const [sizeFCCursoCurtaDuracao, setSizeFCCursoCurtaDuracao] = useState([]);
  const [sizeSigaDisciplina, setSizeSigaDisciplina] = useState([]);
  const [sizeSigaProjeto, setSizeSigaProjeto] = useState([]);
  

  const [dataPBArtigoPublicado, setDataPBArtigoPublicado] = useState([]);
  const [dataPBCapituloLivroPublicado, setDataPBCapituloLivroPublicado] = useState([]);
  const [dataPBLivroPublicadoOrganizado, setDataPBLivroPublicadoOrganizado] = useState([]);
  const [dataPBTextoJornalRevista, setDataPBTextoJornalRevista] = useState([]);
  const [dataPBTrabalhosEvento, setDataPBTrabalhosEvento] = useState([]);
  const [dataAPConselhoComissaoConsultoria, setDataAPConselhoComissaoConsultoria] = useState([]);
  const [dataAPDirecaoAdministracao, setDataAPDirecaoAdministracao] = useState([]);
  const [dataAPPesquisaDesenvolvimento, setDataAPPesquisaDesenvolvimento] = useState([]);
  const [dataAPVinculo, setDataAPVinculo] = useState([]);
  const [dataATProjetoPesquisa, setDataATProjetoPesquisa] = useState([]);
  const [dataFATDoutorado, setDataFATDoutorado] = useState([]);
  const [dataFATEspecializacao, setDataFATEspecializacao] = useState([]);
  const [dataFATGraduacao, setDataFATGraduacao] = useState([]);
  const [dataFATMestrado, setDataFATMestrado] = useState([]);
  const [dataOAAperfeicoamentoEspecializacao, setDataOAAperfeicoamentoEspecializacao] = useState([]);
  const [dataOADoutorado, setDataOADoutorado] = useState([]);
  const [dataOAGraduacao, setDataOAGraduacao] = useState([]);
  const [dataOAIniciacaoCientifica, setDataOAIniciacaoCientifica] = useState([]);
  const [dataOAMestrado, setDataOAMestrado] = useState([]);
  const [dataOAPosDoutorado, setDataOAPosDoutorado] = useState([]);
  const [dataPartBancaAperfeicoamentoEspecializacao, setDataPartBancaAperfeicoamentoEspecializacao] = useState([]);
  const [dataPartBancaDoutorado, setDataPartBancaDoutorado] = useState([]);
  const [dataPartBancaExameQualificacao, setDataPartBancaExameQualificacao] = useState([]);
  const [dataPartBancaGraduacao, setDataPartBancaGraduacao] = useState([]);
  const [dataPartBancaJulgadoraConcursoPublico, setDataPartBancaJulgadoraConcursoPublico] = useState([]);
  const [dataPartBancaJulgadoraOutra, setDataPartBancaJulgadoraOutra] = useState([]);
  const [dataPartBancaJulgadoraProfessorTitular, setDataPartBancaJulgadoraProfessorTitular] = useState([]);
  const [dataPartBancaMestrado, setDataPartBancaMestrado] = useState([]);
  const [dataPartCongresso, setDataPartCongresso] = useState([]);
  const [dataPartEncontro, setDataPartEncontro] = useState([]);
  const [dataPartOficina, setDataPartOficina] = useState([]);
  const [dataPartOutras, setDataPartOutras] = useState([]);
  const [dataPartSeminario, setDataPartSeminario] = useState([]);
  const [dataPartSimposio, setDataPartSimposio] = useState([]);
  const [dataPTPremioTitulo, setDataPTPremioTitulo] = useState([]);
  const [dataFCCursoCurtaDuracao, setDataFCCursoCurtaDuracao] = useState([]);
  const [dataSigaDisciplina, setDataSigaDisciplina] = useState([]);
  const [dataSigaProjeto, setDataSigaProjeto] = useState([]);


  const [filterText, setFilterText] = useState('');
  const [filterAno, setFilterAno] = useState(["2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "2000", "1999", "1998", "1997", "1996", "1995", "1994", "1993", "1992", "1991"]);

  const [mobile, setMobile] = useState(false);

  
  const [acabouPBArtigoPublicado, setAcabouPBArtigoPublicado] = useState(false);
  const [acabouPBCapituloLivroPublicado, setAcabouPBCapituloLivroPublicado] = useState(false);
  const [acabouPBLivroPublicadoOrganizado, setAcabouPBLivroPublicadoOrganizado] = useState(false);
  const [acabouPBTextoJornalRevista, setAcabouPBTextoJornalRevista] = useState(false);
  const [acabouPBTrabalhosEvento, setAcabouPBTrabalhosEvento] = useState(false);
  const [acabouAPConselhoComissaoConsultoria, setAcabouAPConselhoComissaoConsultoria] = useState(false);
  const [acabouAPDirecaoAdministracao, setAcabouAPDirecaoAdministracao] = useState(false);
  const [acabouAPPesquisaDesenvolvimento, setAcabouAPPesquisaDesenvolvimento] = useState(false);
  const [acabouAPVinculo, setAcabouAPVinculo] = useState(false);
  const [acabouATProjetoPesquisa, setAcabouATProjetoPesquisa] = useState(false);
  const [acabouFATDoutorado, setAcabouFATDoutorado] = useState(false);
  const [acabouFATEspecializacao, setAcabouFATEspecializacao] = useState(false);
  const [acabouFATGraduacao, setAcabouFATGraduacao] = useState(false);
  const [acabouFATMestrado, setAcabouFATMestrado] = useState(false);
  const [acabouOAAperfeicoamentoEspecializacao, setAcabouOAAperfeicoamentoEspecializacao] = useState(false);
  const [acabouOADoutorado, setAcabouOADoutorado] = useState(false);
  const [acabouOAGraduacao, setAcabouOAGraduacao] = useState(false);
  const [acabouOAIniciacaoCientifica, setAcabouOAIniciacaoCientifica] = useState(false);
  const [acabouOAMestrado, setAcabouOAMestrado] = useState(false);
  const [acabouOAPosDoutorado, setAcabouOAPosDoutorado] = useState(false);
  const [acabouPartBancaAperfeicoamentoEspecializacao, setAcabouPartBancaAperfeicoamentoEspecializacao] = useState(false);
  const [acabouPartBancaDoutorado, setAcabouPartBancaDoutorado] = useState(false);
  const [acabouPartBancaExameQualificacao, setAcabouPartBancaExameQualificacao] = useState(false);
  const [acabouPartBancaGraduacao, setAcabouPartBancaGraduacao] = useState(false);
  const [acabouPartBancaJulgadoraConcursoPublico, setAcabouPartBancaJulgadoraConcursoPublico] = useState(false);
  const [acabouPartBancaJulgadoraOutra, setAcabouPartBancaJulgadoraOutra] = useState(false);
  const [acabouPartBancaJulgadoraProfessorTitular, setAcabouPartBancaJulgadoraProfessorTitular] = useState(false);
  const [acabouPartBancaMestrado, setAcabouPartBancaMestrado] = useState(false);
  const [acabouPartCongresso, setAcabouPartCongresso] = useState(false);
  const [acabouPartEncontro, setAcabouPartEncontro] = useState(false);
  const [acabouPartOficina, setAcabouPartOficina] = useState(false);
  const [acabouPartOutras, setAcabouPartOutras] = useState(false);
  const [acabouPartSeminario, setAcabouPartSeminario] = useState(false);
  const [acabouPartSimposio, setAcabouPartSimposio] = useState(false);
  const [acabouPTPremioTitulo, setAcabouPTPremioTitulo] = useState(false);
  const [acabouFCCursoCurtaDuracao, setAcabouFCCursoCurtaDuracao] = useState(false);
  const [acabouSigaDisciplina, setAcabouSigaDisciplina] = useState(false);
  const [acabouSigaProjeto, setAcabouSigaProjeto] = useState(false);


  const [acabou, setAcabou] = useState(1);
  
  

  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  //USE EFFECT

  useEffect(() => {
   
    getUserId(userName).then(data => setUser(data));

   getAllTable(userName).then((data)=>{
      setDataPBArtigoPublicado(data.pb_artigo_publicado);  setStateItens(prevState => {return {...prevState,"sizePBArtigoPublicado":data.pb_artigo_publicado}});
      setDataPBCapituloLivroPublicado(data.pb_capitulo_livro_publicado_organizado); setStateItens(prevState => {return {...prevState,"sizePBCapituloLivroPublicado":data.pb_capitulo_livro_publicado_organizado}});
      setDataPBLivroPublicadoOrganizado(data.pb_livro_publicado_organizado); setStateItens(prevState => {return {...prevState,"sizePBLivroPublicadoOrganizado":data.pb_livro_publicado_organizado}});
      setDataPBTextoJornalRevista(data.pb_texto_jornal_revista); setStateItens(prevState => {return {...prevState,"sizePBTextoJornalRevista":data.pb_texto_jornal_revista}});
      setDataPBTrabalhosEvento(data.pb_trabalho_evento); setStateItens(prevState => {return {...prevState,"sizePBTrabalhosEvento":data.pb_trabalho_evento}});
      setDataAPConselhoComissaoConsultoria(data.ap_conselho_comissao_consultoria); setStateItens(prevState => {return {...prevState,"sizeAPConselhoComissaoConsultoria":data.ap_conselho_comissao_consultoria}});
      setDataAPDirecaoAdministracao(data.ap_direcao_administracao); setStateItens(prevState => {return {...prevState,"sizeAPDirecaoAdministracao":data.ap_direcao_administracao}});
      setDataAPPesquisaDesenvolvimento(data.ap_pesquisa_desenvolvimento); setStateItens(prevState => {return {...prevState,"sizeAPPesquisaDesenvolvimento":data.ap_pesquisa_desenvolvimento}});
      setDataAPVinculo(data.ap_vinculo); setStateItens(prevState => {return {...prevState,"sizeAPVinculo":data.ap_vinculo}});
      setDataATProjetoPesquisa(data.at_projeto_pesquisa); setStateItens(prevState => {return {...prevState,"sizeATProjetoPesquisa":data.at_projeto_pesquisa}});
      setDataFATDoutorado(data.fat_doutorado); setStateItens(prevState => {return {...prevState,"sizeFATDoutorado":data.fat_doutorado}});
      setDataFATEspecializacao(data.fat_especializacao); setStateItens(prevState => {return {...prevState,"sizeFATEspecializacao":data.fat_especializacao}});
      setDataFATGraduacao(data.fat_graduacao); setStateItens(prevState => {return {...prevState,"sizeFATGraduacao":data.fat_graduacao}});
      setDataFATMestrado(data.fat_mestrado); setStateItens(prevState => {return {...prevState,"sizeFATMestrado":data.fat_mestrado}});
      setDataOAAperfeicoamentoEspecializacao(data.oa_aperfeicoamento_especializacao); setStateItens(prevState => {return {...prevState,"sizeOAAperfeicoamentoEspecializacao":data.oa_aperfeicoamento_especializacao}});
      setDataOADoutorado(data.oa_doutorado); setStateItens(prevState => {return {...prevState,"sizeOADoutorado":data.oa_doutorado}});
      setDataOAGraduacao(data.oa_graduacao); setStateItens(prevState => {return {...prevState,"sizeOAGraduacao":data.oa_graduacao}});
      setDataOAIniciacaoCientifica(data.oa_iniciacao_cientifica); setStateItens(prevState => {return {...prevState,"sizeOAIniciacaoCientifica":data.oa_iniciacao_cientifica}});
      setDataOAMestrado(data.oa_mestrado); setStateItens(prevState => {return {...prevState,"sizeOAMestrado":data.oa_mestrado}});
      setDataOAPosDoutorado(data.oa_posdoutorado); setStateItens(prevState => {return {...prevState,"sizeOAPosDoutorado":data.oa_posdoutorado}});
      setDataPartBancaAperfeicoamentoEspecializacao(data.part_banca_aperfeicoamento_especializacao); setStateItens(prevState => {return {...prevState,"sizePartBancaAperfeicoamentoEspecializacao":data.part_banca_aperfeicoamento_especializacao}});
      setDataPartBancaDoutorado(data.part_banca_doutorado); setStateItens(prevState => {return {...prevState,"sizePartBancaDoutorado":data.part_banca_doutorado}});
      setDataPartBancaExameQualificacao(data.part_banca_exame_qualificacao); setStateItens(prevState => {return {...prevState,"sizePartBancaExameQualificacao":data.part_banca_exame_qualificacao}});
      setDataPartBancaGraduacao(data.part_banca_graduacao); setStateItens(prevState => {return {...prevState,"sizePartBancaGraduacao":data.part_banca_graduacao}});
      setDataPartBancaJulgadoraConcursoPublico(data.part_banca_julgadora_concurso_publico); setStateItens(prevState => {return {...prevState,"sizePartBancaJulgadoraConcursoPublico":data.part_banca_julgadora_concurso_publico}});
      setDataPartBancaJulgadoraOutra(data.part_banca_julgadora_outra); setStateItens(prevState => {return {...prevState,"sizePartBancaJulgadoraOutra":data.part_banca_julgadora_outra}});
      setDataPartBancaJulgadoraProfessorTitular(data.part_banca_julgadora_professor_titular); setStateItens(prevState => {return {...prevState,"sizePartBancaJulgadoraProfessorTitular":data.part_banca_julgadora_professor_titular}});
      setDataPartBancaMestrado(data.part_banca_mestrado); setStateItens(prevState => {return {...prevState,"sizePartBancaMestrado":data.part_banca_mestrado}});
      setDataPartCongresso(data.part_congresso); setStateItens(prevState => {return {...prevState,"sizePartCongresso":data.part_congresso}});
      setDataPartEncontro(data.part_encontro); setStateItens(prevState => {return {...prevState,"sizePartEncontro":data.part_encontro}});
      setDataPartOficina(data.part_oficina); setStateItens(prevState => {return {...prevState,"sizePartOficina":data.part_oficina}});
      setDataPartOutras(data.part_evento_congresso_outra); setStateItens(prevState => {return {...prevState,"sizePartOutras":data.part_evento_congresso_outra}});
      setDataPartSeminario(data.part_seminario); setStateItens(prevState => {return {...prevState,"sizePartSeminario":data.part_seminario}});
      setDataPartSimposio(data.part_simposio); setStateItens(prevState => {return {...prevState,"sizePartSimposio":data.part_simposio}});
      setDataPTPremioTitulo(data.pt_premio_titulo); setStateItens(prevState => {return {...prevState,"sizePTPremioTitulo":data.pt_premio_titulo}});
      setDataFCCursoCurtaDuracao(data.fc_curso_curta_duracao); setStateItens(prevState => {return {...prevState,"sizeFCCursoCurtaDuracao":data.fc_curso_curta_duracao}});
      setDataSigaDisciplina(data.siga_disciplina); setStateItens(prevState => {return {...prevState,"sizeSigaDisciplina":data.siga_disciplina}});
      setDataSigaProjeto(data.siga_projeto); setStateItens(prevState => {return {...prevState,"sizeSigaProjeto":data.siga_projeto}});
    }).then(() => { setAcabou(true) });
      
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 1000) {
      setMobile(false);
    } else {
      setMobile(true);
    }

  }, [])


  useEffect(() => {
    setAcabou((
      acabouPBArtigoPublicado &&
      acabouPBCapituloLivroPublicado &&
      acabouPBLivroPublicadoOrganizado &&
      acabouPBTextoJornalRevista &&
      acabouPBTrabalhosEvento &&
      acabouAPConselhoComissaoConsultoria &&
      acabouAPDirecaoAdministracao &&
      acabouAPPesquisaDesenvolvimento &&
      acabouAPVinculo &&
      acabouATProjetoPesquisa &&
      acabouFATDoutorado &&
      acabouFATEspecializacao &&
      acabouFATGraduacao &&
      acabouFATMestrado &&
      acabouOAAperfeicoamentoEspecializacao &&
      acabouOADoutorado &&
      acabouOAGraduacao &&
      acabouOAIniciacaoCientifica &&
      acabouOAMestrado &&
      acabouOAPosDoutorado &&
      acabouPartBancaAperfeicoamentoEspecializacao &&
      acabouPartBancaDoutorado &&
      acabouPartBancaExameQualificacao &&
      acabouPartBancaGraduacao &&
      acabouPartBancaJulgadoraConcursoPublico &&
      acabouPartBancaJulgadoraOutra &&
      acabouPartBancaJulgadoraProfessorTitular &&
      acabouPartBancaMestrado &&
      acabouPartCongresso &&
      acabouPartEncontro &&
      acabouPartOficina &&
      acabouPartOutras &&
      acabouPartSeminario &&
      acabouPartSimposio &&
      acabouPTPremioTitulo &&
      acabouFCCursoCurtaDuracao &&
      acabouSigaDisciplina &&
      acabouSigaProjeto
    )
    )
  }, [
    acabouPBArtigoPublicado,
    acabouPBCapituloLivroPublicado,
    acabouPBLivroPublicadoOrganizado,
    acabouPBTextoJornalRevista,
    acabouPBTrabalhosEvento,
    acabouAPConselhoComissaoConsultoria,
    acabouAPDirecaoAdministracao,
    acabouAPPesquisaDesenvolvimento,
    acabouAPVinculo,
    acabouATProjetoPesquisa,
    acabouFATDoutorado,
    acabouFATEspecializacao,
    acabouFATGraduacao,
    acabouFATMestrado,
    acabouOAAperfeicoamentoEspecializacao,
    acabouOADoutorado,
    acabouOAGraduacao,
    acabouOAIniciacaoCientifica,
    acabouOAMestrado,
    acabouOAPosDoutorado,
    acabouPartBancaAperfeicoamentoEspecializacao,
    acabouPartBancaDoutorado,
    acabouPartBancaExameQualificacao,
    acabouPartBancaGraduacao,
    acabouPartBancaJulgadoraConcursoPublico,
    acabouPartBancaJulgadoraOutra,
    acabouPartBancaJulgadoraProfessorTitular,
    acabouPartBancaMestrado,
    acabouPartCongresso,
    acabouPartEncontro,
    acabouPartOficina,
    acabouPartOutras,
    acabouPartSeminario,
    acabouPartSimposio,
    acabouPTPremioTitulo,
    acabouFCCursoCurtaDuracao,
    acabouSigaDisciplina,
    acabouSigaProjeto])

  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////


  window.addEventListener('resize', function () {

    if (window.innerWidth >= 1000) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  });

const [anoMin, setAnoMin]=useState(0);
const [anoMax,setAnoMax]=useState(0);
useEffect(()=>{
  getMaxMinAno(userName).then((ano)=>{
    setAnoMin(parseInt(ano.anoMin));
    setAnoMin(parseInt(ano.anoMax));
    console.log(">>>>1",ano);});

  },[]);
 
  const dates=(anoSelect)=>new Promise((resolve, reject) => {
    var date = anoSelect[1];
    const dates = [];
    while(date >= anoSelect[0]) {
      dates.push(String(date));
      date = date - 1;
    }
    resolve(dates) ;
  });

  const Filtros=(TextBusca, anoSelect)=>{//formato= (palavra, [2012,2020])
    setAcabou(false);
    //setItens([]);
    setFilterText(TextBusca);
    dates(anoSelect).then((date)=>{setFilterAno(date);filtroItens(TextBusca,date);});
    
   
   
  }

const setFiltroExportPDF=()=>{
  localStorage.setItem("listExportPDF",
  '{"filtro":'+
  '{"ano":['+filterAno[0]+','+filterAno[filterAno.length-1]+'],'+
  '"texto":"'+ filterText+'"'+
  '}'+
  ',"itens":'+
     '['+
      '{"name":"pb_artigo_publicado","id": ['+ (sizePBArtigoPublicado.length!==0 ? stateItens.sizePBArtigoPublicado.map((it)=>it.id):"")+']},'+
      '{"name":"pb_capitulo_livro_publicado_organizado","id": ['+ (sizePBCapituloLivroPublicado.length!==0 ? stateItens.sizePBCapituloLivroPublicado.map((it)=>it.id):"")+']},'+
      '{"name":"pb_livro_publicado_organizado","id": ['+ (sizePBLivroPublicadoOrganizado.length!==0 ? stateItens.sizePBLivroPublicadoOrganizado.map((it)=>it.id):"")+']},'+
      '{"name":"pb_texto_jornal_revista","id": ['+ (sizePBTextoJornalRevista.length!==0 ? stateItens.sizePBTextoJornalRevista.map((it)=>it.id):"")+']},'+
      '{"name":"pb_trabalho_evento","id": ['+ (sizePBTrabalhosEvento.length!==0 ? stateItens.sizePBTrabalhosEvento.map((it)=>it.id):"")+']},'+
      '{"name":"ap_conselho_comissao_consultoria","id": ['+ (sizeAPConselhoComissaoConsultoria.length!==0 ? stateItens.sizeAPConselhoComissaoConsultoria.map((it)=>it.id):"")+']},'+
      '{"name":"ap_direcao_administracao","id": ['+ (sizeAPDirecaoAdministracao.length!==0 ? stateItens.sizeAPDirecaoAdministracao.map((it)=>it.id):"")+']},'+
      '{"name":"ap_pesquisa_desenvolvimento","id": ['+ (sizeAPPesquisaDesenvolvimento.length!==0 ? stateItens.sizeAPPesquisaDesenvolvimento.map((it)=>it.id):"")+']},'+
      '{"name":"ap_vinculo","id": ['+ (sizeAPVinculo.length!==0 ? stateItens.sizeAPVinculo.map((it)=>it.id):"")+']},'+
      '{"name":"at_projeto_pesquisa","id": ['+ (sizeATProjetoPesquisa.length!==0 ? stateItens.sizeATProjetoPesquisa.map((it)=>it.id):"")+']},'+
      '{"name":"fat_doutorado","id": ['+ (sizeFATDoutorado.length!==0 ? stateItens.sizeFATDoutorado.map((it)=>it.id):"")+']},'+
      '{"name":"fat_especializacao","id": ['+ (sizeFATEspecializacao.length!==0 ? stateItens.sizeFATEspecializacao.map((it)=>it.id):"")+']},'+
      '{"name":"fat_graduacao","id": ['+ (sizeFATGraduacao.length!==0 ? stateItens.sizeFATGraduacao.map((it)=>it.id):"")+']},'+
      '{"name":"fat_mestrado","id": ['+ (sizeFATMestrado.length!==0 ? stateItens.sizeFATMestrado.map((it)=>it.id):"")+']},'+
      '{"name":"oa_aperfeicoamento_especializacao","id": ['+ (sizeOAAperfeicoamentoEspecializacao.length!==0 ? stateItens.sizeOAAperfeicoamentoEspecializacao.map((it)=>it.id):"")+']},'+
      '{"name":"oa_doutorado","id": ['+ (sizeOADoutorado.length!==0 ? stateItens.sizeOADoutorado.map((it)=>it.id):"")+']},'+
      '{"name":"oa_graduacao","id": ['+ (sizeOAGraduacao.length!==0 ? stateItens.sizeOAGraduacao.map((it)=>it.id):"")+']},'+
      '{"name":"oa_iniciacao_cientifica","id": ['+ (sizeOAIniciacaoCientifica.length!==0 ? stateItens.sizeOAIniciacaoCientifica.map((it)=>it.id):"")+']},'+
      '{"name":"oa_mestrado","id": ['+ (sizeOAMestrado.length!==0 ? stateItens.sizeOAMestrado.map((it)=>it.id):"")+']},'+
      '{"name":"oa_posdoutorado","id": ['+ (sizeOAPosDoutorado.length!==0 ? stateItens.sizeOAPosDoutorado.map((it)=>it.id):"")+']},'+
      '{"name":"part_banca_aperfeicoamento_especializacao","id": ['+ (sizePartBancaAperfeicoamentoEspecializacao.length!==0 ? stateItens.sizePartBancaAperfeicoamentoEspecializacao.map((it)=>it.id):"")+']},'+
      '{"name":"part_banca_doutorado","id": ['+ (sizePartBancaDoutorado.length!==0 ? stateItens.sizePartBancaDoutorado.map((it)=>it.id):"")+']},'+
      '{"name":"part_banca_exame_qualificacao","id": ['+ (sizePartBancaExameQualificacao.length!==0 ? stateItens.sizePartBancaExameQualificacao.map((it)=>it.id):"")+']},'+
      '{"name":"part_banca_graduacao","id": ['+ (sizePartBancaGraduacao.length!==0 ? stateItens.sizePartBancaGraduacao.map((it)=>it.id):"")+']},'+
      '{"name":"part_banca_julgadora_concurso_publico","id": ['+ (sizePartBancaJulgadoraConcursoPublico.length!==0 ? stateItens.sizePartBancaJulgadoraConcursoPublico.map((it)=>it.id):"")+']},'+
      '{"name":"part_banca_julgadora_outra","id": ['+ (sizePartBancaJulgadoraOutra.length!==0 ? stateItens.sizePartBancaJulgadoraOutra.map((it)=>it.id):"")+']},'+
      '{"name":"part_banca_julgadora_professor_titular","id": ['+ (sizePartBancaJulgadoraProfessorTitular.length!==0 ? stateItens.sizePartBancaJulgadoraProfessorTitular.map((it)=>it.id):"")+']},'+
      '{"name":"part_banca_mestrado","id": ['+ (sizePartBancaMestrado.length!==0 ? stateItens.sizePartBancaMestrado.map((it)=>it.id):"")+']},'+
      '{"name":"part_congresso","id": ['+ (sizePartCongresso.length!==0 ? stateItens.sizePartCongresso.map((it)=>it.id):"")+']},'+
      '{"name":"part_encontro","id": ['+ (sizePartEncontro.length!==0 ? stateItens.sizePartEncontro.map((it)=>it.id):"")+']},'+
      '{"name":"part_oficina","id": ['+ (sizePartOficina.length!==0 ? stateItens.sizePartOficina.map((it)=>it.id):"")+']},'+
      '{"name":"part_evento_congresso_outra","id": ['+ (sizePartOutras.length!==0 ? stateItens.sizePartOutras.map((it)=>it.id):"")+']},'+
      '{"name":"part_seminario","id": ['+ (sizePartSeminario.length!==0 ? stateItens.sizePartSeminario.map((it)=>it.id):"")+']},'+
      '{"name":"part_simposio","id": ['+ (sizePartSimposio.length!==0 ? stateItens.sizePartSimposio.map((it)=>it.id):"")+']},'+
      '{"name":"pt_premio_titulo","id": ['+ (sizePTPremioTitulo.length!==0 ? stateItens.sizePTPremioTitulo.map((it)=>it.id):"")+']},'+
      '{"name":"fc_curso_curta_duracao","id": ['+ (sizeFCCursoCurtaDuracao.length!==0 ? stateItens.sizeFCCursoCurtaDuracao.map((it)=>it.id):"")+']},'+
      '{"name":"siga_disciplina","id": ['+ (sizeSigaDisciplina.length!==0 ? stateItens.sizeSigaDisciplina.map((it)=>it.id):"")+']},'+
      '{"name":"siga_projeto","id": ['+ (sizeSigaProjeto.length!==0 ? stateItens.sizeSigaProjeto.map((it)=>it.id):"")+']}'+
    ']}');
  }
 

const filtroItens = (filterText_,filterAno_) => {
  setStateItens({ 
    "sizePBArtigoPublicado":dataPBArtigoPublicado.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano_do_artigo) !== -1),
    "sizePBCapituloLivroPublicado":dataPBCapituloLivroPublicado.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano) !== -1),
    "sizePBLivroPublicadoOrganizado":dataPBLivroPublicadoOrganizado.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano) !== -1),
    "sizePBTextoJornalRevista":dataPBTextoJornalRevista.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano_do_texto) !== -1),
    "sizePBTrabalhosEvento":dataPBTrabalhosEvento.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano_do_trabalho) !== -1),
    "sizeAPConselhoComissaoConsultoria":dataAPConselhoComissaoConsultoria.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano_inicio) !== -1),
    "sizeAPDirecaoAdministracao":dataAPDirecaoAdministracao.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano_inicio) !== -1),
    "sizeAPPesquisaDesenvolvimento":dataAPPesquisaDesenvolvimento.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano_inicio) !== -1),
    "sizeAPVinculo":dataAPVinculo.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano_inicio) !== -1),
    "sizeATProjetoPesquisa":dataATProjetoPesquisa.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano_inicio) !== -1),
    "sizeFATDoutorado":dataFATDoutorado.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano_inicio) !== -1),
    "sizeFATEspecializacao":dataFATEspecializacao.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano_inicio) !== -1),
    "sizeFATGraduacao":dataFATGraduacao.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano_inicio) !== -1),
    "sizeFATMestrado":dataFATMestrado.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano_inicio) !== -1),
    "sizeOAAperfeicoamentoEspecializacao":dataOAAperfeicoamentoEspecializacao.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano) !== -1),
    "sizeOADoutorado":dataOADoutorado.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano) !== -1),
    "sizeOAGraduacao":dataOAGraduacao.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano) !== -1),
    "sizeOAIniciacaoCientifica":dataOAIniciacaoCientifica.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano) !== -1),
    "sizeOAMestrado":dataOAMestrado.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano) !== -1),
    "sizeOAPosDoutorado":dataOAPosDoutorado.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano) !== -1),
    "sizePartBancaAperfeicoamentoEspecializacao":dataPartBancaAperfeicoamentoEspecializacao.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano) !== -1),
    "sizePartBancaDoutorado":dataPartBancaDoutorado.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano) !== -1),
    "sizePartBancaExameQualificacao":dataPartBancaExameQualificacao.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano) !== -1),
    "sizePartBancaGraduacao":dataPartBancaGraduacao.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano) !== -1),
    "sizePartBancaJulgadoraConcursoPublico":dataPartBancaJulgadoraConcursoPublico.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano) !== -1),
    "sizePartBancaJulgadoraOutra":dataPartBancaJulgadoraOutra.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano) !== -1),
    "sizePartBancaJulgadoraProfessorTitular":dataPartBancaJulgadoraProfessorTitular.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano) !== -1),
    "sizePartBancaMestrado":dataPartBancaMestrado.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano) !== -1),
    "sizePartCongresso":dataPartCongresso.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano) !== -1),
    "sizePartEncontro":dataPartEncontro.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano) !== -1),
    "sizePartOficina":dataPartOficina.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano) !== -1),
    "sizePartOutras":dataPartOutras.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano) !== -1),
    "sizePartSeminario":dataPartSeminario.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano) !== -1),
    "sizePartSimposio":dataPartSimposio.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano) !== -1),
    "sizePTPremioTitulo":dataPTPremioTitulo.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano_da_premiacao) !== -1),
    "sizeFCCursoCurtaDuracao":dataFCCursoCurtaDuracao.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ano_de_inicio) !== -1),
    "sizeSigaDisciplina":dataSigaDisciplina.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ANO) !== -1),
    "sizeSigaProjeto":dataSigaProjeto.filter((item) => (new RegExp(filterText_, 'i')).test(JSON.stringify(item))).filter((item) => filterAno_.indexOf(item.ANO) !== -1)
  }); 
  
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////


useEffect(()=>{
  setFiltroExportPDF();
  if(acabou!==1){
  setAcabou(true);
  }

setSizePBArtigoPublicado(stateItens.sizePBArtigoPublicado);
setSizePBCapituloLivroPublicado(stateItens.sizePBCapituloLivroPublicado);
setSizePBLivroPublicadoOrganizado(stateItens.sizePBLivroPublicadoOrganizado);
setSizePBTextoJornalRevista(stateItens.sizePBTextoJornalRevista);
setSizePBTrabalhosEvento(stateItens.sizePBTrabalhosEvento);
setSizeAPConselhoComissaoConsultoria(stateItens.sizeAPConselhoComissaoConsultoria);
setSizeAPDirecaoAdministracao(stateItens.sizeAPDirecaoAdministracao);
setSizeAPPesquisaDesenvolvimento(stateItens.sizeAPPesquisaDesenvolvimento);
setSizeAPVinculo(stateItens.sizeAPVinculo);
setSizeATProjetoPesquisa(stateItens.sizeATProjetoPesquisa);
setSizeFATDoutorado(stateItens.sizeFATDoutorado);
setSizeFATEspecializacao(stateItens.sizeFATEspecializacao);
setSizeFATGraduacao(stateItens.sizeFATGraduacao);
setSizeFATMestrado(stateItens.sizeFATMestrado);
setSizeOAAperfeicoamentoEspecializacao(stateItens.sizeOAAperfeicoamentoEspecializacao);
setSizeOADoutorado(stateItens.sizeOADoutorado);
setSizeOAGraduacao(stateItens.sizeOAGraduacao);
setSizeOAIniciacaoCientifica(stateItens.sizeOAIniciacaoCientifica);
setSizeOAMestrado(stateItens.sizeOAMestrado);
setSizeOAPosDoutorado(stateItens.sizeOAPosDoutorado);
setSizePartBancaAperfeicoamentoEspecializacao(stateItens.sizePartBancaAperfeicoamentoEspecializacao);
setSizePartBancaDoutorado(stateItens.sizePartBancaDoutorado);
setSizePartBancaExameQualificacao(stateItens.sizePartBancaExameQualificacao);
setSizePartBancaGraduacao(stateItens.sizePartBancaGraduacao);
setSizePartBancaJulgadoraConcursoPublico(stateItens.sizePartBancaJulgadoraConcursoPublico);
setSizePartBancaJulgadoraOutra(stateItens.sizePartBancaJulgadoraOutra);
setSizePartBancaJulgadoraProfessorTitular(stateItens.sizePartBancaJulgadoraProfessorTitular);
setSizePartBancaMestrado(stateItens.sizePartBancaMestrado);
setSizePartCongresso(stateItens.sizePartCongresso);
setSizePartEncontro(stateItens.sizePartEncontro);
setSizePartOficina(stateItens.sizePartOficina);
setSizePartOutras(stateItens.sizePartOutras);
setSizePartSeminario(stateItens.sizePartSeminario);
setSizePartSimposio(stateItens.sizePartSimposio);
setSizePTPremioTitulo(stateItens.sizePTPremioTitulo);
setSizeFCCursoCurtaDuracao(stateItens.sizeFCCursoCurtaDuracao);
setSizeSigaDisciplina(stateItens.sizeSigaDisciplina);
setSizeSigaProjeto(stateItens.sizeSigaProjeto);

},[stateItens]);

  return (
  
    <Box >
      
      <Backdrop className={classesbackdrop.backdrop} open={!acabou} >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div style={{ marginLeft: 20, marginTop: 15 }}>
        <Navegacao atual={'Portfólio Publico'} anteriores={[
          {
            "name": "Home",
            "url": "Portfólio Publico"
          }
        ]} />
      </div>
      {/* <PortfolioBusca getSearch={Filtros} filterAno={filterAno} sliderMin={1989} sliderMax={2020} /> */}
     
     
      {/*(anoMin!==0&&anoMax!==0) &&<PortfolioBusca 
    getSearch={Filtros} 
    filterAno={filterAno} 
    sliderMin={anoMin} 
    sliderMax={anoMax} />*/}
     
      <PortfolioBusca 
    getSearch={Filtros} 
    filterAno={filterAno} 
    sliderMin={1989} 
    sliderMax={2020} />

      <Card key={user.name + "aaaa"} style={{ margin: 20 }}>
        <CardHeader
          avatar={<Avatar className={classes.purple}></Avatar>}
          title={user.name}
          subheader={user.email}
        />
        <Box display="flex" justifyContent="center" p={0.5} bgcolor="background.paper">

          <Card style={{ width: '90%' }}>
            <CardHeader
              title={"Portfólio Siga "}
              subheader={(sizeSigaDisciplina === '' ||
                sizeSigaProjeto === '') && <LinearProgress />}
            />


            {
              (
                (sizeSigaDisciplina.length !== 0 && sizeSigaDisciplina !== '') ||
                (sizeSigaProjeto.length !== 0 && sizeSigaProjeto !== '')
              ) && <div style={{ width: '90%', marginLeft: '5%', marginBottom: 20 }}>
                <SizeItem user={user} heade={'Disciplinas'} url={'disciplina'} num={sizeSigaDisciplina} />
                <SizeItem user={user} heade={'Projetos'} url={'projeto'} num={sizeSigaProjeto} />
              </div>}
          </Card>
        </Box>
        <Box display="flex" justifyContent="center" p={0.5} bgcolor="background.paper">
          <Card style={{ width: '90%'}}>
            <CardHeader
              title={"Portfólio Lattes"/*<Button style={{ margin: 15, width: 200 }} color="primary" disableElevation onClick={() => href(`/portfolio/lattes/${user.user_name}`)} >Abrir Todos</Button>*/}
              subheader={(
                sizePBArtigoPublicado === '' ||
                sizePBCapituloLivroPublicado === '' ||
                sizePBLivroPublicadoOrganizado === '' ||
                sizePBTextoJornalRevista === '' ||
                sizePBTrabalhosEvento === '') && <LinearProgress />}
                
            />
            {(
              (sizePBArtigoPublicado.length !== 0 && sizePBArtigoPublicado !== []) ||
              (sizePBCapituloLivroPublicado.length !== 0 && sizePBCapituloLivroPublicado !== []) ||
              (sizePBLivroPublicadoOrganizado.length !== 0 && sizePBLivroPublicadoOrganizado !== []) ||
              (sizePBTextoJornalRevista.length !== 0 && sizePBTextoJornalRevista !== []) ||
              (sizePBTrabalhosEvento.length !== 0 && sizePBTrabalhosEvento !== [])
            ) &&
              <Card style={{ width: '90%', marginLeft: '5%', marginBottom: 20 }}>
                <CardHeader title="Produção Bibliográfica" />
                <SizeItem user={user} heade={'Artigos Publicados'} url={'PBArtigoPublicado'} num={sizePBArtigoPublicado} />
                <SizeItem user={user} heade={'Capítulos de Livros Publicados'} url={'PBCapituloLivroPublicado'} num={sizePBCapituloLivroPublicado} />
                <SizeItem user={user} heade={'Livros Publicados e Organizados'} url={'PBLivroPublicadoOrganizado'} num={sizePBLivroPublicadoOrganizado} />
                <SizeItem user={user} heade={'Textos Jornais e Revistas'} url={'PBTextoJornalRevista'} num={sizePBTextoJornalRevista} />
                <SizeItem user={user} heade={'Trabalhos em Eventos'} url={'PBTrabalhosEvento'} num={sizePBTrabalhosEvento} />

              </Card>}

            {(
              (sizeOAIniciacaoCientifica === '0' && sizeOAIniciacaoCientifica === '') ||
              (sizeOAGraduacao === '0' && sizeOAGraduacao === '') ||
              (sizeOAMestrado === '0' && sizeOAMestrado === '') ||
              (sizeOADoutorado === '0' && sizeOADoutorado === '') ||
              (sizeOAPosDoutorado === '0' && sizeOAPosDoutorado === '') ||
              (sizeOAAperfeicoamentoEspecializacao === '0' && sizeOAAperfeicoamentoEspecializacao === '')
            ) &&
              <Card style={{ width: '90%', marginLeft: '5%', marginBottom: 20 }}>
                <CardHeader title="Orientações em Andamento" />

                <SizeItem user={user} heade={'Orientações em Andamendo de Iniciação Cientifica'} url={'OAIniciacaoCientifica'} num={sizeOAIniciacaoCientifica} />
                <SizeItem user={user} heade={'Orientações em Andamendo de Mestrado'} url={'OAMestrado'} num={sizeOAMestrado} />
                <SizeItem user={user} heade={'Orientações em Andamendo de Graduação'} url={'OAGraduacao'} num={sizeOAGraduacao} />
                <SizeItem user={user} heade={'Orientações em Andamendo de Doutorado'} url={'OADoutorado'} num={sizeOADoutorado} />
                <SizeItem user={user} heade={'Orientações em Andamendo de Pós-doutorado'} url={'OAPosDoutorado'} num={sizeOAPosDoutorado} />
                <SizeItem user={user} heade={'Orientações em Andamendo de Aperfeiçoamento e Especialização'} url={'OAAperfeicoamentoEspecializacao'} num={sizeOAAperfeicoamentoEspecializacao} />


              </Card>}

            {(
              (sizeFATGraduacao.length !== 0 && sizeFATGraduacao !== '') ||
              (sizeFATDoutorado.length !== 0 && sizeFATDoutorado !== '') ||
              (sizeFATMestrado.length !== 0 && sizeFATMestrado !== '') ||
              (sizeFATEspecializacao.length !== 0 && sizeFATEspecializacao !== '')
            )
              &&
              <Card style={{ width: '90%', marginLeft: '5%', marginBottom: 20 }}>
                <CardHeader title="Formação Acadêmica Titulação" />



                <SizeItem user={user} heade={'Graduação'} url={'FATGraduacao'} num={sizeFATGraduacao} />
                <SizeItem user={user} heade={'Mestrado'} url={'FATMestrado'} num={sizeFATMestrado} />
                <SizeItem user={user} heade={'Doutorado'} url={'FATDoutorado'} num={sizeFATDoutorado} />
                <SizeItem user={user} heade={'Especialização'} url={'FATEspecializacao'} num={sizeFATEspecializacao} />


              </Card>}

            {(
              (sizeAPConselhoComissaoConsultoria.length !== 0 && sizeAPConselhoComissaoConsultoria !== '') ||
              (sizeAPDirecaoAdministracao.length !== 0 && sizeAPDirecaoAdministracao !== '') ||
              (sizeAPPesquisaDesenvolvimento.length !== 0 && sizeAPPesquisaDesenvolvimento !== '') ||
              (sizeATProjetoPesquisa.length !== 0 && sizeATProjetoPesquisa !== '') ||
              (sizeAPVinculo.length !== 0 && sizeAPVinculo !== ''))

              &&

              <Card style={{ width: '90%', marginLeft: '5%', marginBottom: 20 }}>
                <CardHeader title="Produção Bibliográfica" />

                <SizeItem user={user} heade={'Conselho Comissão Consultoria'} url={'APConselhoComissaoConsultoria'} num={sizeAPConselhoComissaoConsultoria} />
                <SizeItem user={user} heade={'Direção Administração'} url={'APDirecaoAdministracao'} num={sizeAPDirecaoAdministracao} />
                <SizeItem user={user} heade={'Pesquisa e Desenvolvimento'} url={'APPesquisaDesenvolvimento'} num={sizeAPPesquisaDesenvolvimento} />
                <SizeItem user={user} heade={'Vínculo'} url={'APVinculo'} num={sizeAPVinculo} />
                <SizeItem user={user} heade={'Projeto Pesquisa'} url={'ATProjetoPesquisa'} num={sizeATProjetoPesquisa} />


              </Card>}
            {(
              (sizePartBancaGraduacao.length !== 0 && sizePartBancaGraduacao !== '') ||
              (sizePartBancaMestrado.length !== 0 && sizePartBancaMestrado !== '') ||
              (sizePartBancaDoutorado.length !== 0 && sizePartBancaDoutorado !== '') ||
              (sizePartBancaAperfeicoamentoEspecializacao.length !== 0 && sizePartBancaAperfeicoamentoEspecializacao !== '') ||
              (sizePartBancaExameQualificacao.length !== 0 && sizePartBancaExameQualificacao !== '') ||
              (sizePartBancaJulgadoraConcursoPublico.length !== 0 && sizePartBancaJulgadoraConcursoPublico !== '') ||
              (sizePartBancaJulgadoraProfessorTitular.length !== 0 && sizePartBancaJulgadoraProfessorTitular !== '') ||
              (sizePartBancaJulgadoraOutra.length !== 0 && sizePartBancaJulgadoraOutra !== '')
            )

              &&
              <Card style={{ width: '90%', marginLeft: '5%', marginBottom: 20 }}>
                <CardHeader title="Participacão em Banca" />



                <SizeItem user={user} heade={'Banca Julgadora de Graduação'} url={'PartBancaGraduacao'} num={sizePartBancaGraduacao} />
                <SizeItem user={user} heade={'Banca Julgadora de Mestrado'} url={'PartBancaMestrado'} num={sizePartBancaMestrado} />
                <SizeItem user={user} heade={'Banca Julgadora de Doutorado'} url={'PartBancaDoutorado'} num={sizePartBancaDoutorado} />
                <SizeItem user={user} heade={'Banca Julgadora de Aperfeiçoamento Especialização'} url={'PartBancaAperfeicoamentoEspecializacao'} num={sizePartBancaAperfeicoamentoEspecializacao} />
                <SizeItem user={user} heade={'Banca Julgadora de Banca de Exame Qualificação'} url={'PartBancaExameQualificacao'} num={sizePartBancaExameQualificacao} />
                <SizeItem user={user} heade={'Banca Julgadora de Professor Titular'} url={'PartBancaJulgadoraProfessorTitular'} num={sizePartBancaJulgadoraProfessorTitular} />
                <SizeItem user={user} heade={'Banca Julgadora de Concurso Publico'} url={'PartBancaJulgadoraConcursoPublico'} num={sizePartBancaJulgadoraConcursoPublico} />
                <SizeItem user={user} heade={'Banca Julgadora Outra'} url={'PartBancaJulgadoraOutra'} num={sizePartBancaJulgadoraOutra} />


              </Card>}
            {(
              (sizePartEncontro.length !== 0 && sizePartEncontro !== '') ||
              (sizePartCongresso.length !== 0 && sizePartCongresso !== '') ||
              (sizePartOficina.length !== 0 && sizePartOficina !== '') ||
              (sizePartOutras.length !== 0 && sizePartOutras !== '') ||
              (sizePartSeminario.length !== 0 && sizePartSeminario !== '') ||
              (sizePartSimposio.length !== 0 && sizePartSimposio !== '')
            )
              &&

              <Card style={{ width: '90%', marginLeft: '5%', marginBottom: 20 }}>
                <CardHeader title="Participacão em Eventos Congressos" />


                <SizeItem user={user} heade={'Congresso'} url={'PartCongresso'} num={sizePartCongresso} />
                <SizeItem user={user} heade={'Encontro'} url={'PartEncontro'} num={sizePartEncontro} />
                <SizeItem user={user} heade={'Oficina'} url={'PartOficina'} num={sizePartOficina} />
                <SizeItem user={user} heade={'Seminário'} url={'PartSeminario'} num={sizePartSeminario} />
                <SizeItem user={user} heade={'Simpósio'} url={'PartSimposio'} num={sizePartSimposio} />
                <SizeItem user={user} heade={'Outras'} url={'PartOutras'} num={sizePartOutras} />


              </Card>}

            {((sizeFCCursoCurtaDuracao.length !== 0 && sizeFCCursoCurtaDuracao !== '')) &&

              <Card style={{ width: '90%', marginLeft: '5%', marginBottom: 20 }}>
                <CardHeader title="Cursos" />
                <SizeItem user={user} heade={'Cursos de Curta Duração'} url={'FCCursoCurtaDuracao'} num={sizeFCCursoCurtaDuracao} />
              </Card>}

            {((sizePTPremioTitulo.length !== 0 && sizePTPremioTitulo !== '')) &&

              <Card style={{ width: '90%', marginLeft: '5%', marginBottom: 20 }}>
                <CardHeader title="Prêmios" />

                <SizeItem user={user} heade={'Prêmios Titulos'} url={'PTPremioTitulo'} num={sizePTPremioTitulo} />

              </Card>}

          </Card>
        </Box>
      </Card>
    </Box >

  );

}


//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
const useStyles = makeStyles((theme) => ({
  root: {

    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },

}));

const useStyles2 = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));




const divMaxMobile = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}));

const useStylesBackdrop = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));
