var express = require('express');
var router = express.Router();
const CarroController = require('../controller/CarroController.js');

router.get('/', function(req, res, next) {
  CarroController.listCarro(req, res)
});

router.post('/create', function(req, res, next) {
 CarroControllerController.createCarro(req, res)
});

router.post('/update', function(req, res, next) {
  CarroController.updateCarro(req, res)
});

router.post('/delete', function(req, res, next) {
  CarroController.deleteCarro(req, res)
});

router.post('/get', function(req, res, next) {
  CarroController.getCarro(req, res)
});

module.exports = router;