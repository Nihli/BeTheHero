const express = require('express');

const routes = express.Router();

const OngController = require('./controllers/OngController')

const IncidentController = require('../src/controllers/IncidentController');

const ProfileController = require('../src/controllers/ProfileController');

const SessionController = require('../src/controllers/SessionController');

/*
*Tipos de parametros:
Query Param: parametros nomeados enviados na rota após ? (filtros, paginação). Acesso eles com const params = request.query;
Route Param: parametros usados para identificar recursos (/users/1). Acesso eles com const params = request.params; e app.get('/users/:id' na rota.
Request Body: Corpo da requisição para criar ou alterar recursos. Acesso eles com const body = request.body; Mas atenção: necessário usar o app.use(express.json()); para garantir que teu app entende os json.
*/

/*
* Driver: SELECT * FROM users
* Query Builder: Usa js para fazer queries - table('users').select('*').where(''). Usaremos o Knex para isso
*/

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.index);

module.exports = routes;