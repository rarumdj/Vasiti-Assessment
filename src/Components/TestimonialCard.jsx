import React from "react";

const TestimonialCard = ({ image, name, location, para, user }) => {
  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>
      <div className="mt-3">
        <h2>{name}</h2>
        <div className="flex">
          <p>{location}</p>
          <p className="text-xm p-1 rounded-sm bg-sky-300 text-blue-700">
            {user}
          </p>
        </div>
      </div>
      <p className="text-sm">{para}</p>
    </div>
  );
};

export default TestimonialCard;
