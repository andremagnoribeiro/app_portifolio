
import React from 'react';

import Typography from '@material-ui/core/Typography';

export const PalavraChave = ({ item }) =>

  (
    <div>

      <Typography color="textSecondary" >

        {item.palavra_chave_1 !== "NULL" && item.palavra_chave_1 ? "Palavras Chaves:" : undefined}

        {item.palavra_chave_1 !== "NULL" && item.palavra_chave_1 ? " " + item.palavra_chave_1 : undefined}
        {item.palavra_chave_2 !== "NULL" && item.palavra_chave_2 ? ", " + item.palavra_chave_2 : undefined}
        {item.palavra_chave_3 !== "NULL" && item.palavra_chave_3 ? ", " + item.palavra_chave_3 : undefined}
        {item.palavra_chave_4 !== "NULL" && item.palavra_chave_4 ? ", " + item.palavra_chave_4 : undefined}
        {item.palavra_chave_5 !== "NULL" && item.palavra_chave_5 ? ", " + item.palavra_chave_5 : undefined}
        {item.palavra_chave_6 !== "NULL" && item.palavra_chave_6 ? ", " + item.palavra_chave_6 : undefined}
      </Typography>
    </div>

  )


