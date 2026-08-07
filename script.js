const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 30);
});

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();

const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");
const closeLightbox = () => {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
};

document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    lightboxImage.src = item.querySelector("img").src;
    lightboxImage.alt = item.querySelector("img").alt;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});

document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeLightbox();
});

document.querySelector('[data-gallery]')?.addEventListener("click", () => {
  document.querySelector(".gallery-item")?.click();
});
