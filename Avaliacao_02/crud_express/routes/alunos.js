var express = require('express');
var router = express.Router();
var AlunoServiceMongo = require('../services/aluno.service.mongo');

router.get(
    '/listar',
    (req, res, nest) => {
        AlunoServiceMongo.list(req, res);
    }
);

router.post(
    '/register',
    (req, res, next) => {
        AlunoServiceMongo.register(req, res);
    }
);

router.put(
    '/update/:id',
    (req, res, next) => {
        AlunoServiceMongo.update(req, res);
    }
);

router.delete(
    '/delete/:id',
    (req, res, next) => {
        AlunoServiceMongo.delete(req, res);
    }
);

router.get(
    '/retrieve/:id',
    (req, res, next) => {
        AlunoServiceMongo.retrieve(req, res);
});

module.exports = router;
