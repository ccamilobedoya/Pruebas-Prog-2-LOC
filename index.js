/******************************************************************/
/* Nombre:      Index
/* Autor:       Cristian
/* Fecha:       19/08/17
/* Descripción: Es el modulo de inicio, contiene las rutas de la aplicacion
/*              ademas el inicio del servidor
/******************************************************************/

// Constantes
const PORT = 8888;

// Modulos requeridos
var express = require('express');
var routeLOC = require('./routes/routeLOC');

// Variables
var app = express();

// Uso de rutas
app.use('/loc', routeLOC);

// Inicio del servidor
app.listen(PORT, function () {
  console.log('Listening on localhost:' + PORT);
});
