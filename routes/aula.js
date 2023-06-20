var express = require('express');
var router = express.Router();
const AulaController = require('../controller/aulaController.js');

router.get('/', function(req, res, next) {
  AulaController.listAula(req, res)
});

router.post('/create', function(req, res, next) {
  AulaController.createAula(req, res)
});

router.post('/update', function(req, res, next) {
  AulaController.updateAula(req, res)
});

router.post('/delete', function(req, res, next) {
  AulaController.deleteAula(req, res)
});

router.post('/get', function(req, res, next) {
  AulaController.getAula(req, res)
});

module.exports = router;