export function Gallery() {
  return `
    <section id="gallery">

      <div class="container">

        <span class="gallery-tag">
          📸 Precious Memories
        </span>

        <h2 class="gallery-title">
          Our Beautiful Journey
        </h2>

        <p class="gallery-text">
          Every smile tells a beautiful story worth remembering forever.
        </p>

        <div class="gallery-grid">

          <img src="/images/harini1.jpg" alt="Harini 1">
          <img src="/images/harini2.png" alt="Harini 2">
          <img src="/images/harini3.jpg" alt="Harini 3">
          <img src="/images/harini4.png" alt="Harini 4">
          <img src="/images/harini5.jpg" alt="Harini 5">
          <img src="/images/harini6.png" alt="Harini 6">
          <img src="/images/harini7.png" alt="Harini 7">
          <img src="/images/harini8.jpg" alt="Harini 8">
          <img src="/images/harini9.jpg" alt="Harini 9">
          <img src="/images/harini10.jpg" alt="Harini 10">
          <img src="/images/harini11.png" alt="Harini 11">
          <img src="/images/harini12.png" alt="Harini 12">
          <img src="/images/harini13.jpg" alt="Harini 13">
          <img src="/images/harini14.jpg" alt="Harini 14">
          <img src="/images/harini15.jpg" alt="Harini 15">

        </div>

      </div>

        <div class="gallery-action">

          <button id="goStory" class="story-btn">
            📖 Continue the Journey
          </button>

        </div>
      

    </section>

    <!-- Fullscreen Lightbox -->
    <div id="lightbox" class="lightbox">

      <button id="closeLightbox" class="lightbox-close">
        ✕
      </button>

      <button id="prevImage" class="nav-btn prev">
        ❮
      </button>

      <img
        id="lightboxImage"
        class="lightbox-image"
        src=""
        alt="Gallery Image"
      >

      <button id="nextImage" class="nav-btn next">
        ❯
      </button>

    </div>
  `;
}