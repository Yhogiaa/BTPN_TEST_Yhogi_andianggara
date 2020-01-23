const todo = require("../../models").ToDo;
const response = require("../response");

var toDoController = function () { }

toDoController.find = function (req, res) {
    var id = req.params.id
    todo.findOne({ where: { id: id } }).then(entity => {
        if (entity) {
            res.json(response.success(entity))
        } else {
            throw 'Data not found';
        }
    }).catch(error => {
        res.json(response.error(500, error.message))
    })
}

toDoController.findAll = function (req, res) {
    todo.findAll().then(entities => {
        res.json(response.success(entities))
    }).catch(error => {
        res.json(response.error(500, error.message))
    })
}

toDoController.add = function (req, res) {
    var data = req.body;
    data.status = 'Not Done Yet';
    todo.create(data).then(entity => {
        if (entity) {
            res.json(response.success(entity))
        } else {
            throw 'Create failed';
        }
    }).catch(error => {
        res.json(response.error(error.message))
    })
}

toDoController.edit = function (req, res) {
    var id = req.params.id
    var data = req.body
    todo.findOne({ where: { id: id } }).then(entity => {
        if (entity) {
            return entity.update(data)
        } else {
            throw 'Data not found';
        }
    }).then(entity => {
        res.json(response.success(entity))
    }).catch(error => {
        res.json(response.error(error.message))
    })
}

toDoController.delete = function (req, res) {
    var id = req.params.id
    todo.destroy({ where: { id: id } }).then(affectedRows => {
        if (affectedRows) {
            res.json(response.success(true))
        } else {
            throw 'Delete Failed'
        }
    }).catch(error => {
        res.json(response.error(error.message))
    })
}

module.exports = toDoController