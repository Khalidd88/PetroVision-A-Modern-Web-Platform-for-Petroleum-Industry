import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Promoting responsible use of petroleum resources</h2>
            <p className="text-gray-400">
            How to use petroleum correctly and responsibly so as not to damage the ecosystem and
             continue to take care of the surrounding area
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#layanan" className="text-gray-400 hover:text-white">
                  Layanan
                </a>
              </li>
              <li>
                <a href="#cara-pesan" className="text-gray-400 hover:text-white">
                  Leader
                </a>
              </li>
              <li>
                <a href="#cara-pesan" className="text-gray-400 hover:text-white">
                  Service
                </a>
              </li>
              <li>
                <a href="#faqs" className="text-gray-400 hover:text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informasi</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Email: khalidluhurp@gmail.com</li>
              <li className="text-gray-400">Phone: 08888888888888</li>
              <li className="text-gray-400">
                Oil For One
                <br />
                Jl. Angkasa No 17 RT 01 RW 05
                <br />
                Kel. Bahagia Kec. Bekasi Utara - Kota Bekasi
                <br />
                (Sektor Lima)
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-gray-500">&copy; 2024 OilFornOne. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
