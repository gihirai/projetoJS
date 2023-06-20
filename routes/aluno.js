var express = require('express');
var router = express.Router();
const AlunoController = require('../controller/alunoController.js');

router.get('/', function(req, res) {
  AlunoController.listAluno(req, res)
});

router.post('/create', function(req, res) {
  AlunoController.createAluno(req, res)
});

router.post('/update', function(req, res) {
  AlunoController.updateAluno(req, res)
});

router.post('/delete', function(req, res) {
  AlunoController.deleteAluno(req, res)
});

router.post('/get', function(req, res) {
  AlunoController.getAluno(req, res)
});

module.exports = router;