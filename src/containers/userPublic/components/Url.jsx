import React, { useState, useEffect } from 'react'

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';






import IconButton from '@material-ui/core/IconButton';

import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';






const server="http://localhost"





export const Url = ({ id, table, doi, home_page, external_url }) => {

  const [url, setUrl] = useState("");
  const [viewVisualizar, setViewVisualizar] = useState(true);
  const [viewAdicionar, setViewAdicionar] = useState(false);

  const [urlExternal, setUrlExternal] = useState("");
  const [urlDoi, setUrlDoi] = useState("");
  const [urlHomePage, setUrlHomePage] = useState("");
  const [inputPlaceholder,setInputPlaceholder] = useState("")

  const [expanded, setExpanded] = useState(false);
  
  


  useEffect(() => {
    Clean();
  },[]);

  const Clean =()=>{

  if (external_url) {
     
    setViewVisualizar(true)
    setUrlExternal(external_url);
  }

  if (doi !== "NULL") {
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
  const url_exists= (url)=> {

    if((new RegExp("http://", "i")).test(url) || (new RegExp("https://", "i")).test(url) ){
      return true;
    }
    return false;
  }


  const updateURL = () => {
    if(url_exists(url)){
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
      if (xhr.responseText === "true") {
        setViewAdicionar(false);
        setViewVisualizar(true);
        setUrlExternal(url);
        setInputPlaceholder("");
        setUrl("");

      }
    };

    xhr.open('POST',server+ `/api/setUrl.php?url=${url}&id=${id}&table=${table}`, true);
    xhr.send();
  }else{
    setInputPlaceholder("URL Invalida! Tente Outra");
    setUrl("");

  }
  }


  const onChangeInput = (event) => {
    setUrl(event.target.value);
  };


  return (
    <div>
  <Typography><a href={urlExternal} rel="noopener noreferrer" target="_blank"  >{urlExternal}</a></Typography>
  <Typography><a href={urlDoi} rel="noopener noreferrer" target="_blank"  >{urlDoi}</a></Typography>
  <Typography><a href={urlHomePage} rel="noopener noreferrer" target="_blank"  >{urlHomePage}</a></Typography>
    </div>

  );
}
