import React from "react";

// Import logo perusahaan
import pertamina from "../assets/Pertamina.png";
import astra from "../assets/astra.png";
import shopee from "../assets/shopee.png";
import amazon from "../assets/amazon.png";
import walmart from "../assets/walmart.png";

const logos = [pertamina, astra, shopee, amazon, walmart];

const Partners = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <h2 className="text-5xl font-bold text-center text-[#4b2e19] mb-16">
        🌟 Our Partners
      </h2>

      <div className="w-full overflow-hidden">
        <div
          className="flex"
          style={{
            display: "flex",
            animation: "scroll 30s linear infinite",
            width: "max-content",
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-10"
            >
              <img
                src={logo}
                alt={`Partner ${index}`}
                className="w-48 h-48 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Partners;
