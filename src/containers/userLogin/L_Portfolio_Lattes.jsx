import React, { useEffect, useState } from 'react'



import { emphasize, withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';



import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Chip from '@material-ui/core/Chip';

import { Search } from './components/Search';
import {
  pb_artigo_publicado,
  pb_capitulo_livro_publicado_organizado,
  pb_livro_publicado_organizado
} from "../../api/serverAPI";
import { ImportXML } from "./components/importXML/ImportXML";
import { DeleteTable } from "./components/DeleteTable"
import { CapituloLivroPublicadoOrganizado } from "./components/itens/CapituloLivroPublicadoOrganizado";
import { ArtigoPublicado } from "./components/itens/ArtigoPublicado";
import { LivroPublicadoOrganizado } from "./components/itens/LivroPublicadoOrganizado";

//

export const L_Portfolio_Lattes = (props) => {



  const user = props.match.params.user;


  const [artigoPublicado, setArtigoPublicado] = useState([]);
  const [capituloLivroPublicadoOrganizado, setCapituloLivroPublicadoOrganizado] = useState([]);
  const [livroPublicadoOrganizado, setLivroPublicadoOrganizado] = useState([]);
  /*
   const [livroPublicadoOrganizado, setLivroPublicadoOrganizado] = useState([]);
 
  */



  const [search, setSearch] = useState("");
  const [filtroSearch, setFiltroSearch] = useState("");
  const [anoFilter, setAnoFilter] = useState([]);
  const [update, setUpdate] = useState("");
  const [tipo, setTipo] = useState("");

  ////////////////////////////////////////////////////////////////////

  const [expandedImport, setExpandedImport] = useState(false);
  const [expandedDelete, setExpandedDelete] = useState(false);


  const handleExpandClickImport = () => {
    setExpandedImport(!expandedImport);
  };
  const handleExpandClickDelete = () => {
    setExpandedDelete(!expandedDelete);
  };

  useEffect(() => {
    pb_artigo_publicado(user).then(data => setArtigoPublicado(data));
    pb_capitulo_livro_publicado_organizado(user).then(dat => setCapituloLivroPublicadoOrganizado(dat));
    pb_livro_publicado_organizado(user).then(dataa => setLivroPublicadoOrganizado(dataa));
    /*pb_livro_publicado_organizado(user)
     .then(data => setLivroPublicadoOrganizado(data));
 */


    setAnoFilter(arrayDate(2020, 1950))

  }, [update,user]);


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

    setTipo(tipo_);

    setFiltroSearch(busca);


    setSearch("");
    var stringsearch = "";
    if (busca !== "") {
      stringsearch = " / " + stringsearch;
    }
    var date = new Date();
    if (anoInicio) {
      if (!anoFinal) {
        stringsearch += "";
        stringsearch += "(" + anoInicio + " - " + date.getFullYear() + ")";
        setAnoFilter(arrayDate(date.getFullYear(), anoInicio));
      } else {
        stringsearch += "";
        stringsearch += "(" + anoInicio + " - " + anoFinal + ")";
        setAnoFilter(arrayDate(anoFinal, anoInicio));
      }
    }
    setSearch(stringsearch)
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
    artigosPublicados(i), livroPublicadoOrganizados(i) /*livroPublicadoOrganizados(i) */
  ]

  const update_f = () => { setUpdate(!update) }

  const ordemAno = () => anoFilter.map((i) => {
    if (tipo !== "") {
      if (tipo === "artigo_publicado") {
        return artigosPublicados(i);
      } else if (tipo === "capitulo_de_livros_publicado") {
        return capitulosLivrosPublicadosOrganizados(i);
      } else if (tipo === "livro_publicado") {
        return livroPublicadoOrganizados(i);
      } /*else if (tipo === "capitulo_de_livros_publicado"){
        return capitulosLivrosPublicadosOrganizados(i);
      } else if (tipo === "capitulo_de_livros_publicado"){
        return capitulosLivrosPublicadosOrganizados(i);
      } else if (tipo === "capitulo_de_livros_publicado"){
        return capitulosLivrosPublicadosOrganizados(i);
      } else if (tipo === "capitulo_de_livros_publicado"){
        return capitulosLivrosPublicadosOrganizados(i);
      }*/

    } else {
      return allTipo(i)
    }
    return allTipo(i)
  })

  /////

  return (

      <Card  key="12223453">

        <CardHeader

          title={"Portfólio Privado - " + user}
          subheader={"Currículo Lattes CNPQ "}
        />
        <div>
          <IconButton

            onClick={handleExpandClickImport}
            aria-expanded={expandedImport}
            aria-label="show more"
            size="small"
          >
            {!expandedImport ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Importar Dados

          </IconButton>
          <Collapse in={expandedImport} timeout="auto" unmountOnExit>
            <div style={{ margin: 20 }}>
              <ImportXML update={update_f} fechar={handleExpandClickImport} />
            </div>

          </Collapse>
        </div>
        <div>
          <IconButton

            onClick={handleExpandClickDelete}
            aria-expanded={expandedDelete}
            aria-label="show more"
            size="small"
          >
            {!expandedDelete ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Limpar Dados

            </IconButton>
          <Collapse in={expandedDelete} timeout="auto" unmountOnExit>

            <div style={{ margin: 20 }}>
              <DeleteTable key={4567357} name={"Artigos Publicados"} nameTableSql={"pb_artigo_publicado"} user={JSON.parse(localStorage.getItem("user")).user_name} update={update_f} />
              <DeleteTable key={487987557} name={"Capitulo de Livros Publicado"} nameTableSql={"pb_capitulo_livro_publicado_organizado"} user={JSON.parse(localStorage.getItem("user")).user_name} update={update_f} />
              <DeleteTable key={487987557} name={"Livro Publicado Organizados"} nameTableSql={"pb_livro_publicado_organizado"} user={JSON.parse(localStorage.getItem("user")).user_name} update={update_f} />
              {/* <DeleteTable key={487987557} name={"Livro Publicado Organizados"} nameTableSql={"pb_livro_publicado_organizado"} user={JSON.parse(localStorage.getItem("user")).user_name} update={update_f} /> */}

            </div>

          </Collapse>
        </div>
        <Search getSearch={getSearch} />


        {search ? <StyledBreadcrumb onClick={() => { setFiltroSearch(""); setSearch(""); }} style={{ margin: 20 }} component="a" href="#" label={"Busca: " + search + filtroSearch + tipo + "   (x)"} /> : <div />}

       
          {ordemAno()}  
      </Card>
  



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