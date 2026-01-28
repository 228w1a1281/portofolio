document.addEventListener('DOMContentLoaded', function () {

  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Resume download button (default behavior allowed)
  const downloadBtn = document.getElementById('downloadResume');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function () {
      // Default download behavior
    });
  }

  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;

      formMessage.textContent = `Thank you, ${name}! Your message has been received. I'll get back to you soon at ${email}.`;
      formMessage.className = 'success';
      formMessage.style.display = 'block';

      contactForm.reset();

      setTimeout(() => {
        formMessage.style.display = 'none';
      }, 5000);
    });
  }

  // Highlight active navigation item on scroll
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('nav ul li a');

  window.addEventListener('scroll', function () {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.pageYOffset >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  });

});
// Contact form interaction
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;

      formMessage.textContent = `Thank you, ${name}! Your message has been sent successfully. I will contact you soon at ${email}.`;
      formMessage.className = "success";

      contactForm.reset();

      setTimeout(() => {
        formMessage.style.display = "none";
      }, 5000);
    });
  }
});
