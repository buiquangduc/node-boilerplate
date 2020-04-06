const express = require('express')

const exampleController = require('../../controllers/example')

const exampleMiddleware = require('../../middlewares/example')

const exampleRequest = require('../../requests/example')

const router = express.Router()

router.get('/', exampleController.getAll)
router.get('/:id', exampleRequest.getSingle, exampleController.getSingle)
router.post('/', [exampleRequest.create, exampleMiddleware.createUnique], exampleController.create)
router.patch('/:id', [exampleRequest.update, exampleMiddleware.updateUnique], exampleController.update)
router.delete('/:id', exampleController.remove, exampleController.remove)

module.exports = router