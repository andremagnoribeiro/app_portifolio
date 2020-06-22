






import React, { useState, useEffect } from 'react'

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';


import SaveIcon from '@material-ui/icons/Save';


import IconButton from '@material-ui/core/IconButton';

import Button from '@material-ui/core/Button';

import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {server} from '../../../var';




export const Url = ({ id, table, doi, home_page, external_url }) => {

  const [url, setUrl] = useState("");
  const [viewVisualizar, setViewVisualizar] = useState(true);
  const [viewAdicionar, setViewAdicionar] = useState(false);

  const [urlExternal, setUrlExternal] = useState("");
  const [urlDoi, setUrlDoi] = useState("");
  const [urlHomePage, setUrlHomePage] = useState("");
  const [inputPlaceholder, setInputPlaceholder] = useState("http://nomedosite");



  const Clean =()=> {

    if (external_url) {

      setViewVisualizar(true)
      setUrlExternal(external_url);
    }

    if (doi !== "NULL" && doi) {
      setUrlDoi("http://doi.org/" + doi);
    }

    var urlClean = "";
    if (home_page) {
      urlClean = home_page;
      urlClean = urlClean.replace("[", "");
      urlClean = urlClean.replace("]", "");
      urlClean = urlClean.replace("http://", "");
      urlClean = urlClean.replace("https://", "");
      urlClean = "http://" + urlClean;

      setUrlHomePage(urlClean);
    }

    if (home_page === "NULL" && doi === "NULL" && !external_url) {
      setViewAdicionar(true);
    }
  }
  useEffect(
    Clean
  , []);



 

 

  return (
    <div>
      <Typography><a href={urlExternal} rel="noopener noreferrer" target="_blank"  >{urlExternal}</a></Typography>
      <Typography><a href={urlDoi} rel="noopener noreferrer" target="_blank"  >{urlDoi}</a></Typography>
      <Typography><a href={urlHomePage} rel="noopener noreferrer" target="_blank"  >{urlHomePage}</a></Typography>
    </div>

  );
}
