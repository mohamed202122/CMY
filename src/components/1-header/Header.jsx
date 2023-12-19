import React, { useState } from "react";
import Image1 from "../../images/logo2.jpg";
import "./header.css";
export default function Header() {
  const [showModal, setShowModal] = useState(false);
  return (
    <header className="flex ">
      <a className="image" href="/#">
        <img src={Image1} alt="logo" />
      </a>
      <button className="menu icon-menu" onClick={() => setShowModal(true)} />

      <nav>
        <ul className="flex">
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#">Services</a>
          </li>
          <li>
            <a href="/#">About</a>
          </li>
          <li>
            <a href="/#">Contact</a>
          </li>
        </ul>
      </nav>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="/#">Services</a>
            </li>
            <li>
              <a href="/#">About</a>
            </li>
            <li>
              <a href="/#">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
