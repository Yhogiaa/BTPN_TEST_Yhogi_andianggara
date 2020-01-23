var express = require('express');
var todoController = require('../modules/controller/todo.controller');
var router = express.Router();


router.get('/', todoController.findAll);

router.get('/:id', todoController.find);

router.post('/', todoController.add);

router.put('/:id', todoController.edit);

router.delete('/:id', todoController.delete);


module.exports = router;