import React from "react";
import "./product.css";

export default function Product(props) {
  return (
    <div className="Product">
      <img src={props.imageURL} alt="image" />
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
}
