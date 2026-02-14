// AOS Init
AOS.init({
    duration: 1000,
    once: true
});

// Typing Animation
new Typed(".typing", {
    strings: ["AI Developer", "IoT Enthusiast", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Dark / Light Toggle
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    toggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});
