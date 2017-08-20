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
var apiLOC = require('./routes/apiLOC');

// Variables
var app = express();

// Uso de rutas
app.use('/loc', routeLOC);
app.use('/loc/api', apiLOC);

//ruta para cargar el formulario
app.use('/static', express.static(__dirname + '/public'));

// Inicio del servidor
app.listen(PORT, function () {
  console.log('Listening on localhost:' + PORT);
});
