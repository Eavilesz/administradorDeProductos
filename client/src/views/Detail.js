import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import DeleteButton from "../components/DeleteButton";

export default (props) => {
  const [product, setProduct] = useState({});

  const { removeFromDom } = props;

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

  console.log(product);
  console.log(props);
  return (
    <div>
      <h2>{product.title}</h2>
      <p>Price: ${product.price} </p>
      <p>Description: {product.description}</p>
      <Link to={"/product/" + product._id + "/edit"}>Edit</Link>&nbsp;&nbsp;
      <DeleteButton
        productId={product._id}
        successCallback={() => navigate("/product/")}
      />
    </div>
  );
};
