import React from "react";
import "./allProducts.css";
import Product from "../3-product/Product";

export default function AllProducts() {
  return (
    <div className="AllProducts">
      <h1>our services</h1>
      <section className="products flex">
        <Product />
        <Product />
        <Product />
      </section>
    </div>
  );
}
