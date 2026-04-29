document.addEventListener('DOMContentLoaded', () => {
  // 1. Reveal Animations on Scroll
  const reveals = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    reveals.forEach(reveal => {
      const revealTop = reveal.getBoundingClientRect().top;
      if (revealTop < windowHeight - 50) {
        reveal.classList.add('active');
      }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Trigger immediately on load

  // 2. Mobile Menu Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }

  // 3. Language Switcher Dropdown Toggle
  const langBtn = document.querySelector('.lang-button');
  const langMenu = document.querySelector('.lang-menu');
  if (langBtn && langMenu) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langMenu.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
      if (!langMenu.contains(e.target)) {
        langMenu.classList.remove('show');
      }
    });
  }
});
