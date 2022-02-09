const ProductController = require("../controllers/product.controller");

module.exports = function (app) {
  app.get("/api", ProductController.createProduct);
  app.get("/api/all-products", ProductController.findAllProducts);
  app.get("/api/product/:id", ProductController.getProduct);
  app.post("/api/product", ProductController.createProduct);
};

// "http://localhost:8000/api/product/6203f98f75caa2cffa8e7135"
