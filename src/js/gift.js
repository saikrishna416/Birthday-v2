import { initGallery } from "./gallery.js";
import confetti from "canvas-confetti";
import { Gallery } from "../components/Gallery";
import { Story } from "../components/Story";
import { initStory } from "./story.js";
import { Wishes } from "../components/Wishes";
import { initWishes } from "./wishes.js";
import { Cake } from "../components/Cake";
import { initCake } from "./cake.js";
import { Finale } from "../components/Finale";
import { initFinale } from "./finale.js";

export function initGift() {

    const box = document.getElementById("giftBox");
    const message = document.getElementById("giftMessage");

    if (!box) return;

    box.addEventListener("click", () => {

        // 🎊 Confetti
        confetti({
            particleCount: 150,
            spread: 100,
            origin: {
                y: 0.6
            }
        });

        // Show message
        message.classList.add("show");

    });
    const galleryButton = document.getElementById("goGallery");

galleryButton.addEventListener("click", () => {

    const chapter1 = document.getElementById("chapter1");
    const chapter2 = document.getElementById("chapter2");

    chapter1.classList.add("fade-out");

    setTimeout(() => {

        chapter1.style.display = "none";

        chapter2.style.display = "block";

        chapter2.innerHTML = Gallery();

        initGallery();
        const storyButton = document.getElementById("goStory");

storyButton.addEventListener("click", () => {

    chapter2.classList.add("fade-out");

    setTimeout(() => {

        chapter2.innerHTML = Story();
        initStory();
        const wishesButton = document.getElementById("goWishes");

wishesButton.addEventListener("click", () => {

    chapter2.classList.add("fade-out");

    setTimeout(() => {

        chapter2.innerHTML = Wishes();

        initWishes();
        const cakeButton = document.getElementById("goCake");

cakeButton.addEventListener("click", () => {

    chapter2.classList.add("fade-out");

    setTimeout(() => {

        chapter2.innerHTML = Cake();

        initCake(() => {

    chapter2.classList.add("fade-out");

    setTimeout(() => {

        chapter2.innerHTML = Finale();

        chapter2.classList.remove("fade-out");
        chapter2.classList.add("fade-in");

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

        document
            .getElementById("restartJourney")
            .addEventListener("click", () => {

                location.reload();

            });

    },600);

});

        chapter2.classList.remove("fade-out");
        chapter2.classList.add("fade-in");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 600);

});

        chapter2.classList.remove("fade-out");
        chapter2.classList.add("fade-in");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 600);

});

        chapter2.classList.remove("fade-out");
        chapter2.classList.add("fade-in");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 600);

});

        chapter2.classList.add("fade-in");

        window.scrollTo({
            top: 0,
            behavior: "auto"
        });

    }, 800);

});
}