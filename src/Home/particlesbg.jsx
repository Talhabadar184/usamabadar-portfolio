// import React, { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// const ParticlesBg = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadFull(engine);
//   }, []);

//   return (
//     <Particles
//        id="tsparticles"
//   init={particlesInit}
//   className="absolute inset-0 z-10 pointer-events-none"
//       // z-20 so it's above the image but below text
//       // pointer-events-none ensures clicks go through
//       options={{
//         background: { color: { value: "transparent" } }, // transparent background
//         fpsLimit: 60,
//         particles: {
//           number: { value: 80, density: { enable: true, area: 800 } },
//           color: { value: "#ffffff" },
//           shape: { type: "circle" },
//           opacity: { value: 0.5 },
//           size: { value: { min: 1, max: 5 } },
//           move: { enable: true, speed: 2 },
//           links: {
//             enable: true,
//             distance: 150,
//             color: "#ffffff",
//             opacity: 0.4,
//             width: 1,
//           },
//         },
//         interactivity: {
//           events: {
//             onHover: { enable: true, mode: "repulse" },
//             onClick: { enable: true, mode: "push" },
//           },
//           modes: {
//             repulse: { distance: 100 },
//             push: { quantity: 4 },
//           },
//         },
//       }}
//     />
//   );
// };

// export default ParticlesBg;
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBg = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 w-full h-full z-10"
      options={{
        fullScreen: { enable: false }, // stays inside container
        background: { color: "transparent" },
        particles: {
          number: { value: 50, density: { enable: true, area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 6 },
          size: { value: 4 },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: { default: "out" },
          },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
            opacity: 0.4,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBg;
