const express = require('express');
const router = express.Router();

// Controller
const SupplierController = require('../controllers/SupplierController')

router.post('/', SupplierController.createdSupplier);
router.post('/register-products', SupplierController.createdProductsSupplier);
router.get('/', SupplierController.getAllProductsSupplier);

module.exports = router;