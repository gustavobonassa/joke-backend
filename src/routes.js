const express = require('express');

const Route = express.Router();

const JokeController = require('./controllers/JokeController');
const AcceptController = require('./controllers/AcceptController');

Route.get('/joke', JokeController.index);
Route.post('/joke', JokeController.store);
Route.delete('/decline/:id', JokeController.destroy);

Route.get('/accept', AcceptController.index);
Route.put('/accept/:id', AcceptController.update);


module.exports = Route;