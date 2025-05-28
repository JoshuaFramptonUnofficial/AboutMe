document.addEventListener("DOMContentLoaded", () => {
  const isMobile = window.innerWidth < 768;

  // More aggressive mobile reduction
  const particleCount = isMobile ? 30 : 150;
  const linkDistance = isMobile ? 100 : 150;
  const moveSpeed   = isMobile ? 0.5 : 1;

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
        distance: linkDistance,
        color: "#0f9d58",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: moveSpeed,
        outModes: { default: "bounce" }
      }
    },
    interactivity: {
      events: {
        // Disable hover attract on mobile
        onHover: { enable: !isMobile, mode: "attract" },
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

  // Scroll-triggered animations
  AOS.init({
    duration: 800,
    once: true
  });
});
