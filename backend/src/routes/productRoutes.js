const express = require('express');
const router = express.Router();

// Controller
const ProductController = require('../controllers/ProductController')

router.post('/', ProductController.createdProduct);
router.get('/:id', ProductController.getProductById);
router.get('/', ProductController.getAllProduct);

module.exports = router;