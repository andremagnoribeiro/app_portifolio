import React, { useEffect, useState } from 'react'
import {
  pb_artigo_publicado,
  pb_capitulo_livro_publicado_organizado
} from "../api/serverAPI";
import { CapituloLivroPublicadoOrganizado } from "../components/itens/CapituloLivroPublicadoOrganizado";
import { ArtigoPublicado } from "../components/itens/ArtigoPublicado";


import Search from './Search';


import { emphasize, withStyles } from '@material-ui/core/styles';

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

import Chip from '@material-ui/core/Chip';
import ImportXML from "./ImportXML";

import { DeleteTable } from "../components/DeleteTable"

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
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591


//////////////////////////////////////////////////////////
export const Portifolio_Lattes = ({ seach }) => {

  const [artigoPublicado, setArtigoPublicado] = useState([]);
  const [capituloLivroPublicadoOrganizado, setCapituloLivroPublicadoOrganizado] = useState([]);
  const [search, setSearch] = useState("");
  const [filtroSearch, setFiltroSearch] = useState("");
  const [anoFilter, setAnoFilter] = useState([]);
  const [update,setUpdate]=useState("");
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
    pb_artigo_publicado("11962413683")
      .then(data => setArtigoPublicado(data));
    pb_capitulo_livro_publicado_organizado("11962413683")
      .then(dat => setCapituloLivroPublicadoOrganizado(dat));
    setAnoFilter(arrayDate(2020, 1950))

  }, [update]);


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

    //filtro search
    setSearch("");
    var stringsearch = "";
    if (busca !== "") {
      stringsearch = stringsearch + busca + " / ";
    }
    var date = new Date();
    if (anoInicio !== "Início") {
      if (anoFinal === "Fim") {
        stringsearch += "";
        arrayDate(date.getFullYear(), anoInicio).map((ano) => stringsearch += ano + " /");
        setAnoFilter(arrayDate(date.getFullYear(), anoInicio));
      } else {
        stringsearch += "";
        arrayDate(anoFinal, anoInicio).map((ano) => stringsearch += ano + " /");
        setAnoFilter(arrayDate(anoFinal, anoInicio));
      }
    }
    setSearch(stringsearch)
  };


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

  const allTipo = (i) => [
    capitulosLivrosPublicadosOrganizados(i),
    artigosPublicados(i)
  ]

  const update_f = () =>{setUpdate(!update) }

  const ordemAno = () => anoFilter.map((i) => {
    if (tipo !== "") {
      if (tipo === "artigo_publicado") {
        return artigosPublicados(i);
      } else if (tipo === "capitulo_de_livros_publicado")
        return capitulosLivrosPublicadosOrganizados(i);
    } else {
      return allTipo(i)
    }
    return allTipo(i)
  })



  return (
    <div>

      <div>
        <Card >

          <CardHeader
            action={<div> <IconButton

              onClick={handleExpandClickDelete}
              aria-expanded={expandedDelete}
              aria-label="show more"
              size="small"
            >
              {!expandedDelete ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Limpar Dados

          </IconButton> <IconButton

                onClick={handleExpandClickImport}
                aria-expanded={expandedImport}
                aria-label="show more"
                size="small"
              >
                {!expandedImport ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Importar

          </IconButton>
            </div>}
            title="Portifólio "
            subheader={"Currículo Lattes CNPQ "}
          />


          <Collapse in={expandedImport} timeout="auto" unmountOnExit> 
          <div style={{margin: 20}}>
          <ImportXML update={update_f} />
          </div>
           
          </Collapse>


          <Collapse in={expandedDelete} timeout="auto" unmountOnExit>
            <div style={{margin: 20}}>
            <DeleteTable key={4567357} name={"Artigos Publicados"} nameTableSql={"pb_artigo_publicado"} user={"11962413683"} update={update_f}/>
            <DeleteTable key={487987557} name={"Capitulo de Livros Publicado"} nameTableSql={"pb_capitulo_livro_publicado_organizado"} user={"11962413683"} update={update_f}/>
            
            </div>
            
          </Collapse>

          <Search key="1" getSearch={getSearch} />

          {search ? <StyledBreadcrumb onClick={() => { setFiltroSearch(""); setSearch(""); }} style={{ margin: 20 }} component="a" href="#" label={"Busca: " + search + filtroSearch + tipo + "   (x)"} /> : <div />}


          {ordemAno()}
        </Card>
      </div>
    </div>


  );
}

