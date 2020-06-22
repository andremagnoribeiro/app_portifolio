
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




export const SigaSearch = ({ getSearch }) => {
  const classes = useStyles();
  const [textsearch, setTextsearch] = useState(null);
  const [selectedFim, setSelectedFim] = useState(null);
  const [selectedInicio, setSelectedInicio] = useState(null);
  const [anoInicio, setAnoInicio] = useState([]);
  const [arrayFim, setArrayFim] = useState([]);
  const [tipoD, setTipoD] = useState(null);
 
  const onChangeInput = (event) => {
    setTextsearch(event.target.value);

  };

  const onChangeEnter = (event) => {
    
    if(event.key==="Enter"){
      getSearch(textsearch, selectedInicio, selectedFim, tipoD);
    }
  };
  const btnClick = () => {
    getSearch(textsearch, selectedInicio, selectedFim, tipoD);
  }

  const handleChangeSelectInicio = (event) => {
    var data = new Date();
    setArrayFim(arrayDate(Number(event.target.value), data.getFullYear()));
    setSelectedInicio(Number(event.target.value));
   
  }

  const handleChangeSelectFim = (event) => {
    setSelectedFim(Number(event.target.value));
  };

  const handleChangeSelectTipo = (event) => {
    setTipoD(event.target.value);
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
      <Card style={{ backgroundColor: "#E6E6FA", margin: 20 }}>
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
                      onKeyPress={onChangeEnter}
                      onChange={onChangeInput}
                    />
                  </Card>
                </CardContent>
              </div>
              <div style={{
                width: 200, margin: 18
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

                  <Typography  style={{ marginTop: 5, marginLeft: 5 }}  color="textSecondary" component="p">
                    Ano de Publicação(início/fim)
                  </Typography>

                  <FormControl className={classes.formControl}>
                    <Select
                   
                      native
                      onChange={handleChangeSelectInicio}
                      value={selectedInicio||""}
                      input={<Input id="demo-dialog-native" />}
                    >
                      <option value={null} >Todos</option>
                      {anoInicio.map(ano => {

                        return <option key={ano} value={ano} >{ano}</option>
                      })}
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <Select
                   
                      native
                      onChange={handleChangeSelectFim}
                      value={selectedFim||""}
                      input={<Input id="demo-dialog-native" />}
                      placeholder="Fim"

                    >
                      <option value={null} >Todos</option>
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
                <Typography style={{ marginTop: 5, marginLeft: 5 }}  color="textSecondary" component="p">
                  Tipo
          </Typography>
                <Select
                  native
                  onChange={handleChangeSelectTipo}
                  value={tipoD}
                  input={<Input id="demo-dialog-native" />}
                >
                  <option value={null}>Todos</option>
                  <option value="projeto" >Projetos</option>
                  <option value="disciplina" >Disciplinas</option>

                  
                  {/* <option value="capitulo_de_livros_publicado" >Capitulo de Livros Publicado</option> */}
                </Select>
              </CardContent>
</div>

            </div>
         
        </Box>


      </Card>


    </div>
  );
}



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