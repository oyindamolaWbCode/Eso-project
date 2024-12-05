import React from "react";
import images from "../public/image 9.png";

function Featured(props) {
  return (
    <div className="p-10">
      <div className="grid grid-cols-12 mb-[180px]">
        <div className="col-span-4 font-bold text-[#316541] border-r-4 border-solid border-[ #316541] mr-2">
          <h2>Featured Articles</h2>
        </div>

        <div className="col-span-8">
          Our featured articles showcase the expertise and perspectives of our
          team, providing timely and informative content to help you stay ahead
          of the curve. Explore our curated collection of stories, analysis, and
          commentary to gain a deeper understanding of the topics that matter
          most.
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-14 mt-10 relative">
        <div className="box-1 h-[300px] p-5 bg-[#ebf7e1] relative sm:mb-[100px]">
          <div className="in-position mb-20 relative">
            <img
              src={images}
              alt=""
              className="absolute sm:bottom-[-50px] mt-[-150px] md:bottom-[-60px] lg:bottom-[-60px] w-full"
            />
          </div>
          <h4 className=" mt-20 ">How to make money from Agronomy</h4>
          <p>
            Capitalise on the precision farming revolution by offering services
            like soil testing, crop monitoring, and precision irrigation
            management. Learn how to invest in the right technology and market
            your services to farmers
          </p>
          <div className="flex justify-center item-center my-3">
            <button
              className="px-4 py-2 uppercase text-white bg-[#316541] mx-auto
"
            >
              REad more
            </button>
          </div>
        </div>
        <div className="box-1 h-[300px] p-5 bg-[#ebf7e1] relative sm:mt-[300px] md:mt-0">
          <div className="in-position mb-20 relative ">
            <img
              src={images}
              alt=""
              className="absolute mt-[-150px] sm:bottom-[10px] md:bottom-[-60px] w-full"
            />
          </div>
          <h4 className=" mt-20 ">How to make money from Agronomy</h4>
          <p>
            Capitalise on the precision farming revolution by offering services
            like soil testing, crop monitoring, and precision irrigation
            management. Learn how to invest in the right technology and market
            your services to farmers
          </p>
          <div className="flex justify-center item-center my-3">
            <button
              className="px-4 py-2 uppercase text-white bg-[#316541] mx-auto
"
            >
              REad more
            </button>
          </div>
        </div>
        <div className="box-1 h-[300px] p-5 bg-[#ebf7e1] relative">
          <div className="in-position mb-20 relative">
            <img
              src={images}
              alt=""
              className="absolute bottom-0 sm:bottom-[10px] md:bottom-[-60px] w-full"
            />
          </div>
          <h4 className=" mt-20 ">How to make money from Agronomy</h4>
          <p>
            Capitalise on the precision farming revolution by offering services
            like soil testing, crop monitoring, and precision irrigation
            management. Learn how to invest in the right technology and market
            your services to farmers
          </p>
          <div className="flex justify-center item-center my-3">
            <button
              className="px-4 py-2 uppercase text-white bg-[#316541] mx-auto
"
            >
              REad more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
