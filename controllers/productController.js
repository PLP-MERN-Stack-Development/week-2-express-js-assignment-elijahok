// controllers/productController.js

const getAllProducts = (req, res) => {
  res.json({ message: 'List of all products' });
};

const getProductById = (req, res) => {
  res.json({ message: `Product with ID ${req.params.id}` });
};

const createProduct = (req, res) => {
  res.json({ message: 'Product created' });
};

const updateProduct = (req, res) => {
  res.json({ message: `Product with ID ${req.params.id} updated` });
};

const deleteProduct = (req, res) => {
  res.json({ message: `Product with ID ${req.params.id} deleted` });
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
