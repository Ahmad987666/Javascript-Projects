document.addEventListener("DOMContentLoaded", function () {

  const images = Array.from(document.querySelectorAll("#pictures img"));
  if (images.length === 0) return;

  let currentIndex = 0;

  // Lightbox overlay
  const lightbox = document.createElement("div");
  lightbox.style.position = "fixed";
  lightbox.style.top = "0";
  lightbox.style.left = "0";
  lightbox.style.width = "100%";
  lightbox.style.height = "100%";
  lightbox.style.background = "rgba(0,0,0,0.8)";
  lightbox.style.display = "none";
  lightbox.style.justifyContent = "center";
  lightbox.style.alignItems = "center";
  lightbox.style.zIndex = "9999";

  // Big image
  const bigImg = document.createElement("img");
  bigImg.style.maxWidth = "80%";
  bigImg.style.maxHeight = "80%";

  // Buttons
  const prevBtn = document.createElement("button");
  prevBtn.textContent = "Prev";
  prevBtn.style.position = "absolute";
  prevBtn.style.left = "20px";
  prevBtn.style.top = "50%";
  prevBtn.style.transform = "translateY(-50%)";
  prevBtn.style.padding = "10px 15px";
  prevBtn.style.cursor = "pointer";

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Next";
  nextBtn.style.position = "absolute";
  nextBtn.style.right = "20px";
  nextBtn.style.top = "50%";
  nextBtn.style.transform = "translateY(-50%)";
  nextBtn.style.padding = "10px 15px";
  nextBtn.style.cursor = "pointer";

  // Put everything into lightbox
  lightbox.appendChild(prevBtn);
  lightbox.appendChild(bigImg);
  lightbox.appendChild(nextBtn);
  document.body.appendChild(lightbox);

  function getLargeSrc(img) {
    return img.getAttribute("data-large") || img.src;
  }

  function showImage(index) {
    currentIndex = index;
    bigImg.src = getLargeSrc(images[currentIndex]);
    lightbox.style.display = "flex";
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  // Open the images on click
  images.forEach(function (img, index) {
    img.style.cursor = "pointer";
    img.addEventListener("click", function () {
      showImage(index);
    });
  });

  // Next and Prev buttons
  nextBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // prevents closing
    showNext();
  });

  prevBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    showPrev();
  });

  // Click outside the image closes it
  lightbox.addEventListener("click", function () {
    lightbox.style.display = "none";
    bigImg.src = "";
  });

  // Clicking on the images will not close the lightbox
  bigImg.addEventListener("click", function (e) {
    e.stopPropagation();
  });

});
