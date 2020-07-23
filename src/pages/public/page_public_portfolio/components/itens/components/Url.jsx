






import React, { useState, useEffect } from 'react'

import Box from '@material-ui/core/Box';

import Tooltip from '@material-ui/core/Tooltip';






import { server } from '../../../../../../var';




export const Url = ({ id, table, doi, home_page, external_url }) => {

  const [url, setUrl] = useState("");
  const [viewVisualizar, setViewVisualizar] = useState(true);
  const [viewAdicionar, setViewAdicionar] = useState(false);

  const [urlExternal, setUrlExternal] = useState("");
  const [urlDoi, setUrlDoi] = useState("");
  const [urlHomePage, setUrlHomePage] = useState("");
  const [inputPlaceholder, setInputPlaceholder] = useState("http://nomedosite");

  const [expanded, setExpanded] = useState(false);



  const Clean = () => {

    if (external_url) {

      setViewVisualizar(true)
      setUrlExternal(external_url);
    }

    if (doi !== "NULL" && doi) {
      setUrlDoi("http://doi.org/" + doi);
    }

    var urlClean = "";
    if (home_page !== "NULL" && home_page) {
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


  const url_exists = (url) => {

    if ((new RegExp("http://", "i")).test(url) || (new RegExp("https://", "i")).test(url)) {
      return true;
    }
    return false;
  }


  const updateURL = () => {
    if (url_exists(url)) {
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

      xhr.open('POST', server + `/ufjfportfolioprofissional/api/setUrl.php?url=${url}&id=${id}&table=${table}`, true);
      xhr.send();
    } else {
      setInputPlaceholder("URL Invalida! Tente Outra");
      setUrl("");

    }
  }


  const onChangeInput = (event) => {
    setUrl(event.target.value);
  };


  return (
    <div style={{ borderStyle: 'dotted', borderWidth: 2, paddingTop: 5, paddingBottom: 10, paddingLeft: 20, paddingLeft: 20 }}>
      {/* DOI: */}
      {urlDoi !== "" ?
        <div>
          <div style={{
            width: "100%", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
          }}>
            <Box textAlign="left" >

              <Tooltip title={urlDoi}>
                <a href={urlDoi} rel="noopener noreferrer" target="_blank"  >URL Doi</a>
              </Tooltip>
            </Box>
          </div>
        </div> : undefined}



      {/* Home Page: */}
      {urlHomePage !== "" ?
        <div>
          <div style={{ width: "100%", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            <Box textAlign="justify" >

              <Tooltip title={urlHomePage}>
                <a href={urlHomePage} rel="noopener noreferrer" target="_blank"  >URL HomePage</a>
              </Tooltip>

            </Box>
          </div>
        </div> : undefined}


      {/* URL Externa: */}
      {viewVisualizar &&
        <div >
          <div style={{ width: "100%", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            <Box textAlign="left" >
              {urlExternal && <Tooltip title={urlExternal}>
                <a href={urlExternal} rel="noopener noreferrer" target="_blank"  >URL External</a>
              </Tooltip>}
            </Box>
          </div>
        </div>
       }
    </div>
  );
}

