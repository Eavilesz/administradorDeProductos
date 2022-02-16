// import React, {useState, useEffect} from "react";
// import axios from "axios";
import { Link } from "@reach/router";
import DeleteButton from "./DeleteButton";

import axios from "axios";
import { useEffect, useState } from "react";

export default (props) => {
  const [product, setProduct] = useState([]);
  // console.log(props);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/all-products")
      .then((res) => setProduct(res.data.product));
  }, []);
  const removeFromDom = (productId) => {
    setProduct(product.filter((product) => product._id != productId));
  };
  return (
    <div>
      <h1>All Products:</h1>
      {product.map((product, idx) => {
        return (
          <p key={idx} style={{ display: "block" }}>
            <Link to={product._id} key={idx}>
              {product.title}
            </Link>{" "}
            &nbsp; &nbsp;
            <DeleteButton
              productId={product._id}
              successCallback={() => removeFromDom(product._id)}
            />
          </p>
        );
      })}
    </div>
  );
};
