import React from "react";
import axios from "axios";
import { Link } from "@reach/router";

export default (props) => {
  // console.log(props);
  const { removeFromDom } = props;
  const deleteProduct = (productId) => {
    axios
      .delete("http://localhost:8000/api/product/" + productId)
      .then((res) => {
        removeFromDom(productId);
      });
  };
  return (
    <div>
      <h1>All Products:</h1>
      {props.product.map((product, idx) => {
        return (
          <p style={{ display: "block" }}>
            <Link to={product._id} key={idx}>
              {product.title}
            </Link>{" "}
            &nbsp; &nbsp;
            <button onClick={(e) => deleteProduct(product._id)}>Delete</button>
          </p>
        );
      })}
    </div>
  );
};
