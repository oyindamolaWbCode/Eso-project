import React from "react";
import { useState } from "react";

const tagsData = [
  "Agriculture and Food",
  "Business",
  "Oil and Gas",
  "Information and Communication Technology",
  "Environment",
  "Supply Chain Services",
  "Energy",
  "Financial Services",
  "Infrastructure and Facilities Development",
  "Water and Sanitation",
  "Pre-Revenue",
  "Ideation",
];

function Suggestions(props) {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((item) => item !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  return (
    <div>
      <div className="bg-[#f7fcf4] p-10 rounded-lg max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-[#316541] mb-2">
          Let's Personalize it
        </h2>
        <p className="text-gray-600 mb-6">
          Tell us what you're into and we'll suggest more
        </p>

        <div className="flex flex-wrap gap-3 mb-6">
          {tagsData.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium border ${
                selectedTags.includes(tag)
                  ? "bg-[#316541] text-white"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <button className="px-8 py-2 text-[#316541] font-bold bg-white border-2 border-[#316541] rounded-lg uppercase hover:bg-[#316541] hover:text-white transition">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Suggestions;
