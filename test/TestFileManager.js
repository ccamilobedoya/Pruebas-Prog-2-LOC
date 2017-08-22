const fileManager = require('../LOC/fileManager');
const chai = require('chai');
var path = require('path');
var textract = require('textract');

describe('El modulo Gestor de Archivos', () => {
  it('Deberia tener una funcion que guarde los archivos tipo texto temporalmente ', () => {
    chai.expect(fileManager.saveFiles).to.be.a('function');
  });
  it('Deberia tener una funcion que extrae el texto de los archivos', () => {
    chai.expect(fileManager.extractTextFromFiles).to.be.a('function');
  });

  describe('En la funcion extractTextFromFiles', function(){
    it('Los datos subidos deben ser string', () => {
        var file = [{path:'../LOC/fileManager'}];
        fileManager.extractTextFromFiles(file, function(err, results){
          resultsTest =results;
          chai.expect(resultsTest).to.be.a('string');
    });
  });
 });
});
