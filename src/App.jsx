import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Leader from "./components/Leader";
import Partners from "./components/Partners";
import TestimonialsPage from "./components/TestimonialsPage"; // Tambahin ini ayang
import Ai from "./components/Chatbot";
import ProjectShowcase from "./components/ProjectShowcase";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Leader />
      <Partners />
      <TestimonialsPage /> {/* Tambahin ini juga ayang */}
      <ProjectShowcase />
      <Footer />
      <Ai />
    </div>
  );
}

export default App;
