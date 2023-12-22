import React from "react";
import "./allProducts.css";
import Product from "../3-product/Product";
import products from "../../db/data";
export default function AllProducts() {
  return (
    <div className="AllProducts">
      {/* <h1>خدماتنا</h1> */}
      <section className="products flex">
        {products.map((product, key) => {
          return (
            <Product
              imageURL={require(`../../images/${product.img}.jpg`)}
              title={product.title}
              desc={product.desc}
              key={key}
            />
          );
        })}
      </section>
    </div>
  );
}
