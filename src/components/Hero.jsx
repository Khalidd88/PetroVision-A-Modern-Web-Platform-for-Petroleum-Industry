import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import oil from "../assets/oil.jpg";

const Hero = () => {
  const whatsappLink = "https://wa.me/6281318923129/";

  return (
    <section
      className="relative w-screen h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${oil})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Industrial Resource <br /> & Oil Exploration
        </h1>
        <p className="mt-6 text-lg md:text-xl font-medium max-w-3xl mx-auto text-gray-200">
          We provide innovative solutions for oil exploration and industrial resources with global standards and high sustainability.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 px-8 py-3 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded-full shadow-lg transition-all duration-300"
        >
          <FaWhatsapp size={24} />
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default Hero;
