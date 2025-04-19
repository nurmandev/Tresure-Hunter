import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            شركه treasure hunters هي شركه عالميه تم تأسيسها في عام 2017 في
            الولايات المتحدة الأمريكية وهي شركه متخصصه في تكنولوجيا التنقيب حيث
            تقوم بصناعة اجهزه متقدمة متخصصه في الكشف والتنقيب عن ثروات باطن
            الأرض ولديها العديد من براءات الاختراع.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-234-567-8910</li>
            <li>contact@treasure-hunter.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright {new Date().getFullYear()}@treasure-hunter.com - All Rights
          Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
