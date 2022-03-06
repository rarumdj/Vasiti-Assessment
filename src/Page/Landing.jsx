import React from "react";
import Experience from "../Containers/Experience/Experience";
import ExperienceTwo from "../Containers/Experience/ExperienceTwo";
import { Footer } from "../Containers/Footer/Footer";
import Header from "../Containers/Header/Header";
import Navbar from "../Containers/NavBar/Navbar";
import Testimonial from "../Containers/Testimonial/Testimonial";
import TestimonialTwo from "../Containers/Testimonial/TestimonialTwo";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Experience />
      <Testimonial />
      <ExperienceTwo />
      <TestimonialTwo />
      <Footer />
    </div>
  );
};

export default Landing;
