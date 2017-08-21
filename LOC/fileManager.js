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
function handleUpload(req) {
  var files = [];
  var form = new formidable.IncomingForm();

  form.encoding = 'utf-8';
  form.uploadDir = './LOC/temp';
  form.multiples = true;
  form.maxFieldsSize = 5 * 1024 * 1024; // 5MB

  form.on('file', function(name, file) {
    files.push([name, file]);
  });
}

exports.handleUpload = handleUpload;
