
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


document.querySelector('.book-btn').addEventListener('click', () => {
  alert('Booking feature coming soon! Contact us at info@luxuryhaven.com');
});