const { response, request } = require("express");
const { Product } = require("../models/product.model");

//Esto es para imprimir todos los documentos de la coleccion
module.exports.findAllProducts = (request, response) => {
  Product.find()
    .then((allProducts) => response.json({ product: allProducts }))
    .catch((err) =>
      response.json({ message: "Something went wrong", error: err })
    );
};

//Esto es para que muestre los detalles de un producto en particular
module.exports.getProduct = (request, response) => {
  Product.findOne({ _id: request.params.id })
    .then((product) => response.json(product))
    .catch((err) => response.json(err));
};

module.exports.createProduct = (request, response) => {
  const { title, price, description } = request.body;
  Product.create({
    title,
    price,
    description,
  })
    .then((product) => response.json(product))
    .catch((err) => response.json(err));
};

module.exports.updateProduct = (request, response) => {
  Product.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
  })
    .then((updateProduct) => response.json(updateProduct))
    .catch((err) => response.json(err));
};

module.exports.deleteProduct = (request, response) => {
  Product.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.json(err));
};
