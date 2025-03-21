document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('themeToggle');
  const backToTop = document.getElementById('backToTop');
  const contactForm = document.getElementById('contactForm');

  themeToggle.addEventListener('click', function () {
    const icon = this.querySelector('i');
    if (icon.classList.contains('ri-sun-line')) {
      icon.classList.replace('ri-sun-line', 'ri-moon-line');
      document.documentElement.classList.add('dark');
    } else {
      icon.classList.replace('ri-moon-line', 'ri-sun-line');
      document.documentElement.classList.remove('dark');
    }
  });

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
      backToTop.classList.replace('opacity-0', 'opacity-100');
    } else {
      backToTop.classList.replace('opacity-100', 'opacity-0');
    }
  });

  backToTop.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    console.log('Form submitted:', data);
    this.reset();

    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300';
    toast.textContent = 'Message sent successfully!';
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
