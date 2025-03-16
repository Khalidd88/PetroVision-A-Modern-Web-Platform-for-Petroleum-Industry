import React, { useEffect } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import p1 from "../assets/oil.jpg";
import p2 from "../assets/idn.png";
import p3 from "../assets/top.jpeg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white py-16 px-6 md:px-28">
      
      {/* Who We Are */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="w-full flex flex-col lg:flex-row items-center gap-12 mb-20"
      >
        <div className="max-w-lg space-y-6">
          <p className="text-lg font-medium text-yellow-500">Who We Are</p>
          <h1 className="text-4xl font-bold leading-tight">
            Delivering Energy for a Sustainable Future
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-300">
            Kami adalah perusahaan energi terkemuka yang berfokus pada eksplorasi dan distribusi minyak bumi berkualitas tinggi. Dengan teknologi modern dan komitmen kuat terhadap keberlanjutan, kami hadir untuk memenuhi kebutuhan energi nasional dengan aman, efisien, dan bertanggung jawab.
          </p>
          <div className="flex gap-6 items-center">
            <div className="w-28 h-28 sm:w-36 sm:h-36 shadow-xl rounded-lg overflow-hidden">
              <img
                src={p3}
                alt="Professional Team"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div className="space-y-2">
              <p>🔹 Operasional berbasis teknologi mutakhir.</p>
              <p>🔹 Distribusi energi cepat & aman.</p>
              <p>🔹 Peduli lingkungan dan masyarakat.</p>
              <button className="mt-3 px-6 py-2 bg-yellow-400 hover:bg-yellow-500 transition rounded-full shadow-md text-black font-semibold">
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 shadow-xl rounded-xl overflow-hidden"
        >
          <img
            src={p1}
            alt="Oil Production"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* We Spread Around Indonesia */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="w-full flex flex-col lg:flex-row items-center gap-12"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-2/3 shadow-lg rounded-xl overflow-hidden"
        >
          <img
            src={p2}
            alt="Indonesia Coverage Map"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="w-full lg:w-1/3 space-y-6">
          <h2 className="text-4xl font-bold leading-tight">
            Nationwide Operations Across Indonesia
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300">
            Dengan jaringan operasional di seluruh wilayah strategis Indonesia, kami memastikan distribusi energi yang stabil dan andal, mendukung kebutuhan industri serta kesejahteraan masyarakat di seluruh penjuru negeri.
          </p>
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            data-aos="fade-up"
          >
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center"
              data-aos="fade-up"
            >
              <h3 className="text-4xl font-bold text-yellow-500">
                <CountUp end={25} duration={3} suffix="+" />
              </h3>
              <p className="text-sm mt-2">Tahun Pengalaman</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center"
              data-aos="fade-up"
            >
              <h3 className="text-4xl font-bold text-yellow-500">
                <CountUp end={77} duration={3} />
              </h3>
              <p className="text-sm mt-2">Kantor Operasional</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center"
              data-aos="fade-up"
            >
              <h3 className="text-4xl font-bold text-yellow-500">
                <CountUp end={38} duration={3} suffix="K" />
              </h3>
              <p className="text-sm mt-2">Tenaga Kerja Profesional</p>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
