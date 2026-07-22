export function Cake() {
  return `
    <section id="cake">

      <div class="container">

        <span class="cake-tag">
          🎂 Make A Wish
        </span>

        <h2 class="cake-title">
          Happy 3rd Birthday Harini
        </h2>

        <p class="cake-text">
          Tap each candle to blow it out and make a magical birthday wish.
        </p>

        <div class="cake-wrapper">

    <div class="candles">

        <div class="candle">
            <span class="flame"></span>
        </div>

        <div class="candle">
            <span class="flame"></span>
        </div>

        <div class="candle">
            <span class="flame"></span>
        </div>

    </div>

    <div class="cake">

        <div class="cake-top"></div>

        <div class="cake-middle"></div>

        <div class="cake-bottom"></div>

        <div class="cut-line"></div>

    </div>

</div>

        <h3 id="wishCounter">
          🕯️ Candles Remaining : 3
        </h3>

        <button
            id="cutCake"
            class="story-btn"
            style="display:none;"
        >
            🎂 Cut the Cake
        </button>

      </div>

    </section>
  `;
}