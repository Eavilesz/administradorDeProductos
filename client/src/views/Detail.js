import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

export default (props) => {
  const [product, setProduct] = useState({});

  const { removeFromDom } = props;
  const deleteProduct = (productId) => {
    axios
      .delete("http://localhost:8000/api/product/" + productId)
      .then((res) => {
        removeFromDom(productId);
      });
    // .then((res) => {
    //   navigate("/product");
    // })
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product/" + props.id)
      .then((res) => {
        setProduct({
          ...res.data,
        });
        console.log(props);
      })
      .then((res) => console.log(res));
  }, []);

  // useEffect(() => {
  //   navigate("/product");
  // }, [setProduct]);

  console.log(product);
  console.log(props);
  return (
    <div>
      <h2>{product.title}</h2>
      <p>Price: ${product.price} </p>
      <p>Description: {product.description}</p>
      <Link to={"/product/" + product._id + "/edit"}>Edit</Link>&nbsp;&nbsp;
      {/* <Link to={"/product/"} onClick={(e) => deleteProduct(product._id)}>
        Delete
      </Link> */}
      <button
        onMouseDown={(e) => deleteProduct(product._id)}
        onMouseUp={(e) => navigate("/product")}
      >
        Delete
      </button>
    </div>
  );
};
