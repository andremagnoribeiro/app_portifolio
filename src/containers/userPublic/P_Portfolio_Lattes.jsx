import React, { useEffect, useState } from 'react'



import { emphasize, withStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';

import Chip from '@material-ui/core/Chip';

import { Search } from './components/Search';
import {
  pb_artigo_publicado,
  pb_capitulo_livro_publicado_organizado,
  pb_livro_publicado_organizado,
  pb_texto_jornal_revista,
  pb_trabalho_evento,
  getUserId
} from "../../api/serverAPI";
import { CapituloLivroPublicadoOrganizado } from "./components/itens/CapituloLivroPublicadoOrganizado";
import { ArtigoPublicado } from "./components/itens/ArtigoPublicado";
import { LivroPublicadoOrganizado } from "./components/itens/LivroPublicadoOrganizado";
import { TextoJornalRevista } from "./components/itens/TextoJornalRevista";
import { TrabalhoEvento } from "./components/itens/TrabalhoEvento";
import { Resumo } from "./Resumo";

//

export const P_Portfolio_Lattes = (props) => {



  const user = props.match.params.user;
  
  const [userInfo, setUserInfo] = useState([]);

  const [artigoPublicado_T, setArtigoPublicado_T] = useState([]);
  const [capituloLivroPublicadoOrganizado_T, setCapituloLivroPublicadoOrganizado_T] = useState([]);
  const [livroPublicadoOrganizado_T, setLivroPublicadoOrganizado_T] = useState([]);
  const [textoJornalRevista_T, setTextoJornalRevista_T] = useState([]);
  const [trabalhoEvento_T, setTrabalhoEvento_T] = useState([]);

  const [artigoPublicado, setArtigoPublicado] = useState([]);
  const [capituloLivroPublicadoOrganizado, setCapituloLivroPublicadoOrganizado] = useState([]);
  const [livroPublicadoOrganizado, setLivroPublicadoOrganizado] = useState([]);
  const [textoJornalRevista, setTextoJornalRevista] = useState([]);
  const [trabalhoEvento, setTrabalhoEvento] = useState([]);

  const [artigoPublicado_Q, setArtigoPublicado_Q] = useState(-1);
  const [capituloLivroPublicadoOrganizado_Q, setCapituloLivroPublicadoOrganizado_Q] = useState(-1);
  const [livroPublicadoOrganizado_Q, setLivroPublicadoOrganizado_Q] = useState(-1);
  const [trabalhoEvento_Q, setTrabalhoEvento_Q] = useState(-1);
  const [textoJornalRevista_Q, setTextoJornalRevista_Q] = useState(-1);

  /*
   const [livroPublicadoOrganizado, setLivroPublicadoOrganizado] = useState([]);
 
  */


  const [stringSearch, setStringSearch] = useState("");
  const [filtroSearch, setFiltroSearch] = useState("");
  const [anoFilter, setAnoFilter] = useState([]);
  const [update, setUpdate] = useState("");
  const [tipo, setTipo] = useState("");

  ////////////////////////////////////////////////////////////////////




  useEffect(() => {
    getUserId(user).then(data=>setUserInfo(data));
    pb_artigo_publicado(user).then(data => {
      setArtigoPublicado_Q(data.length);
      setArtigoPublicado(data);
      setArtigoPublicado_T(true);
    });
    pb_capitulo_livro_publicado_organizado(user).then(data => {
      setCapituloLivroPublicadoOrganizado_Q(data.length);
      setCapituloLivroPublicadoOrganizado(data);
      setCapituloLivroPublicadoOrganizado_T(true);
    });
    pb_livro_publicado_organizado(user).then(data => {
      setLivroPublicadoOrganizado_Q(data.length);
      setLivroPublicadoOrganizado(data);
      setLivroPublicadoOrganizado_T(true);
    });
    pb_texto_jornal_revista(user).then(data => {
      setTextoJornalRevista_Q(data.length);
      setTextoJornalRevista(data);
      setTextoJornalRevista_T(true);
    });
    pb_trabalho_evento(user).then(data => {
      setTrabalhoEvento_Q(data.length);
      setTrabalhoEvento(data);
      setTrabalhoEvento_T(true);
    });
    /*pb_livro_publicado_organizado(user)
    .then(data => setLivroPublicadoOrganizado(data));
    */

    setAnoFilter(arrayDate(2020, 2010))


  }, [update, user]);


  const arrayDate = (ini, fim) => {
    var date = ini;
    const dates = [];
    while (date >= fim) {
      dates.push(String(date));
      date = date - 1;
    }
    return dates;
  }


  const getSearch = (busca, anoInicio, anoFinal, tipo_) => {

    setStringSearch("");
    let stringsearch = "";

    if (tipo_) {
      stringsearch += " / " + tipo_;
      setTipo(tipo_);
    }
    if (busca) {
      stringsearch += " / " + busca;
      setFiltroSearch(busca);
    }

    var date = new Date();
    if (anoInicio) {
      if (!anoFinal) {
        stringsearch += " / ";
        stringsearch += "(" + anoInicio + " - " + date.getFullYear() + ")";
        setAnoFilter(arrayDate(date.getFullYear(), anoInicio));
      } else {
        stringsearch += " / ";
        stringsearch += "(" + anoInicio + " - " + anoFinal + ")";
        setAnoFilter(arrayDate(anoFinal, anoInicio));
      }
    }
    setStringSearch(stringsearch)
  };


  //aplicando os filtros
  const artigosPublicados = (i) => artigoPublicado.map(function (item) {

    if ((new RegExp(filtroSearch, "i")).test(JSON.stringify(item))) {
      if (item.ano_do_artigo === i) {

        return <ArtigoPublicado key={item.id} {...item} />
      }
    } return null;
  })
  const capitulosLivrosPublicadosOrganizados = (i) => capituloLivroPublicadoOrganizado.map(function (item) {
    if ((new RegExp(filtroSearch, "i")).test(JSON.stringify(item))) {

      if (item.ano === i) {

        return <CapituloLivroPublicadoOrganizado key={item.id} {...item} />
      }
    } return null;
  })

  const livroPublicadoOrganizados = (i) => livroPublicadoOrganizado.map(function (item) {


    if ((new RegExp(filtroSearch, "i")).test(JSON.stringify(item))) {
      if (item.ano === i) {
        return <LivroPublicadoOrganizado key={item.id} {...item} />
      }
    } return null;
  })


  const textoJornalRevistas = (i) => textoJornalRevista.map(function (item) {


    if ((new RegExp(filtroSearch, "i")).test(JSON.stringify(item))) {
      if (item.ano_do_texto === i) {
        return <TextoJornalRevista key={item.id} {...item} />
      }
    } return null;
  })

  const trabalhoEventos = (i) => trabalhoEvento.map(function (item) {


    if ((new RegExp(filtroSearch, "i")).test(JSON.stringify(item))) {

      if (item.ano_de_realizacao === i) {
        return <TrabalhoEvento key={item.id} {...item} />
      }
    } return null;
  })

  /*
    const livroPublicadoOrganizados = (i) => livroPublicadoOrganizado.map(function (item) {
      if ((new RegExp(filtroSearch, "i")).test(JSON.stringify(item))) {
  
        if (item.ano === i) {
          return <LivroPublicadoOrganizado key={item.id} {...item} />
        }
      } return null;
    })
  */


  const allTipo = (i) => [
    capitulosLivrosPublicadosOrganizados(i),
    artigosPublicados(i),
    livroPublicadoOrganizados(i),
    trabalhoEventos(i),
    textoJornalRevistas(i)/*livroPublicadoOrganizados(i) */
  ]

  //   const allWorks = () => [
  //     capitulosLivrosPublicadosOrganizado,
  //     artigosPublicado,
  //     livroPublicadoOrganizado,
  //     trabalhoEvento,
  //     textoJornalRevista
  // ].filter(function (item) {
  //   if ((new RegExp(filtroSearch, "i")).test(JSON.stringify(item))) {

  //     if (item.ano_de_realizacao === i) {
  //       return true;
  //   } return true;
  // })

  const update_f = () => { setUpdate(!update) }

  const ordemAno = () => anoFilter.map((i) => {

    if (tipo !== "") {
      if (tipo === "artigoPublicado") {
        return artigosPublicados(i);
      } else if (tipo === "capituloLivroPublicadoOrganizado") {
        return capitulosLivrosPublicadosOrganizados(i);
      } else if (tipo === "livroPublicadoOrganizado") {
        return livroPublicadoOrganizados(i);
      } else if (tipo === "textoJornalRevista") {
        return textoJornalRevistas(i);
      } else if (tipo === "trabalhoEvento") {
        return trabalhoEventos(i);
      } /*else if (tipo === "capitulo_de_livros_publicado"){
        return capitulosLivrosPublicadosOrganizados(i);
      } else if (tipo === "capitulo_de_livros_publicado"){
        return capitulosLivrosPublicadosOrganizados(i);
      }*/

    } else {
      return allTipo(i);
    }

  })

  /////

  return (
    <div  >
      <CardHeader
        title={"Portfólio - " + userInfo.name}
        subheader={"Currículo Lattes CNPQ "}
      />

      <Search getSearch={getSearch} />
    

      {(artigoPublicado_T &&
        livroPublicadoOrganizado_T &&
        trabalhoEvento_T &&
        textoJornalRevista_T &&
        capituloLivroPublicadoOrganizado_T) &&
        <Resumo
          setTipo={(i) => setTipo(i)}
          artigoPublicado_Q={artigoPublicado_Q}
          capituloLivroPublicadoOrganizado_Q={capituloLivroPublicadoOrganizado_Q}
          textoJornalRevista_Q={textoJornalRevista_Q}
          trabalhoEvento_Q={trabalhoEvento_Q}
          livroPublicadoOrganizado_Q={livroPublicadoOrganizado_Q}
        />}
          {stringSearch ? <StyledBreadcrumb onClick={() => { setTipo(""); setFiltroSearch(""); setStringSearch(""); }} style={{ margin: 5 }} component="a" href="#" label={"Busca: " + stringSearch + "   (x)" }  /> : <div />}
          {tipo ? <StyledBreadcrumb onClick={() => { setTipo(""); setFiltroSearch(""); setStringSearch(""); }} style={{ margin: 5 }} component="a" href="#" label={tipo?"Busca: "+tipo + "  (x)":undefined }  /> : <div />}

      {(artigoPublicado_T &&
        livroPublicadoOrganizado_T &&
        trabalhoEvento_T &&
        textoJornalRevista_T &&
        capituloLivroPublicadoOrganizado_T) && ordemAno()}


    </div>
  );
}

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip); 