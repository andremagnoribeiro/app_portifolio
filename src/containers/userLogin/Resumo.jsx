import React from 'react';



import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
//

export const Resumo = ({ setTipo,artigoPublicado_Q,capituloLivroPublicadoOrganizado_Q,textoJornalRevista_Q,trabalhoEvento_Q,livroPublicadoOrganizado_Q }) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  
  
  return (
    <Card style={{ marginTop: 3, marginLeft: 20, marginRight: 20, paddingLeft: 20, paddingRigth: 20, backgroundColor: "#DCDCDC" }}>
      <CardHeader
        title={"Resumo "}
      />
     
     
      <CardContent  >
      <Backdrop style={{zIndex:3}}  open={(artigoPublicado_Q === -1 ||
          capituloLivroPublicadoOrganizado_Q===-1||
          textoJornalRevista_Q===-1||
          livroPublicadoOrganizado_Q===-1||
          trabalhoEvento_Q===-1
          )} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>

      {artigoPublicado_Q !== -1 ?<Button style={{width:'50%'}} onClick={()=>setTipo("artigoPublicado")} variant="outlined" >
          Artigos Publicados: {artigoPublicado_Q}
        </Button>:undefined}
       { capituloLivroPublicadoOrganizado_Q!==-1&&<Button style={{width:'50%'}} onClick={()=>setTipo("capituloLivroPublicadoOrganizado")} variant="outlined" >
         Capítulo Livro Publicado Organizado: {capituloLivroPublicadoOrganizado_Q}
        </Button>}
        { textoJornalRevista_Q!==-1&&<Button style={{width:'50%'}} onClick={()=>setTipo("textoJornalRevista")} variant="outlined" >
        Texto Jornal Revista: {textoJornalRevista_Q}
        </Button>}
        { livroPublicadoOrganizado_Q!==-1&&<Button style={{width:'50%'}} onClick={()=>setTipo("livroPublicadoOrganizado")} variant="outlined" >
        Livro Publicado Organizado: {livroPublicadoOrganizado_Q}
        </Button>}
        { trabalhoEvento_Q!==-1&&<Button style={{width:'50%'}} onClick={()=>setTipo("trabalhoEvento")} variant="outlined" >
        Trabalho Evento: {trabalhoEvento_Q}
        </Button>}
        
      </CardContent>
    </Card>
  );
}
