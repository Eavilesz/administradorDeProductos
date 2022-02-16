import React, { useState } from "react";
import axios from "axios";
export default (props) => {
  const { initialTitle, initialPrice, initialDescription, onSubmitProp } =
    props;
  //keep track of what is being typed via useState hook
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  //handler when the form is submitted
  const onSubmitHandler = (e) => {
    //prevent default behavior of the submit
    e.preventDefault();
    //make a post request to create a new product

    onSubmitProp({ title, price, description });
  };
  //onChange to update title and price
  return (
    <form onSubmit={onSubmitHandler}>
      <p>
        <label>
          Title:{" "}
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
      </p>
      <p>
        <label>
          Price:{" "}
          <input
            type="text"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <br />
      </p>
      <p>
        <label>
          Description:{" "}
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
      </p>
      <input type="submit" />
    </form>
  );
};
