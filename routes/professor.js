var express = require('express');
var router = express.Router();
const ProfessorController = require('../controller/ProfessorController.js');

router.get('/', function(req, res, next) {
  ProfessorController.listProfessor(req, res)
});

router.post('/create', function(req, res, next) {
  ProfessorController.createProfessor(req, res)
});

router.post('/update', function(req, res, next) {
  ProfessorController.updateProfessor(req, res)
});

router.post('/delete', function(req, res, next) {
  EmployerController.deleteEmployer(req, res)
});

router.post('/get', function(req, res, next) {
  EmployerController.getEmployer(req, res)
});

module.exports = router;