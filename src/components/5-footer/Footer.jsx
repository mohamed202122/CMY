import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="Footer flex ">
      <section className="about ">
        <h3>حول الشركه</h3>
        <p>
          <bdi>
            شركة CMYللدعاية والاعلان تأسست عام 2012 لتقدم خدمات التسويق والدعاية
            والاعلان لكل عملائها من خلال شبكة قوية من الوكلاء، الموردين
            والمندوبين في جميع محافظات مصر.
          </bdi>
        </p>
        <div className="icons cards flex">
          <p className="icon-vodafone" />
          <p className="icon-visa" />
          <p className="icon-cc-mastercard" />
        </div>
      </section>
      <section className="cate ">
        <h3>معلومات</h3>
        <ul>
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
          <li>
            <a href="/#">الاحكام والشروط</a>
          </li>
        </ul>
      </section>
      <section className="contact ">
        <h3>للتواصل معنا</h3>
        <div className="icons cards flex">
          <p className="icon-facebook" />
          <p className="icon-instagram" />
          <p className="icon-whatsapp" />
          <p className="icon-telegram" />
        </div>
      </section>
    </footer>
  );
}
