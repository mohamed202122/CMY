import React from "react";
import "./hero.css";

export default function Hero() {
  const url = "https://api.whatsapp.com/send?phone=201060412714";
  const openWhats = () => {
    window.open(url);
  };
  return (
    <section className="hero">
      <button className="icon-whatsapp" onClick={openWhats} />
    </section>
  );
}
