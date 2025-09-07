// Bootstrap form validation
(() => {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();

// Navbar scroll effect
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".custom-nav");

  if (!navbar) return; // ✅ safety check (prevents error if no navbar)

  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

  // Lightbox script
  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      document.getElementById('lightboxImage').src = img.src;
    });
  });

  // Navbar scroll effect
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".custom-nav");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});
