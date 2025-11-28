let heaindg = document.querySelector("h1");
let btn = document.querySelector(".btnn");

const personalities = [
    "You’re a calm thinker — you observe quietly and speak only when needed.",
    "You’re a natural leader — people follow your ideas without you trying.",
    "You’re a soft-hearted soul — you feel emotions deeply and care for others easily.",
    "You’re extremely curious — you always want to know how and why everything works.",
    "You’re a creative brain — your mind sees ideas others miss.",
    "You’re an energy booster — wherever you go, the vibe gets better.",
    "You’re a silent achiever — you don’t talk much, but your results speak loudly.",
    "You’re loyal to the core — once you trust someone, you’re all in.",
    "You’re a risk-taker — you jump into challenges without fear.",
    "You’re a deep thinker — your thoughts go way beyond the surface.",
    "You’re a natural comedian — you make people laugh without even trying.",
    "You’re a dream chaser — once you want something, you go all the way.",
    "You’re incredibly honest — even when the truth is hard, you say it.",
    "You’re a protective friend — you look out for the people you care about.",
    "You’re a peace lover — drama is not your thing at all.",
    "You’re a sharp mind — you understand things faster than most people.",
    "You’re a charming personality — people naturally like you.",
    "You’re a disciplined person — when you decide something, you stick to it.",
    "You’re a positive spark — you always find a way to stay hopeful.",
    "You’re a free spirit — you live life your own way, without limits."
];

for (let i = 0; i < personalities.length; i++) {

}

btn.addEventListener("click", () => {
    let randomNum = Math.floor(Math.random() * personalities.length);
    heaindg.innerText = personalities[randomNum];

    // Restart animation
    heaindg.classList.remove("flip");
    void heaindg.offsetWidth;
    heaindg.classList.add("flip");

})


