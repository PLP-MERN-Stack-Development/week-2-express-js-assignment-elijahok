const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
  getProductStats,
} = require('../controllers/productController');
const { validateProduct } = require('../middleware/validate');

router.get('/', getAllProducts);
router.get('/search', searchProducts); // e.g., /api/products/search?name=phone
router.get('/stats', getProductStats); // e.g., count by category
router.get('/:id', getProductById);
router.post('/', validateProduct, createProduct);
router.put('/:id', validateProduct, updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
