/******************************************************************/
/* Nombre:      Ruta de la api de conteo de linea
/* Autor:       Cristian
/* Fecha:       20/08/17
/* Descripción: Ejecuta las funciones necesarios de acuerdo a la ruta
/******************************************************************/

var express = require('express');
var fileManager = require('../LOC/fileManager');
var countingLOC = require('../LOC/countingLOC');
var router = express.Router();

// Se ejecuta siempre que se accede a la ruta /loc/api
// No le importa ni el metodo ni el resto de la url
router.use(function(req, res, next) {
  console.log('Se accedio a la api del LOC\n' +
    'Se dirige a: '+ req.url + '\nMetodo: ' + req.method);
  // Siga con las rutas normalmente
  next();
});

// Solo se necesita recibir archivos
// Post para subir, con ruta /loc/api/upload
router.post('/upload', function(req, res) {
  fileManager.saveFiles(req, function(err, results) {
    if (err) {
      console.log(err);
    } else {
      //console.log(results);
      fileManager.extractTextFromFiles(results, function(err, texts){
        if (err) {
          console.log(err);
        } else {
          //console.log(texts);
          //res.render('LOCresults', { title: 'Hey', message: 'algo' });

          countingLOC.countAll(results, texts, function(err, info) {
            //console.log(info[0].vars);
            if (err) {
              console.log(err);
            } else {
              res.render('LOCresults', {information: info});
            }
          });
        }
      })
    }
  });
});


// Exporta todo lo relacionado a la variable router
module.exports = router;
