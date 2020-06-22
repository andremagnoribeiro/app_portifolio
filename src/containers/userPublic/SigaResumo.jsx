import React from 'react';



import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

//

export const SigaResumo = ({ setTipo,disciplinas_Q,projetos_Q }) => {
  
  
  
  return (
    <Card style={{ marginTop: 3, marginLeft: 20, marginRight: 20, paddingLeft: 20, paddingRigth: 20, backgroundColor: "#DCDCDC" }}>
      <CardHeader
        title={"Resumo "}
        
      />
     
      
      <CardContent  >
      <Backdrop style={{zIndex:3}}  open={(disciplinas_Q === -1 ||projetos_Q===-1)} >
        <CircularProgress color="inherit" />
      </Backdrop>
      {disciplinas_Q !== -1 &&<Button style={{width:'50%'}} onClick={()=>setTipo("disciplina")} variant="outlined" >
          Disciplina: {disciplinas_Q}
        </Button>}
       { projetos_Q!==-1&&<Button style={{width:'50%'}} onClick={()=>setTipo("projeto")} variant="outlined" >
         Projetos: {projetos_Q}
        </Button>}

      </CardContent>
    </Card>
  );
}
