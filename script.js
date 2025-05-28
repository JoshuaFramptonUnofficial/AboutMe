document.addEventListener("DOMContentLoaded", () => {
  // Detect mobile to scale back particle count & interaction
  const isMobile = window.innerWidth < 768;
  const particleCount = isMobile ? 50 : 150;

  // Initialize tsParticles in the #tsparticles div
  tsParticles.load("tsparticles", {
    fullScreen: { enable: false },
    fpsLimit: 60,
    particles: {
      number: {
        value: particleCount,
        density: { enable: true, area: 800 }
      },
      color: { value: "#0f9d58" },
      shape: { type: "circle" },
      opacity: { value: 0.8 },
      size: { value: { min: 1, max: 3 } },
      links: {
        enable: true,
        distance: 150,
        color: "#0f9d58",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        outModes: { default: "bounce" }
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: !isMobile,
          mode: "attract"
        },
        resize: true
      },
      modes: {
        attract: {
          distance: 200,
          duration: 0.4,
          factor: 5
        }
      }
    },
    detectRetina: true
  });

  // Initialize AOS (scroll-triggered reveals)
  AOS.init({
    duration: 800,
    once: true
  });
});
