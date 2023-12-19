import React from "react";
import "./hero.css";

export default function Hero() {
  // const teleUrl = "https://web.telegram.org/a/#5280807201";
  // const url2 = "https://wa.me/+201060412714";
  const url = "https://api.whatsapp.com/send?phone=201060412714";
  const openWhats = () => {
    window.open(url);
  };
  return (
    <section className="hero">
      <button className="icon-whatsapp" onClick={openWhats} />
      <div className="container">
        <article>
          <h1>We are CMY</h1>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            labore nobis atque quia incidunt non voluptas suscipit voluptate!
            Corrupti quidem id pariatur rerum asperiores a provident, in aut
            obcaecati consequatur.
          </h4>

          <h6>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            similique ipsum sed, voluptate, culpa quo assumenda, molestias nam
            illum recusandae repellat.
          </h6>
        </article>
      </div>
    </section>
  );
}
