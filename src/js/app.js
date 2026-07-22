import { Loader } from "../components/Loader";
import { Welcome } from "../components/Welcome";
import { Hero } from "../components/Hero";
import { Countdown } from "../components/Countdown";
import { Gallery } from "../components/Gallery";
import { startBackgroundMusic } from "./music.js";
import { initMusicControls } from "./music.js";

import { animateHero } from "./animations";
import { startCountdown } from "./countdown.js";
import { Gift } from "../components/Gift";
import { initGift } from "./gift.js";

const app = document.querySelector("#app");

// -------------------------
// Loader
// -------------------------

app.innerHTML = Loader();

// Show Welcome after 4 seconds
setTimeout(() => {

    app.innerHTML = Welcome();
    initMusicControls();
  

    const welcome = document.querySelector("#welcome");
    welcome.classList.add("show");

    const startButton = document.getElementById("startJourney");

    startButton.addEventListener("click", () => {

        welcome.style.opacity = "0";

        setTimeout(() => {

            // Show Hero
            // app.innerHTML = Hero();
            app.innerHTML = `
            <div id="chapter1">

                ${Hero()}

            </div>

            <div id="chapter2" style="display:none;">

            </div>
        `;

            animateHero();
            startBackgroundMusic();

            // Hero Button
            const journeyButton = document.getElementById("beginJourney");

            journeyButton.addEventListener("click", () => {

                // Add Countdown only once
                if (!document.getElementById("countdown")) {

                    document.getElementById("chapter1").insertAdjacentHTML(
                        "beforeend",
                        Countdown() + Gift()
                    );

                      initGift();
                    startCountdown();
                    const giftButton = document.getElementById("goToGift");

                    giftButton.addEventListener("click", () => {

                        document.getElementById("giftBox").scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                    });

                }

                // Scroll to Countdown
                document.getElementById("countdown").scrollIntoView({
                    behavior: "smooth"
                });

            });
            

        }, 600);

    });

}, 4000);