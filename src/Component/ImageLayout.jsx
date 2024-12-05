import React from "react";
import layImgOne from "../public/Frame 137Layout.png";
import layImgTwo from "../public/Frame 136LAyout.png";

function ImageLayout(props) {
  return (
    <div className="bg-gradient-to-b from-[#f7fcf4] to-[#f7fcf3] p-5">
      <h2>Our Creative Archive</h2>
      <p>A collection of Creative Excellence</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5">
        <div>
          <img src={layImgOne} alt="" className="w-[100%]" />
        </div>
        <div>
          <img src={layImgTwo} alt="" className="w-[100%]" />
        </div>
        <div>
          <img src={layImgOne} alt="" className="w-[100%]" />
        </div>
        <div>
          <img src={layImgTwo} alt="" className="w-[100%]" />
        </div>
      </div>
    </div>
  );
}

export default ImageLayout;
