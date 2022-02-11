const ProductController = require("../controllers/product.controller");

module.exports = function (app) {
  app.get("/api", ProductController.createProduct);
  app.get("/api/all-products", ProductController.findAllProducts);
  app.get("/api/product/:id", ProductController.getProduct);
  app.post("/api/product", ProductController.createProduct);
  app.put("/api/product/:id", ProductController.updateProduct);
  app.delete("/api/product/:id", ProductController.deleteProduct);
};
