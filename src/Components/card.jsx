import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ headline, content, icon }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-transform transform hover:scale-105 w-full md:w-3/5 lg:w-80 h-64 flex flex-col justify-between homeFeature">
      <div className="text-2xl text-[#4F9451]">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className="mt-4 text-xl font-semibold">{headline}</h3>
      <p className="mt-2 text-gray-600 flex-grow">{content}</p>
    </div>
  );
};

export default Card;
