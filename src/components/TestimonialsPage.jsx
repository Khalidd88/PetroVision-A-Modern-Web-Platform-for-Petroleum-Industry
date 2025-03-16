import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const testimonials = [
  {
    name: "John Smith",
    position: "Petroleum Engineer",
    company: "OilTech Industries",
    feedback: "Layanan luar biasa! Teknologi terbaru dan tim yang sangat profesional.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
  },
  {
    name: "Emma Johnson",
    position: "Geologist",
    company: "GeoPetro Solutions",
    feedback: "Sumber daya energi yang berkelanjutan dan inovasi luar biasa!",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    rating: 4,
  },
  {
    name: "Michael Brown",
    position: "Drilling Supervisor",
    company: "DeepWell Drilling",
    feedback: "Keselamatan kerja sangat diperhatikan di sini, luar biasa!",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    rating: 5,
  },
];

const TestimonialsPetroleum = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false, // Animasi berjalan terus setiap masuk viewport
      easing: "ease-in-out",
      offset: 120,
    });
  }, []);

  return (
    <section className="py-20 px-6 bg-white text-gray-800">
      <h2
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        data-aos="fade-down"
      >
        💬 Apa Kata Mereka Tentang Kami
      </h2>
      <p
        className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-16 text-gray-500"
        data-aos="fade-up"
      >
        Testimoni dari para profesional di industri minyak dan gas mengenai layanan serta teknologi kami.
      </p>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#f9f9f9] border border-gray-200 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group"
            data-aos="zoom-in"
            data-aos-delay={index * 200}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-md"
            />
            <h3 className="text-xl font-semibold text-center group-hover:text-[#6b4f4f]">
              {testimonial.name}
            </h3>

            {/* 🏢 Jabatan & Perusahaan */}
            <p className="text-center text-gray-500 text-sm">
              {testimonial.position} at {testimonial.company}
            </p>

            {/* ⭐ Rating Bintang */}
            <div className="flex justify-center my-2">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>

            <p className="text-gray-600 text-center mt-3">
              “{testimonial.feedback}”
            </p>

            {/* 🔗 Social Media */}
            <div className="flex justify-center gap-4 mt-6">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-500">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsPetroleum;