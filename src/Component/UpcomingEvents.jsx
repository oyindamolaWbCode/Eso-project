import React from "react";
import image from "../public/Frame 38Pro.png";
import calendar from "../public/Left Icon.png";
import profile from "../public/account-circle.png";

const events = [
  {
    id: 1,
    title: "Enterprise Africa Network Inaugural Cohort Fellowship Programme",
    organization: "MSME Africa",
    startedOn: "July 8, 2024",
    fee: "Free",
    duration: "Months",
    mode: "In-Person and Virtual",
    deadline: "July 26, 2024",
    status: "On-going",
    imgSrc: image,
  },
  {
    id: 2,
    title: "Enterprise Africa Network Inaugural Cohort Fellowship Programme",
    organization: "MSME Africa",
    startedOn: "July 8, 2024",
    fee: "Free",
    duration: "Months",
    mode: "In-Person and Virtual",
    deadline: "July 26, 2024",
    status: "On-going",
    imgSrc: image,
  },
  {
    id: 3,
    title: "Enterprise Africa Network Inaugural Cohort Fellowship Programme",
    organization: "MSME Africa",
    startedOn: "July 8, 2024",
    fee: "Free",
    duration: "Months",
    mode: "In-Person and Virtual",
    deadline: "July 26, 2024",
    status: "On-going",
    imgSrc: image,
  },
  {
    id: 4,
    title: "Enterprise Africa Network Inaugural Cohort Fellowship Programme",
    organization: "MSME Africa",
    startedOn: "July 8, 2024",
    fee: "Free",
    duration: "Months",
    mode: "In-Person and Virtual",
    deadline: "July 26, 2024",
    status: "On-going",
    imgSrc: image,
  },
];

const EventCard = ({ event }) => {
  return (
    <div className="bg-white border rounded-lg shadow-md ">
      <img
        src={event.imgSrc}
        alt={event.title}
        className="w-full rounded-t-lg mb-3"
      />
      <div className="p-3">
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-bold mt-2">{event.title}</h4>
          <button className="text-xs h-[30px] w-[200px] border-2 border-[#68cf67] text-[#68cf67] bg-transparent rounded-[20px]">
            {event.status}
          </button>

          {/*  */}
        </div>

        <p className="text-sm text-gray-500 mt-1">{event.organization}</p>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500 ">
            Started on: {event.startedOn}
          </p>
          <p className="text-green-600 text-sm font-bold">{event.fee}</p>
        </div>

        <div className="flex gap-2  mt-3">
          <span className="text-xs bg-gray-200  rounded-full">
            <ul className="p-0">
              <li>
                <img src={calendar} alt="" />
                {event.duration}
              </li>
            </ul>
          </span>
          <span className="text-xs bg-gray-200 rounded-full">
            <ul className="p-0">
              <li>
                <img src={profile} alt="" />
                {event.mode}
              </li>
            </ul>
          </span>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-gray-700 ">Deadline: {event.deadline}</p>
          <button className="bg-[#316541] text-white  rounded  uppercase">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

function UpcomingEvents(props) {
  return (
    <div>
      <div className="bg-[#f7fcf4] p-10">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p>Expert Solutions for Your Success</p>
            <h2 className="text-3xl font-bold text-[#316541]">
              Upcoming Events
            </h2>
          </div>

          <a
            href="#"
            className="text-sm font-medium text-[#316541] hover:underline"
          >
            Explore All →
          </a>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-transparent text-[#316541] border-2 border-[#316541] font-bold px-8 py-2 rounded-full uppercase hover:bg-[#316541] hover:text-white transition">
            Find More Events
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvents;
