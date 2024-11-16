import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ headline, content, icon }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-transform transform hover:scale-105 w-full min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[250px] lg:h-[300px] flex flex-col justify-between homeFeature overflow-hidden">
      <div className="text-3xl text-[#4F9451]">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className="mt-4 text-xl font-semibold">{headline}</h3>
      <p className="mt-2 text-gray-600 flex-grow">{content}</p>
    </div>
  );
};

export default Card;