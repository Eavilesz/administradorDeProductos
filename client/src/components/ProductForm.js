import React, { useState } from "react";
import axios from "axios";
export default () => {
  //keep track of what is being typed via useState hook
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  //handler when the form is submitted
  const onSubmitHandler = (e) => {
    //prevent default behavior of the submit
    e.preventDefault();
    //make a post request to create a new product
    axios
      .post("http://localhost:8000/api/product", {
        title,
        price,
        description,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  //onChange to update title and price
  return (
    <form onSubmit={onSubmitHandler}>
      <p>
        <label>
          Title:{" "}
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
      </p>
      <p>
        <label>
          Price:{" "}
          <input type="text" onChange={(e) => setPrice(e.target.value)} />
        </label>
        <br />
      </p>
      <p>
        <label>
          Description:{" "}
          <input type="text" onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
      </p>
      <input type="submit" />
    </form>
  );
};
