import React, { useState, useEffect } from 'react'

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import InputBase from '@material-ui/core/InputBase';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';

import Box from '@material-ui/core/Box';

import FormControl from '@material-ui/core/FormControl';

import { fade, makeStyles } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';


import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';



const useStyles = makeStyles((theme) => ({

  search: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: 300,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 80,
  },
  searchIcon: {

  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  inputRoot: {
    color: 'inherit',
    height: 38,
    marginLeft: 10

  },
  inputInput: {

    width: 500,
  },

}));

function Search({ getSearch }) {
  const classes = useStyles();
  const [textsearch, setTextsearch] = useState('');
  const [selectedFim, setSelectedFim] = useState("Fim");
  const [selectedInicio, setSelectedInicio] = useState("Início");
  const [anoInicio, setAnoInicio] = useState([]);
  const [arrayFim, setArrayFim] = useState([]);
  const [tipoD, setTipoD] = useState("");
 


  const onChangeInput = (event) => {
    setTextsearch(event.target.value);
  };
  const btnClick = () => {
    getSearch(textsearch, selectedInicio, selectedFim, tipoD);getSearch(textsearch, selectedInicio, selectedFim, tipoD);

  }

  const handleChangeSelectInicio = (event) => {
    var data = new Date();
    setArrayFim(arrayDate(Number(event.target.value), data.getFullYear()));
    setSelectedInicio(Number(event.target.value));
    getSearch(textsearch, Number(event.target.value), selectedFim, tipoD);
  }

  const handleChangeSelectFim = (event) => {
    setSelectedFim(Number(event.target.value));
    getSearch(textsearch, selectedInicio, Number(event.target.value), tipoD);
  };

  const handleChangeSelectTipo = (event) => {
    setTipoD(event.target.value);
    getSearch(textsearch, selectedInicio, selectedFim, event.target.value);

  }


  const arrayDate = (ini, fim) => {
    var date = ini;
    const dates = [];
    while (date <= fim) {
      dates.unshift(String(date));
      date = date + 1;
    }
    return dates;
  }
  useEffect(() => {
    var data = new Date();
    setAnoInicio(arrayDate(1950, data.getFullYear()));
  }, []);


  return (
    <div>
      <Card style={{ backgroundColor: "#E6E6FA", margin: 5 }}>
        <div style={{ justifyContent: "center" }}>
          <Box alignItems="left">
            <div style={{
              display: 'flex',
              flexwrap: 'wrap',
              width: '100%',
            }}>
              <div style={{
                width: "calc((100% / 2) )"
              }}>


               
            <CardContent>
                  <Card style={{ width: "calc((100% / 1) )" }}>
                    <InputBase
                      placeholder="  Search…"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      inputProps={{ 'aria-label': 'search' }}
                      onChange={onChangeInput}
                    />
                  </Card>
                </CardContent>
              </div>
              <div style={{
                width: 200, margin: 15
              }}>
                <Button onClick={btnClick} variant="contained" style={{ width: 120, height: 35, marginLeft: 1, backgroundColor: "secondary" }} color="primary" disableElevation>
                  <SearchIcon />Filtrar
            </Button>
              </div>
            </div >
          </Box>

        </div>

        <Box textAlign="left" >

          


            <div style={{
              display: 'flex',
              flexwrap: 'wrap',
              width: '100%',
            }}>

              <div style={{
                width: "calc((100% / 2) )"
              }}>
                <CardContent>

                  <Typography  style={{ marginTop: 5, marginLeft: 15 }} variant="h10" color="textSecondary" component="p">
                    Ano de Publicação
          </Typography>

                  <FormControl className={classes.formControl}>
                    <Select
                      native
                      onChange={handleChangeSelectInicio}
                      value={selectedInicio}
                      input={<Input id="demo-dialog-native" />}
                    >
                      <option value={null} disabled="disabled">Início</option>
                      {anoInicio.map(ano => {

                        return <option value={ano} >{ano}</option>
                      })}
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <Select
                      native
                      onChange={handleChangeSelectFim}
                      value={selectedFim}
                      input={<Input id="demo-dialog-native" />}


                    >
                      <option value={null} disabled="disabled">Fim</option>
                      {arrayFim.map(ano => {
                       
                        return <option value={ano}>{ano}</option>
                      })}
                    </Select>
                  </FormControl>


                </CardContent>
              </div>
              <div style={{
                width: "calc((100% / 2) )"
              }}>
              <CardContent>
                <Typography style={{ marginTop: 5, marginLeft: 15 }} variant="h10" color="textSecondary" component="p">
                  Tipo
          </Typography>
                <Select
                  native
                  onChange={handleChangeSelectTipo}
                  value={tipoD}
                  input={<Input id="demo-dialog-native" />}
                >
                  <option value="" >Todos</option>
                  <option value="artigo_publicado" >Artigo Publicado</option>
                  <option value="capitulo_de_livros_publicado" >Capitulo de Livros Publicado</option>
                </Select>
              </CardContent>
</div>

            </div>
         
        </Box>


      </Card>


    </div>
  );
}

export default Search;

