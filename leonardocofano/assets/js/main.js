// ============================================
// NAVBAR TOGGLE (mobile)
// ============================================
const toggler = document.querySelector('.navbar-toggler');
const navMenu = document.querySelector('.navbar-nav');

if (toggler && navMenu) {
  toggler.addEventListener('click', () => {
    toggler.classList.toggle('open');
    navMenu.classList.toggle('open');
  });

  // Close on link click
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggler.classList.remove('open');
      navMenu.classList.remove('open');
    });
  });
}

// ============================================
// ACTIVE NAV LINK
// ============================================
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navbar-nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ============================================
// SCROLL FADE-IN ANIMATION
// ============================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ============================================
// CONTACT FORM HANDLER
// ============================================
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = contactForm.querySelector('.btn-submit');
    const originalText = btn.textContent;

    btn.textContent = 'Invio in corso...';
    btn.disabled = true;

    // Simulate send (replace with EmailJS for real use)
    setTimeout(() => {
      btn.textContent = 'Messaggio inviato ✓';
      btn.style.background = '#4a7c59';
      contactForm.reset();

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    }, 1200);
  });
}
