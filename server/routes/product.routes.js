const ProductController = require("../controllers/product.controller");

module.exports = function (app) {
  app.get("/api", ProductController.createProduct);
  app.get("/api/all-products", ProductController.findAllProducts);
  app.post("/api/product", ProductController.createProduct);
};
