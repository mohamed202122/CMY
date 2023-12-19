import React from "react";
import "./product.css";

export default function Product(props) {
  return (
    <div className="Product">
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
      <img src={props.imageURL} alt="image" />
    </div>
  );
}
