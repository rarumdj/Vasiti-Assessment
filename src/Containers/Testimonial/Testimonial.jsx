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
  },
  {
    name: "Adetola Fashina",
    image: img3,
    location: "Ibadan",
    para: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    user: "customer",
  },
  {
    name: "Emmanuel Fayemi",
    image: img5,
    location: "In Akoka",
    para: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
    user: "customer",
  },
  {
    name: "Chisom Obilor",
    image: img2,
    location: "In Magodo",
    para: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
    user: "vendor",
  },
  {
    name: "Adunoluwa Adeyemi",
    image: img4,
    location: "Iwo Road",
    para: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
    user: "vendor",
  },
  {
    name: "Chidi Okeke",
    image: img6,
    location: "In Somolu",
    para: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
    user: "vendor",
  },
];
const Testimonial = () => {
  return (
    <div>
      {Testimonails.map((items, i) => (
        <div className="flex-col lg:flex-row flex gap-6 justify-between">
          <div className="basis-3/6">
            <TestimonialCard
              key={i}
              image={items.image}
              name={items.name}
              location={items.location}
              para={items.para}
              user={items.user}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
