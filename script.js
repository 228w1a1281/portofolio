// Scroll reveal animation
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
},{ threshold:0.15 });

reveals.forEach(r => observer.observe(r));

// Active nav highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    if(pageYOffset >= sec.offsetTop - 120){
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(a => {
    a.classList.remove("active");
    if(a.getAttribute("href") === "#" + current){
      a.classList.add("active");
    }
  });
});
