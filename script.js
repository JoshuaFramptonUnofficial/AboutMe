// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  once: true,
});

// Polyfill smooth scroll for in-page anchors (in case some browsers need it)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
