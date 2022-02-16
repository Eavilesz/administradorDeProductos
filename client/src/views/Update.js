import React, { useEffect, useState } from "react";
import axios from "axios";
import { set } from "mongoose";
import ProductForm from "../components/ProductForm";
import { navigate } from "@reach/router";

export default (props) => {
  const { id } = props;

  const [product, setProduct] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/product/" + id).then((res) => {
      setProduct(res.data);
      setLoaded(true);
    });
  }, []);
  const updateProduct = (product) => {
    // e.preventDefault();
    axios
      .put("http://localhost:8000/api/product/" + id, product)
      .then((res) => console.log(res))
      .then(navigate("/product/"));
  };
  return (
    <div>
      <h1>Edit the product</h1>
      {loaded && (
        <div>
          <ProductForm
            onSubmitProp={updateProduct}
            initialTitle={product.title}
            initialPrice={product.price}
            initialDescription={product.description}
          />
        </div>
      )}
    </div>
  );
};
