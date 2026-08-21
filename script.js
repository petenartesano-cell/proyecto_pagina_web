document.addEventListener('DOMContentLoaded', () => {

  
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollPosition >= (sectionTop - sectionHeight / 3)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (current && link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

 
  const observerOptions = {
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    section.classList.add('fade-in-section');
    observer.observe(section);
  });

  
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const icon = card.querySelector('.card-icon');
    
    card.addEventListener('mouseenter', () => {
      if (icon) icon.classList.add('fa-bounce');
    });
    
    card.addEventListener('mouseleave', () => {
      if (icon) icon.classList.remove('fa-bounce');
    });
  });

});
