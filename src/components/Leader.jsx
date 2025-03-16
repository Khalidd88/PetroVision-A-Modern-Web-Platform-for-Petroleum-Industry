import React from 'react';
import ReactDOM from 'react-dom/client';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { FaLinkedinIn, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import poto1 from '../assets/manager1.png';
import poto2 from '../assets/manager2.png';
import poto3 from '../assets/manager3.png';
import poto4 from '../assets/manager4.png';

function Leader() {
  useEffect(() => {
      AOS.init({
        duration: 1200,
        once: false, // biar animasinya jalan terus setiap masuk viewport
        easing: "ease-in-out",
        offset: 120,
      });
  }, []);

  const leaders = [
    { image: poto1, name: "Jason Ramos", position: "Managing Director" },
    { image: poto2, name: "Charles Bernardi", position: "Head of Operation" },
    { image: poto3, name: "Corrie Deegan", position: "Customer Relation" },
    { image: poto4, name: "James Lomas", position: "Operations Lead" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-2" data-aos="fade-down">
          Meet Our Leadership
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10" data-aos="fade-up">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
        </p>
        <div className="flex justify-center mb-12" data-aos="zoom-in">
          <button className="bg-gray-800 hover:bg-gray-700 transition text-white px-6 py-3 rounded-full shadow-lg">
            All Team Member
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-2xl overflow-hidden group transform transition hover:-translate-y-2 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="relative w-full h-72 overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-gray-800 text-xl mb-1">{leader.name}</h3>
                <p className="text-gray-500 mb-4">{leader.position}</p>
                <div className="flex justify-center gap-4">
                  <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition">
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Leader />
  </React.StrictMode>
);

export default Leader;
