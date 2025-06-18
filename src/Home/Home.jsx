import React, { useState, useEffect } from "react";
import fb from "../assets/Home/fb.png";
import insta from "../assets/Home/insta.png";
import linkedin from "../assets/Home/linke.png";
import twitter from "../assets/Home/twitter.png";
import mainBg from "../assets/Home/main1.jpg";

function Home() {
  const [showFirstText, setShowFirstText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstText((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="relative min-h-screen w-full text-white overflow-hidden">
      {/* Background Image */}
      <img
  src={mainBg}
  alt="Background"
  className="absolute inset-0 w-full h-full object-cover object-[75%_center] md:object-[75%_5%] z-10"
/>



      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-20"></div>

     {/* Content */}
<div className="relative z-30 flex flex-col justify-center h-full px-6 md:px-10 text-white pt-80 md:pt-24">
  {/* Social Icons */}
  <div className="flex space-x-4 mb-6 text-xl">
    <a href="https://www.facebook.com/usama.badar.94"><img src={fb} alt="Facebook" className="w-5 h-5 md:w-6 md:h-6" /></a>
    <a href="https://www.instagram.com/usamabadar.31"><img src={insta} alt="Instagram" className="w-5 h-5 md:w-6 md:h-6" /></a>
    <a href="https://www.linkedin.com/in/usama-badar"><img src={linkedin} alt="LinkedIn" className="w-5 h-5 md:w-6 md:h-6" /></a>
    <img src={twitter} alt="Twitter" className="w-5 h-5 md:w-6 md:h-6" />
  </div>

  <h2 
    data-aos="fade-up" 
    className="text-2xl md:text-3xl lg:text-4xl lg:text-black font-light animate-fade-up delay-100"
  >
    Hello, I am
  </h2>

  <h1
    data-aos="fade-up"
    className="text-4xl md:text-6xl lg:text-black font-bold italic mt-2 animate-fade-up delay-500"
  >
    Usama Badar
  </h1>

  <h1
    data-aos="fade-up"
    className="mt-3 text-xl md:text-2xl font-bold lg:text-black tracking-wide animate-fade-up delay-1000"
  >
    Audit Senior - Nexia International
  </h1>

  <p
    data-aos="fade-up"
    className="mt-2 text-lg md:text-2xl font-bold lg:text-black transition-opacity duration-1000 delay-2000 ease-in-out"
  >
    Chartered Accountant (Finalist)
  </p>

  <button className="hover:cursor-pointer mt-6 w-fit bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 md:px-6 md:py-3 rounded-full flex items-center gap-2 shadow-lg animate-fade-up delay-300">
    Print Resume
  </button>
</div>

    </div>
  );
}

export default Home;
