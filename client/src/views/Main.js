import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

export default () => {
  const [product, setProduct] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:8000/api/all-products").then((res) => {
      setProduct(res.data.product);
      setLoaded(true);
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      <ProductForm />
      <hr />
      {loaded && <ProductList product={product} />}
    </div>
  );
};
