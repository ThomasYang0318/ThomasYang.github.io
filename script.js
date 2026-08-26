const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('[data-carousel]').forEach(carousel => {
  const slides = [...carousel.querySelectorAll('.carousel-slide')];
  const previous = carousel.querySelector('.carousel-prev');
  const next = carousel.querySelector('.carousel-next');
  const currentLabel = carousel.querySelector('[data-carousel-current]');
  const totalLabel = carousel.querySelector('[data-carousel-total]');
  let current = Math.max(0, slides.findIndex(slide => slide.classList.contains('is-active')));

  const showSlide = index => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === current;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
    });
    if (currentLabel) currentLabel.textContent = String(current + 1);
  };

  if (totalLabel) totalLabel.textContent = String(slides.length);
  if (slides.length <= 1) {
    carousel.classList.add('is-single');
    slides[0]?.setAttribute('aria-hidden', 'false');
    return;
  }

  carousel.tabIndex = 0;
  previous?.addEventListener('click', () => showSlide(current - 1));
  next?.addEventListener('click', () => showSlide(current + 1));
  carousel.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showSlide(current - 1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      showSlide(current + 1);
    }
  });
  showSlide(current);
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
