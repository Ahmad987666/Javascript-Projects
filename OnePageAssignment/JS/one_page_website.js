document.addEventListener("DOMContentLoaded", function () {

    const images = document.querySelectorAll("#pictures img");

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

    const bigImg = document.createElement("img");
    bigImg.style.maxWidth = "80%";
    bigImg.style.maxHeight = "80%";

    lightbox.appendChild(bigImg);
    document.body.appendChild(lightbox);

    images.forEach(function (img) {
        img.addEventListener("click", function () {

            // get the big image from data-large
            const largeImg = img.getAttribute("data-large");

            bigImg.src = largeImg;
            lightbox.style.display = "flex";
        });
    });

    lightbox.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

});
