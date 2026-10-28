// Signature move: Crossfade hero images as sections arrive
const heroImages = [
  'https://picsum.photos/id/49/800/1600?grayscale',
  'https://picsum.photos/id/238/800/1600?grayscale',
  'https://picsum.photos/id/308/800/1600?grayscale',
];

let currentImageIndex = 0;
const heroImage = document.querySelector('.hero-photo');
const sections = document.querySelectorAll('section');

function changeHeroImage() {
  currentImageIndex = (currentImageIndex + 1) % heroImages.length;

  // Fade out
  heroImage.style.opacity = '0.7';

  setTimeout(() => {
    heroImage.src = heroImages[currentImageIndex];
    heroImage.style.opacity = '1';
  }, 300);
}

// Trigger image change when sections enter viewport
const observerOptions = {
  threshold: 0.3,
  rootMargin: '0px 0px -50% 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      changeHeroImage();
    }
  });
}, observerOptions);

sections.forEach((section, index) => {
  if (index > 0) {
    observer.observe(section);
  }
});

// Animate section entrance: staggered fade-in for headings, text, images
const headings = document.querySelectorAll('h2, h3');
const paragraphs = document.querySelectorAll('p, ul, li, blockquote');
const images = document.querySelectorAll('img');

const entranceObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'slideUp 0.6s ease forwards';
      entranceObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

headings.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.animationDelay = `${i * 60}ms`;
  entranceObserver.observe(el);
});

paragraphs.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.animationDelay = `${i * 60}ms`;
  entranceObserver.observe(el);
});

images.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.animationDelay = `${i * 60}ms`;
  entranceObserver.observe(el);
});

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(16px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  img {
    transition: opacity 0.3s ease;
  }
`;
document.head.appendChild(style);

// Form handling
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name') || form.querySelector('input[type="text"]').value;
    alert(`Thank you, ${name}! We'll contact you soon to schedule your free roof assessment.`);
    form.reset();
  });
}

// Smooth scroll for links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Button feedback
document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('mousedown', () => {
    btn.style.transform = 'scale(0.98)';
  });
  btn.addEventListener('mouseup', () => {
    btn.style.transform = 'scale(1)';
  });
});
