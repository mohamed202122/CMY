import React, { useState } from "react";
import Image1 from "../../images/logo.jpg";
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
            <a href="/#">حول</a>
          </li>
          <li>
            <a href="/#">الاتصال</a>
          </li>
          <li>
            <a href="/#">الخدمات</a>
          </li>
          <li>
            <a href="/#">الصفحه الرئيسيه</a>
          </li>
        </ul>
      </nav>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-times"
                onClick={() => setShowModal(false)}
              />
            </li>
            <li>
              <a href="/#">حول</a>
            </li>
            <li>
              <a href="/#">الاتصال</a>
            </li>
            <li>
              <a href="/#">الخدمات</a>
            </li>
            <li>
              <a href="/#">الصفحه الرئيسيه</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
