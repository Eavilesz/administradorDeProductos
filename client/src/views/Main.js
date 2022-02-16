import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
export default () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:8000/api/all-products").then((res) => {
      setProducts(res.data.product);
      setLoaded(true);
      console.log(products);
    });
  }, []);
  const removeFromDom = (productId) => {
    setProducts(products.filter((product) => product._id !== productId));
  };
  const createProduct = (product) => {
    axios.post("http://localhost:8000/api/product", product).then((res) => {
      setProducts([...products, res.data]);
    });
  };
  return (
    <div>
      <h1>Product Manager</h1>
      <ProductForm
        onSubmitProp={createProduct}
        initialTitle=""
        initialPrice=""
        initialDescription=""
      />
      <hr />
      {loaded && (
        <ProductList products={products} removeFromDom={removeFromDom} />
      )}
    </div>
  );
};
