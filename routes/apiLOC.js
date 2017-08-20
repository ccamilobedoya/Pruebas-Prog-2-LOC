/******************************************************************/
/* Nombre:      Ruta de conteo de linea
/* Autor:       Cristian
/* Fecha:       20/08/17
/* Descripción: Ejecuta las funciones necesarios de acuerdo a la ruta
/******************************************************************/

var express = require('express');
var router = express.Router();

// Se ejecuta siempre que se accede a la ruta /loc/api
// No le importa ni el metodo ni el resto de la url
router.use(function(req, res, next) {
  console.log('Se accedio a la api del LOC\nSe dirige a: '+
    req.url + '\nMetodo: ' + req.method);
  next();
});

// Solo se necesita recibir archivos
// Post para subir, con ruta /loc/api/upload
router.post('/upload', function(req, res) {
  console.log("upload");
});


// Exporta todo lo relacionado a la variable router
module.exports = router;
