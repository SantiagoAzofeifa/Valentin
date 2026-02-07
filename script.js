// ❤️ CAMBIA LA FECHA
const fechaInicio = new Date("2018-06-18");

function actualizarContador() {
    const hoy = new Date();
    let diff = hoy - fechaInicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const anos = Math.floor(dias / 365);
    const meses = Math.floor((dias % 365) / 30);

    document.getElementById("tiempo").innerHTML =
        `${anos} años, ${meses} meses, ${dias} días ❤️`;
}

setInterval(actualizarContador, 1000);
actualizarContador();

// ✨ SCROLL REVEAL
function reveal() {
    document.querySelectorAll(".reveal").forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();

// ❤️ CORAZONES FLOTANTES
const hearts = document.querySelector(".hearts");

setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "&#9729";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 18 + 12) + "px";
    hearts.appendChild(heart);

    setTimeout(() => heart.remove(), 10000);
}, 450);

document.body.addEventListener("click", () => {
    const music = document.getElementById("bgMusic");
    music.muted = false;
    music.play();
}, { once: true });
