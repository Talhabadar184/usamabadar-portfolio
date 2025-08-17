// import React, { useEffect } from "react";
// import { BrowserRouter } from "react-router-dom";

// import Home from "./Home/Home";
// import Navbar from "./Navbar/Navbar";
// import About from "./About/About";
// import Resume from "./Resume/Resume";
// import { Link } from "react-scroll";

// // import Clients from "./Clients/Clients";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Clients from "./Clients/Clients";
// import Certificates from "./Certificates/Certificates";
// import Media from "./Media/Media";
// import Footer from "./Footer/Footer";

// function App() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true, 
//     });
//   }, []);

//   return (
//     // 
//     <BrowserRouter>
//     <section id="home"><Home /></section>
//     <Navbar/>
//     <section id="about"><About /></section>
//     <section id="resume"><Resume /></section>
//     <section id="clients"><Clients /></section>
//     <section id="certificates"><Certificates /></section>
//     <section id="media"><Media /></section>
//     <section id="footer"><Footer /></section>
//     {/* <Home/>
//     <Navbar/>
//     <About/>
//     <Resume/>
//     <Clients/>
//     <Certificates/>
//     <Media/>
//     <Footer/> */}
//     </BrowserRouter>
//   );
// }

// export default App;


import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import Resume from "./Resume/Resume";
import { Link } from "react-scroll";

import AOS from 'aos';
import 'aos/dist/aos.css';

import Clients from "./Clients/Clients";
import Certificates from "./Certificates/Certificates";
import Media from "./Media/Media";
import Footer from "./Footer/Footer";

// ✅ Import Vercel Analytics
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <section id="home"><Home /></section>
      <Navbar />
      <section id="about"><About /></section>
      <section id="resume"><Resume /></section>
      <section id="clients"><Clients /></section>
      <section id="certificates"><Certificates /></section>
      <section id="media"><Media /></section>
      <section id="footer"><Footer /></section>

      {/* ✅ Add Vercel Analytics here */}
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  );
}

export default App;
