const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')

router.post('/', ProductController.create)
router.get ('/', ProductController.getAll)
router.put ('/:_id', ProductController.update)
router.get ('/id/:_id', ProductController.getById)
router.get ('/name/:name', ProductController.getProductsByName)
router.delete ('/:_id', ProductController.delete)

module.exports = router
