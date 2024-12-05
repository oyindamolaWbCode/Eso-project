import React from "react";
import arrow from "../public/Frame 79.png";
import headerImg from "../public/Group 39913 (1).png";

const stats = [
  {
    id: 1,
    value: "10,000+",
    label: "Enterprise Support Organizations",
  },
  {
    id: 2,
    value: "2,000+",
    label: "Business Organizations",
  },
  {
    id: 3,
    value: "1,000,000+",
    label: "Events and Programmes",
  },
  {
    id: 4,
    value: "100+",
    label: "Countries",
  },
];

function Header(props) {
  return (
    <div>
      <div className="header">
        <div className="container mx-auto flex flex-col md:flex-row lg:flex-row justify-between py-5 ">
          <div className="text-header pt-[120px] md:w-[45%] lg:w-[45%] md:pl-10 lg:pl-12 text-textWhite">
            <img src={arrow} alt=" " className="mb-4" />
            <h1 className="uppercase text-lg font-semibold font-white md:w-[60%] lg:w-[100%] mb-3 leading-8">
              WELCOME TO the
              <br />
              <span className="text-primaryColor ">
                Enterprise Support Organisations (ESO) <br /> Programme
              </span>{" "}
              Sharing <br /> Platform
            </h1>
            <p className="leading-5">
              We are a collective of business professionals that bring values to
              your company with global scales experiences. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam
            </p>
            <div className="button mt-5">
              <button className="uppercase text-[#316541] bg-white font-bold py-3 px-10 rounded-md mr-2">
                {" "}
                get started →
                {/* get started <img src={outline} alt="" srcset="" /> */}
              </button>
              <button className="uppercase text-[#ffffff]  font-bold py-3 px-10 rounded-md border-2 border-white bg-transparent">
                find programmes
              </button>
            </div>
          </div>
          <div className="img-header md:w-[50%] lg:w-[50%]">
            <img src={headerImg} alt="" srcset="" style={{ width: "100%" }} />
          </div>
        </div>
        <div className="bg-[#b1e397] py-2 px-5">
          <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6  ">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="border-r-2 border-solid border-[#ffffff] last:border-none"
              >
                <h3 className="text-3xl font-bold ">{stat.value}</h3>
                <p className="">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
