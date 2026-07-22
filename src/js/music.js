// Start Hoyna Hoyna
export function startBackgroundMusic() {

    const bgMusic = document.getElementById("bgMusic");

    if (!bgMusic) return;

    bgMusic.volume = 0.35;
    bgMusic.muted = muted;

    bgMusic.play().catch(() => {});

}

// Stop Hoyna Hoyna
export function stopBackgroundMusic() {

    const bgMusic = document.getElementById("bgMusic");

    if (!bgMusic) return;

    bgMusic.pause();

    bgMusic.currentTime = 0;

}

// Start Birthday Song
export function startBirthdayMusic() {

    const birthdayMusic = document.getElementById("birthdayMusic");

    if (!birthdayMusic) return;

    birthdayMusic.volume = 0.5;
    birthdayMusic.muted = muted;

    birthdayMusic.play().catch(() => {});

}

// Stop Birthday Song
export function stopBirthdayMusic() {

    const birthdayMusic = document.getElementById("birthdayMusic");

    if (!birthdayMusic) return;

    birthdayMusic.pause();

    birthdayMusic.currentTime = 0;

}

// Music Button
let muted = false;

export function initMusicControls() {

    const button = document.getElementById("musicToggle");

    if (!button) return;

    button.textContent = "💖";
button.addEventListener("click", () => {

    muted = !muted;

    const bgMusic = document.getElementById("bgMusic");
    const birthdayMusic = document.getElementById("birthdayMusic");

    if (bgMusic) {
        bgMusic.muted = muted;
    }

    if (birthdayMusic) {
        birthdayMusic.muted = muted;
    }

    button.textContent = muted
        ? "🎵 "
        : "💖";

});

}
