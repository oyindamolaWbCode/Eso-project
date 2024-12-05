import React from "react";
import partnersLogo from "../public/image 7.png";

function Partners(props) {
  return (
    <div className="p-5">
      <p className="text-xl">Expert Solutions for Your Success</p>
      <h3 className="text-[35px]">Our Partners</h3>
      <div className="partner-img">
        <img src={partnersLogo} alt="" className="w-[100%]" />
      </div>
    </div>
  );
}

export default Partners;
