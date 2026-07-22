export function Hero() {
  return `
    <section id="hero">

      <!-- Background Decorations -->
      <div class="hero-bg">

        <div class="moon"></div>

        <div class="stars">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div class="cloud cloud-1"></div>
        <div class="cloud cloud-2"></div>

      </div>

      <div class="container hero-container">

        <!-- Left Content -->
        <div class="hero-content">

          <span class="hero-badge">
            ✨ Magical Princess Night ✨
          </span>

          <h1>
            Happy
            <span>3rd Birthday</span>
          </h1>

          <h2>Harini</h2>

          <p class="hero-description">
            Celebrating three magical years filled with
            love, laughter, beautiful memories,
            and endless happiness.
          </p>

          <div class="hero-details">

            <div class="detail-card">

              <h3>Age</h3>

              <p>3 Years</p>

            </div>

            <div class="detail-card">

              <h3>Date</h3>

              <p>September 10</p>

            </div>

          </div>

          <button id="beginJourney">

            💖 Begin the Journey

          </button>

        </div>

        <!-- Right Image -->
          <div class="hero-image">

            <div class="photo-frame">

              <img src="/images/hero.jpg" alt="Harini">

                🌸
                <p>Harini's Photo</p>
              </div>

            </div>

          </div>

      </div>

    </section>
  `;
}