import React from "react";
import footerLogo from "../public/image 8 (1).svg";
import outlineOne from "../public/Frame 93.png";
import email from "../public/iconmark-email-unreadoutlined.svg";
import web from "../public/Outlinedweb.png";

function Footer(props) {
  return (
    <div className="footer bg-[#3d6e4d] text-white">
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 pt-[100px] px-[50px]">
        <div className="grid-paragraph-logo">
          <img src={footerLogo} alt="" srcset="" />
          <p>
            We are a collective of business professionals that bring values to
            your company with global scales experiences. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div className="grid-list">
          <ul>
            <li className="font-bold mb-5">Get Involved</li>
            <li>Enterprise Support Organizations</li>
            <li>Businesses</li>
            <li>Programmes</li>
            <li>Events</li>
          </ul>
          {/* <ul>
            <li>Connect with us</li>
          </ul> */}
        </div>
        {/* <div className="grid-logo"></div> */}
        <div className="contact">
          <ul>
            <li className="font-bold mb-5">Contact Us</li>
            <li>
              <img src={outlineOne} alt="" srcset="" className="mr-2 mt-2" />
              No. 2834 Water Carington Drive, Egbeda, Lome
            </li>
            <li>
              <img src={email} alt="" srcset="" className="mr-2 mt-2" />
              info@esonigerialpy.org
            </li>
            <li>
              <img src={web} alt="" className="mr-2 mt-2" />
              www.esonigeria.ng
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
