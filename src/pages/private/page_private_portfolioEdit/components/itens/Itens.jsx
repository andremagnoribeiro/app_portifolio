import React, { useState } from 'react';


//materia ui
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';


//components
import { Autores } from './components/Autores';
import { DadosGerais } from './components/DadosGerais';
import { PalavraChave } from './components/PalavraChave';
import { AreaConhecimento } from './components/AreaConhecimento';
import { Url } from './components/Url';
import { TitleItem } from './components/TitleItem';




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
export const PBTrabalhosEvento = (item) => {
  
  const table = "pb_trabalho_evento";

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{
      backgroundColor: "#ffffff",
      maxWidth: 2000,
      margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20
    }}>

      <CardHeader
        title={"Trabalho em Evento"}
        subheader={"Ano: " + item.ano_do_trabalho}
      />

      <CardContent>

        <Typography variant="h6" color="textSecondary" > {item.titulo_do_trabalho}  </Typography>
        {item.titulo_dos_anais_ou_proceedings && item.titulo_dos_anais_ou_proceedings !== "NULL" ? <Typography component={'span'} variant="h5" color="textSecondary" > {item.titulo_dos_anais_ou_proceedings}  </Typography> : undefined}


        <PalavraChave item={item} />


      </CardContent>

      <CardActions disableSpacing>
        <IconButton

          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Veja Mais

        </IconButton>


      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent style={{ backgroundColor: "#ffffff" }}>
          <Card style={{ marginTop: 30, paddingBottom: 30, backgroundColor: "#ffffff"  }}>
            <CardHeader
              title="Dados Gerais"
              subheader=""
            />

            <DadosGerais item={item} />

          </Card>

          <Autores item={item} />
          <AreaConhecimento item={item} />
        </CardContent>
      </Collapse>
      <Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page_do_trabalho} external_url={item.external_url} />

    </Card>
  );

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//

export const PBTextoJornalRevista = (item) => {
  const table = "pb_texto_jornal_revista";

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ backgroundColor: "#ffffff", margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader title="Texto Jornal Revista" subheader={"publicado em: " + item.data_de_publicacao.slice(0, -6) + "/" + item.data_de_publicacao.slice(2, -4) + "/" + item.data_de_publicacao.slice(4)} />

      <CardContent>


        <Typography component={'span'} variant="h5" color="textSecondary" gutterBottom> {item.titulo_do_jornal_ou_revista}  </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom> {item.titulo_do_texto}  </Typography>
        <PalavraChave item={item} />


      </CardContent>
      <CardActions disableSpacing>
        <IconButton  size="small"  onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Veja Mais
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" >
        <CardContent style={{ backgroundColor: "#ffffff" }}>
          <Card style={{ marginTop: 30, paddingBottom: 30, backgroundColor: "#ffffff" }}>
            <CardHeader
              title="Dados Gerais"
              subheader=""
            />
            <DadosGerais item={item} />
          </Card>
          <Autores item={item} />
          <AreaConhecimento item={item} />
        </CardContent>
      </Collapse>
        <Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page_do_trabalho} external_url={item.external_url} />
    </Card>
  );

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//


export const PBLivroPublicadoOrganizado = (item) => {
  const table = "pb_livro_publicado_organizado";

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (

    <Card style={{ backgroundColor: "#ffffff", margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader title="Livro Publicado Organizado" subheader={"publicado em: " + item.ano}
      />
      <CardContent>

        <Typography component={'span'} variant="h5" color="textSecondary" gutterBottom> {item.titulo_do_livro}  </Typography>
        <PalavraChave item={item} />

      </CardContent>
      <CardActions disableSpacing>
        <IconButton  size="small"  onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Veja Mais
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" >
        <CardContent style={{ backgroundColor: "#ffffff" }}>
          <Card style={{ marginTop: 30, paddingBottom: 30, backgroundColor: "#ffffff" }}>
            <CardHeader
              title="Dados Gerais"
              subheader=""
            />
            <TitleItem title={"Titulo do Livro:"} valor={item.titulo_do_livro} />
            < TitleItem title={"Titulo em Ingles"} valor={item.titulo_do_livro_ingles} />
            <DadosGerais item={item} />
          </Card>
          <Autores item={item} />
          <AreaConhecimento item={item} />
        </CardContent>
      </Collapse>
        <Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page_do_trabalho} external_url={item.external_url} />
    </Card>
  );

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
export const PBCapituloLivroPublicado = (item) => {
  const table = "pb_capitulo_livro_publicado_organizado";

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Card style={{
      backgroundColor: "#ffffff",
      margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20
    }}>

      <CardHeader
        title="Capítulo de Livros Publicado"
        subheader={"publicado em: " + item.ano}
      />

      <CardContent>

        <Typography component={'span'} color="textSecondary" gutterBottom> {item.titulo_do_livro}  </Typography>

        <PalavraChave item={item} />


      </CardContent>

      <CardActions disableSpacing>

        <IconButton  size="small"  onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Veja Mais
        </IconButton>

      </CardActions>

      <Collapse in={expanded} timeout="auto" >

        <CardContent style={{ backgroundColor: "#ffffff" }}>

          <Card style={{ marginTop: 30, paddingBottom: 30, backgroundColor: "#ffffff" }}>
            <CardHeader
              title="Dados Gerais"
              subheader=""
            />


            <TitleItem title={"Titulo do CapÃ­tulo do Livro:"} valor={item.titulo_do_capitulo_do_livro} />
            <TitleItem title={"Titulo do Livro:"} valor={item.titulo_do_livro} />

            <DadosGerais item={item} />
          </Card>

          <Autores item={item} />

          <AreaConhecimento item={item} />

        </CardContent>
      </Collapse>
      <Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page_do_trabalho} external_url={item.external_url} />
    </Card>
  );

}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
export const PBArtigoPublicado/**/ = (item) => {

  const table = "pb_artigo_publicado";/**/
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ backgroundColor: "#ffffff", margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader title="Artigo Publicado"/**/ subheader={"publicado em: " + item.ano_do_artigo}/**/
      />
      <CardContent>

        {/* */}{/* */}
        <Typography component={'span'} variant="h5" color="textSecondary" gutterBottom> {item.titulo_do_artigo}  </Typography>{/* */}
        <PalavraChave item={item} />

        {/* */}{/* */}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton  size="small"  onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Veja Mais
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" >
        <CardContent style={{ backgroundColor: "#ffffff" }}>
            <TitleItem title={"Titulo do Capítulo do Livro"}/**/ valor={item.titulo_do_capitulo_do_livro} />
            <TitleItem title={"Titulo do Livro"}/**/ valor={item.titulo_do_livro} />
            <DadosGerais item={item} />
            <Autores item={item} />
            <AreaConhecimento item={item} />
            </CardContent>
      </Collapse>
        <Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page_do_trabalho}/**/ external_url={item.external_url}/**/ />
    </Card>
  );

}




export const SigaProjeto = (item) => {

  return (
    <Card style={{
      backgroundColor: "#ffffff",
      maxWidth: 2000,
      margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20
    }}>

      <CardHeader
        title={"Projeto: " + item.DESCRICAO}

        subheader={
          <div>
            <Typography>{"De " + item.DATAINICIO + " a " + item.DATAFIM}</Typography>
          </div>}
      />

      <CardContent>
        <TitleItem title={"Orientador"} valor={item.ORIENTADOR}/>
        <TitleItem title={"Aréa do CNPQ"} valor={item.AREA_CNPQ}/>
        <TitleItem title={"Maximo de Vagas Voluntárias"} valor={item.MAXVAGASVOLUNTARIAS} />
        <TitleItem title={"Maximo de Vagas com Bolsa"} valor={item.MAXVAGASCOMBOLSA}/>
        <TitleItem title={"Modalidade"} valor={item.MODALIDADE}   />
        <TitleItem title={"Situação"}  valor={item.SITUACAO}  />
        <TitleItem title={"Idendificador"}  valor={item.IDENTIFICADOR}/>

        <span style={{ fontSize: 20 }}>Bolsas:</span>

        {[1, 2, 3, 4, 5, 6].map((i) => {
          if (item[`BOLSISTAS_${i}`] !== null) {
            return (<Card key={i + "itemBolsista"} style={{ marginTop: 10 }}>

              <CardContent>
                <Typography>
                <span>
                  {item[`BOLSA_${i}`] + " - " + item[`SIGLA_${i}`]}
                </span><br/>
                <span style={{ fontSize: 16, width: '100%' }} gutterBottom>
                  Bolsista: {item[`BOLSISTAS_${i}`] + '   /    Matrícula: ' + item[`PROFILE_${i}`]}
                </span><br/>
                <span>
                  {"De " + item[`INICIO_BOLSISTA_${i}`] + " a " + item[`FIM_BOLSISTA_${i}`]}
                </span>
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


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
export const SigaDisciplina = (item) => {





  return (
    <Card style={{
      backgroundColor: "#ffffff",
      maxWidth: 2000,
      margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20
    }}>

      <CardHeader
        title={"Disciplina: " + item.NOME + " - " + item.DISCIPLINA + "-" + item.TURMA}
        subheader={"Ano/Semetre: " + item.ANO + "/" + item.SEMESTRE}
      />
      <CardContent>
        <TitleItem title={"Horas de Estágio"} valor={item.HORASESTAGIO}/>
        <TitleItem title={"Horas de Laboratรณrio"} valor={item.HORASLAB}/>
        <TitleItem title={"Horas de Aula"} valor={item.HORASAULA}/>
        <TitleItem title={"Vagas"} valor={item.VAGASOCUP}/>
      </CardContent>
    
    </Card>
  );

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
export const ATProjetoPesquisa = (item) => {

  const table = 'at_projeto_pesquisa';

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ backgroundColor: '#ffffff', margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader
        title='Projeto Pesquisa'
        subheader={'Período(mes/ano): de ' + item.mes_inicio + "/" + item.ano_inicio + " a " + item.mes_fim + "/" + item.ano_fim}
      />
      <CardContent>

        <TitleItem title={'Descrição do Projeto'} valor={item.descricao_do_projeto} />
        <TitleItem title={'Descrição do Projeto Ingles'} valor={item.descricao_do_projeto_ingles} />
        <TitleItem title={'Situação'} valor={item.situacao} />
        <TitleItem title={'Unidade'} valor={item.nome_unidade} />
        <TitleItem title={'Projeto'} valor={item.nome_do_projeto} />
        <TitleItem title={'Natureza'} valor={item.natureza} />
        <TitleItem title={'Orgão'} valor={item.nome_orgao} />

      </CardContent>
      <CardActions disableSpacing>
        <IconButton  size="small"  onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Veja Mais
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" >
        <TitleItem title={'Codigo Orgão'} valor={item.codigo_orgao} />
        <TitleItem title={'Código Unidade'} valor={item.codigo_unidade} />
        <TitleItem title={'Flag Período'} valor={item.flag_periodo} />
        <TitleItem title={'Ações Inovadoras do Projeto'} valor={item.acoes_inovadoras_do_projeto} />
        <TitleItem title={'Cooperacões do Projeto'} valor={item.cooperacoes_do_projeto} />
        <TitleItem title={'Data Certificacão'} valor={item.data_certificacao} />
        <TitleItem title={'Descrição Objetivo Meta'} valor={item.descricao_objetivo_meta} />
        <TitleItem title={'Flag Potencial Inovação'} valor={item.flag_potencial_inovacao} />
        <TitleItem title={'Identificador Projeto'} valor={item.identificador_projeto} />
        <TitleItem title={'Projeto Ingles'} valor={item.nome_do_projeto_ingles} />
        <TitleItem title={'Número Tecnico Nivel Medio'} valor={item.Número_tecnico_nivel_medio} />
        <TitleItem title={'Número Doutorado'} valor={item.Número_doutorado} />
        <TitleItem title={'Número Ensino Fundamental'} valor={item.Número_ensino_fundamental} />
        <TitleItem title={'Número Ensino Médio'} valor={item.Número_ensino_medio} />
        <TitleItem title={'Número Especializacão'} valor={item.Número_especializacao} />
        <TitleItem title={'Número Graduação'} valor={item.Número_graduacao} />
        <TitleItem title={'Número Mestrado Academico'} valor={item.Número_mestrado_academico} />
        <TitleItem title={'Número Mestrado Prof'} valor={item.Número_mestrado_prof} />
        <TitleItem title={'Projeto de Pesquisa'} valor={item.projeto_de_pesquisa} />
        <TitleItem title={'Temáticas do Projeto'} valor={item.tematicas_do_projeto} />
        {(item[`equipe_nome_completo1`] && item[`equipe_nome_completo1`] !== "NULL") && <Card style={{ marginTop: 30, paddingBottom: 30, backgroundColor: "#ffffff" }}>
          <CardHeader
            title="Autores"
            subheader=""
          />

          {[1, 2, 3, 4].map(i => {
            if (item[`equipe_nome_completo${i}`] && item[`equipe_nome_completo${i}`] !== "NULL") {
              return (
                <Card key={item.id} style={{ margin: 10 }}>
                  <CardContent>

                    <Typography component={'span'}  fontWeight="fontWeightBold" >
                      <Box fontSize={16} m={1}>
                        {item[`equipe_nome_completo${i}`]}
                      </Box>
                    </Typography >

                    <div style={{
                      marginLeft: 10, marginRight: 10,
                      borderStyle: ' none  none solid none ', borderWidth: 1
                    }}></div>

                    <TitleItem title={'Nome para Citação:'} valor={item[`equipe_nome_para_citacao${i}`]} />

                    {(item[`equipe_flag_responsavel${i}`] !== '' && item[`equipe_flag_responsavel${i}`] !== 'NULL') &&
                      <TitleItem title={'Responsavel:'} valor={item[`equipe_flag_responsavel${i}`]} />}

                    {(item[`equipe_nro_id_cnpq${i}`] !== '' && item[`equipe_nro_id_cnpq${i}`] !== 'NULL') &&
                      <TitleItem title={'ID CNPQ:'} valor={item[`equipe_nro_id_cnpq${i}`]} />}

                  </CardContent>
                </Card>)
            }
            return undefined;
            
          })}
        </Card>}

        {(item[`financiador_nome_instituicao1`] && item[`financiador_nome_instituicao1`] !== "NULL") && <Card style={{ marginTop: 30, paddingBottom: 30, backgroundColor: "#ffffff" }}>
          <CardHeader
            title="Financiador"
            subheader=""
          />

          {[1, 2].map(i => {
            if (item[`financiador_nome_instituicao${i}`] && item[`financiador_nome_instituicao${i}`] !== "NULL") {
              return (
                <Card key={item.id} style={{ margin: 10 }}>
                  <CardContent>

                    <Typography component={'span'}  fontWeight="fontWeightBold" >
                      <Box fontSize={16} m={1}>
                        {item[`financiador_nome_instituicao${i}`]}
                      </Box>
                    </Typography >

                    <div style={{
                      marginLeft: 10, marginRight: 10,
                      borderStyle: ' none  none solid none ', borderWidth: 1
                    }}></div>


                    {(item[`financiador_natureza${i}`] !== '' && item[`financiador_natureza${i}`] !== 'NULL') &&
                      <TitleItem title={'Natureza:'} valor={item[`financiador_natureza${i}`]} />}

                    <TitleItem title={'Código da Instituição:'} valor={item[`financiador_codigo_instituicao${i}`]} />


                    {(item[`financiador_sequencia_financiador${i}`] !== '' && item[`financiador_sequencia_financiador${i}`] !== 'NULL') &&
                      <TitleItem title={'Sequência:'} valor={item[`financiador_sequencia_financiador${i}`]} />}


                  </CardContent>
                </Card>)
            }
            return undefined;

          })}
        </Card>}
      </Collapse>
<Url key={item.id} table={table} id={item.id} external_url={item.external_url} />
    </Card>
  );

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//

export const APVinculo = (item) => {

  const table = 'ap_vinculo';


  return (
    <Card style={{ backgroundColor: '#ffffff', margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader
        title='Vínculo'
        subheader={'Período(mes/ano): de ' + item.mes_inicio + "/" + item.ano_inicio + " a " + item.mes_fim + "/" + item.ano_fim}
      />
      <CardContent>

        <TitleItem title={'Enquadramento Funcional'} valor={item.enquadramento_funcional} />
        <TitleItem title={'Carga Horária Semanal'} valor={item.carga_horaria_semanal} />
        <TitleItem title={'Tipo de Vínculo'} valor={item.tipo_de_vinculo} />
        <TitleItem title={'Sequencia Histórico'} valor={item.sequencia_historico} />
        <TitleItem title={'Vínculo Empregatício'} valor={item.flag_vinculo_empregaticio} />
        <TitleItem title={'Dedicacão Exclusiva'} valor={item.flag_dedicacao_exclusiva} />
        <TitleItem title={'Outro Vínculo Informado'} valor={item.outro_vinculo_informado} />
        <TitleItem title={'Outras Informacões'} valor={item.outras_informacoes} />
        <TitleItem title={'Outras Informacões(ingles)'} valor={item.outras_informacoes_ingles} />
        <TitleItem title={'Outro Enquadramento Funcional Informado'} valor={item.outro_enquadramento_funcional_informado} />
        <TitleItem title={'Outro Enquadramento Funcional Informado(ingles)'} valor={item.outro_enquadramento_funcional_informado_ingles} />

      </CardContent>
        <Url key={item.id} table={table} id={item.id} external_url={item.external_url} />
    </Card>
  );

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//

export const APPesquisaDesenvolvimento = (item) => {

  const table = 'ap_pesquisa_desenvolvimento';/**/


  return (
    <Card style={{ backgroundColor: '#ffffff', margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader
        title='Pesquisa e Desenvolvimento'
        subheader={'Período(mes/ano): de ' + item.mes_inicio + "/" + item.ano_inicio + " a " + item.mes_fim + "/" + item.ano_fim}
      />
      <CardContent>

        <TitleItem title={'Unidade'} valor={item.nome_unidade} />
        <TitleItem title={'Código Orgao'} valor={item.codigo_orgao} />
        <TitleItem title={'Código Unidade'} valor={item.codigo_unidade} />
        <TitleItem title={'Orgao'} valor={item.nome_orgao} />
        <TitleItem title={'Flag Período'} valor={item.flag_periodo} />
        <Card style={{ marginTop: 15 }}>

          <TitleItem title={'Linha de Pesquisa'} valor={item.titulo_da_linha_de_pesquisa_1} />
          <TitleItem title={'Linha de Pesquisa(Ingles)'} valor={item.titulo_da_linha_de_pesquisa_ingles_1} />
          <TitleItem title={'Objetivos da linha de Pesquisa'} valor={item.objetivos_linha_de_pesquisa_1} />
          <TitleItem title={'Objetivos da linha de Pesquisa(Ingles)'} valor={item.objetivos_linha_de_pesquisa_ingles_1} />
          <TitleItem title={'Linha de Pesquisa Ativa '} valor={item.flag_linha_de_pesquisa_ativa_1} />


        </Card>

        <Card style={{ marginTop: 15 }}>

          <TitleItem title={'Linha de Pesquisa'} valor={item.titulo_da_linha_de_pesquisa_2} />
          <TitleItem title={'Linha de Pesquisa(Ingles)'} valor={item.titulo_da_linha_de_pesquisa_ingles_2} />
          <TitleItem title={'Objetivos da linha de Pesquisa'} valor={item.objetivos_linha_de_pesquisa_2} />
          <TitleItem title={'Objetivos da linha de Pesquisa(Ingles)'} valor={item.objetivos_linha_de_pesquisa_ingles_2} />
          <TitleItem title={'Linha de Pesquisa Ativa '} valor={item.flag_linha_de_pesquisa_ativa_2} />


        </Card>

        <Card style={{ marginTop: 15 }}>

          <TitleItem title={'Linha de Pesquisa'} valor={item.titulo_da_linha_de_pesquisa_3} />
          <TitleItem title={'Linha de Pesquisa(Ingles)'} valor={item.titulo_da_linha_de_pesquisa_ingles_3} />
          <TitleItem title={'Objetivos da linha de Pesquisa'} valor={item.objetivos_linha_de_pesquisa_3} />
          <TitleItem title={'Objetivos da linha de Pesquisa(Ingles)'} valor={item.objetivos_linha_de_pesquisa_ingles_3} />
          <TitleItem title={'Linha de Pesquisa Ativa '} valor={item.flag_linha_de_pesquisa_ativa_3} />


        </Card>

      </CardContent>
      <Url key={item.id} table={table} id={item.id} external_url={item.external_url} />
    </Card>
  );

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//

export const APDirecaoAdministracao = (item) => {

  const table = 'ap_direcao_administracao';


  return (
    <Card style={{ backgroundColor: '#ffffff', margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader
        title='Direção Administração'
        subheader={'Período(mes/ano): de ' + item.mes_inicio + "/" + item.ano_inicio + " a " + item.mes_fim + "/" + item.ano_fim}
      />
      <CardContent>
        <TitleItem title={'Cargo Função:'} valor={item.cargo_ou_funcao} />
        <TitleItem title={'Cargo Função(Ingles):'} valor={item.cargo_ou_funcao_ingles} />
        <TitleItem title={'Formato do Cargo ou Função:'} valor={item.formato_cargo_ou_funcao} />
        <TitleItem title={'Nome do Orgão:'} valor={item.cargo_ou_funcao_ingles} />

        <TitleItem title={'Flag de Periodo:'} valor={item.flag_periodo} />

        <TitleItem title={'Código do Orgão:'} valor={item.codigo_orgao} />

        <TitleItem title={'Nome da Unidade:'} valor={item.nome_unidade} />

        <TitleItem title={'Código da Unidade:'} valor={item.codigo_unidade} />

      </CardContent>
        <Url key={item.id} table={table} id={item.id} external_url={item.external_url} />
    </Card>
  );

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//

export const APConselhoComissaoConsultoria = (item) => {

  const table = 'ap_conselho_comissao_consultoria';/**/
  


  return (
    <Card style={{ backgroundColor: '#ffffff', margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader
        title='Conselho Comissão Consultoria'
        subheader={'Período(mes/ano): de ' + item.mes_inicio + "/" + item.ano_inicio + " a " + item.mes_fim + "/" + item.ano_fim}
      />
      <CardContent>
        <TitleItem title={'Especificações'} valor={item.especificacao} />
        <TitleItem title={'Nome do Orgão'} valor={item.nome_orgao} />

        <TitleItem title={'Flag de Periodo'} valor={item.flag_periodo} />

        <TitleItem title={'Código do Orgão'} valor={item.codigo_orgao} />

        <TitleItem title={'Nome da Unidade'} valor={item.nome_unidade} />

        <TitleItem title={'Código da Unidade'} valor={item.codigo_unidade} />

      </CardContent>
        <Url key={item.id} table={table} id={item.id} external_url={item.external_url} />
    </Card>
  );

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//

export const FATDoutorado = (item) => {

  const table = 'fat_doutorado';/**/



  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ backgroundColor: '#ffffff', margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader title='Doutorado'
        subheader={'período: de ' + item.ano_inicio + " a " + item.ano_conclusao+ '   Ano da Obtenção do Titulo: ' + item.ano_obtencao_do_titulo} />
      <CardContent>

        <TitleItem title={'Título da Dissertação ou Tese'} valor={item.titulo_da_dissertacao_tese} />
        <TitleItem title={'Ttulo da Dissertação ou Tese(ingles)'} valor={item.titulo_da_dissertacao_tese_ingles} />
        <TitleItem title={'Status'} valor={item.status_do_curso} />
        <PalavraChave item={item} />{/* */}



        <CardActions disableSpacing>
          <IconButton  size="small"  onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
            {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Veja Mais
</IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' >

          <TitleItem title={'Doutorado'} valor={item.doutorado} />
          <TitleItem title={'Tipo'} valor={item.tipo_doutorado} />

          <TitleItem title={'Orientador'} valor={item.nome_completo_do_orientador} />
          <TitleItem title={'Orientador Co-Tutela'} valor={item.nome_do_orientador_co_tutela} />
          <TitleItem title={'Orientador Sanduiche'} valor={item.nome_do_orientador_sanduiche} />
          <TitleItem title={'Orientador Co-Orientador'} valor={item.nome_do_co_orientador} />
          <TitleItem title={'Orientador'} valor={item.nome_orientador_dout} />
          <TitleItem title={'Id do Orientador'} valor={item.numero_id_orientador} />


          <TitleItem title={'Área do Conhecimento'} valor={item.areas_do_conhecimento} />


          <TitleItem title={'Flag Bolsa'} valor={item.flag_bolsa} />
          <TitleItem title={'Nivel'} valor={item.nivel} />
          <TitleItem title={'Agencia'} valor={item.nome_agencia} />

          <TitleItem title={'Curso'} valor={item.nome_curso} />
          <TitleItem title={'Curso(Ingles)'} valor={item.nome_curso_ingles} />
          <TitleItem title={'Código Curso'} valor={item.codigo_curso} />
          <TitleItem title={'Código Curso Capes'} valor={item.codigo_curso_capes} />

          <TitleItem title={'Instituição'} valor={item.nome_instituicao} />
          <TitleItem title={'Instituição Doutorado'} valor={item.nome_instituicao_dout} />
          <TitleItem title={'Outras Instituição'} valor={item.nome_instituicao_outra_dout} />
          <TitleItem title={'Código Instituição'} valor={item.codigo_instituicao} />
          <TitleItem title={'Código Instituição Co-Tutela'} valor={item.codigo_instituicao_co_tutela} />
          <TitleItem title={'Código Instituição Doutorado'} valor={item.codigo_instituicao_dout} />
          <TitleItem title={'Código Outras Instituição  Co-Tutela'} valor={item.codigo_instituicao_outra_co_tutela} />
          <TitleItem title={'Código Outras Instituição  Doutorado'} valor={item.codigo_instituicao_outra_dout} />
          <TitleItem title={'Código Outras Instituição  Sanduiche'} valor={item.codigo_instituicao_outra_sanduiche} />
          <TitleItem title={'Código Outras Instituição Sanduiche'} valor={item.codigo_instituicao_sanduiche} />

          <TitleItem title={'Orgão'} valor={item.nome_orgao} />
          <TitleItem title={'Código Orgão'} valor={item.codigo_orgao} />

          <TitleItem title={'Código Agencia Financiadora'} valor={item.codigo_agencia_financiadora} />
          <TitleItem title={'Código Área do Curso '} valor={item.codigo_area_curso} />


        </Collapse>
      </CardContent>

      <Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page} external_url={item.external_url} />
    </Card>
  );

}






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FATEspecializacao.jsx







export const FATEspecializacao = (item) => {

  const table = 'fat_especializacao';/**/



  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ backgroundColor: '#ffffff', margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader title='Especialização'


        subheader={'período: de ' + item.ano_inicio + " a " + item.ano_conclusao }

      />
      <CardContent>

        <TitleItem title={'Título da Monografia'} valor={item.titulo_da_monografia} />
        <TitleItem title={'Título(ingles)'} valor={item.titulo_da_monografia_ingles} />

        <TitleItem title={'Status'} valor={item.status_do_curso} />
        <PalavraChave item={item} />{/* */}



        <CardActions disableSpacing>
          <IconButton  size="small"  onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
            {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Veja Mais
</IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' >

          <TitleItem title={'Doutorado'} valor={item.doutorado} />







          <TitleItem title={'Carga Horária'} valor={item.carga_horaria} />
          <TitleItem title={'Orientador'} valor={item.nome_do_orientador} />

          <TitleItem title={'Nivel'} valor={item.nivel} />
          <TitleItem title={'Agencia'} valor={item.nome_agencia} />
          <TitleItem title={'Status do Curso'} valor={item.status_do_curso} />


          <TitleItem title={'Flag Bolsa'} valor={item.flag_bolsa} />

          <TitleItem title={'Orgão'} valor={item.nome_orgao} />
          <TitleItem title={'Código Orgão'} valor={item.codigo_orgao} />


          <TitleItem title={'Curso'} valor={item.nome_curso} />
          <TitleItem title={'Curso(Ingles)'} valor={item.nome_curso_ingles} />
          <TitleItem title={'Código Curso'} valor={item.codigo_curso} />

          <TitleItem title={'Instituição'} valor={item.nome_instituicao} />
          <TitleItem title={'Código Instituição'} valor={item.codigo_instituicao} />

          <TitleItem title={'Código Agencia Financiadora'} valor={item.codigo_agencia_financiadora} />


        </Collapse>
      </CardContent>

      <Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page} external_url={item.external_url} />
    </Card>
  );

}









/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FATGraduacao.jsx





export const FATGraduacao = (item) => {

  const table = 'fat_graduacao';/**/



  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ backgroundColor: '#ffffff', margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader title='Graduação'

        subheader={'período: de ' + item.ano_inicio + " a " + item.ano_conclusao }

      />
      <CardContent>


        <TitleItem title={'Curso'} valor={item.nome_curso} />
        <TitleItem title={'Titulo da Monografia'} valor={item.titulo_da_monografia} />
        <TitleItem title={'Titulo da Monografia(Ingles)'} valor={item.titulo_da_monografia_ingles} />
        <TitleItem title={'Tipo de Graduação'} valor={item.tipo_graduacao} />


        <CardActions disableSpacing>
          <IconButton  size="small"  onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
            {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Veja Mais
</IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' >

          <TitleItem title={'Doutorado'} valor={item.doutorado} />

          <TitleItem title={'Codigo Área do Curso'} valor={item.codigo_area_curso} />

          <TitleItem title={'Título'} valor={item.titulo_do_trabalho_de_conclusao_de_curso} />
          <TitleItem title={'Ttulo(ingles)'} valor={item.titulo_do_trabalho_de_conclusao_de_curso_ingles} />


          <TitleItem title={'Carga Horária'} valor={item.carga_horaria} />
          <TitleItem title={'Orientador'} valor={item.nome_do_orientador} />

          <TitleItem title={'Nivel'} valor={item.nivel} />
          <TitleItem title={'Agencia'} valor={item.nome_agencia} />
          <TitleItem title={'Status do Curso'} valor={item.status_do_curso} />


          <TitleItem title={'Flag Bolsa'} valor={item.flag_bolsa} />

          <TitleItem title={'Orgão'} valor={item.nome_orgao} />
          <TitleItem title={'Código Orgão'} valor={item.codigo_orgao} />


          <TitleItem title={'Curso(Ingles)'} valor={item.nome_curso_ingles} />
          <TitleItem title={'Código Curso'} valor={item.codigo_curso} />

          <TitleItem title={'Instituição'} valor={item.nome_instituicao} />
          <TitleItem title={'Código Instituição'} valor={item.codigo_instituicao} />

          <TitleItem title={'Código Agencia Financiadora'} valor={item.codigo_agencia_financiadora} />
          <TitleItem title={'Código Curso Capes'} valor={item.codigo_curso_capes} />
          <TitleItem title={'Formação Acadêmica e Títulação'} valor={item.formacao_academica_titulacao} />
          <TitleItem title={'Número ID do Orientador'} valor={item.numero_id_orientador} />


        </Collapse>
      </CardContent>

      <Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page} external_url={item.external_url} />
    </Card>
  );

}






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////FATMestrado.jsx





export const FATMestrado = (item) => {

  const table = 'fat_mestrado';/**/



  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ backgroundColor: '#ffffff', margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader title='Mestrado'









        subheader={'período: de ' + item.ano_inicio + " a " + item.ano_conclusao + '   Ano da Obtenção do Titulo: ' + item.ano_obtencao_do_titulo} />
      <CardContent>



        <PalavraChave item={item} />{/* */}



        <TitleItem title={'Título'} valor={item.titulo_da_dissertacao_tese} />
        <TitleItem title={'Título'} valor={item.titulo_da_dissertacao_tese_ingles} />
        <TitleItem title={'Status'} valor={item.status_do_curso} />
        <TitleItem title={'Tipo de Mestrado'} valor={item.tipo_mestrado} />

        <PalavraChave item={item} />



        <TitleItem title={'Título da Dissertação ou Tese'} valor={item.titulo_da_dissertacao_tese} />
        <TitleItem title={'Ttulo da Dissertação ou Tese(ingles)'} valor={item.titulo_da_dissertacao_tese_ingles} />
        <TitleItem title={'Status'} valor={item.status_do_curso} />



        <CardActions disableSpacing>
          <IconButton  size="small"  onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
            {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Veja Mais
</IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' >


          <TitleItem title={'Mestrado'} valor={item.mestrado} />

          <TitleItem title={'Código Agencia Financiadora'} valor={item.codigo_agencia_financiadora} />

          <TitleItem title={'Doutorado'} valor={item.doutorado} />
          <TitleItem title={'Tipo'} valor={item.tipo_doutorado} />

          <TitleItem title={'Orientador'} valor={item.nome_completo_do_orientador} />
          <TitleItem title={'Orientador Co-Tutela'} valor={item.nome_do_orientador_co_tutela} />
          <TitleItem title={'Orientador Sanduiche'} valor={item.nome_do_orientador_sanduiche} />
          <TitleItem title={'Orientador Co-Orientador'} valor={item.nome_do_co_orientador} />
          <TitleItem title={'Orientador'} valor={item.nome_orientador_dout} />
          <TitleItem title={'Id do Orientador'} valor={item.numero_id_orientador} />


          <TitleItem title={'Área do Conhecimento'} valor={item.areas_do_conhecimento} />


          <TitleItem title={'Flag Bolsa'} valor={item.flag_bolsa} />
          <TitleItem title={'Nivel'} valor={item.nivel} />
          <TitleItem title={'Agencia'} valor={item.nome_agencia} />

          <TitleItem title={'Curso'} valor={item.nome_curso} />
          <TitleItem title={'Curso(Ingles)'} valor={item.nome_curso_ingles} />
          <TitleItem title={'Código Curso'} valor={item.codigo_curso} />
          <TitleItem title={'Código Curso Capes'} valor={item.codigo_curso_capes} />

          <TitleItem title={'Instituição'} valor={item.nome_instituicao} />
          <TitleItem title={'Instituição Doutorado'} valor={item.nome_instituicao_dout} />
          <TitleItem title={'Outras Instituição'} valor={item.nome_instituicao_outra_dout} />
          <TitleItem title={'Código Instituição'} valor={item.codigo_instituicao} />
          <TitleItem title={'Código Instituição Co-Tutela'} valor={item.codigo_instituicao_co_tutela} />
          <TitleItem title={'Código Instituição Doutorado'} valor={item.codigo_instituicao_dout} />
          <TitleItem title={'Código Outras Instituição  Co-Tutela'} valor={item.codigo_instituicao_outra_co_tutela} />
          <TitleItem title={'Código Outras Instituição  Doutorado'} valor={item.codigo_instituicao_outra_dout} />
          <TitleItem title={'Código Outras Instituição  Sanduiche'} valor={item.codigo_instituicao_outra_sanduiche} />
          <TitleItem title={'Código Outras Instituição Sanduiche'} valor={item.codigo_instituicao_sanduiche} />

          <TitleItem title={'Orgão'} valor={item.nome_orgao} />
          <TitleItem title={'Código Orgão'} valor={item.codigo_orgao} />

          <TitleItem title={'Código Área do Curso '} valor={item.codigo_area_curso} />
          <AreaConhecimento item={item} />

        </Collapse>
      </CardContent>

      <Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page} external_url={item.external_url} />
    </Card>
  );

}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//OAAperfeicoamentoEspecializacao.jsx





export const OAAperfeicoamentoEspecializacao = (item) => {

  const table = 'oa_aperfeicoamento_especializacao';/**/



  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ backgroundColor: '#ffffff', margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader title='Aperfeiçoamento e Especialização'






        subheader={'publicado em: ' + item.ano}
      />
      <CardContent>

        <PalavraChave item={item} />{/* */}




        <TitleItem title={'Título do Trabalho'} valor={item.titulo_do_trabalho} />
        <TitleItem title={'Título do Trabalho(ingles)'} valor={item.titulo_do_trabalho_ingles} />





        <AreaConhecimento item={item} />


        <CardActions disableSpacing>
          <IconButton  size="small"  onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
            {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Veja Mais
</IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' >
          <TitleItem title={'Pais'} valor={item.pais} />

          <TitleItem title={'Flag Bolsa'} valor={item.flag_bolsa} />

          <TitleItem title={'Curso'} valor={item.nome_do_curso} />
          <TitleItem title={'Curso(ingles)'} valor={item.nome_do_curso_ingles} />
          <TitleItem title={'Código Curso'} valor={item.codigo_curso} />

          <TitleItem title={'Agencia'} valor={item.nome_da_agencia} />
          <TitleItem title={'Instituição'} valor={item.nome_da_instituicao} />

          <TitleItem title={'Orgão'} valor={item.nome_orgao} />
          <TitleItem title={'Código Orgão'} valor={item.codigo_orgao} />


          <TitleItem title={'Orientando'} valor={item.nome_do_orientando} />
          <TitleItem title={'Id Orientador'} valor={item.numero_id_orientando} />
          <TitleItem title={'Tipo de Orientação'} valor={item.tipo_de_orientacao} />

          <TitleItem title={'Idioma'} valor={item.idioma} />

          <TitleItem title={'Mestrado'} valor={item.mestrado} />

          <TitleItem title={'Código Instituição'} valor={item.codigo_instituicao} />

          <TitleItem title={'Código Agencia Financiadora'} valor={item.codigo_agencia_financiadora} />
        </Collapse>

      </CardContent>

      <Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page} external_url={item.external_url} />
    </Card>
  );

}






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////OADoutorado.jsx



export const OADoutorado = (item) => {

  const table = 'oa_doutorado';/**/



  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ backgroundColor: '#ffffff', margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader title='Doutorado'


        subheader={'publicado em: ' + item.ano}
      />
      <CardContent>

        <TitleItem title={'Título do Trabalho'} valor={item.titulo_do_trabalho} />
        <TitleItem title={'Título do Trabalho(ingles)'} valor={item.titulo_do_trabalho_ingles} />

        <AreaConhecimento item={item} />

        <CardActions disableSpacing>
          <IconButton  size="small"  onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
            {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Veja Mais
</IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' >
          <TitleItem title={'Pais'} valor={item.pais} />

          <TitleItem title={'Id Orientador'} valor={item.numero_id_orientado} />
          <TitleItem title={'Tipo de Orientação'} valor={item.tipo_de_orientacao} />

          <TitleItem title={'Flag Bolsa'} valor={item.flag_bolsa} />

          <TitleItem title={'Curso'} valor={item.nome_do_curso} />
          <TitleItem title={'Curso(ingles)'} valor={item.nome_do_curso_ingles} />
          <TitleItem title={'Código Curso'} valor={item.codigo_curso} />

          <TitleItem title={'Agencia'} valor={item.nome_da_agencia} />
          <TitleItem title={'Instituição'} valor={item.nome_da_instituicao} />

          <TitleItem title={'Orgão'} valor={item.nome_orgao} />
          <TitleItem title={'Código Orgão'} valor={item.codigo_orgao} />

          <TitleItem title={'Orientando'} valor={item.nome_do_orientando} />
          <TitleItem title={'Id Orientador'} valor={item.numero_id_orientando} />
          <TitleItem title={'Tipo '} valor={item.tipo} />

          <TitleItem title={'Idioma'} valor={item.idioma} />

          <TitleItem title={'Mestrado'} valor={item.mestrado} />

          <TitleItem title={'Código Instituição'} valor={item.codigo_instituicao} />

          <TitleItem title={'Código Agencia Financiadora'} valor={item.codigo_agencia_financiadora} />
        </Collapse>

      </CardContent>

      <Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page} external_url={item.external_url} />
    </Card>
  );

}






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//OAGraduacao.jsx





export const OAGraduacao = (item) => {

  const table = 'oa_graduacao';/**/



  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ backgroundColor: '#ffffff', margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader title='Graduação'








        subheader={'publicado em: ' + item.ano}
      />
      <CardContent>




        <TitleItem title={'Título do Trabalho'} valor={item.titulo_do_trabalho} />
        <TitleItem title={'Título do Trabalho(ingles)'} valor={item.titulo_do_trabalho_ingles} />

        <AreaConhecimento item={item} />

        <CardActions disableSpacing>
          <IconButton  size="small"  onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
            {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Veja Mais
</IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' >
          <TitleItem title={'Pais'} valor={item.pais} />

          <TitleItem title={'Id Orientador'} valor={item.numero_id_orientado} />
          <TitleItem title={'Tipo de Orientação'} valor={item.tipo_de_orientacao} />

          <TitleItem title={'Flag Bolsa'} valor={item.flag_bolsa} />

          <TitleItem title={'Curso'} valor={item.nome_do_curso} />
          <TitleItem title={'Curso(ingles)'} valor={item.nome_do_curso_ingles} />
          <TitleItem title={'Código Curso'} valor={item.codigo_curso} />

          <TitleItem title={'Agencia'} valor={item.nome_da_agencia} />
          <TitleItem title={'Instituição'} valor={item.nome_da_instituicao} />

          <TitleItem title={'Orgão'} valor={item.nome_orgao} />
          <TitleItem title={'Código Orgão'} valor={item.codigo_orgao} />

          <TitleItem title={'Orientando'} valor={item.nome_do_orientando} />
          <TitleItem title={'Id Orientador'} valor={item.numero_id_orientando} />
          <TitleItem title={'Tipo '} valor={item.tipo} />

          <TitleItem title={'Idioma'} valor={item.idioma} />

          <TitleItem title={'Mestrado'} valor={item.mestrado} />

          <TitleItem title={'Código Instituição'} valor={item.codigo_instituicao} />

          <TitleItem title={'Código Agencia Financiadora'} valor={item.codigo_agencia_financiadora} />
        </Collapse>

      </CardContent>

      <Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page} external_url={item.external_url} />
    </Card>
  );

}







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//OAIniciacaoCientifica.jsx





export const OAIniciacaoCientifica = (item) => {

  const table = 'oa_iniciacao_cientifica';/**/



  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ backgroundColor: '#ffffff', margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader title='Iniciação Cientifica'









        subheader={'publicado em: ' + item.ano}
      />
      <CardContent>


        


        <TitleItem title={'Título do Trabalho'} valor={item.titulo_do_trabalho} />
        <TitleItem title={'Título do Trabalho(ingles)'} valor={item.titulo_do_trabalho_ingles} />

        <AreaConhecimento item={item} />

        <CardActions disableSpacing>
          <IconButton  size="small"  onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
            {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Veja Mais
</IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' >
          <TitleItem title={'Pais'} valor={item.pais} />

          <TitleItem title={'Id Orientador'} valor={item.numero_id_orientado} />
          <TitleItem title={'Tipo de Orientação'} valor={item.tipo_de_orientacao} />

          <TitleItem title={'Flag Bolsa'} valor={item.flag_bolsa} />

          <TitleItem title={'Curso'} valor={item.nome_do_curso} />
          <TitleItem title={'Curso(ingles)'} valor={item.nome_do_curso_ingles} />
          <TitleItem title={'Código Curso'} valor={item.codigo_curso} />

          <TitleItem title={'Agencia'} valor={item.nome_da_agencia} />
          <TitleItem title={'Instituição'} valor={item.nome_da_instituicao} />

          <TitleItem title={'Orgão'} valor={item.nome_orgao} />
          <TitleItem title={'Código Orgão'} valor={item.codigo_orgao} />

          <TitleItem title={'Orientando'} valor={item.nome_do_orientando} />
          <TitleItem title={'Id Orientador'} valor={item.numero_id_orientando} />
          <TitleItem title={'Tipo '} valor={item.tipo} />

          <TitleItem title={'Idioma'} valor={item.idioma} />

          <TitleItem title={'Mestrado'} valor={item.mestrado} />

          <TitleItem title={'Código Instituição'} valor={item.codigo_instituicao} />

          <TitleItem title={'Código Agencia Financiadora'} valor={item.codigo_agencia_financiadora} />
        </Collapse>

      </CardContent>

      <Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page} external_url={item.external_url} />
    </Card>
  );

}







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//OAMestrado.jsx





export const OAMestrado = (item) => {

  const table = 'oa_mestrado';/**/



  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ backgroundColor: '#ffffff', margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader title='Mestrado'









        subheader={'publicado em: ' + item.ano}
      />
      <CardContent>



        <TitleItem title={'Título do Trabalho'} valor={item.titulo_do_trabalho} />
        <TitleItem title={'Título do Trabalho(ingles)'} valor={item.titulo_do_trabalho_ingles} />

        <AreaConhecimento item={item} />

        <CardActions disableSpacing>
          <IconButton  size="small"  onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
            {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Veja Mais
</IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' >
          <TitleItem title={'Pais'} valor={item.pais} />

          <TitleItem title={'Id Orientador'} valor={item.numero_id_orientado} />
          <TitleItem title={'Tipo de Orientação'} valor={item.tipo_de_orientacao} />

          <TitleItem title={'Flag Bolsa'} valor={item.flag_bolsa} />

          <TitleItem title={'Curso'} valor={item.nome_do_curso} />
          <TitleItem title={'Curso(ingles)'} valor={item.nome_do_curso_ingles} />
          <TitleItem title={'Código Curso'} valor={item.codigo_curso} />

          <TitleItem title={'Agencia'} valor={item.nome_da_agencia} />
          <TitleItem title={'Instituição'} valor={item.nome_da_instituicao} />

          <TitleItem title={'Orgão'} valor={item.nome_orgao} />
          <TitleItem title={'Código Orgão'} valor={item.codigo_orgao} />

          <TitleItem title={'Orientando'} valor={item.nome_do_orientando} />
          <TitleItem title={'Id Orientador'} valor={item.numero_id_orientando} />
          <TitleItem title={'Tipo '} valor={item.tipo} />

          <TitleItem title={'Idioma'} valor={item.idioma} />

          <TitleItem title={'Mestrado'} valor={item.mestrado} />

          <TitleItem title={'Código Instituição'} valor={item.codigo_instituicao} />

          <TitleItem title={'Código Agencia Financiadora'} valor={item.codigo_agencia_financiadora} />
        </Collapse>

      </CardContent>

      <Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page} external_url={item.external_url} />
    </Card>
  );

}





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//OAPosDoutorado.jsx


export const OAPosDoutorado = (item) => {

  const table = 'oa_posdoutorado';/**/



  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ backgroundColor: '#ffffff', margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader title='Pós-doutorado'
        subheader={'publicado em: ' + item.ano}
      />
      <CardContent>


        <TitleItem title={'Título'} valor={item.titulo_do_trabalho} />
        <TitleItem title={'Título'} valor={item.titulo_do_trabalho_ingles} />
        <TitleItem title={'Nome do Canditado'} valor={item.nome_do_candidato} />
        <PalavraChave item={item} />{/* */}


        <CardActions disableSpacing>
          <IconButton  size="small"  onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
            {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Veja Mais
</IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' >


          <TitleItem title={'Orientando'} valor={item.nome_do_orientando} />
          <TitleItem title={'Id Orientador'} valor={item.numero_id_orientado} />
          <TitleItem title={'Tipo de Orientação'} valor={item.tipo_de_orientacao} />

          <TitleItem title={'Bolsa'} valor={item.flag_bolsa} />
          <TitleItem title={'Pais'} valor={item.pais} />

          <TitleItem title={'Nome da Instuituição'} valor={item.nome_da_instituicao} />
          <TitleItem title={'Codigo da Instituição'} valor={item.codigo_instituicao} />

          <TitleItem title={'Nome do Orgão'} valor={item.nome_orgao} />
          <TitleItem title={'Orgão'} valor={item.codigo_orgao} />

          <TitleItem title={'Curso'} valor={item.nome_do_curso} />
          <TitleItem title={'Nome do Curso(ingles)'} valor={item.nome_do_curso_ingles} />
          <TitleItem title={'Código do Curso'} valor={item.codigo_curso} />

          <TitleItem title={'Idioma'} valor={item.idioma} />
          <TitleItem title={'Tipo'} valor={item.tipo} />

          <TitleItem title={'Agencia Financiadora'} valor={item.codigo_agencia_financiadora} />
          <AreaConhecimento item={item} />

          {[1, 2, 3, 4, 5, 6].map(i => {
            if (item[`nome_completo_do_participante_da_banca_${i}`] && item[`nome_completo_do_participante_da_banca_${i}`] !== "NULL") {
              return (
                <Card key={item.id} style={{ margin: 10 }}>
                  <CardContent>

                    <Typography component={'span'}  fontWeight="fontWeightBold" >
                      <Box fontSize={16} m={1}>
                        {item[`nome_completo_do_participante_da_banca_${i}`]}
                      </Box>
                    </Typography >

                    <div style={{ paddingLeft: 10 }}>

                      {(item[`nome_para_citacao_do_participante_da_banca_${i}`] !== '' && item[`nome_para_citacao_do_participante_da_banca_${i}`] !== 'NULL') &&
                        <TitleItem title={'Nome para Citação'} valor={item[`nome_para_citacao_do_participante_da_banca_${i}`]} />}

                      {(item[`nro_id_cnpq_${i}`] !== '' && item[`nro_id_cnpq_${i}`] !== 'NULL') &&
                        <TitleItem title={'ID CNPQ'} valor={item[`nro_id_cnpq_${i}`]} />}

                    </div>


                  </CardContent>
                </Card>)
            }
            return undefined;

          })}


        </Collapse>

      </CardContent>


      <Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page} external_url={item.external_url} />

    </Card>
  );

}







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PartBancaAperfeicoamentoEspecializacao.jsx





export const PartBancaAperfeicoamentoEspecializacao = (item) => {

  const table = 'part_banca_aperfeicoamento_especializacao';/**/



  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ backgroundColor: '#ffffff', margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader title='Participação em Banca de Aperfeiçoamento Especialização'


        subheader={'Ano: ' + item.ano}
      />
      <CardContent>



        <TitleItem title={'Título'} valor={item.titulo} />
        <TitleItem title={'Título'} valor={item.titulo_ingles} />
        <TitleItem title={'Nome do Canditado'} valor={item.nome_do_candidato} />
        <PalavraChave item={item} />{/* */}


        <CardActions disableSpacing>
          <IconButton  size="small"  onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
            {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Veja Mais
</IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' >

          <TitleItem title={'Pais'} valor={item.pais} />

          <TitleItem title={'Nome da Instuituição'} valor={item.nome_da_instituicao} />
          <TitleItem title={'Codigo da Instituição'} valor={item.codigo_instituicao} />

          <TitleItem title={'Nome do Orgão'} valor={item.nome_orgao} />
          <TitleItem title={'Orgão'} valor={item.codigo_orgao} />

          <TitleItem title={'Curso'} valor={item.nome_curso} />
          <TitleItem title={'Nome do Curso(ingles)'} valor={item.nome_curso_ingles} />
          <TitleItem title={'Código do Curso'} valor={item.codigo_curso} />

          <TitleItem title={'Idioma'} valor={item.idioma} />
          <TitleItem title={'Tipo'} valor={item.tipo} />

          <AreaConhecimento item={item} />

          {[1, 2, 3, 4, 5, 6].map(i => {
            if (item[`nome_completo_do_participante_da_banca_${i}`] && item[`nome_completo_do_participante_da_banca_${i}`] !== "NULL") {
              return (
                <Card key={item.id} style={{ margin: 10 }}>
                  <CardContent>

                    <Typography  component={'span'} fontWeight="fontWeightBold" >
                      <Box fontSize={16} m={1}>
                        {item[`nome_completo_do_participante_da_banca_${i}`]}
                      </Box>
                    </Typography >

                    <div style={{ paddingLeft: 10 }}>

                      {(item[`nome_para_citacao_do_participante_da_banca_${i}`] !== '' && item[`nome_para_citacao_do_participante_da_banca_${i}`] !== 'NULL') &&
                        <TitleItem title={'Nome para Citação'} valor={item[`nome_para_citacao_do_participante_da_banca_${i}`]} />}

                      {(item[`nro_id_cnpq_${i}`] !== '' && item[`nro_id_cnpq_${i}`] !== 'NULL') &&
                        <TitleItem title={'ID CNPQ'} valor={item[`nro_id_cnpq_${i}`]} />}

                    </div>


                  </CardContent>
                </Card>)
            }
            return undefined;

          })}


        </Collapse>

      </CardContent>


      <Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page} external_url={item.external_url} />

    </Card>
  );

}




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PartBancaDoutorado.jsx





export const PartBancaDoutorado = (item) => {

  const table = 'part_banca_doutorado';/**/



  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ backgroundColor: '#ffffff', margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader title='Participação em Banca de Doutorado'


        subheader={'Ano: ' + item.ano}
      />
      <CardContent>



        <TitleItem title={'Título'} valor={item.titulo} />
        <TitleItem title={'Título'} valor={item.titulo_ingles} />
        <TitleItem title={'Nome do Canditado'} valor={item.nome_do_candidato} />
        <PalavraChave item={item} />{/* */}


        <CardActions disableSpacing>
          <IconButton  size="small"  onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
            {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Veja Mais
</IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' >

          <TitleItem title={'Pais'} valor={item.pais} />

          <TitleItem title={'Nome da Instuituição'} valor={item.nome_da_instituicao} />
          <TitleItem title={'Codigo da Instituição'} valor={item.codigo_instituicao} />

          <TitleItem title={'Nome do Orgão'} valor={item.nome_orgao} />
          <TitleItem title={'Orgão'} valor={item.codigo_orgao} />

          <TitleItem title={'Curso'} valor={item.nome_curso} />
          <TitleItem title={'Nome do Curso(ingles)'} valor={item.nome_curso_ingles} />
          <TitleItem title={'Código do Curso'} valor={item.codigo_curso} />

          <TitleItem title={'Idioma'} valor={item.idioma} />
          <TitleItem title={'Tipo'} valor={item.tipo} />

          <AreaConhecimento item={item} />

          {[1, 2, 3, 4, 5, 6].map(i => {
            if (item[`nome_completo_do_participante_da_banca_${i}`] && item[`nome_completo_do_participante_da_banca_${i}`] !== "NULL") {
              return (
                <Card key={item.id} style={{ margin: 10 }}>
                  <CardContent>

                    <Typography fontWeight="fontWeightBold" >
                      <Box fontSize={16} m={1}>
                        {item[`nome_completo_do_participante_da_banca_${i}`]}
                      </Box>
                    </Typography >

                    <div style={{ paddingLeft: 10 }}>

                      {(item[`nome_para_citacao_do_participante_da_banca_${i}`] !== '' && item[`nome_para_citacao_do_participante_da_banca_${i}`] !== 'NULL') &&
                        <TitleItem title={'Nome para Citação'} valor={item[`nome_para_citacao_do_participante_da_banca_${i}`]} />}

                      {(item[`nro_id_cnpq_${i}`] !== '' && item[`nro_id_cnpq_${i}`] !== 'NULL') &&
                        <TitleItem title={'ID CNPQ'} valor={item[`nro_id_cnpq_${i}`]} />}

                    </div>


                  </CardContent>
                </Card>)
            }
            return undefined;

          })}


        </Collapse>

      </CardContent>


      <Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page} external_url={item.external_url} />

    </Card>
  );

}





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PartBancaExameQualificacao.jsx





export const PartBancaExameQualificacao = (item) => {

  const table = 'part_banca_exame_qualificacao';/**/



  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ backgroundColor: '#ffffff', margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader title='Participação em Banca de Exame Qualificação'

        subheader={'Ano: ' + item.ano}
      />
      <CardContent>


        <TitleItem title={'Título'} valor={item.titulo} />
        <TitleItem title={'Título'} valor={item.titulo_ingles} />
        <TitleItem title={'Nome do Canditado'} valor={item.nome_do_candidato} />
        <PalavraChave item={item} />{/* */}


        <CardActions disableSpacing>
          <IconButton  size="small"  onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
            {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Veja Mais
</IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' >

          <TitleItem title={'Pais'} valor={item.pais} />

          <TitleItem title={'Nome da Instuituição'} valor={item.nome_instituicao} />
          <TitleItem title={'Codigo da Instituição'} valor={item.codigo_instituicao} />

          <TitleItem title={'Nome do Orgão'} valor={item.nome_orgao} />
          <TitleItem title={'Orgão'} valor={item.codigo_orgao} />

          <TitleItem title={'Curso'} valor={item.nome_curso} />
          <TitleItem title={'Nome do Curso(ingles)'} valor={item.nome_curso_ingles} />
          <TitleItem title={'Código do Curso'} valor={item.codigo_curso} />

          <TitleItem title={'Idioma'} valor={item.idioma} />
          <TitleItem title={'Tipo'} valor={item.tipo} />

          <AreaConhecimento item={item} />

          {[1, 2, 3, 4, 5, 6].map(i => {
            if (item[`nome_completo_do_participante_da_banca_${i}`] && item[`nome_completo_do_participante_da_banca_${i}`] !== "NULL") {
              return (
                <Card key={item.id} style={{ margin: 10 }}>
                  <CardContent>

                    <Typography fontWeight="fontWeightBold" >
                      <Box fontSize={16} m={1}>
                        {item[`nome_completo_do_participante_da_banca_${i}`]}
                      </Box>
                    </Typography >

                    <div style={{ paddingLeft: 10 }}>

                      {(item[`nome_para_citacao_do_participante_da_banca_${i}`] !== '' && item[`nome_para_citacao_do_participante_da_banca_${i}`] !== 'NULL') &&
                        <TitleItem title={'Nome para Citação'} valor={item[`nome_para_citacao_do_participante_da_banca_${i}`]} />}

                      {(item[`nro_id_cnpq_${i}`] !== '' && item[`nro_id_cnpq_${i}`] !== 'NULL') &&
                        <TitleItem title={'ID CNPQ'} valor={item[`nro_id_cnpq_${i}`]} />}

                    </div>


                  </CardContent>
                </Card>)
            }
            return undefined;

          })}


        </Collapse>

      </CardContent>


      <Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page} external_url={item.external_url} />

    </Card>
  );

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PartBancaGraduacao.jsx





export const PartBancaGraduacao = (item) => {

  const table = 'part_banca_graduacao';/**/



  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ backgroundColor: '#ffffff', margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader title='Participação em Banca de Graduação'

        subheader={'Ano: ' + item.ano}
      />
      <CardContent>


        <TitleItem title={'Título'} valor={item.titulo} />
        <TitleItem title={'Título'} valor={item.titulo_ingles} />
        <TitleItem title={'Nome do Canditado'} valor={item.nome_do_candidato} />



        <CardActions disableSpacing>
          <IconButton  size="small"  onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
            {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Veja Mais
</IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' >

          <TitleItem title={'Pais'} valor={item.pais} />

          <TitleItem title={'Nome da Instuituição'} valor={item.nome_da_instituicao} />
          <TitleItem title={'Codigo da Instituição'} valor={item.codigo_instituicao} />

          <TitleItem title={'Nome do Orgão'} valor={item.nome_orgao} />
          <TitleItem title={'Orgão'} valor={item.codigo_orgao} />

          <TitleItem title={'Curso'} valor={item.nome_curso} />
          <TitleItem title={'Nome do Curso(ingles)'} valor={item.nome_curso_ingles} />
          <TitleItem title={'Código do Curso'} valor={item.codigo_curso} />

          <TitleItem title={'Idioma'} valor={item.idioma} />
          <TitleItem title={'Tipo'} valor={item.tipo} />

          {[1, 2, 3, 4, 5, 6].map(i => {
            if (item[`nome_completo_do_participante_da_banca_${i}`] && item[`nome_completo_do_participante_da_banca_${i}`] !== "NULL") {
              return (
                <Card key={item.id} style={{ margin: 10 }}>
                  <CardContent>

                    <Typography fontWeight="fontWeightBold" >
                      <Box fontSize={16} m={1}>
                        {item[`nome_completo_do_participante_da_banca_${i}`]}
                      </Box>
                    </Typography >

                    <div style={{ paddingLeft: 10 }}>

                      {(item[`nome_para_citacao_do_participante_da_banca_${i}`] !== '' && item[`nome_para_citacao_do_participante_da_banca_${i}`] !== 'NULL') &&
                        <TitleItem title={'Nome para Citação'} valor={item[`nome_para_citacao_do_participante_da_banca_${i}`]} />}

                      {(item[`nro_id_cnpq_${i}`] !== '' && item[`nro_id_cnpq_${i}`] !== 'NULL') &&
                        <TitleItem title={'ID CNPQ'} valor={item[`nro_id_cnpq_${i}`]} />}

                    </div>


                  </CardContent>
                </Card>)
            }
            return undefined;

          })}


        </Collapse>

      </CardContent>


      <Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page} external_url={item.external_url} />

    </Card>
  );

}









/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PartBancaJulgadoraConcursoPublico.jsx





export const PartBancaJulgadoraConcursoPublico = (item) => {

  const table = 'part_banca_julgadora_concurso_publico';/**/



  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ backgroundColor: '#ffffff', margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader title='Participação em Banca Julgadora de Concurso Publico'

        subheader={'publicado em: ' + item.ano}
      />
      <CardContent>

        <TitleItem title={'Título'} valor={item.titulo} />
        <TitleItem title={'Título'} valor={item.titulo_ingles} />
        <TitleItem title={'Nome da Instuituição'} valor={item.nome_da_instituicao} />
        <TitleItem title={'Nome do Orgão'} valor={item.nome_orgao} />




        <CardActions disableSpacing>
          <IconButton  size="small"  onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
            {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Veja Mais
</IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' >

          <TitleItem title={'Pais'} valor={item.pais} />
          <TitleItem title={'Idioma'} valor={item.idioma} />

          {[1, 2, 3, 4, 5, 6].map(i => {
            if (item[`nome_completo_do_participante_da_banca_${i}`] && item[`nome_completo_do_participante_da_banca_${i}`] !== "NULL") {
              return (
                <Card key={item.id} style={{ margin: 10 }}>
                  <CardContent>

                    <Typography fontWeight="fontWeightBold" >
                      <Box fontSize={16} m={1}>
                        {item[`nome_completo_do_participante_da_banca_${i}`]}
                      </Box>
                    </Typography >

                    <div style={{ paddingLeft: 10 }}>

                      {(item[`nome_para_citacao_do_participante_da_banca_${i}`] !== '' && item[`nome_para_citacao_do_participante_da_banca_${i}`] !== 'NULL') &&
                        <TitleItem title={'Nome para Citação'} valor={item[`nome_para_citacao_do_participante_da_banca_${i}`]} />}

                      {(item[`nro_id_cnpq_${i}`] !== '' && item[`nro_id_cnpq_${i}`] !== 'NULL') &&
                        <TitleItem title={'ID CNPQ'} valor={item[`nro_id_cnpq_${i}`]} />}

                    </div>


                  </CardContent>
                </Card>)
            }
            return undefined;

          })}


        </Collapse>

      </CardContent>


      <Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page} external_url={item.external_url} />

    </Card>
  );

}






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PartBancaJulgadoraOutra.jsx





export const PartBancaJulgadoraOutra = (item) => {

  const table = 'part_banca_julgadora_outra';/**/



  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ backgroundColor: '#ffffff', margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader title='Participação em Banca Julgadora Outra'
        subheader={'publicado em: ' + item.ano}
      />
      <CardContent>

        <TitleItem title={'Título'} valor={item.titulo} />
        <TitleItem title={'Título'} valor={item.titulo_ingles} />
        <TitleItem title={'Nome do Canditado'} valor={item.nome_do_candidato} />
        <PalavraChave item={item} />{/* */}


        <CardActions disableSpacing>
          <IconButton  size="small"  onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
            {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Veja Mais
</IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' >

          <TitleItem title={'Pais'} valor={item.pais} />

          <TitleItem title={'Nome da Instuituição'} valor={item.nome_da_instituicao} />
          <TitleItem title={'Codigo da Instituição'} valor={item.codigo_instituicao} />

          <TitleItem title={'Nome do Orgão'} valor={item.nome_orgao} />
          <TitleItem title={'Orgão'} valor={item.codigo_orgao} />

          <TitleItem title={'Curso'} valor={item.nome_curso} />
          <TitleItem title={'Nome do Curso(ingles)'} valor={item.nome_curso_ingles} />
          <TitleItem title={'Código do Curso'} valor={item.codigo_curso} />

          <TitleItem title={'Idioma'} valor={item.idioma} />
          <TitleItem title={'Tipo'} valor={item.tipo} />

          <AreaConhecimento item={item} />

          {[1, 2, 3, 4, 5, 6].map(i => {
            if (item[`nome_completo_do_participante_da_banca_${i}`] && item[`nome_completo_do_participante_da_banca_${i}`] !== "NULL") {
              return (
                <Card key={item.id} style={{ margin: 10 }}>
                  <CardContent>

                    <Typography fontWeight="fontWeightBold" >
                      <Box fontSize={16} m={1}>
                        {item[`nome_completo_do_participante_da_banca_${i}`]}
                      </Box>
                    </Typography >

                    <div style={{ paddingLeft: 10 }}>

                      {(item[`nome_para_citacao_do_participante_da_banca_${i}`] !== '' && item[`nome_para_citacao_do_participante_da_banca_${i}`] !== 'NULL') &&
                        <TitleItem title={'Nome para Citação'} valor={item[`nome_para_citacao_do_participante_da_banca_${i}`]} />}

                      {(item[`nro_id_cnpq_${i}`] !== '' && item[`nro_id_cnpq_${i}`] !== 'NULL') &&
                        <TitleItem title={'ID CNPQ'} valor={item[`nro_id_cnpq_${i}`]} />}

                    </div>


                  </CardContent>
                </Card>)
            }
            return undefined;

          })}


        </Collapse>

      </CardContent>


      <Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page} external_url={item.external_url} />

    </Card>
  );

}






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PartBancaJulgadoraProfessorTitular.jsx





export const PartBancaJulgadoraProfessorTitular = (item) => {

  const table = 'part_banca_julgadora_professor_titular';/**/



  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ backgroundColor: '#ffffff', margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader title='Participação em Banca Julgadora de Professor Titular'
        subheader={'publicado em: ' + item.ano}
      />
      <CardContent>




        <TitleItem title={'Descrição e Informações Adcionais'} valor={item.descricao_informacoes_adicionais} />
        <TitleItem title={'Descrição e Informações Adcionais(ingles)'} valor={item.descricao_informacoes_adicionais_ingles} />



        <TitleItem title={'Título'} valor={item.titulo} />
        <TitleItem title={'Título'} valor={item.titulo_ingles} />
        <TitleItem title={'Nome do Canditado'} valor={item.nome_do_candidato} />
        <PalavraChave item={item} />{/* */}


        <CardActions disableSpacing>
          <IconButton  size="small"  onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
            {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Veja Mais
</IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' >

          <TitleItem title={'Pais'} valor={item.pais} />

          <TitleItem title={'Nome da Instuituição'} valor={item.nome_da_instituicao} />
          <TitleItem title={'Codigo da Instituição'} valor={item.codigo_instituicao} />

          <TitleItem title={'Nome do Orgão'} valor={item.nome_orgao} />
          <TitleItem title={'Orgão'} valor={item.codigo_orgao} />

          <TitleItem title={'Curso'} valor={item.nome_curso} />
          <TitleItem title={'Nome do Curso(ingles)'} valor={item.nome_curso_ingles} />
          <TitleItem title={'Código do Curso'} valor={item.codigo_curso} />

          <TitleItem title={'Idioma'} valor={item.idioma} />
          <TitleItem title={'Tipo'} valor={item.tipo} />

          <AreaConhecimento item={item} />

          {[1, 2, 3, 4, 5, 6].map(i => {
            if (item[`nome_completo_do_participante_da_banca_${i}`] && item[`nome_completo_do_participante_da_banca_${i}`] !== "NULL") {
              return (
                <Card key={item.id} style={{ margin: 10 }}>
                  <CardContent>

                    <Typography fontWeight="fontWeightBold" >
                      <Box fontSize={16} m={1}>
                        {item[`nome_completo_do_participante_da_banca_${i}`]}
                      </Box>
                    </Typography >

                    <div style={{ paddingLeft: 10 }}>

                      {(item[`nome_para_citacao_do_participante_da_banca_${i}`] !== '' && item[`nome_para_citacao_do_participante_da_banca_${i}`] !== 'NULL') &&
                        <TitleItem title={'Nome para Citação'} valor={item[`nome_para_citacao_do_participante_da_banca_${i}`]} />}

                      {(item[`nro_id_cnpq_${i}`] !== '' && item[`nro_id_cnpq_${i}`] !== 'NULL') &&
                        <TitleItem title={'ID CNPQ'} valor={item[`nro_id_cnpq_${i}`]} />}

                    </div>


                  </CardContent>
                </Card>)
            }
            return undefined;

          })}


        </Collapse>

      </CardContent>


      <Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page} external_url={item.external_url} />

    </Card>
  );

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PartBancaMestrado.jsx





export const PartBancaMestrado = (item) => {

  const table = 'part_banca_mestrado';/**/



  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ backgroundColor: '#ffffff', margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader title='Participação em Banca de Mestrado'

        subheader={'publicado em: ' + item.ano}
      />
      <CardContent>

        <TitleItem title={'Título'} valor={item.titulo} />
        <TitleItem title={'Título'} valor={item.titulo_ingles} />
        <TitleItem title={'Nome do Canditado'} valor={item.nome_do_candidato} />
        <PalavraChave item={item} />{/* */}


        <CardActions disableSpacing>
          <IconButton  size="small"  onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
            {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Veja Mais
</IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' >

          <TitleItem title={'Pais'} valor={item.pais} />

          <TitleItem title={'Nome da Instuituição'} valor={item.nome_da_instituicao} />
          <TitleItem title={'Codigo da Instituição'} valor={item.codigo_instituicao} />

          <TitleItem title={'Nome do Orgão'} valor={item.nome_orgao} />
          <TitleItem title={'Orgão'} valor={item.codigo_orgao} />

          <TitleItem title={'Curso'} valor={item.nome_curso} />
          <TitleItem title={'Nome do Curso(ingles)'} valor={item.nome_curso_ingles} />
          <TitleItem title={'Código do Curso'} valor={item.codigo_curso} />

          <TitleItem title={'Idioma'} valor={item.idioma} />
          <TitleItem title={'Tipo'} valor={item.tipo} />

          <AreaConhecimento item={item} />

          {[1, 2, 3, 4, 5, 6].map(i => {
            if (item[`nome_completo_do_participante_da_banca_${i}`] && item[`nome_completo_do_participante_da_banca_${i}`] !== "NULL") {
              return (
                <Card key={item.id} style={{ margin: 10 }}>
                  <CardContent>

                    <Typography fontWeight="fontWeightBold" >
                      <Box fontSize={16} m={1}>
                        {item[`nome_completo_do_participante_da_banca_${i}`]}
                      </Box>
                    </Typography >

                    <div style={{ paddingLeft: 10 }}>

                      {(item[`nome_para_citacao_do_participante_da_banca_${i}`] !== '' && item[`nome_para_citacao_do_participante_da_banca_${i}`] !== 'NULL') &&
                        <TitleItem title={'Nome para Citação'} valor={item[`nome_para_citacao_do_participante_da_banca_${i}`]} />}

                      {(item[`nro_id_cnpq_${i}`] !== '' && item[`nro_id_cnpq_${i}`] !== 'NULL') &&
                        <TitleItem title={'ID CNPQ'} valor={item[`nro_id_cnpq_${i}`]} />}

                    </div>


                  </CardContent>
                </Card>)
            }
            return undefined;

          })}


        </Collapse>

      </CardContent>


      <Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page} external_url={item.external_url} />

    </Card>
  );

}




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PartCongresso.jsx





export const PartCongresso = (item) => {

  const table = 'part_congresso';/**/



  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ backgroundColor: '#ffffff', margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader title='Participação em Congresso'
        subheader={'Ano: ' + item.ano}
      />
      <CardContent>


        <TitleItem title={'Título'} valor={item.titulo} />
        <TitleItem title={'Título Ingles'} valor={item.titulo_ingles} />
        <TitleItem title={'Nome do Seminário'} valor={item.nome_do_evento} />
        <TitleItem title={'Nome do Seminário(ingles)'} valor={item.nome_do_evento_ingles} />
        <TitleItem title={'Instituição'} valor={item.nome_da_instituicao} />



        <CardActions disableSpacing>
          <IconButton  size="small"  onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
            {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Veja Mais
</IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' >
          <TitleItem title={'Forma de Participação'} valor={item.forma_participacao} />
          <TitleItem title={'Local do Evento'} valor={item.local_do_evento} />
          <TitleItem title={'Cidade do Evento'} valor={item.cidade_do_evento} />
          <TitleItem title={'Flag de Divulgação'} valor={item.flag_divulgacao_cientifica} />
          <TitleItem title={'Flag Relevância'} valor={item.flag_relevancia} />
          <TitleItem title={'Idioma'} valor={item.idioma} />
          <TitleItem title={'Meio de Divulgação'} valor={item.meio_de_divulgacao} />
          <TitleItem title={'Natureza'} valor={item.natureza} />
          <TitleItem title={'Pais'} valor={item.pais} />
          <TitleItem title={'Tipo de Participação'} valor={item.tipo_participacao} />
          <TitleItem title={'Código da Instituição'} valor={item.codigo_instituicao} />
          <TitleItem title={'Home Page'} valor={item.home_page} />
          <TitleItem title={'Nome do Participante do Congresso'} valor={item.nome_completo_do_participante_de_eventos_congressos} />
          <TitleItem title={'Nome para Citação do Congresso'} valor={item.nome_para_citacao_do_participante_de_eventos_congressos} />
          <TitleItem title={'Número do ID_CNPQ'} valor={item.nro_id_cnpq} />
        </Collapse>
      </CardContent>
      <Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page} external_url={item.external_url} />
    </Card>
  );

}






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PartEncontro.jsx





export const PartEncontro = (item) => {

  const table = 'part_encontro';/**/



  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ backgroundColor: '#ffffff', margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader title='Participação em Encontro' subheader={'publicado em: ' + item.ano}
      />
      <CardContent>


        
        <TitleItem title={'Título'} valor={item.titulo} />
        <TitleItem title={'Título Ingles'} valor={item.titulo_ingles} />
        <TitleItem title={'Nome do Seminário'} valor={item.nome_do_evento} />
        <TitleItem title={'Nome do Seminário(ingles)'} valor={item.nome_do_evento_ingles} />
        <TitleItem title={'Instituição'} valor={item.nome_da_instituicao} />




        <CardActions disableSpacing>
          <IconButton  size="small"  onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
            {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Veja Mais
      </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' >

          <TitleItem title={'Forma de Participação'} valor={item.forma_participacao} />
          <TitleItem title={'Local do Evento'} valor={item.local_do_evento} />
          <TitleItem title={'Cidade do Evento'} valor={item.cidade_do_evento} />
          <TitleItem title={'Flag de Divulgação'} valor={item.flag_divulgacao_cientifica} />
          <TitleItem title={'Flag Relevância'} valor={item.flag_relevancia} />
          <TitleItem title={'Idioma'} valor={item.idioma} />
          <TitleItem title={'Meio de Divulgação'} valor={item.meio_de_divulgacao} />
          <TitleItem title={'Natureza'} valor={item.natureza} />
          <TitleItem title={'Pais'} valor={item.pais} />
          <TitleItem title={'Tipo de Participação'} valor={item.tipo_participacao} />
          <TitleItem title={'Código da Instituição'} valor={item.codigo_instituicao} />
          <TitleItem title={'Home Page'} valor={item.home_page} />
          <TitleItem title={'Nome do Participante do Congresso'} valor={item.nome_completo_do_participante_de_eventos_congressos} />
          <TitleItem title={'Nome para Citação do Congresso'} valor={item.nome_para_citacao_do_participante_de_eventos_congressos} />
          <TitleItem title={'Número do ID_CNPQ'} valor={item.nro_id_cnpq} />


        </Collapse>
      </CardContent>



      <Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page} external_url={item.external_url} />
    </Card>
  );

}






///////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PartOficina.jsx




export const PartOficina = (item) => {

  const table = 'part_oficina';/**/

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ backgroundColor: '#ffffff', margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader title='Participação em Oficina'



        subheader={'Ano: ' + item.ano}
      />
      <CardContent>
        <TitleItem title={'Título'} valor={item.titulo} />
        <TitleItem title={'Título Ingles'} valor={item.titulo_ingles} />
        <TitleItem title={'Nome do Seminário'} valor={item.nome_do_evento} />
        <TitleItem title={'Nome do Seminário(ingles)'} valor={item.nome_do_evento_ingles} />







        <CardActions disableSpacing>
          <IconButton  size="small"  onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
            {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Veja Mais
</IconButton>
        </CardActions>

      </CardContent>

      <Collapse in={expanded} timeout='auto' >
        <CardContent style={{ backgroundColor: '#ffffff' }}>
          <TitleItem title={'Instituição'} valor={item.nome_da_instituicao} />

          <TitleItem title={'Forma de Participação'} valor={item.forma_participacao} />
          <TitleItem title={'Local do Evento'} valor={item.local_do_evento} />
          <TitleItem title={'Cidade do Evento'} valor={item.cidade_do_evento} />
          <TitleItem title={'Flag de Divulgação'} valor={item.flag_divulgacao_cientifica} />
          <TitleItem title={'Flag Relevância'} valor={item.flag_relevancia} />
          <TitleItem title={'Idioma'} valor={item.idioma} />
          <TitleItem title={'Meio de Divulgação'} valor={item.meio_de_divulgacao} />
          <TitleItem title={'Natureza'} valor={item.natureza} />
          <TitleItem title={'Pais'} valor={item.pais} />
          <TitleItem title={'Tipo de Participação'} valor={item.tipo_participacao} />
          <TitleItem title={'Código da Instituição'} valor={item.codigo_instituicao} />
          <TitleItem title={'Home Page'} valor={item.home_page} />
          <TitleItem title={'Nome do Participante do Congresso'} valor={item.nome_completo_do_participante_de_eventos_congressos} />
          <TitleItem title={'Nome para Citação do Congresso'} valor={item.nome_para_citacao_do_participante_de_eventos_congressos} />
          <TitleItem title={'Número do ID_CNPQ'} valor={item.nro_id_cnpq} />


        </CardContent>
      </Collapse>
      <Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page} external_url={item.external_url}/**/ />

    </Card>
  );

}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PartOutras.jsx









export const PartOutras = (item) => {

  const table = 'part_evento_congresso_outra';/**/

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ backgroundColor: '#ffffff', margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader title='Participação em Outras'










        subheader={'publicado em: ' + item.ano}
      />
      <CardContent>




        <TitleItem title={'Título do Trabalho'} valor={item.titulo} />
        <TitleItem title={'Título do Trabalho(ingles)'} valor={item.titulo_ingles} />

        <AreaConhecimento item={item} />

        <CardActions disableSpacing>
          <IconButton  size="small"  onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
            {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Veja Mais
</IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' >


          <TitleItem title={'Flag Divugação Científica'} valor={item.flag_divulgacao_cientifica} />
          <TitleItem title={'Flag Relevância'} valor={item.flag_relevancia} />
          <TitleItem title={'Forma de Participação'} valor={item.forma_participacao} />

          <TitleItem title={'Meio de Divulgação'} valor={item.meio_de_divulgacao} />
          <TitleItem title={'Tipo de Participação'} valor={item.tipo_participacao} />
          <TitleItem title={'Cidade'} valor={item.cidade_do_evento} />


          <TitleItem title={'Código da Instituição'} valor={item.codigo_instituicao} />
          <TitleItem title={'Local do Evento'} valor={item.local_do_evento} />
          <TitleItem title={'Nome do Evento'} valor={item.nome_do_evento} />
          <TitleItem title={'Nome do Evento(ingles)'} valor={item.nome_do_evento_ingles} />
          <TitleItem title={'Participante do Evento'} valor={item.nome_completo_do_participante_de_eventos_congressos} />
          <TitleItem title={'Nome para Citação'} valor={item.nome_para_citacao_do_participante_de_eventos_congressos} />
          <TitleItem title={'Id CNPQ'} valor={item.nro_id_cnpq} />




          <TitleItem title={'Pais'} valor={item.pais} />

          <TitleItem title={'Id Orientador'} valor={item.numero_id_orientado} />
          <TitleItem title={'Tipo de Orientação'} valor={item.tipo_de_orientacao} />

          <TitleItem title={'Flag Bolsa'} valor={item.flag_bolsa} />

          <TitleItem title={'Curso'} valor={item.nome_do_curso} />
          <TitleItem title={'Curso(ingles)'} valor={item.nome_do_curso_ingles} />
          <TitleItem title={'Código Curso'} valor={item.codigo_curso} />

          <TitleItem title={'Agencia'} valor={item.nome_da_agencia} />
          <TitleItem title={'Instituição'} valor={item.nome_da_instituicao} />

          <TitleItem title={'Orgão'} valor={item.nome_orgao} />
          <TitleItem title={'Código Orgão'} valor={item.codigo_orgao} />

          <TitleItem title={'Orientando'} valor={item.nome_do_orientando} />
          <TitleItem title={'Id Orientador'} valor={item.numero_id_orientando} />
          <TitleItem title={'Tipo '} valor={item.tipo} />

          <TitleItem title={'Idioma'} valor={item.idioma} />

          <TitleItem title={'Mestrado'} valor={item.mestrado} />

          <TitleItem title={'Código Instituição'} valor={item.codigo_instituicao} />

          <TitleItem title={'Código Agencia Financiadora'} valor={item.codigo_agencia_financiadora} />
        </Collapse>

      </CardContent>

      <Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page} external_url={item.external_url} />
    </Card>
  );

}












/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PartSeminario.jsx



const table = 'part_seminario';/**/

export const PartSeminario = (item) => {

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ backgroundColor: '#ffffff', margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader title='Participação em Seminário'

        subheader={'Ano: ' + item.ano}
      />
      <CardContent>

        <TitleItem title={'Título'} valor={item.titulo} />
        <TitleItem title={'Título Ingles'} valor={item.titulo_ingles} />
        <TitleItem title={'Nome do Seminário'} valor={item.nome_do_evento} />
        <TitleItem title={'Nome do Seminário(ingles)'} valor={item.nome_do_evento_ingles} />










      </CardContent>
      <CardActions disableSpacing>
        <IconButton  size="small"  onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
          {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Veja Mais
      </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' >
        <CardContent >
          <TitleItem title={'Instituição'} valor={item.nome_da_instituicao} />
          <TitleItem title={'Cógigo da Instituição'} valor={item.codigo_instituicao} />
          <TitleItem title={'Nome do Participante do Congresso'} valor={item.nome_completo_do_participante_de_eventos_congressos} />
          <TitleItem title={'Nome para Citação do Congresso'} valor={item.nome_para_citacao_do_participante_de_eventos_congressos} />
          <TitleItem title={'Forma Participação'} valor={item.forma_participacao} />
          <TitleItem title={'Local do Evento'} valor={item.local_do_evento} />
          <TitleItem title={'Cidade do Evento'} valor={item.cidade_do_evento} />
          <TitleItem title={'Pais'} valor={item.pais} />
          <TitleItem title={'Número do ID_CNPQ'} valor={item.nro_id_cnpq} />


          <TitleItem title={'Idioma'} valor={item.idioma} />
          <TitleItem title={'Meio de Divulgação'} valor={item.meio_de_divulgacao} />
          <TitleItem title={'Participação'} valor={item.tipo_participacao} />
          <TitleItem title={'Flag de Relevância'} valor={item.flag_relevancia} />
          <TitleItem title={'Flag de Divulgação'} valor={item.flag_divulgacao_cientifica} />

          <TitleItem title={'Natureza'} valor={item.natureza} />
          <TitleItem title={'doi'} valor={item.doi} />
          <TitleItem title={'Home Page'} valor={item.home_page} />
        </CardContent>
      </Collapse>
<Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page} external_url={item.external_url} />
    </Card>
  );

}






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PartSimposio.jsx





export const PartSimposio = (item) => {

  const table = 'part_simposio';/**/



  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ backgroundColor: '#ffffff', margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader title='Participação em Simpósio'

        subheader={'Ano: ' + item.ano}
      />
      <CardContent>

        <TitleItem title={'Título'} valor={item.titulo} />
        <TitleItem title={'Título(ingles)'} valor={item.titulo_ingles} />
        <TitleItem title={'Nome do Evento'} valor={item.nome_do_evento} />
        <TitleItem title={'Nome do Evento(ingles)'} valor={item.nome_do_evento_ingles} />

        <TitleItem title={'Instituição'} valor={item.nome_da_instituicao} />









      </CardContent>
      <CardActions disableSpacing>
        <IconButton  size="small"  onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
          {!expanded ? <ExpandMoreIcon /> : <ExpandLessOutlinedIcon />}Veja Mais
</IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' >
        <CardContent style={{ backgroundColor: '#ffffff' }}>

          <TitleItem title={'Forma de Participação'} valor={item.forma_participacao} />
          <TitleItem title={'Local do Evento'} valor={item.local_do_evento} />
          <TitleItem title={'Cidade do Evento'} valor={item.cidade_do_evento} />
          <TitleItem title={'Flag de Divulgação'} valor={item.flag_divulgacao_cientifica} />
          <TitleItem title={'Flag Relevância'} valor={item.flag_relevancia} />
          <TitleItem title={'Idioma'} valor={item.idioma} />
          <TitleItem title={'Meio de Divulgação'} valor={item.meio_de_divulgacao} />
          <TitleItem title={'Natureza'} valor={item.natureza} />
          <TitleItem title={'Pais'} valor={item.pais} />
          <TitleItem title={'Tipo de Participação'} valor={item.tipo_participacao} />
          <TitleItem title={'Código da Instituição'} valor={item.codigo_instituicao} />
          <TitleItem title={'Home Page'} valor={item.home_page} />
          <TitleItem title={'Nome do Participante do Congresso'} valor={item.nome_completo_do_participante_de_eventos_congressos} />
          <TitleItem title={'Nome para Citação do Congresso'} valor={item.nome_para_citacao_do_participante_de_eventos_congressos} />
          <TitleItem title={'Número do ID_CNPQ'} valor={item.nro_id_cnpq} />
        </CardContent>
      </Collapse>
      <Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page} external_url={item.external_url} />
    </Card>
  );

}






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PTPremioTitulo.jsx





export const PTPremioTitulo = (item) => {

  const table = 'pt_premio_titulo';/**/



  const [expanded, setExpanded] = useState(false);

 

  return (
    <Card style={{ backgroundColor: '#ffffff', margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader title='Prêmio e Titulo'





        subheader={'Ano da Premiação: ' + item.ano_da_premiacao}
      />

      <CardContent>

        <TitleItem title={'Prémio ou Título'} valor={item.nome_do_premio_ou_titulo} />
        <TitleItem title={'Prémio ou Título(Ingles)'} valor={item.nome_do_premio_ou_titulo_ingles} />
        <TitleItem title={'Entidade Promotora'} valor={item.nome_da_entidade_promotora} />


      </CardContent>
        <Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page} external_url={item.external_url} />

    </Card>
  );

}






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FCCursoCurtaDuracao.jsx





export const FCCursoCurtaDuracao = (item) => {

  const table = 'fc_curso_curta_duracao';/**/



  const [expanded, setExpanded] = useState(false);

  

  return (
    <Card style={{ backgroundColor: '#ffffff', margin:20,   borderWidth:2,
          borderStyle:"solid",
          borderColor:"#000000",
          borderRadius:20 }}>
      <CardHeader title='Curso Curta Duração'
        subheader={'Período: de ' + item.ano_de_inicio + " a " + item.ano_de_conclusao}
      />
      <CardContent>
        <TitleItem title={'Curso'} valor={item.nome_do_curso} />
        <TitleItem title={'Curso(Ingles)'} valor={item.nome_do_curso_ingles} />
        <TitleItem title={'Instituição'} valor={item.nome_da_instituicao} />
        <TitleItem title={'Orgão'} valor={item.nome_orgao} />
        <TitleItem title={'Carga Horária'} valor={item.carga_horaria} />
        <TitleItem title={'Nivel'} valor={item.nivel} />
        <TitleItem title={'Sequencia de Formação'} valor={item.sequencia_formacao} />
        <TitleItem title={'Tipo de Orientação'} valor={item.tipo_de_orientacao} />
        <TitleItem title={'Codigo da Instituição'} valor={item.codigo_instituicao} />
        <TitleItem title={'Codigo Orgão'} valor={item.codigo_orgao} />
        <TitleItem title={'Código do Curso'} valor={item.codigo_curso} />
      </CardContent>
        <Url key={item.id} doi={item.doi} table={table} id={item.id} home_page={item.home_page} external_url={item.external_url} />

    </Card>
  );

}






