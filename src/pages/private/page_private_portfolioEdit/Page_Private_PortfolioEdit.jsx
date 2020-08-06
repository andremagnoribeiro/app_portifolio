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
import { api_getAllTable ,api_getUserId,api_getMaxMinAno} from "../../../api/serverAPI";
import { TimelapseOutlined } from '@material-ui/icons';

const useStylesback = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));




/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Classe
export const Page_Private_PortfolioEdit = (props) => {

  const classesbackdrop = useStylesback();

  const userName = JSON.parse(localStorage.getItem('user')).user_name;
  
  const classes = useStyles();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //STATE


  const [filterText, setFilterText] = useState('');
  const [filterAno, setFilterAno] = useState(["2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "2000", "1999", "1998", "1997", "1996", "1995", "1994", "1993", "1992", "1991"]);

  const [mobile, setMobile] = useState(false);

  const [acabou, setAcabou] = useState(false);
  const [inicial, setInicial] = useState(1);
  
  const [anoMin, setAnoMin]=useState(0);
  const [anoMax,setAnoMax]=useState(0);

  const [user, setUser] = useState([]);
  
  const [ComponenteBusca, setComponenteBusca] = useState(<div></div>);
  

  const [stateItens,setStateItens]=useState({ 
    "sizePBArtigoPublicado":[],
    "sizePBCapituloLivroPublicado":[],
    "sizePBLivroPublicadoOrganizado":[],
    "sizePBTextoJornalRevista":[],
    "sizePBTrabalhosEvento":[],
    "sizeAPConselhoComissaoConsultoria":[],
    "sizeAPDirecaoAdministracao":[],
    "sizeAPPesquisaDesenvolvimento":[],
    "sizeAPVinculo":[],
    "sizeATProjetoPesquisa":[],
    "sizeFATDoutorado":[],
    "sizeFATEspecializacao":[],
    "sizeFATGraduacao":[],
    "sizeFATMestrado":[],
    "sizeOAAperfeicoamentoEspecializacao":[],
    "sizeOADoutorado":[],
    "sizeOAGraduacao":[],
    "sizeOAIniciacaoCientifica":[],
    "sizeOAMestrado":[],
    "sizeOAPosDoutorado":[],
    "sizePartBancaAperfeicoamentoEspecializacao":[],
    "sizePartBancaDoutorado":[],
    "sizePartBancaExameQualificacao":[],
    "sizePartBancaGraduacao":[],
    "sizePartBancaJulgadoraConcursoPublico":[],
    "sizePartBancaJulgadoraOutra":[],
    "sizePartBancaJulgadoraProfessorTitular":[],
    "sizePartBancaMestrado":[],
    "sizePartCongresso":[],
    "sizePartEncontro":[],
    "sizePartOficina":[],
    "sizePartOutras":[],
    "sizePartSeminario":[],
    "sizePartSimposio":[],
    "sizePTPremioTitulo":[],
    "sizeFCCursoCurtaDuracao":[],
    "sizeSigaDisciplina":[],
    "sizeSigaProjeto":[]
  });
  

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


  
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //USE EFFECT////////////////////////////////////////////////////////////////////////////

  //GET API
  useEffect(() => {
   
    api_getUserId(userName).then(data => setUser(data));
    api_getAllTable(userName).then((data)=>{
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
    }).then(() => { setAcabou(true); setInicial(2) });
      
  }, []);

  useEffect(()=>{
    api_getMaxMinAno(userName).then((ano)=>{
      setAnoMin(parseInt(ano.anoMin));
      setAnoMax(parseInt(ano.anoMax));
      console.log(">>>>ano",ano);});

  },[]);


  // State dos Itens  stateItens
  useEffect(()=>{
    setFiltroExportPDF();
    if(inicial===2){
      setAcabou(true);
    }
  console.log(">>>>>3",stateItens);
  
  },[stateItens]);

 

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //FUNCTIONS  

  //array de dadar para o filter


  //Filtro
  const Filtros=(TextBusca, anoSelect)=>{//formato= (palavra, [2012,2020])
    setAcabou(false);
    //setItens([]);
    setFilterText(TextBusca);
    dates(anoSelect).then((date)=>{setFilterAno(date);filtroItens(TextBusca,date);});
  }

  //Filtro Ano e Texto
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

  //export pdf save Objeto localStorange
  const setFiltroExportPDF=()=>{
    localStorage.setItem("listExportPDF",
    ' {"filtro": '+
    ' {"ano":['+filterAno[filterAno.length-1]+','+filterAno[0]+'], '+
    ' "texto":"'+ filterText+'" '+
    ' } '+
    ' ,"itens": '+
      '['+
        '{"name":"pb_artigo_publicado","id": ['+ (stateItens.sizePBArtigoPublicado.length!==0 ? stateItens.sizePBArtigoPublicado.map((it)=>it.id):"")+']},'+
        '{"name":"pb_capitulo_livro_publicado_organizado","id": ['+ (stateItens.sizePBCapituloLivroPublicado.length!==0 ? stateItens.sizePBCapituloLivroPublicado.map((it)=>it.id):"")+']},'+
        '{"name":"pb_livro_publicado_organizado","id": ['+ (stateItens.sizePBLivroPublicadoOrganizado.length!==0 ? stateItens.sizePBLivroPublicadoOrganizado.map((it)=>it.id):"")+']},'+
        '{"name":"pb_texto_jornal_revista","id": ['+ (stateItens.sizePBTextoJornalRevista.length!==0 ? stateItens.sizePBTextoJornalRevista.map((it)=>it.id):"")+']},'+
        '{"name":"pb_trabalho_evento","id": ['+ (stateItens.sizePBTrabalhosEvento.length!==0 ? stateItens.sizePBTrabalhosEvento.map((it)=>it.id):"")+']},'+
        '{"name":"ap_conselho_comissao_consultoria","id": ['+ (stateItens.sizeAPConselhoComissaoConsultoria.length!==0 ? stateItens.sizeAPConselhoComissaoConsultoria.map((it)=>it.id):"")+']},'+
        '{"name":"ap_direcao_administracao","id": ['+ (stateItens.sizeAPDirecaoAdministracao.length!==0 ? stateItens.sizeAPDirecaoAdministracao.map((it)=>it.id):"")+']},'+
        '{"name":"ap_pesquisa_desenvolvimento","id": ['+ (stateItens.sizeAPPesquisaDesenvolvimento.length!==0 ? stateItens.sizeAPPesquisaDesenvolvimento.map((it)=>it.id):"")+']},'+
        '{"name":"ap_vinculo","id": ['+ (stateItens.sizeAPVinculo.length!==0 ? stateItens.sizeAPVinculo.map((it)=>it.id):"")+']},'+
        '{"name":"at_projeto_pesquisa","id": ['+ (stateItens.sizeATProjetoPesquisa.length!==0 ? stateItens.sizeATProjetoPesquisa.map((it)=>it.id):"")+']},'+
        '{"name":"fat_doutorado","id": ['+ (stateItens.sizeFATDoutorado.length!==0 ? stateItens.sizeFATDoutorado.map((it)=>it.id):"")+']},'+
        '{"name":"fat_especializacao","id": ['+ (stateItens.sizeFATEspecializacao.length!==0 ? stateItens.sizeFATEspecializacao.map((it)=>it.id):"")+']},'+
        '{"name":"fat_graduacao","id": ['+ (stateItens.sizeFATGraduacao.length!==0 ? stateItens.sizeFATGraduacao.map((it)=>it.id):"")+']},'+
        '{"name":"fat_mestrado","id": ['+ (stateItens.sizeFATMestrado.length!==0 ? stateItens.sizeFATMestrado.map((it)=>it.id):"")+']},'+
        '{"name":"oa_aperfeicoamento_especializacao","id": ['+ (stateItens.sizeOAAperfeicoamentoEspecializacao.length!==0 ? stateItens.sizeOAAperfeicoamentoEspecializacao.map((it)=>it.id):"")+']},'+
        '{"name":"oa_doutorado","id": ['+ (stateItens.sizeOADoutorado.length!==0 ? stateItens.sizeOADoutorado.map((it)=>it.id):"")+']},'+
        '{"name":"oa_graduacao","id": ['+ (stateItens.sizeOAGraduacao.length!==0 ? stateItens.sizeOAGraduacao.map((it)=>it.id):"")+']},'+
        '{"name":"oa_iniciacao_cientifica","id": ['+ (stateItens.sizeOAIniciacaoCientifica.length!==0 ? stateItens.sizeOAIniciacaoCientifica.map((it)=>it.id):"")+']},'+
        '{"name":"oa_mestrado","id": ['+ (stateItens.sizeOAMestrado.length!==0 ? stateItens.sizeOAMestrado.map((it)=>it.id):"")+']},'+
        '{"name":"oa_posdoutorado","id": ['+ (stateItens.sizeOAPosDoutorado.length!==0 ? stateItens.sizeOAPosDoutorado.map((it)=>it.id):"")+']},'+
        '{"name":"part_banca_aperfeicoamento_especializacao","id": ['+ (stateItens.sizePartBancaAperfeicoamentoEspecializacao.length!==0 ? stateItens.sizePartBancaAperfeicoamentoEspecializacao.map((it)=>it.id):"")+']},'+
        '{"name":"part_banca_doutorado","id": ['+ (stateItens.sizePartBancaDoutorado.length!==0 ? stateItens.sizePartBancaDoutorado.map((it)=>it.id):"")+']},'+
        '{"name":"part_banca_exame_qualificacao","id": ['+ (stateItens.sizePartBancaExameQualificacao.length!==0 ? stateItens.sizePartBancaExameQualificacao.map((it)=>it.id):"")+']},'+
        '{"name":"part_banca_graduacao","id": ['+ (stateItens.sizePartBancaGraduacao.length!==0 ? stateItens.sizePartBancaGraduacao.map((it)=>it.id):"")+']},'+
        '{"name":"part_banca_julgadora_concurso_publico","id": ['+ (stateItens.sizePartBancaJulgadoraConcursoPublico.length!==0 ? stateItens.sizePartBancaJulgadoraConcursoPublico.map((it)=>it.id):"")+']},'+
        '{"name":"part_banca_julgadora_outra","id": ['+ (stateItens.sizePartBancaJulgadoraOutra.length!==0 ? stateItens.sizePartBancaJulgadoraOutra.map((it)=>it.id):"")+']},'+
        '{"name":"part_banca_julgadora_professor_titular","id": ['+ (stateItens.sizePartBancaJulgadoraProfessorTitular.length!==0 ? stateItens.sizePartBancaJulgadoraProfessorTitular.map((it)=>it.id):"")+']},'+
        '{"name":"part_banca_mestrado","id": ['+ (stateItens.sizePartBancaMestrado.length!==0 ? stateItens.sizePartBancaMestrado.map((it)=>it.id):"")+']},'+
        '{"name":"part_congresso","id": ['+ (stateItens.sizePartCongresso.length!==0 ? stateItens.sizePartCongresso.map((it)=>it.id):"")+']},'+
        '{"name":"part_encontro","id": ['+ (stateItens.sizePartEncontro.length!==0 ? stateItens.sizePartEncontro.map((it)=>it.id):"")+']},'+
        '{"name":"part_oficina","id": ['+ (stateItens.sizePartOficina.length!==0 ? stateItens.sizePartOficina.map((it)=>it.id):"")+']},'+
        '{"name":"part_evento_congresso_outra","id": ['+ (stateItens.sizePartOutras.length!==0 ? stateItens.sizePartOutras.map((it)=>it.id):"")+']},'+
        '{"name":"part_seminario","id": ['+ (stateItens.sizePartSeminario.length!==0 ? stateItens.sizePartSeminario.map((it)=>it.id):"")+']},'+
        '{"name":"part_simposio","id": ['+ (stateItens.sizePartSimposio.length!==0 ? stateItens.sizePartSimposio.map((it)=>it.id):"")+']},'+
        '{"name":"pt_premio_titulo","id": ['+ (stateItens.sizePTPremioTitulo.length!==0 ? stateItens.sizePTPremioTitulo.map((it)=>it.id):"")+']},'+
        '{"name":"fc_curso_curta_duracao","id": ['+ (stateItens.sizeFCCursoCurtaDuracao.length!==0 ? stateItens.sizeFCCursoCurtaDuracao.map((it)=>it.id):"")+']},'+
        '{"name":"siga_disciplina","id": ['+ (stateItens.sizeSigaDisciplina.length!==0 ? stateItens.sizeSigaDisciplina.map((it)=>it.id):"")+']},'+
        '{"name":"siga_projeto","id": ['+ (stateItens.sizeSigaProjeto.length!==0 ? stateItens.sizeSigaProjeto.map((it)=>it.id):"")+']}'+
      ']}');
  } 



/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //RETURN PAGE////////////////////////////////////////////////////////////////////////////////////////
  return (
    <Box >
      <Backdrop className={classesbackdrop.backdrop} open={!acabou} >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div style={{ marginLeft: 20, marginTop: 15 }}>
        <Navegacao atual={'Portfólio'} anteriores={[
          {
            "name": "Home",
            "url": "Portfólio"
          }
        ]} />
      </div>
      {/* <PortfolioBusca getSearch={Filtros} filterAno={filterAno} sliderMin={1989} sliderMax={2020} /> */}
     
     
     { (anoMin!==0&&anoMax!==0)&&<PortfolioBusca 
    getSearch={Filtros} 
    filterAno={filterAno} 
    sliderMin={anoMin} 
    sliderMax={anoMax} />}
     
      {/* <PortfolioBusca 
    getSearch={Filtros} 
    filterAno={filterAno} 
    sliderMin={1989} 
    sliderMax={2020} /> */}

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
              subheader={(stateItens.sizeSigaDisciplina === '' ||
                stateItens.sizeSigaProjeto === '') && <LinearProgress />}
            />
            {(
                (stateItens.sizeSigaDisciplina.length !== 0 && stateItens.sizeSigaDisciplina !== '') ||
                (stateItens.sizeSigaProjeto.length !== 0 && stateItens.sizeSigaProjeto !== '')
              ) && <div style={{ width: '90%', marginLeft: '5%', marginBottom: 20 }}>
                <SizeItem user={user} heade={'Disciplinas'} url={'disciplina'} num={stateItens.sizeSigaDisciplina} />
                <SizeItem user={user} heade={'Projetos'} url={'projeto'} num={stateItens.sizeSigaProjeto} />
              </div>}
          </Card>
        </Box>
        <Box display="flex" justifyContent="center" p={0.5} bgcolor="background.paper">
          <Card style={{ width: '90%'}}>
            <CardHeader
              title={"Portfólio Lattes"/*<Button style={{ margin: 15, width: 200 }} color="primary" disableElevation onClick={() => href(`/portfolio/lattes/${user.user_name}`)} >Abrir Todos</Button>*/}
              subheader={(
                stateItens.sizePBArtigoPublicado === '' ||
                stateItens.sizePBCapituloLivroPublicado === '' ||
                stateItens.sizePBLivroPublicadoOrganizado === '' ||
                stateItens.sizePBTextoJornalRevista === '' ||
                stateItens.sizePBTrabalhosEvento === '') && <LinearProgress />}
            />
            {(
              (stateItens.sizePBArtigoPublicado.length !== 0 && stateItens.sizePBArtigoPublicado !== []) ||
              (stateItens.sizePBCapituloLivroPublicado.length !== 0 && stateItens.sizePBCapituloLivroPublicado !== []) ||
              (stateItens.sizePBLivroPublicadoOrganizado.length !== 0 && stateItens.sizePBLivroPublicadoOrganizado !== []) ||
              (stateItens.sizePBTextoJornalRevista.length !== 0 && stateItens.sizePBTextoJornalRevista !== []) ||
              (stateItens.sizePBTrabalhosEvento.length !== 0 && stateItens.sizePBTrabalhosEvento !== [])
            ) &&
              <Card style={{ width: '90%', marginLeft: '5%', marginBottom: 20 }}>
                <CardHeader title="Produção Bibliográfica" />
                <SizeItem user={user} heade={'Artigos Publicados'} url={'PBArtigoPublicado'} num={stateItens.sizePBArtigoPublicado} />
                <SizeItem user={user} heade={'Capítulos de Livros Publicados'} url={'PBCapituloLivroPublicado'} num={stateItens.sizePBCapituloLivroPublicado} />
                <SizeItem user={user} heade={'Livros Publicados e Organizados'} url={'PBLivroPublicadoOrganizado'} num={stateItens.sizePBLivroPublicadoOrganizado} />
                <SizeItem user={user} heade={'Textos Jornais e Revistas'} url={'PBTextoJornalRevista'} num={stateItens.sizePBTextoJornalRevista} />
                <SizeItem user={user} heade={'Trabalhos em Eventos'} url={'PBTrabalhosEvento'} num={stateItens.sizePBTrabalhosEvento} />

              </Card>}
            {(
              (stateItens.sizeOAIniciacaoCientifica === '0' && stateItens.sizeOAIniciacaoCientifica === '') ||
              (stateItens.sizeOAGraduacao === '0' && stateItens.sizeOAGraduacao === '') ||
              (stateItens.sizeOAMestrado === '0' && stateItens.sizeOAMestrado === '') ||
              (stateItens.sizeOADoutorado === '0' && stateItens.sizeOADoutorado === '') ||
              (stateItens.sizeOAPosDoutorado === '0' && stateItens.sizeOAPosDoutorado === '') ||
              (stateItens.sizeOAAperfeicoamentoEspecializacao === '0' && stateItens.sizeOAAperfeicoamentoEspecializacao === '')
            ) &&
              <Card style={{ width: '90%', marginLeft: '5%', marginBottom: 20 }}>
                <CardHeader title="Orientações em Andamento" />
                <SizeItem user={user} heade={'Orientações em Andamendo de Iniciação Cientifica'} url={'OAIniciacaoCientifica'} num={stateItens.sizeOAIniciacaoCientifica} />
                <SizeItem user={user} heade={'Orientações em Andamendo de Mestrado'} url={'OAMestrado'} num={stateItens.sizeOAMestrado} />
                <SizeItem user={user} heade={'Orientações em Andamendo de Graduação'} url={'OAGraduacao'} num={stateItens.sizeOAGraduacao} />
                <SizeItem user={user} heade={'Orientações em Andamendo de Doutorado'} url={'OADoutorado'} num={stateItens.sizeOADoutorado} />
                <SizeItem user={user} heade={'Orientações em Andamendo de Pós-doutorado'} url={'OAPosDoutorado'} num={stateItens.sizeOAPosDoutorado} />
                <SizeItem user={user} heade={'Orientações em Andamendo de Aperfeiçoamento e Especialização'} url={'OAAperfeicoamentoEspecializacao'} num={stateItens.sizeOAAperfeicoamentoEspecializacao} />
              </Card>}
            {(
              (stateItens.sizeFATGraduacao.length !== 0 && stateItens.sizeFATGraduacao !== '') ||
              (stateItens.sizeFATDoutorado.length !== 0 && stateItens.sizeFATDoutorado !== '') ||
              (stateItens.sizeFATMestrado.length !== 0 && stateItens.sizeFATMestrado !== '') ||
              (stateItens.sizeFATEspecializacao.length !== 0 && stateItens.sizeFATEspecializacao !== '')
            )
              &&
              <Card style={{ width: '90%', marginLeft: '5%', marginBottom: 20 }}>
                <CardHeader title="Formação Acadêmica Titulação" />



                <SizeItem user={user} heade={'Graduação'} url={'FATGraduacao'} num={stateItens.sizeFATGraduacao} />
                <SizeItem user={user} heade={'Mestrado'} url={'FATMestrado'} num={stateItens.sizeFATMestrado} />
                <SizeItem user={user} heade={'Doutorado'} url={'FATDoutorado'} num={stateItens.sizeFATDoutorado} />
                <SizeItem user={user} heade={'Especialização'} url={'FATEspecializacao'} num={stateItens.sizeFATEspecializacao} />


              </Card>}

            {(
              (stateItens.sizeAPConselhoComissaoConsultoria.length !== 0 && stateItens.sizeAPConselhoComissaoConsultoria !== '') ||
              (stateItens.sizeAPDirecaoAdministracao.length !== 0 && stateItens.sizeAPDirecaoAdministracao !== '') ||
              (stateItens.sizeAPPesquisaDesenvolvimento.length !== 0 && stateItens.sizeAPPesquisaDesenvolvimento !== '') ||
              (stateItens.sizeATProjetoPesquisa.length !== 0 && stateItens.sizeATProjetoPesquisa !== '') ||
              (stateItens.sizeAPVinculo.length !== 0 && stateItens.sizeAPVinculo !== ''))

              &&

              <Card style={{ width: '90%', marginLeft: '5%', marginBottom: 20 }}>
                <CardHeader title="Produção Bibliográfica" />

                <SizeItem user={user} heade={'Conselho Comissão Consultoria'} url={'APConselhoComissaoConsultoria'} num={stateItens.sizeAPConselhoComissaoConsultoria} />
                <SizeItem user={user} heade={'Direção Administração'} url={'APDirecaoAdministracao'} num={stateItens.sizeAPDirecaoAdministracao} />
                <SizeItem user={user} heade={'Pesquisa e Desenvolvimento'} url={'APPesquisaDesenvolvimento'} num={stateItens.sizeAPPesquisaDesenvolvimento} />
                <SizeItem user={user} heade={'Vínculo'} url={'APVinculo'} num={stateItens.sizeAPVinculo} />
                <SizeItem user={user} heade={'Projeto Pesquisa'} url={'ATProjetoPesquisa'} num={stateItens.sizeATProjetoPesquisa} />


              </Card>}
            {(
              (stateItens.sizePartBancaGraduacao.length !== 0 && stateItens.sizePartBancaGraduacao !== '') ||
              (stateItens.sizePartBancaMestrado.length !== 0 && stateItens.sizePartBancaMestrado !== '') ||
              (stateItens.sizePartBancaDoutorado.length !== 0 && stateItens.sizePartBancaDoutorado !== '') ||
              (stateItens.sizePartBancaAperfeicoamentoEspecializacao.length !== 0 && stateItens.sizePartBancaAperfeicoamentoEspecializacao !== '') ||
              (stateItens.sizePartBancaExameQualificacao.length !== 0 && stateItens.sizePartBancaExameQualificacao !== '') ||
              (stateItens.sizePartBancaJulgadoraConcursoPublico.length !== 0 && stateItens.sizePartBancaJulgadoraConcursoPublico !== '') ||
              (stateItens.sizePartBancaJulgadoraProfessorTitular.length !== 0 && stateItens.sizePartBancaJulgadoraProfessorTitular !== '') ||
              (stateItens.sizePartBancaJulgadoraOutra.length !== 0 && stateItens.sizePartBancaJulgadoraOutra !== '')
            )

              &&
              <Card style={{ width: '90%', marginLeft: '5%', marginBottom: 20 }}>
                <CardHeader title="Participacão em Banca" />


                <SizeItem user={user} heade={'Banca Julgadora de Graduação'} url={'PartBancaGraduacao'} num={stateItens.sizePartBancaGraduacao} />
                <SizeItem user={user} heade={'Banca Julgadora de Mestrado'} url={'PartBancaMestrado'} num={stateItens.sizePartBancaMestrado} />
                <SizeItem user={user} heade={'Banca Julgadora de Doutorado'} url={'PartBancaDoutorado'} num={stateItens.sizePartBancaDoutorado} />
                <SizeItem user={user} heade={'Banca Julgadora de Aperfeiçoamento Especialização'} url={'PartBancaAperfeicoamentoEspecializacao'} num={stateItens.sizePartBancaAperfeicoamentoEspecializacao} />
                <SizeItem user={user} heade={'Banca Julgadora de Banca de Exame Qualificação'} url={'PartBancaExameQualificacao'} num={stateItens.sizePartBancaExameQualificacao} />
                <SizeItem user={user} heade={'Banca Julgadora de Professor Titular'} url={'PartBancaJulgadoraProfessorTitular'} num={stateItens.sizePartBancaJulgadoraProfessorTitular} />
                <SizeItem user={user} heade={'Banca Julgadora de Concurso Publico'} url={'PartBancaJulgadoraConcursoPublico'} num={stateItens.sizePartBancaJulgadoraConcursoPublico} />
                <SizeItem user={user} heade={'Banca Julgadora Outra'} url={'PartBancaJulgadoraOutra'} num={stateItens.sizePartBancaJulgadoraOutra} />


              </Card>}
            {(
              (stateItens.sizePartEncontro.length !== 0 && stateItens.sizePartEncontro !== '') ||
              (stateItens.sizePartCongresso.length !== 0 && stateItens.sizePartCongresso !== '') ||
              (stateItens.sizePartOficina.length !== 0 && stateItens.sizePartOficina !== '') ||
              (stateItens.sizePartOutras.length !== 0 && stateItens.sizePartOutras !== '') ||
              (stateItens.sizePartSeminario.length !== 0 && stateItens.sizePartSeminario !== '') ||
              (stateItens.sizePartSimposio.length !== 0 && stateItens.sizePartSimposio !== '')
            )
              &&

              <Card style={{ width: '90%', marginLeft: '5%', marginBottom: 20 }}>
                <CardHeader title="Participacão em Eventos Congressos" />


                <SizeItem user={user} heade={'Congresso'} url={'PartCongresso'} num={stateItens.sizePartCongresso} />
                <SizeItem user={user} heade={'Encontro'} url={'PartEncontro'} num={stateItens.sizePartEncontro} />
                <SizeItem user={user} heade={'Oficina'} url={'PartOficina'} num={stateItens.sizePartOficina} />
                <SizeItem user={user} heade={'Seminário'} url={'PartSeminario'} num={stateItens.sizePartSeminario} />
                <SizeItem user={user} heade={'Simpósio'} url={'PartSimposio'} num={stateItens.sizePartSimposio} />
                <SizeItem user={user} heade={'Outras'} url={'PartOutras'} num={stateItens.sizePartOutras} />


              </Card>}

            {((stateItens.sizeFCCursoCurtaDuracao.length !== 0 && stateItens.sizeFCCursoCurtaDuracao !== '')) &&

              <Card style={{ width: '90%', marginLeft: '5%', marginBottom: 20 }}>
                <CardHeader title="Cursos" />
                <SizeItem user={user} heade={'Cursos de Curta Duração'} url={'FCCursoCurtaDuracao'} num={stateItens.sizeFCCursoCurtaDuracao} />
              </Card>}

            {((stateItens.sizePTPremioTitulo.length !== 0 && stateItens.sizePTPremioTitulo !== '')) &&

              <Card style={{ width: '90%', marginLeft: '5%', marginBottom: 20 }}>
                <CardHeader title="Prêmios" />

                <SizeItem user={user} heade={'Prêmios Titulos'} url={'PTPremioTitulo'} num={stateItens.sizePTPremioTitulo} />

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


const dates=(anoSelect)=>new Promise((resolve, reject) => {
  var date = anoSelect[1];
  const dates = [];
  while(date >= anoSelect[0]) {
    dates.push(String(date));
    date = date - 1;
  }
  resolve(dates) ;
});
