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
import Slider from '@material-ui/core/Slider';
import { MostradorFiltro } from '../components/MostradorFiltro'
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandLessOutlined';

import Collapse from '@material-ui/core/Collapse';


export const PortfolioBusca = ({ getSearch, sliderMin, sliderMax }) => {
  const classes = useStyles();
  const [filterText, setFilterText] = useState('');
  const [filterText2, setFilterText2] = useState('');


  const [expandedFiltro, setExpandedFiltro] = useState(false);


  const handleExpandFiltro = () => {
    setExpandedFiltro(!expandedFiltro);
  };


  const onChangeInput = (event) => {
    setFilterText(event.target.value);
  };

  const onChangeEnter = (event) => {
    if (event.key === "Enter") {
      btnFiltrarClick();
    }
  };

  const restaurar = (filterT, filterA) => {
    console.log("ASDFASDF",filterT,"aaaaaa=", filterA)
    getSearch(filterT, filterA);
  }


  const btnFiltrarClick = () => {
    setFilterText2(filterText);
    setFilterAno2(filterAno);


    getSearch(filterText, filterAno);


    console.log("BuscaFiltro=", filterText, filterAno)
  }



  //Slide










  const [filterAno, setFilterAno] = React.useState([sliderMin, sliderMax]);
  const [filterAno2, setFilterAno2] = React.useState([sliderMin, sliderMax]);



  const handleChangeSlider = (event, newValue) => {
    setFilterAno(newValue);
  };
  const valueText = (filterAno) => filterAno


  return (
    <div>

      <Card style={{ backgroundColor: '#E6E6FA', margin: 20 }}>
        <div style={{ justifyContent: "center" }}>
          <Box alignItems="left">
            <div style={{
              display: 'flex',
              flexwrap: 'wrap',
              width: '100%',
            }}>
              <div style={{
                width: "calc((100% / 1.5) )"
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
                      value={filterText}
                    />

                  </Card>
                </CardContent>

              </div>
              <div style={{
                width: 200, margin: 18
              }}>
                <Button onClick={btnFiltrarClick} variant="contained" style={{ width: '10%', height: 35, marginLeft: 1, backgroundColor: "secondary" }} color="primary" disableElevation>
                  <SearchIcon />
                </Button>
              </div>

            </div >
          </Box>
          <div style={{marginLeft:10}}>
            <IconButton
              onClick={handleExpandFiltro}
              aria-expanded={expandedFiltro}
              aria-label="show more"
              size="small"
            >
              {expandedFiltro ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Filtro
            </IconButton>
            <Collapse in={expandedFiltro} timeout="auto" unmountOnExit>
              <div style={{

                display: 'flex',  height: 80, width: 300
              }}>
                <div style={{ marginTop: 25, marginLeft: 10, width: 45 }}>
                  <span>Ano:</span>
                </div >
                <div style={{ marginTop: 25, width: 200, marginRight: 25 }}>
                  <Slider
                    // ValueLabelComponent={ValueLabelComponent}
                    min={sliderMin}
                    max={sliderMax}
                    value={filterAno}
                    onChange={handleChangeSlider}
                    //aria-label="custom thumb label"
                    aria-labelledby="range-slider"
                    getAriaValueText={valueText}
                    valueLabelDisplay="auto"
                  />
                </div>
              </div>
            </Collapse>
          </div>



        </div>


      </Card>
      {(sliderMin !== filterAno2[0] || sliderMax !== filterAno2[1]) &&
        <MostradorFiltro apagarFiltro={
          () => {
            setFilterAno([sliderMin, sliderMax]);
            setFilterAno2([sliderMin, sliderMax]);
            restaurar(filterText2, [sliderMin, sliderMax]);
          }
        }
          text={String(filterAno2[0]) + " - " + String(filterAno2[1])} />}
      {(filterText2 !== '' && filterText2) &&
        <MostradorFiltro apagarFiltro={
          () => {
            setFilterText('');
            setFilterText2('');
            restaurar('', [filterAno[0], filterAno[1]])
          }
        } text={filterText2} />}


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


function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};