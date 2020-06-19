import React, { useEffect, useState } from 'react'

import { emphasize, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Chip from '@material-ui/core/Chip';

import { SigaSearch } from './components/SigaSearch';
import { siga_disciplinas, siga_projetos } from "../../api/serverAPI";

import { SigaDisciplina } from "./components/itens/SigaDisciplina";
import { SigaProjeto } from "./components/itens/SigaProjeto";



export const P_Portfolio_Siga = (props) => {

  const user = props.match.params.user;

  const [projetos, setProjetos] = useState([]);
  const [disciplinas, setDisciplinas] = useState([]);
  const [search, setSearch] = useState("");
  const [filtroSearch, setFiltroSearch] = useState("");
  const [anoFilter, setAnoFilter] = useState([]);
  
  const [tipo, setTipo] = useState("");

  ////////////////////////////////////////////////////////////////////

 
 

  useEffect(() => {
    siga_projetos(user)
      .then(data => setProjetos(data));
      siga_disciplinas(user)
      .then(dat => setDisciplinas(dat));
    setAnoFilter(arrayDate(2020, 1950))

  }, [user]);


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
      stringsearch = stringsearch  + " / ";
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


  const f_projetos = (i) => projetos.map(function (item) {

    if ((new RegExp(filtroSearch, "i")).test(JSON.stringify(item))) {

      if (item.ANO === i) {
        return <SigaProjeto key={item.id} {...item} />
      }
    } return null;
  })

  const f_disciplinas = (i) => disciplinas.map(function (item) {
    if ((new RegExp(filtroSearch, "i")).test(JSON.stringify(item))) {

      if (item.ANO === i) {
        return <SigaDisciplina key={item.id} {...item} />
      }
    } return null;
  })

  const allTipo = (i) => [
    f_projetos(i),
    f_disciplinas(i)
  ]

  
  const ordemAno = () => anoFilter.map((i) => {
    if (tipo !== "") {
      if (tipo === "projeto") {
        return f_projetos(i);
      } else if (tipo === "disciplina")
        return f_disciplinas(i);
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
           
            title="Portfólio Publico "
            subheader={"Siga"}
          />


     

          <SigaSearch getSearch={getSearch} />

          {search ? <StyledBreadcrumb onClick={() => { setFiltroSearch(""); setSearch(""); }} style={{ margin: 20 }} component="a" href="#" label={"Busca: " + search + filtroSearch + tipo + "   (x)"} /> : <div />}

          {ordemAno()}
        </Card>
      </div>
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