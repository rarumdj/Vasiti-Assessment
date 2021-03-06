import React from "react";
import { img1, img2, img3, img4, img5, img6 } from "../../assests";
import TestimonialCard from "../../Components/TestimonialCard";

const Testimonails = [
  {
    name: "Joseph Ike",
    image: img1,
    location: "In Ikeja",
    para: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
    user: "customer",
    tagClass: 'text-xm py-1 px-2  rounded-sm bg-sky-50 text-blue-700'
  },
  {
    name: "Adetola Fashina",
    image: img3,
    location: "Ibadan",
    para: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    user: "customer",
    tagClass: 'text-xm py-1 px-2  rounded-sm bg-sky-50 text-blue-700'
  },
  {
    name: "Emmanuel Fayemi",
    image: img5,
    location: "In Akoka",
    para: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
    user: "customer",
    tagClass: 'text-xm py-1 px-2 rounded-sm bg-sky-50 text-blue-700'
  },
  {
    name: "Chisom Obilor",
    image: img2,
    location: "In Magodo",
    para: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
    user: "vendor",
    tagClass: 'text-xm py-1 px-2  rounded-sm bg-green-100 text-green-600'
  },
  {
    name: "Adunoluwa Adeyemi",
    image: img4,
    location: "Iwo Road",
    para: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
    user: "vendor",
    tagClass: 'text-xm py-1 px-2  rounded-sm bg-green-100 text-green-600'
  },
  {
    name: "Chidi Okeke",
    image: img6,
    location: "In Somolu",
    para: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
    user: "vendor",
    tagClass: 'text-xm py-1 px-2  rounded-sm bg-green-100 text-green-600'
  },
];
const Testimonial = () => {
  return (
    <div className="py-12 px-8 md:py-24 md:px-24">
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

export default Testimonial;
