import React, { useEffect, useState } from 'react'

import { emphasize, withStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

////////////////
import { PBArtigoPublicado } from './components/itens/PBArtigoPublicado';
import { PBCapituloLivroPublicado } from './components/itens/PBCapituloLivroPublicado';
import { PBLivroPublicadoOrganizado } from './components/itens/PBLivroPublicadoOrganizado';
import { PBTextoJornalRevista } from './components/itens/PBTextoJornalRevista';
import { PBTrabalhosEvento } from './components/itens/PBTrabalhosEvento';
/*
import { APConselhoComissaoConsultoria } from './components/itens/APConselhoComissaoConsultoria';
import { APDirecaoAdministracao } from './components/itens/APDirecaoAdministracao';
import { APPesquisaDesenvolvimento } from './components/itens/APPesquisaDesenvolvimento';
import { APVinculo } from './components/itens/APVinculo';
import { ATProjetoPesquisa } from './components/itens/ATProjetoPesquisa';
import { FATDoutorado } from './components/itens/FATDoutorado';
import { FATEspecializacao } from './components/itens/FATEspecializacao';
import { FATGraduacao } from './components/itens/FATGraduacao';
import { FATMestrado } from './components/itens/FATMestrado';
import { OAAperfeicoamentoEspecializacao } from './components/itens/OAAperfeicoamentoEspecializacao';
import { OADoutorado } from './components/itens/OADoutorado';
import { OAGraduacao } from './components/itens/OAGraduacao';
import { OAIniciacaoCientifica } from './components/itens/OAIniciacaoCientifica';
import { OAMestrado } from './components/itens/OAMestrado';
import { OAPosDoutorado } from './components/itens/OAPosDoutorado';
import { PartBancaAperfeicoamentoEspecializacao } from './components/itens/PartBancaAperfeicoamentoEspecializacao';
import { PartBancaDoutorado } from './components/itens/PartBancaDoutorado';
import { PartBancaExameQualificacao } from './components/itens/PartBancaExameQualificacao';
import { PartBancaGraduacao } from './components/itens/PartBancaGraduacao';
import { PartBancaJulgadoraConcursoPublico } from './components/itens/PartBancaJulgadoraConcursoPublico';
import { PartBancaJulgadoraOutra } from './components/itens/PartBancaJulgadoraOutra';
import { PartBancaJulgadoraProfessorTitular } from './components/itens/PartBancaJulgadoraProfessorTitular';
import { PartBancaMestrado } from './components/itens/PartBancaMestrado';
import { PartCongresso } from './components/itens/PartCongresso';
import { PartEncontro } from './components/itens/PartEncontro';
import { PartOficina } from './components/itens/PartOficina';
import { PartOutras } from './components/itens/PartOutras';
import { PartSeminario } from './components/itens/PartSeminario';
import { PartSimposio } from './components/itens/PartSimposio';
import { PTPremioTitulo } from './components/itens/PTPremioTitulo';
import { FCCursoCurtaDuracao } from './components/itens/FCCursoCurtaDuracao';
*/
///////////////////////////

import { PortfolioBusca } from '../../components/PortfolioBusca'
import { getTable } from "../../api/serverAPI";
import Navegacao from "../../components/Navegacao"
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
export const L_ViewItem = (props) => {

  //userName
  const userName = props.match.params.user

  //Itens
  const [itens, setItens] = useState([]);
  const [nameItens, setNameItens] = useState([]);

  //filter
  const [filterText, setFilterText] = useState('');
  const [sliderMin, setSliderMin] = React.useState(1980);
  const [sliderMax, setSliderMax] = React.useState(2020);
  const [filterAno, setFilterAno] = useState(["2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "2000", "1999", "1998", "1997", "1996", "1995", "1994", "1993", "1992", "1991"]);

  //
  const [resultadoNaoEncotrado, setResultadoNaoEncotrado] = useState(false);

  /////////////////////////////////////////////////////////////

  useEffect(() => {
    if (props.match.params.item === 'PBArtigoPublicado') {
      setNameItens('Artigo Publicado'); getTable(userName, 'pb_artigo_publicado').then((size) => { setItens(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano_do_artigo) !== -1).map((item) => <PBArtigoPublicado key={item.id} {...item} />)); }).then(() => { setResultadoNaoEncotrado(true) });
    } else if (props.match.params.item === 'PBCapituloLivroPublicado') {
      setNameItens('Capítulo Livro Publicado'); getTable(userName, 'pb_capitulo_livro_publicado_organizado').then((size) => { setItens(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano + '' + '' + '') !== -1).map((item) => <PBCapituloLivroPublicado key={item.id} {...item} />)); }).then(() => { setResultadoNaoEncotrado(true) });
    } else if (props.match.params.item === 'PBLivroPublicadoOrganizado') {
      setNameItens('Livro Publicado Organizado'); getTable(userName, 'pb_livro_publicado_organizado').then((size) => { setItens(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano + '' + '' + '') !== -1).map((item) => <PBLivroPublicadoOrganizado key={item.id} {...item} />)); }).then(() => { setResultadoNaoEncotrado(true) });
    } else if (props.match.params.item === 'PBTextoJornalRevista') {
      setNameItens('Texto Jornal Revista'); getTable(userName, 'pb_texto_jornal_revista').then((size) => { setItens(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano + '' + '' + '') !== -1).map((item) => <PBTextoJornalRevista key={item.id} {...item} />)); }).then(() => { setResultadoNaoEncotrado(true) });
    } else if (props.match.params.item === 'PBTrabalhosEvento') {
      setNameItens('Trabalho em Evento'); getTable(userName, 'pb_trabalho_evento').then((size) => { setItens(size.filter((item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter((item) => filterAno.indexOf(item.ano + '' + '' + '') !== -1).map((item) => <PBTrabalhosEvento key={item.id} {...item} />)); }).then(() => { setResultadoNaoEncotrado(true) });
       
      
      /*
      } else if (props.match.params.item === 'APConselhoComissaoConsultoria') { setNameItens('Conselho Comissão Consultoria'); getTable(userName, 'ap_conselho_comissao_consultoria').then((size) => { setItens(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano+''+''+'' ) !== -1) .map((item) => <APConselhoComissaoConsultoria key={item.id} {...item} />)); }) .then(() => { setResultadoNaoEncotrado(true) });
      } else if (props.match.params.item === 'APDirecaoAdministracao') { setNameItens('Direção Administração'); getTable(userName, 'ap_direcao_administracao').then((size) => { setItens(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano+''+''+'' ) !== -1) .map((item) => <APDirecaoAdministracao key={item.id} {...item} />)); }) .then(() => { setResultadoNaoEncotrado(true) });
      } else if (props.match.params.item === 'APPesquisaDesenvolvimento') { setNameItens('Pesquisa e Desenvolvimento'); getTable(userName, 'ap_pesquisa_desenvolvimento').then((size) => { setItens(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano+''+''+'' ) !== -1) .map((item) => <APPesquisaDesenvolvimento key={item.id} {...item} />)); }) .then(() => { setResultadoNaoEncotrado(true) });
      } else if (props.match.params.item === 'APVinculo') { setNameItens('Vinculo'); getTable(userName, 'ap_vinculo').then((size) => { setItens(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano+''+''+'' ) !== -1) .map((item) => <APVinculo key={item.id} {...item} />)); }) .then(() => { setResultadoNaoEncotrado(true) });
      } else if (props.match.params.item === 'ATProjetoPesquisa') { setNameItens('Projeto Pesquisa'); getTable(userName, 'at_projeto_pesquisa').then((size) => { setItens(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano+''+''+'' ) !== -1) .map((item) => <ATProjetoPesquisa key={item.id} {...item} />)); }) .then(() => { setResultadoNaoEncotrado(true) });
      } else if (props.match.params.item === 'FATDoutorado') { setNameItens('Doutorado'); getTable(userName, 'fat_doutorado').then((size) => { setItens(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano+''+''+'' ) !== -1) .map((item) => <FATDoutorado key={item.id} {...item} />)); }) .then(() => { setResultadoNaoEncotrado(true) });
      } else if (props.match.params.item === 'FATEspecializacao') { setNameItens('Especialização'); getTable(userName, 'fat_especializacao').then((size) => { setItens(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano+''+''+'' ) !== -1) .map((item) => <FATEspecializacao key={item.id} {...item} />)); }) .then(() => { setResultadoNaoEncotrado(true) });
      } else if (props.match.params.item === 'FATGraduacao') { setNameItens('Graduação'); getTable(userName, 'fat_graduacao').then((size) => { setItens(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano+''+''+'' ) !== -1) .map((item) => <FATGraduacao key={item.id} {...item} />)); }) .then(() => { setResultadoNaoEncotrado(true) });
      } else if (props.match.params.item === 'FATMestrado') { setNameItens('Mestrado'); getTable(userName, 'fat_mestrado').then((size) => { setItens(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano+''+''+'' ) !== -1) .map((item) => <FATMestrado key={item.id} {...item} />)); }) .then(() => { setResultadoNaoEncotrado(true) });
      } else if (props.match.params.item === 'OAAperfeicoamentoEspecializacao') { setNameItens('Aperfeiçoamento e Especialização'); getTable(userName, 'oa_aperfeicoamento_especializacao').then((size) => { setItens(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano+''+''+'' ) !== -1) .map((item) => <OAAperfeicoamentoEspecializacao key={item.id} {...item} />)); }) .then(() => { setResultadoNaoEncotrado(true) });
      } else if (props.match.params.item === 'OADoutorado') { setNameItens('Doutorado'); getTable(userName, 'oa_doutorado').then((size) => { setItens(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano+''+''+'' ) !== -1) .map((item) => <OADoutorado key={item.id} {...item} />)); }) .then(() => { setResultadoNaoEncotrado(true) });
      } else if (props.match.params.item === 'OAGraduacao') { setNameItens('Graduação'); getTable(userName, 'oa_graduacao').then((size) => { setItens(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano+''+''+'' ) !== -1) .map((item) => <OAGraduacao key={item.id} {...item} />)); }) .then(() => { setResultadoNaoEncotrado(true) });
      } else if (props.match.params.item === 'OAIniciacaoCientifica') { setNameItens('Iniciação Cientifica'); getTable(userName, 'oa_iniciacao_cientifica').then((size) => { setItens(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano+''+''+'' ) !== -1) .map((item) => <OAIniciacaoCientifica key={item.id} {...item} />)); }) .then(() => { setResultadoNaoEncotrado(true) });
      } else if (props.match.params.item === 'OAMestrado') { setNameItens('Mestrado'); getTable(userName, 'oa_mestrado').then((size) => { setItens(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano+''+''+'' ) !== -1) .map((item) => <OAMestrado key={item.id} {...item} />)); }) .then(() => { setResultadoNaoEncotrado(true) });
      } else if (props.match.params.item === 'OAPosDoutorado') { setNameItens('Pós-doutorado'); getTable(userName, 'oa_posdoutorado').then((size) => { setItens(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano+''+''+'' ) !== -1) .map((item) => <OAPosDoutorado key={item.id} {...item} />)); }) .then(() => { setResultadoNaoEncotrado(true) });
      } else if (props.match.params.item === 'PartBancaAperfeicoamentoEspecializacao') { setNameItens('Participação em Banca de Aperfeiçoamento Especialização'); getTable(userName, 'part_banca_aperfeicoamento_especializacao').then((size) => { setItens(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano+''+''+'' ) !== -1) .map((item) => <PartBancaAperfeicoamentoEspecializacao key={item.id} {...item} />)); }) .then(() => { setResultadoNaoEncotrado(true) });
      } else if (props.match.params.item === 'PartBancaDoutorado') { setNameItens('Participação em Banca de Doutorado'); getTable(userName, 'part_banca_doutorado').then((size) => { setItens(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano+''+''+'' ) !== -1) .map((item) => <PartBancaDoutorado key={item.id} {...item} />)); }) .then(() => { setResultadoNaoEncotrado(true) });
      } else if (props.match.params.item === 'PartBancaExameQualificacao') { setNameItens('Participação em Banca de Exame Qualificação'); getTable(userName, 'part_banca_exame_qualificacao').then((size) => { setItens(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano+''+''+'' ) !== -1) .map((item) => <PartBancaExameQualificacao key={item.id} {...item} />)); }) .then(() => { setResultadoNaoEncotrado(true) });
      } else if (props.match.params.item === 'PartBancaGraduacao') { setNameItens('Participação em Banca de Graduação'); getTable(userName, 'part_banca_graduacao').then((size) => { setItens(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano+''+''+'' ) !== -1) .map((item) => <PartBancaGraduacao key={item.id} {...item} />)); }) .then(() => { setResultadoNaoEncotrado(true) });
      } else if (props.match.params.item === 'PartBancaJulgadoraConcursoPublico') { setNameItens('Participação em Banca Julgadora de Concurso Publico'); getTable(userName, 'part_banca_julgadora_concurso_publico').then((size) => { setItens(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano+''+''+'' ) !== -1) .map((item) => <PartBancaJulgadoraConcursoPublico key={item.id} {...item} />)); }) .then(() => { setResultadoNaoEncotrado(true) });
      } else if (props.match.params.item === 'PartBancaJulgadoraOutra') { setNameItens('Participação em Banca Julgadora Outra'); getTable(userName, 'part_banca_julgadora_outra').then((size) => { setItens(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano+''+''+'' ) !== -1) .map((item) => <PartBancaJulgadoraOutra key={item.id} {...item} />)); }) .then(() => { setResultadoNaoEncotrado(true) });
      } else if (props.match.params.item === 'PartBancaJulgadoraProfessorTitular') { setNameItens('Participação em Banca Julgadora de Professor Titular'); getTable(userName, 'part_banca_julgadora_professor_titular').then((size) => { setItens(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano+''+''+'' ) !== -1) .map((item) => <PartBancaJulgadoraProfessorTitular key={item.id} {...item} />)); }) .then(() => { setResultadoNaoEncotrado(true) });
      } else if (props.match.params.item === 'PartBancaMestrado') { setNameItens('Participação em Banca de Mestrado'); getTable(userName, 'part_banca_mestrado').then((size) => { setItens(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano+''+''+'' ) !== -1) .map((item) => <PartBancaMestrado key={item.id} {...item} />)); }) .then(() => { setResultadoNaoEncotrado(true) });
      } else if (props.match.params.item === 'PartCongresso') { setNameItens('Participação em Congresso'); getTable(userName, 'part_congresso').then((size) => { setItens(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano+''+''+'' ) !== -1) .map((item) => <PartCongresso key={item.id} {...item} />)); }) .then(() => { setResultadoNaoEncotrado(true) });
      } else if (props.match.params.item === 'PartEncontro') { setNameItens('Participação em Encontro'); getTable(userName, 'part_encontro').then((size) => { setItens(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano+''+''+'' ) !== -1) .map((item) => <PartEncontro key={item.id} {...item} />)); }) .then(() => { setResultadoNaoEncotrado(true) });
      } else if (props.match.params.item === 'PartOficina') { setNameItens('Participação em Oficina'); getTable(userName, 'part_evento_congresso_outra').then((size) => { setItens(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano+''+''+'' ) !== -1) .map((item) => <PartOficina key={item.id} {...item} />)); }) .then(() => { setResultadoNaoEncotrado(true) });
      } else if (props.match.params.item === 'PartOutras') { setNameItens('Participação em Outras'); getTable(userName, 'part_oficina').then((size) => { setItens(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano+''+''+'' ) !== -1) .map((item) => <PartOutras key={item.id} {...item} />)); }) .then(() => { setResultadoNaoEncotrado(true) });
      } else if (props.match.params.item === 'PartSeminario') { setNameItens('Participação em Seminário'); getTable(userName, 'part_seminario').then((size) => { setItens(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano+''+''+'' ) !== -1) .map((item) => <PartSeminario key={item.id} {...item} />)); }) .then(() => { setResultadoNaoEncotrado(true) });
      } else if (props.match.params.item === 'PartSimposio') { setNameItens('Participação em Simpósio'); getTable(userName, 'part_simposio').then((size) => { setItens(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano+''+''+'' ) !== -1) .map((item) => <PartSimposio key={item.id} {...item} />)); }) .then(() => { setResultadoNaoEncotrado(true) });
      } else if (props.match.params.item === 'PTPremioTitulo') { setNameItens('Prêmio Titulo'); getTable(userName, 'pt_premio_titulo').then((size) => { setItens(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano+''+''+'' ) !== -1) .map((item) => <PTPremioTitulo key={item.id} {...item} />)); }) .then(() => { setResultadoNaoEncotrado(true) });
      } else if (props.match.params.item === 'FCCursoCurtaDuracao') { setNameItens('Curso Curta Duração'); getTable(userName, 'fc_curso_curta_duracao').then((size) => { setItens(size.filter( (item) => (new RegExp(filterText, 'i')).test(JSON.stringify(item))).filter( (item) => filterAno.indexOf(item.ano+''+''+'' ) !== -1) .map((item) => <FCCursoCurtaDuracao key={item.id} {...item} />)); }) .then(() => { setResultadoNaoEncotrado(true) });
      */
  
    }
  }, [filterAno, filterText])

  //////////////////////////////////////

  const Filtros = (TextBusca, anoSelect) => {//formato= (palavra, [2012,2020])
    setResultadoNaoEncotrado(false);
    setItens([]);
    setFilterText(TextBusca);
    var date = anoSelect[1];
    const dates = [];
    while (date >= anoSelect[0]) {
      dates.push(String(date));
      date = date - 1;
    }
    setFilterAno(dates);
    console.log("filtrosano", dates)
    console.log("filtrosXXX=", TextBusca, anoSelect)

  }



  ////////////////////////////
  ////////////////////////////
  return (
    <Box justifyContent="center"  >
      <div style={{ marginLeft: 20, marginTop: 15 }}>
        <Navegacao atual={nameItens} anteriores={[
          {
            "name": "Home",
            "url": "/ufjfportfolioprofissional/build"
          }
          ,
          {
            "name": "Portfólio",
            "url": `/ufjfportfolioprofissional/build/portfolio/${userName}`
          }
        ]} />
      </div>
      <PortfolioBusca getSearch={Filtros} filterAno={filterAno} sliderMin={sliderMin} sliderMax={sliderMax} />

      {!resultadoNaoEncotrado && <CircularProgress style={{ marginLeft: '50%', marginTop: 30 }} />}
      {(itens.length === 0 && resultadoNaoEncotrado) && <p style={{ marginLeft: 20 }}>{itens.length} Nenhum Resultado encontrado </p>}
      {itens.length !== 0 && <p style={{ marginLeft: 20 }}>{itens.length} Resultados </p>}
      {itens.length !== 0 && itens}

    </Box>
  );
}

