import React, { useState, useEffect } from 'react'


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


//Components
import { PortfolioBusca } from './components/PortfolioBusca'
import { SizeItem } from "./components/SizeItem"
import Navegacao from "./components/Navegacao"
//API
import { api_getTable ,api_getUserId} from "../../../api/serverAPI";

const useStylesback = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

//Classe
export const Page_Public_Portfolio = (props) => {
  const classesbackdrop = useStylesback();

  const userName = props.match.params.user
  
 
  const [user, setUser] = useState([]);

  const [sizePBArtigoPublicado, setSizePBArtigoPublicado] = useState([]);
  const [sizePBCapituloLivroPublicado, setSizePBCapituloLivroPublicado] = useState([]);
  const [sizePBLivroPublicadoOrganizado, setSizePBLivroPublicadoOrganizado] = useState([]);
  const [sizePBTextoJornalRevista, setSizePBTextoJornalRevista] = useState([]);
  const [sizePBTrabalhosEvento, setSizePBTrabalhosEvento] = useState([]);
  const [sizeAPConselhoComissaoConsultoria, setSizeAPConselhoComissaoConsultoria] = useState([]);
  const [sizeAPDirecaoAdministracao, setSizeAPDirecaoAdministracao] = useState([]);
  const [sizeAPPesquisaDesenvolvimento, setSizeAPPesquisaDesenvolvimento] = useState([]);
  const [sizeAPVinculo, setSizeAPVinculo] = useState([]);
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
  const [sizeATProjetoPesquisa, setSizeATProjetoPesquisa] = useState([]);
  const [sizeFCCursoCurtaDuracao, setSizeFCCursoCurtaDuracao] = useState([]);
  const [sizeSigaDisciplina, setSizeSigaDisciplina] = useState([]);
  const [sizeSigaProjeto, setSizeSigaProjeto] = useState([]);


  const [filterText, setFilterText] = useState('');
  const [filterAno, setFilterAno] = useState(["2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "2000", "1999", "1998", "1997", "1996", "1995", "1994", "1993", "1992", "1991"]);


  const [mobile, setMobile] = useState(false);

  const classes = useStyles();

  const divMax_ = mobile ? divMaxMobile() : divMax();
  



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


  const [acabou, setAcabou] = useState();
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////


  useEffect(() => {
    api_getUserId(userName).then(data => setUser(data));



   api_getTable(userName, 'siga_disciplina').then((size) => { setSizeSigaDisciplina(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ANO) !== -1)); }).then(() => { setAcabouSigaDisciplina(true) });
   api_getTable(userName, 'siga_projeto').then((size) => { setSizeSigaProjeto(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ANO) !== -1)); }).then(() => { setAcabouSigaProjeto(true) });
   api_getTable(userName, 'pb_artigo_publicado').then((size) => { setSizePBArtigoPublicado(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano_do_artigo) !== -1)); }).then(() => { setAcabouPBArtigoPublicado(true) });
   api_getTable(userName, 'pb_capitulo_livro_publicado_organizado').then((size) => { setSizePBCapituloLivroPublicado(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano) !== -1)); }).then(() => { setAcabouPBCapituloLivroPublicado(true) });
   api_getTable(userName, 'pb_livro_publicado_organizado').then((size) => { setSizePBLivroPublicadoOrganizado(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano) !== -1)); }).then(() => { setAcabouPBLivroPublicadoOrganizado(true) });
   api_getTable(userName, 'pb_texto_jornal_revista').then((size) => { setSizePBTextoJornalRevista(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano_do_texto) !== -1)); }).then(() => { setAcabouPBTextoJornalRevista(true) });
   api_getTable(userName, 'pb_trabalho_evento').then((size) => { setSizePBTrabalhosEvento(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano_do_trabalho) !== -1)); }).then(() => { setAcabouPBTrabalhosEvento(true) });
   api_getTable(userName, 'ap_conselho_comissao_consultoria').then((size) => { setSizeAPConselhoComissaoConsultoria(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano_inicio) !== -1)); }).then(() => { setAcabouAPConselhoComissaoConsultoria(true) });
   api_getTable(userName, 'ap_direcao_administracao').then((size) => { setSizeAPDirecaoAdministracao(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano_inicio) !== -1)); }).then(() => { setAcabouAPDirecaoAdministracao(true) });
   api_getTable(userName, 'ap_pesquisa_desenvolvimento').then((size) => { setSizeAPPesquisaDesenvolvimento(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano_inicio) !== -1)); }).then(() => { setAcabouAPPesquisaDesenvolvimento(true) });
   api_getTable(userName, 'ap_vinculo').then((size) => { setSizeAPVinculo(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano_inicio) !== -1)); }).then(() => { setAcabouAPVinculo(true) });
   api_getTable(userName, 'at_projeto_pesquisa').then((size) => { setSizeATProjetoPesquisa(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano_inicio) !== -1)); }).then(() => { setAcabouATProjetoPesquisa(true) });
   api_getTable(userName, 'fat_doutorado').then((size) => { setSizeFATDoutorado(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano_inicio) !== -1)); }).then(() => { setAcabouFATDoutorado(true) });
   api_getTable(userName, 'fat_especializacao').then((size) => { setSizeFATEspecializacao(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano_inicio) !== -1)); }).then(() => { setAcabouFATEspecializacao(true) });
   api_getTable(userName, 'fat_graduacao').then((size) => { setSizeFATGraduacao(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano_inicio) !== -1)); }).then(() => { setAcabouFATGraduacao(true) });
   api_getTable(userName, 'fat_mestrado').then((size) => { setSizeFATMestrado(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano_inicio) !== -1)); }).then(() => { setAcabouFATMestrado(true) });
   api_getTable(userName, 'oa_aperfeicoamento_especializacao').then((size) => { setSizeOAAperfeicoamentoEspecializacao(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano) !== -1)); }).then(() => { setAcabouOAAperfeicoamentoEspecializacao(true) });
   api_getTable(userName, 'oa_doutorado').then((size) => { setSizeOADoutorado(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano) !== -1)); }).then(() => { setAcabouOADoutorado(true) });
   api_getTable(userName, 'oa_graduacao').then((size) => { setSizeOAGraduacao(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano) !== -1)); }).then(() => { setAcabouOAGraduacao(true) });
   api_getTable(userName, 'oa_iniciacao_cientifica').then((size) => { setSizeOAIniciacaoCientifica(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano) !== -1)); }).then(() => { setAcabouOAIniciacaoCientifica(true) });
   api_getTable(userName, 'oa_mestrado').then((size) => { setSizeOAMestrado(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano) !== -1)); }).then(() => { setAcabouOAMestrado(true) });
   api_getTable(userName, 'oa_posdoutorado').then((size) => { setSizeOAPosDoutorado(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano) !== -1)); }).then(() => { setAcabouOAPosDoutorado(true) });
   api_getTable(userName, 'part_banca_aperfeicoamento_especializacao').then((size) => { setSizePartBancaAperfeicoamentoEspecializacao(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano) !== -1)); }).then(() => { setAcabouPartBancaAperfeicoamentoEspecializacao(true) });
   api_getTable(userName, 'part_banca_doutorado').then((size) => { setSizePartBancaDoutorado(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano) !== -1)); }).then(() => { setAcabouPartBancaDoutorado(true) });
   api_getTable(userName, 'part_banca_exame_qualificacao').then((size) => { setSizePartBancaExameQualificacao(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano) !== -1)); }).then(() => { setAcabouPartBancaExameQualificacao(true) });
   api_getTable(userName, 'part_banca_graduacao').then((size) => { setSizePartBancaGraduacao(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano) !== -1)); }).then(() => { setAcabouPartBancaGraduacao(true) });
   api_getTable(userName, 'part_banca_julgadora_concurso_publico').then((size) => { setSizePartBancaJulgadoraConcursoPublico(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano) !== -1)); }).then(() => { setAcabouPartBancaJulgadoraConcursoPublico(true) });
   api_getTable(userName, 'part_banca_julgadora_outra').then((size) => { setSizePartBancaJulgadoraOutra(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano) !== -1)); }).then(() => { setAcabouPartBancaJulgadoraOutra(true) });
   api_getTable(userName, 'part_banca_julgadora_professor_titular').then((size) => { setSizePartBancaJulgadoraProfessorTitular(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano) !== -1)); }).then(() => { setAcabouPartBancaJulgadoraProfessorTitular(true) });
   api_getTable(userName, 'part_banca_mestrado').then((size) => { setSizePartBancaMestrado(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano) !== -1)); }).then(() => { setAcabouPartBancaMestrado(true) });
   api_getTable(userName, 'part_congresso').then((size) => { setSizePartCongresso(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano) !== -1)); }).then(() => { setAcabouPartCongresso(true) });
   api_getTable(userName, 'part_encontro').then((size) => { setSizePartEncontro(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano) !== -1)); }).then(() => { setAcabouPartEncontro(true) });
   api_getTable(userName, 'part_evento_congresso_outra').then((size) => { setSizePartOficina(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano) !== -1)); }).then(() => { setAcabouPartOficina(true) });
   api_getTable(userName, 'part_oficina').then((size) => { setSizePartOutras(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano) !== -1)); }).then(() => { setAcabouPartOutras(true) });
   api_getTable(userName, 'part_seminario').then((size) => { setSizePartSeminario(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano) !== -1)); }).then(() => { setAcabouPartSeminario(true) });
   api_getTable(userName, 'part_simposio').then((size) => { setSizePartSimposio(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano) !== -1)); }).then(() => { setAcabouPartSimposio(true) });
   api_getTable(userName, 'pt_premio_titulo').then((size) => { setSizePTPremioTitulo(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano_da_premiacao) !== -1)); }).then(() => { setAcabouPTPremioTitulo(true) });
   api_getTable(userName, 'fc_curso_curta_duracao').then((size) => { setSizeFCCursoCurtaDuracao(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano_de_inicio) !== -1)); }).then(() => { setAcabouFCCursoCurtaDuracao(true) });
setAcabou(true);
  }, [filterAno, filterText]);

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


  const Filtros = (TextBusca, anoSelect) => {//formato= (palavra, [2012,2020])
    setAcabou(false);
    //setItens([]);
    setFilterText(TextBusca);
    var date = anoSelect[1];
    const dates = [];
    while (date >= anoSelect[0]) {
      dates.push(String(date));
      date = date - 1;
    }
    setFilterAno(dates);

  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////

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
      <PortfolioBusca getSearch={Filtros} filterAno={filterAno} sliderMin={1989} sliderMax={2020} />
      <Card key={user.name + "aaaa"} style={{ margin: 20 }}>
        <CardHeader
          avatar={<Avatar className={classes.purple}></Avatar>}
          title={user.name}
          subheader={user.email}
        />
        <Box display="flex" justifyContent="center" p={0.5} bgcolor="background.paper">

          <Card className={divMax_.root}>
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
          <Card className={divMax_.root}>
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


const divMax = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: "#9d98b3",
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
