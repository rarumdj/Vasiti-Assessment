import React from "react";

const TestimonialCard = ({ image, name, location, para, user, tagClass }) => {
  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>
      <div className="mt-3">
        <h2 className="font-bold text-xl my-4">{name}</h2>
        <div className="flex my-4">
          {location && <p className="mr-4">{location}</p>}
          <span className={tagClass}>{user}</span>
        </div>
      </div>
      <p className="text-sm lg:w-72">{para}</p>
    </div>
  );
};

export default TestimonialCard;
