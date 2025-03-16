import React from "react";
import p3 from "../assets/oil2.jpeg";

const Services = () => {
  return (
    <section
      className="bg-white text-gray-800 py-12 px-6 md:px-20"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Section 1: Powerful Solutions */}
      <div className="mb-16">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          Powerful solutions for a sustainable future
        </h2>
        <p
          className="text-gray-600 mb-8"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          We are committed to delivering advanced energy solutions that not only power the world
          but also protect it. Our innovative technologies ensure efficient, reliable, and
          sustainable operations.{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Learn more
          </a>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Cards */}
          {[
            { title: "Petroleum Refinery", desc: "Optimizing refining processes for higher efficiency and minimal waste." },
            { title: "Thermal Power", desc: "Harnessing heat responsibly to generate sustainable energy." },
            { title: "Gas Flaring", desc: "Reducing emissions through innovative flare gas recovery." },
            { title: "Oil Pump", desc: "Reliable extraction with advanced safety protocols." },
            { title: "Chemical Factory", desc: "Producing essential chemicals with eco-friendly practices." },
            { title: "Methane Elimination", desc: "Capturing methane to cut greenhouse gases." },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-2"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              data-aos-duration="1000"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
                <a
                  href="#"
                  className="text-yellow-500 hover:text-yellow-600 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
              <p className="text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Promoting Responsible Use */}
      <div
        className="flex flex-col lg:flex-row items-center lg:gap-8"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="lg:w-1/2">
          <img
            src={p3}
            alt="Petroleum"
            className="w-full h-auto rounded-lg shadow-lg"
            data-aos="zoom-in"
            data-aos-duration="1200"
          />
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <h3
            className="text-3xl font-bold mb-4"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            Promoting responsible use of petroleum resources
          </h3>
          <p
            className="text-gray-600 mb-6"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            We prioritize sustainable practices in every step of our operations, ensuring that
            petroleum resources are used responsibly, minimizing environmental impact while
            maximizing efficiency.
          </p>
          <div>
            {[
              { label: "Cleaner", percent: "90%" },
              { label: "Stronger", percent: "75%" },
              { label: "Better", percent: "82%" },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 150}
                data-aos-duration="1000"
              >
                <div className="flex justify-between items-center mb-2">
                  <p className="text-gray-800 font-medium">{item.label}</p>
                  <p className="text-gray-800 font-medium">{item.percent}</p>
                </div>
                <div className="bg-gray-200 h-2 rounded-lg mb-4">
                  <div
                    className="bg-yellow-500 h-2 rounded-lg transition-all duration-1000 ease-in-out"
                    style={{ width: item.percent }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
