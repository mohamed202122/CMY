import React from "react";
import "./hero.css";
import image from "../../images/hero.png";
export default function Hero() {
  const url = "https://api.whatsapp.com/send?phone=201060412714";
  const openWhats = () => {
    window.open(url);
  };

  return (
    <section className="hero">
      <div className="heroImage">
        <img src={image} alt="hero" />
      </div>
      <button className="icon-telegram" onClick={openWhats} />
      <button className="icon-whatsapp" onClick={openWhats} />
    </section>
  );
}
