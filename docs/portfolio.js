function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// Open contact from the floating button
const openBtn = document.getElementById("openContact");
if (openBtn) openBtn.addEventListener("click", openForm);

// Open contact from any element with class "contact"
document.querySelectorAll(".contact").forEach((el) => {
  el.addEventListener("click", (e) => {
    // If it's a link, stop the default jump (optional)
    e.preventDefault();
    openForm();
  });
});

// Close contact when clicking the close button
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("cancel")) {
    closeForm();
  }
});

// Close when clicking outside the form container
document.addEventListener("click", (e) => {
  const formPopup = document.getElementById("myForm");
  const formBox = document.querySelector(".form-container");
  const isOpen = formPopup && formPopup.style.display === "block";

  if (isOpen && formPopup.contains(e.target) && !formBox.contains(e.target)) {
    closeForm();
  }
});

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeForm();
});

// ===== SLIDESHOW =====
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (!slides.length) return;

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
  for (let i = 0; i < dots.length; i++) dots[i].classList.remove("active");

  slides[slideIndex - 1].style.display = "block";
  if (dots[slideIndex - 1]) dots[slideIndex - 1].classList.add("active");
}

// Hook up slideshow arrows + dots
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

if (prev) prev.addEventListener("click", () => plusSlides(-1));
if (next) next.addEventListener("click", () => plusSlides(1));

document.querySelectorAll(".dot").forEach((dot) => {
  dot.addEventListener("click", () => {
    const n = Number(dot.getAttribute("data-slide"));
    currentSlide(n);
  });
});

// Optional: auto-advance every 5 seconds
setInterval(() => plusSlides(1), 5000);