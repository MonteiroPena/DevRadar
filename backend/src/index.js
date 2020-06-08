const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://monteiro:monteiro@cluster0-jumez.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(express.json());
app.use(routes);

app.listen(3333);

// Métodos HTTP: get, post, put, delete

// Tipos de parâmetros:
//Query Params: request.query (Filtros, ordenação, paginação, ...)
//Routs Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)

