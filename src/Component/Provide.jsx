import React from "react";
import note from "../public/material-symbols_event-note.png";
import star from "../public/mdi_event-star.png";
import upcoming from "../public/materialsymbolseventupcoming.svg";

const services = [
  {
    id: 1,
    title: "Detailed Information",
    description:
      "We provide extensive information about each (ESOs) and its programmes, for you to make informed decisions.",
    icon: note,
  },
  {
    id: 2,
    title: "Reliable Programmes",
    description:
      "All Enterprise support organizations (ESOs) and their programmes on this platform have been carefully verified.",
    icon: star,
  },
  {
    id: 3,
    title: "Upcoming Programmes",
    description:
      "Use our advanced search feature to find upcoming entrepreneurship events and programmes and sign-up for updates.",
    icon: upcoming,
  },
];

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-[#f7fcf4] p-6 border rounded-lg shadow-lg ">
      <div className="text-4xl mb-4">
        <img src={service.icon} alt="" />
      </div>
      <h3 className="text-xl font-semibold text-[#316541] mb-3">
        {service.title}
      </h3>
      <p className="text-sm text-gray-600">{service.description}</p>
    </div>
  );
};

function Provide(props) {
  return (
    <div>
      <div className="bg-white py-10 px-5">
        <h2 className="text-[#316541] text-3xl font-bold">What We Provide</h2>
        <p className="text-gray-600  mb-10">
          Expert Solutions for Your Success
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Provide;
