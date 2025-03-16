import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import gambar proyek
import refinery from "../assets/refinery.jpg";
import spbu from "../assets/shell.jpg";
import panel from "../assets/panel.jpg";

const ProjectShowcase = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);

  const projects = [
    {
      image: refinery,
      title: "Oil Refinery Expansion",
      description: "Pengembangan kilang minyak terbesar untuk meningkatkan kapasitas produksi hingga 200 ribu barel per hari.",
    },
    {
      image: spbu,
      title: "Modern Gas Station Network",
      description: "Transformasi SPBU menjadi lebih modern, efisien, dan ramah lingkungan di seluruh Indonesia.",
    },
    {
      image: panel,
      title: "Renewable Energy Project",
      description: "Inovasi energi terbarukan melalui pembangunan solar farm berskala industri.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12"
          data-aos="fade-down"
        >
          🚀 Our Operations
        </h2>
        <p
          className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-16 text-gray-600"
          data-aos="fade-up"
        >
          Berikut beberapa proyek unggulan kami dalam mendukung ketahanan energi nasional dan pengembangan energi berkelanjutan.
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-200"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl mb-5 h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <h3 className="text-2xl font-bold mb-3 group-hover:text-[#4b2e19]">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
