import React from 'react';


import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';






export const SigaProjeto = (item) => {



  // const dataDuracao = (i, f) => {

  //   var diai = i.substring(0, 2);
  //   var mesi = i.substring(3, 2);
  //   var anoi = i.substring(6, 4);

  //   var diaf = f.substring(0, 2);
  //   var mesf = f.substring(3, 2);
  //   var anof = f.substring(6, 4);


  //   var anos = ""

  //   //aaaaaaaaaaaaaaaaaaaaaaaaaaaaa??????????????????

  //   return anos;

  // }

  return (
    <Card  style={{
      backgroundColor: "#d4d4d4",
      maxWidth: 2000,
      margin: 20
    }}>

      <CardHeader
        title={"Projeto: "+item.DESCRICAO}

        subheader={
        <div>
          <Typography>{"De " + item.DATAINICIO + " a " + item.DATAFIM}</Typography> 
         
        </div>}
      />

      <CardContent>
          <Typography>Orientador: {item.ORIENTADOR}</Typography>
          <Typography>Aréa do CNPQ: {item.AREA_CNPQ}</Typography>
          <Typography>Maximo de Vagas Voluntárias: {item.MAXVAGASVOLUNTARIAS}  /  Maximo de Vagas com Bolsa: {item.MAXVAGASCOMBOLSA}</Typography>
          <Typography>Modalidade: {item.MODALIDADE}   /  Situação: {item.SITUACAO}  /  Idendificador: {item.IDENTIFICADOR}</Typography>

          <Typography style={{fontSize:20 }}>Bolsas:</Typography>

        {[1, 2, 3, 4, 5, 6].map((i) => {
          if (item[`BOLSISTAS_${i}`] !== null) {
            return (<Card key={i+"itemBolsista"} style={{marginTop:10}}>

              <CardContent>
                <Typography  >
                  {item[`BOLSA_${i}`] + " - " + item[`SIGLA_${i}`]}
                </Typography>
                <Typography style={{ fontSize: 16, width: '100%' }} gutterBottom>
                  Bolsista: {item[`BOLSISTAS_${i}`] + '   /    Matrícula: ' + item[`PROFILE_${i}`]}
                </Typography>
                <Typography component={'span'} variant="body1" >
                  {"De " + item[`INICIO_BOLSISTA_${i}`] + " a " + item[`FIM_BOLSISTA_${i}`]}
                </Typography>

             
              </CardContent>
            </Card>
            );
          }
          return undefined;
        })}

     
      </CardContent>
 
    </Card>
  );

}

