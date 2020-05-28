import axios from 'axios'
const server="http://localhost"


export const pb_artigo_publicado = (user) => axios
  .get(`${server}/api/getTable.php?user=${user}&name=pb_artigo_publicado&a1=titulo_do_artigo&a2=titulo_do_periodico_ou_revista`)
  .then(({ data }) => {
    console.log("pb_artigo_publicado", data);
    return data;
  })

export const pb_capitulo_livro_publicado_organizado = (user, search_word) => axios
  .get(`${server}/api/getTable.php?user=${user}&name=pb_capitulo_livro_publicado_organizado&a1=tipo&a2=titulo_do_capitulo_do_livro&a3=titulo_do_livro&a4=nome_da_editora`)
  .then(({ data }) => {
    console.log("livro_publicado_organizad", data);
    return data;
  })


