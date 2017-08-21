/******************************************************************/
/* Nombre:      Manejador de archivos
/* Autor:       Cristian
/* Fecha:       20/08/17
/* Descripción: Ejecuta las funciones requeridas para obtener los archivos y leerlos
/******************************************************************/


// Modulos
var formidable = require('formidable');
var fs = require('fs');
var path = require('path');


// Recibe los archivos del post y los guarda temporalmente
function saveFiles(req, results) {
  var filesArray = [];
  var form = new formidable.IncomingForm();

  form.encoding = 'utf-8';
  form.uploadDir = './LOC/temp';
  form.multiples = true;

  // Convierte la peticion post a un formato que formidable use
  form.parse(req);

  // Cada que encuentre un archivo lo guarda en el array
  form.on('file', function(name, file) {
    filesArray.push(file);
  });
  // Si hay un error
  form.on('error', function(err) {
    console.log('Error en saveFiles: ' + err);
    results('Error en savefiles: ' + err, null);
  });
  // Cuando guarde todos los archivos active la funcion callback
  form.on('end', function() {
    results(null, filesArray);
  });

}

exports.saveFiles = saveFiles;
