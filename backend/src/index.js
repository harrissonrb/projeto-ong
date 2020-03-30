const express = require('express');
const cors = require('cors')
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Método HTTP:
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Parms: Paramêtros nomeados enviados na rota após "?" (filtros, paginação)
  * Rout Parms: Paraêmetros utilizados para identificar recursos
  * Request Body: COrpo da requisição, utilização para criar ou alterar recursos
  */

  /**
   * SQL: SQLite 
   */

 /**
   * Driver: SELECT * FROM users
   * Query Builder: table ('users').select('*').where()
   */


app.listen(3131);