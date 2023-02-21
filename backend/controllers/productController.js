// @desc Get Products
// @route GET /api/v1/products
// @access Private
const getProducts = (req, res) => {
  res.status(200).json({ message: "Get products" });
};

// @desc Set Product
// @route POST /api/v1/product
// @access Private
const setProduct = (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "Create product" });
};

// @desc Update Product
// @route PUT /api/v1/product/:id
// @access Private
const updateProduct = (req, res) => {
  res.status(200).json({ message: `Update product with ${req.params.id}` });
};

// @desc Delete Product
// @route DELETE /api/v1/product/:id
// @access Private
const deleteProduct = (req, res) => {
  res.status(200).json({ message: `Delete product with ${req.params.id}` });
};

module.exports = {
  getProducts,
  setProduct,
  updateProduct,
  deleteProduct,
};
