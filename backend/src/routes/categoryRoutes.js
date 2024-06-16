const express = require('express');
const router = express.Router();

// Controller
const CategoryController = require('../controllers/CategoryController')

router.post('/', CategoryController.createdCategory);
router.get('/:id', CategoryController.getCategoryById);
router.get('/', CategoryController.getAllCategory);
router.delete('/:id', CategoryController.deleteCategory);
router.put('/', CategoryController.updateCategory);

module.exports = router;