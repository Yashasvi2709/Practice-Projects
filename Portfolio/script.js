// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  if (body.getAttribute('data-theme') === 'dark') {
    body.setAttribute('data-theme', 'light');
    themeToggle.textContent = 'Dark Mode';
  } else {
    body.setAttribute('data-theme', 'dark');
    themeToggle.textContent = 'Light Mode';
  }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Header shadow on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    document.querySelector('header').style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
  } else {
    document.querySelector('header').style.boxShadow = 'none';
  }
});