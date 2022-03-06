import React from "react";
import { img10, img11, img12, img13, img8, img9 } from "../../assests";
import TestimonialCard from "../../Components/TestimonialCard";

const Testimonails = [
  {
    name: "Temi Obadofin",
    image: img8,
    location: "",
    para: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
    user: "vendor",
    tagClass: "text-xm py-1 px-2  rounded-sm bg-green-100 text-green-600",
  },
  {
    name: "Promise Ejiofor",
    image: img10,
    location: "",
    para: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
    user: "vendor",
    tagClass: "text-xm py-1 px-2  rounded-sm bg-green-100 text-green-600",
  },
  {
    name: "Feyisola Arinola",
    image: img12,
    location: "",
    para: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
    user: "vendor",
    tagClass: "text-xm py-1 px-2  rounded-sm bg-green-100 text-green-600",
  },
  {
    name: "Karen Ibeh",
    image: img9,
    location: "",
    para: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
    user: "vendor",
    tagClass: "text-xm py-1 px-2  rounded-sm bg-green-100 text-green-600",
  },
  {
    name: "Oluchi Uzo",
    image: img11,
    location: "",
    para: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
    user: "vendor",
    tagClass: "text-xm py-1 px-2  rounded-sm bg-green-100 text-green-600",
  },
  {
    name: "Amos Okafor",
    image: img13,
    location: "",
    para: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
    user: "vendor",
    tagClass: "text-xm py-1 px-2  rounded-sm bg-green-100 text-green-600",
  },
];

const TestimonialTwo = () => {
  return (
    <div className="py-12 px-8 md:py-24 md:px-24 mb-16">
      <div className="grid sm:grid-cols-3 grid-flow-row gap-6">
        {Testimonails.map((items, i) => (
          <TestimonialCard
            key={i}
            image={items.image}
            name={items.name}
            location={items.location}
            para={items.para}
            user={items.user}
            tagClass={items.tagClass}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialTwo;
