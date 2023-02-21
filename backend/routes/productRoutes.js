const express = require("express");
const router = express.Router();
const {
  getProducts,
  setProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

//standard Format of Routes
router.route("/products").get(getProducts);
router.route("/product").post(setProduct);
router.route("/product/:id").put(updateProduct).delete(deleteProduct);
// router.get("/products", getProducts);
// router.post("/product", setProduct);
// router.put("/product/:id", updateProduct);
// router.delete("/product/:id", deleteProduct);

module.exports = router;
