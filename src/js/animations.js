import { gsap } from "gsap";

export function animateHero() {

    const tl = gsap.timeline();

    tl.from("#hero", {
        opacity: 0,
        duration: 0.4
    })

    .from(".hero-image", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.2")

    .from(".hero-content", {
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.6");

}