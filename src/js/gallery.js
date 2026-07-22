export function initGallery() {

    const images = document.querySelectorAll(".gallery-grid img");

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");

    const closeBtn = document.getElementById("closeLightbox");
    const prevBtn = document.getElementById("prevImage");
    const nextBtn = document.getElementById("nextImage");

    if (!images.length) return;

    let current = 0;

    // -----------------
    // Open Image
    // -----------------

   let savedScroll = 0;

function openImage(index) {

    current = index;

    lightboxImage.src = images[current].src;

    // Save current scroll position
    savedScroll = window.scrollY;

    // Lock the page at the current position
    document.body.style.position = "fixed";
    document.body.style.top = `-${savedScroll}px`;
    document.body.style.left = "0";
    document.body.style.width = "100%";

    lightbox.classList.add("show");

}
    images.forEach((img, index) => {

        img.addEventListener("click", () => {

            openImage(index);

        });

    });

    // -----------------
    // Close
    // -----------------

   function closeImage() {

    lightbox.classList.remove("show");

    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.width = "";

    window.scrollTo(0, savedScroll);

}

    closeBtn.addEventListener("click", closeImage);

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            closeImage();

        }

    });

    // -----------------
    // Next
    // -----------------

    function nextImage() {

        current++;

        if (current >= images.length) {

            current = 0;

        }

        lightboxImage.src = images[current].src;

    }

    // -----------------
    // Previous
    // -----------------

    function prevImage() {

        current--;

        if (current < 0) {

            current = images.length - 1;

        }

        lightboxImage.src = images[current].src;

    }

    nextBtn.addEventListener("click", (e) => {

        e.stopPropagation();

        nextImage();

    });

    prevBtn.addEventListener("click", (e) => {

        e.stopPropagation();

        prevImage();

    });

    // -----------------
    // Swipe
    // -----------------

    let startX = 0;

    lightbox.addEventListener("touchstart", (e) => {

        startX = e.touches[0].clientX;

    });

    lightbox.addEventListener("touchend", (e) => {

        const endX = e.changedTouches[0].clientX;

        if (startX - endX > 50) {

            nextImage();

        }

        if (endX - startX > 50) {

            prevImage();

        }

    });

}