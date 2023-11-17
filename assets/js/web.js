const section = document.querySelector('.contenedorskill');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio === 1) {
      entry.target.classList.add('progress-moved');
    }
  });
}, { threshold: 1 });

observer.observe(section);