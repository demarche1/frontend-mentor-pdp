const { Router } = require("express");
const ProductService = require("../services/ProductService");

const router = Router();

router.get("/api/product/:id", (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).send("Missing id");
  }

  const productService = new ProductService();
  const product = productService.findById(id);

  if (!product) {
    res.status(404).send("Product not found");
  }

  res.json(product);
});

module.exports = router;
