import confetti from "canvas-confetti";
import {
    startBirthdayMusic,
    stopBirthdayMusic
} from "./music.js";

export function initFinale() {

    startBirthdayMusic();

    confetti({

    particleCount: 200,

    spread: 180,

    origin: {
        y: 0.6
    }

});

    // Fireworks every 2.5 seconds
    const fireworks = setInterval(() => {

    confetti({

        particleCount: 80,

        angle: 60,

        spread: 80,

        origin: {

            x: 0

        }

    });

    confetti({

        particleCount: 80,

        angle: 120,

        spread: 80,

        origin: {

            x: 1

        }

    });

}, 2200);
       // 👇 
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // Replay Button
    const replay = document.getElementById("restartJourney");

    if (replay) {

        replay.addEventListener("click", () => {

            clearInterval(fireworks);
            stopBirthdayMusic();

            location.reload();

        });

    }

}