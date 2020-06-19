import React, { useState, useEffect } from 'react'

import Typography from '@material-ui/core/Typography';










export const Url = ({ id, table, doi, home_page, external_url }) => {

  
  const [urlExternal, setUrlExternal] = useState("");
  const [urlDoi, setUrlDoi] = useState("");
  const [urlHomePage, setUrlHomePage] = useState("");

  

  const Clean = () => {

    if (external_url) {
      setUrlExternal(external_url);
    }

    if (doi !== "NULL") {
      setUrlDoi("http://doi.org/" + doi);
    }

    if (home_page) {
      let urlClean = "";
      urlClean = home_page;
      urlClean = urlClean.replace("[", "");
      urlClean = urlClean.replace("]", "");
      urlClean = urlClean.replace("http://", "");
      urlClean = urlClean.replace("https://", "");
      urlClean = "http://" + urlClean;

      setUrlHomePage(urlClean);
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
