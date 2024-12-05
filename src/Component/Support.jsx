import React from "react";
import image from "../public/image 6.png";
import location from "../public/Outlined-on.png";

function Support(props) {
  return (
    <div>
      <div className="grid grid-cols-12 mb-10 p-5">
        <div className="col-span-4 font-bold text-[#316541] border-r-4 border-solid border-[ #316541] mr-4">
          <h2>Featured Enterprise Support Organizations (ESOs)</h2>
        </div>

        <div className="col-span-8">
          Meet our curated group of trusted partners dedicated to empowering
          businesses like yours. These exceptional organizations offer a wide
          range of expertise, from strategic consulting to technical
          implementation, to help you achieve your goals. With their extensive
          experience and proven track record, our ESOs are committed to
          providing top-notch support and guidance every step of the way.
          Whether you're looking to drive innovation, improve efficiency, or
          scale your operations, our Featured ESOs are here to help you succeed
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 px-5">
        <div className="h-[200px] shadow shadow-[gray] p-2 text-center">
          <img src={image} alt="" />
          <p>Bridge-Tailor Consulting</p>
          <ul>
            <li>
              <img src={location} alt="" />
              Netherlands – Amsterdam
            </li>
          </ul>
        </div>
        <div className="h-[200px] shadow shadow-[gray] p-2 text-center">
          <img src={image} alt="" />
          <p>Bridge-Tailor Consulting</p>
          <ul>
            <li>
              <img src={location} alt="" />
              Netherlands – Amsterdam
            </li>
          </ul>
        </div>
        <div className="h-[200px] shadow shadow-[gray] p-2 text-center">
          <img src={image} alt="" />
          <p>Bridge-Tailor Consulting</p>
          <ul>
            <li>
              <img src={location} alt="" />
              Netherlands – Amsterdam
            </li>
          </ul>
        </div>
        <div className="h-[200px] shadow shadow-[gray] p-2 text-center">
          <img src={image} alt="" />
          <p>Bridge-Tailor Consulting</p>
          <ul>
            <li>
              <img src={location} alt="" />
              Netherlands – Amsterdam
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center py-5">
        <button className="px-16 py-2 border-2 border-[#316541] uppercase font-bold text-[#316541] bg-white hover:bg-[#316541] hover:text-white transition">
          View All
        </button>
      </div>
    </div>
  );
}

export default Support;
