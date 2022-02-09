// import react from "react";
// import axios from "axios";
// // import Detail from "../views/Detail";

// export default (props) => {
//   return (
//     <div>
//       {props.product.map((product, idx) => {
//         return (
//           <p key={idx}>
//             {product.title}, {product.price}, {product.description}{" "}
//           </p>
//         );
//       })}
//     </div>
//   );
// };
import React from "react";
import axios from "axios";
import { Link } from "@reach/router";
export default (props) => {
  console.log(props);
  return (
    <div>
      <h1>All Products:</h1>
      {props.product.map((product, idx) => {
        return (
          <Link to={product._id} key={idx} style={{ display: "block" }}>
            {product.title}
          </Link>
        );
      })}
    </div>
  );
};
