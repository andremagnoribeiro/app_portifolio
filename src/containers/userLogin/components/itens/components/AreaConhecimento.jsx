import React from 'react';

import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { TitleItem } from './TitleItem';
import Box from '@material-ui/core/Box';

import CardHeader from '@material-ui/core/CardHeader';
export const AreaConhecimento = ({ item }) =>

  (

    <div>
      {(
        (item.nome_grande_area_do_conhecimento_1 && item.nome_grande_area_do_conhecimento_1 !== 'NULL') ||
        (item.nome_grande_area_do_conhecimento_2 && item.nome_grande_area_do_conhecimento_2 !== 'NULL') ||
        (item.nome_grande_area_do_conhecimento_3 && item.nome_grande_area_do_conhecimento_3 !== 'NULL'))
        &&
        <Card style={{ marginTop: 30, paddingBottom: 30, backgroundColor: "#d3d3d3" }}>

          <CardHeader
            title="Área de Conhecimento"
            subheader=""
          />

          {(item.nome_grande_area_do_conhecimento_1 && item.nome_grande_area_do_conhecimento_1 !== 'NULL') && <Card style={{ margin: 20, paddingBottom: 30, backgroundColor: "#d3d3d3" }}>
            <Typography fontWeight="fontWeightBold" >
              <Box fontSize={14} m={1}>
                {item.nome_grande_area_do_conhecimento_1}
              </Box>
            </Typography >
            <div style={{
              marginLeft: 10, marginRight: 10,
              borderStyle: ' none  none solid none ', borderWidth: 1
            }}></div>
            <TitleItem title={"Área do Conhecimento:"} valor={item.nome_da_area_do_conhecimento_1} />
            <TitleItem title={"Especialidade:"} valor={item.nome_da_especialidade_1} />
            <TitleItem title={"Sub Área do conhecimento:"} valor={item.nome_da_sub_area_do_conhecimento_1} />
            <TitleItem title={"Ordem de Autoria:"} valor={item.ordem_de_autoria_1} />
          </Card>}

          {(item.nome_grande_area_do_conhecimento_2 && item.nome_grande_area_do_conhecimento_2 !== 'NULL') && <Card style={{ margin: 20, paddingBottom: 30, backgroundColor: "#d3d3d3" }}>
            <Typography fontWeight="fontWeightBold" >
              <Box fontSize={14} m={1}>
                {item.nome_grande_area_do_conhecimento_2}
              </Box>
            </Typography >

            <div style={{
              marginLeft: 10, marginRight: 10,
              borderStyle: ' none  none solid none ', borderWidth: 1
            }}></div>
            <TitleItem title={"Área do Conhecimento:"} valor={item.nome_da_area_do_conhecimento_2} />
            <TitleItem title={"Especialidade:"} valor={item.nome_da_especialidade_2} />
            <TitleItem title={"Sub Área do conhecimento:"} valor={item.nome_da_sub_area_do_conhecimento_2} />
            <TitleItem title={"Ordem de Autoria:"} valor={item.ordem_de_autoria_2} />

          </Card>}
 
          {(item.nome_grande_area_do_conhecimento_3 && item.nome_grande_area_do_conhecimento_3 !== 'NULL') && <Card style={{ margin: 20, paddingBottom: 30, backgroundColor: "#d3d3d3" }}>
            <Typography fontWeight="fontWeightBold" >
              <Box fontSize={14} m={1}>
                {item.nome_grande_area_do_conhecimento_3}
              </Box>
            </Typography >
            <div style={{
            marginLeft: 10, marginRight: 10,
            borderStyle: ' none  none solid none ', borderWidth: 1
          }}></div>
            <TitleItem title={"Área do Conhecimento:"} valor={item.nome_da_area_do_conhecimento_3} />
            <TitleItem title={"Especialidade:"} valor={item.nome_da_especialidade_3} />
            <TitleItem title={"Sub Área do conhecimento:"} valor={item.nome_da_sub_area_do_conhecimento_3} />
            <TitleItem title={"Ordem de Autoria:"} valor={item.ordem_de_autoria_3} />
          </Card>}

        </Card>}

    </div>

  )
