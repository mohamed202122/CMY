import React from "react";
import "./allProducts.css";
import Product from "../3-product/Product";
import image from "../../images/hero-removebg.png";
export default function AllProducts() {
  const products = [
    "الليترهيد",
    "الكروت الشخصيه",
    "الاظرف",
    "بطاقات الهويه",
    "الفلاير",
    "البروشور",
    "الفولدر",
    "روشتات",
    "فواتير",
    "بوستر",
    "استيكر",
    "نوت بوك",
  ];

  return (
    <div className="AllProducts">
      <h1>Our services</h1>
      <section className="products flex">
        {products.map((product, key) => {
          return <Product imageURL={image} title={product} key={key} />;
        })}
      </section>
    </div>
  );
}
