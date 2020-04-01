const express = require("express");
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require("./routes");

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes) 
app.use(errors())
/**
*
*Métodos HTTP:
*
*GET: buscar uma informação do back-end  //listagem de usuários //rotas acessadas diretamente pela url
*POST: criar uma informação no back-end //cadastro de usuário 
*PUT: alterar uma informação no back-end  // alterar o valor do incidente
*DELETE: deletar uma informação no back-end // retirar um incidente ou uma ong do banco de dados
*
*Tipos de Parametros:
*
*Query Params: Parametros nomeados enviados na rota após "?" (filtros, paginação)
*Exemplo: http://localhost:3333/users?aluno=Bernard
*
*Route Params: Parametros utilizados para identificar recursos
*Exemplo: http://localhost:3333/users/:id
*
*Request Body: corpo da requisição, usado para criar ou alterar recursos


*/


module.exports = app;