import confetti from "canvas-confetti";
import {
    stopBackgroundMusic,
    startBirthdayMusic
} from "./music.js";


export function initCake(showFinale) {

    const candles = document.querySelectorAll(".candle");
    const counter = document.getElementById("wishCounter");
    const cutButton = document.getElementById("cutCake");
    const cake = document.querySelector(".cake");

    let remaining = 3;

    candles.forEach((candle) => {

        candle.addEventListener("click", () => {

            if (candle.classList.contains("off")) return;

            candle.classList.add("off");

            const flame = candle.querySelector(".flame");

            if (flame) {

                flame.remove();

            }

            remaining--;

            counter.textContent =
                `🕯️ Candles Remaining : ${remaining}`;

            if (remaining === 0) {

                confetti({
                    particleCount: 200,
                    spread: 120,
                    origin: {
                        y: 0.6
                    }
                });

                counter.textContent =
                    "🎉 Happy Birthday Harini!";

                cutButton.style.display = "inline-block";

            }

        });

    });

    // Cut Cake
  cutButton.addEventListener("click", () => {

    cake.classList.add("cut");

    confetti({

        particleCount:400,

        spread:180,

        origin:{
            y:.6
        }

    });
    stopBackgroundMusic();
    startBirthdayMusic();

    setTimeout(() => {

        showFinale();


    },2000);

});

}