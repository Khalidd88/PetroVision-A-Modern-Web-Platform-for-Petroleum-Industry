import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNav = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 shadow-md backdrop-blur-md dark:bg-gray-900/90"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-extrabold text-yellow-500 tracking-wide"
        >
          BP ID
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 items-center text-lg font-medium">
          {["Home", "About", "Services", "Contact"].map((item, i) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 dark:text-white hover:text-yellow-500 transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Button Mobile */}
        <button
          onClick={toggleNav}
          className="md:hidden text-gray-800 dark:text-white focus:outline-none"
        >
          {nav ? (
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-gray-900 text-white p-8 transform ${
            nav ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-500 ease-in-out`}
        >
          <button
            onClick={toggleNav}
            className="absolute top-4 right-4 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="mt-20 space-y-8 text-2xl font-semibold">
            {["Home", "About", "Services", "Contact"].map((item, i) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block hover:text-yellow-400 transition-all duration-300"
                  style={{ transitionDelay: `${i * 100}ms` }}
                  onClick={toggleNav}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
