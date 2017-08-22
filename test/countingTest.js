// Modulos externos
const chai = require('chai');
const chaiParam = require('chai-param');

// Modulos
const countingLOC = require('../LOC/countingLOC');

chai.use(chaiParam);


describe('El modulo que cuenta las lineas de codigo', function(){
  it('Debe tener una funcion de conteo', function(){
    chai.expect(countingLOC.countAll).to.be.a('function');
  });
 it('Los parametros de la funcion no deben ser algo diferente a un vector', function(){
      /*
      var files = [{name: 'name'}];
      var texts = ['a;'];

      var func = countingLOC.countAll(files, [' '], function(){});
      //var func = countingLOC.countAll;
      chai.expect(func).param('files', 'texts')
          .to.be.an('array');
      */
      files = '';
      texts = '';
      countingLOC.countAll(files, texts, function(err, data){
        chai.expect(err).to.not.be.null;
      });
  });
  it('Al obtener los textos debe retornar un objeto', function(){
    var files = [{name: 'name'}];
    var texts = ['a;'];

    countingLOC.countAll(files, texts, function(err, data){
      if (!err){
        chai.expect(data).to.not.be.empty;
      }
    });
  });
  it('El objeto retornado debe tener el valor de nombre', function(){
    var files = [{name: 'name'}];
    var texts = ['a;'];

    countingLOC.countAll(files, texts, function(err, data){
      if (!err){
        chai.expect(data[0].name).to.not.be.empty;
      }
    });
  });
});
