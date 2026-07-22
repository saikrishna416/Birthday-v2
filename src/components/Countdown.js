export function Countdown() {
  return `
    <section id="countdown">

      <div class="container">

        <span class="countdown-tag">
          ✨ Waiting for the Magical Day ✨
        </span>

        <h2 class="countdown-title">
          Birthday Countdown
        </h2>

        <p class="countdown-subtitle">
          Every second brings us closer to celebrating our little princess.
        </p>

        <div class="countdown-grid">

          <div class="time-card">
            <h3 id="days">00</h3>
            <span>Days</span>
          </div>

          <div class="time-card">
            <h3 id="hours">00</h3>
            <span>Hours</span>
          </div>

          <div class="time-card">
            <h3 id="minutes">00</h3>
            <span>Minutes</span>
          </div>

          <div class="time-card">
            <h3 id="seconds">00</h3>
            <span>Seconds</span>
          </div>

        </div>

        <div class="countdown-button">

          <button id="goToGift" class="primary-btn">
            🎁 Open the Magical Gift
          </button>

        </div>

      </div>

    </section>
  `;
}