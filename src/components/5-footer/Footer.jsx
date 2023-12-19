import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="Footer flex ">
      <section className="about ">
        <h3>حول الشركه</h3>
        <p>
          <bdi>
            منصة مصرية تقدم مجموعة واسعة من المنتجات وخدمات الطباعة لعملائنا،
            إلى كل من يبحث عن مكان واحد لمطبوعاته حيث يمكنك الحصول على خدمات
            "سريعة" و "جودة عالية" و "سعر مناسب" يلائم جميع أذواق العملاء. مع
            الاستمرار في الاستثمار في أحدث التقنيات التي تمكننا من تقديم حلول
            طباعة عالية الجودة.  _سي ام واي
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
