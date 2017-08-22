/******************************************************************/
/* Nombre:      Manejador de archivos
/* Autor:       Cristian
/* Fecha:       21/08/17
/* Descripción: Cuenta los datos importantes de acuerdo a los textos recibidos
/******************************************************************/

// Modulos
var async = require('async');


// Cuenta las lineas de codigo y todos sus items
function countAll(files, texts, information) {
  // Array con la informacion de cada archivo
  var info = [];

  // Loop para contar por cada archivo
  async.forEachOf(texts, function(value, key, cb){
    //texts[key] = texts[key].replace(/ /g, '');
    //texts[key] = texts[key].replace(/};/g, '');
    //texts[key] = texts[key].replace(/);/g, '');
    var _semicolons = (texts[key].match(/;/g) || []).length;
    var _keywords = (texts[key].match(/\b(for|if|else|break|continue|do|while|function|switch|throw|var|const|require|exports|return)\b/g) || []).length;
    var _vars = (texts[key].match(/\bvar\b/g) || []).length;
    var _consts = (texts[key].match(/\bconst\b/g) || []).length;
    var _functions = (texts[key].match(/\bfunction\b/g) || []).length;

    if (files[key].name == 'countingLOC.js'){
    	_keywords = _keywords - 15;
    	_vars--;
    	_consts--;
    	_functions--;
    }

    // Objeto temporal que almacena los datos importantes de cada archivo
    var fileInfo = {
      name : files[key].name,
      loc : _semicolons + _functions,
      keywords : _keywords,
      vars : _vars,
      consts : _consts,
      functions : _functions
    };

    info.push(fileInfo);
    cb();
  }, function(err){
    if (info.length === 0 || info !== 'undefined' || info == null){
      information('Array vacio de texto. ' + err, null);
    } else {
      information(null, info);
    }
  });
}

exports.countAll = countAll;
