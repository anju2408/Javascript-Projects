const sounds = [
    'sound1',
    'sound2',
    'sound3',
    'sound4',
    'sound5'
];

sounds.forEach((sound) => {
    const btn = document.createElement("button");

    btn.classList.add("btn");

    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopSongs();

        document.getElementById(sound).play();
    });

    document.body.appendChild(btn);
});

function stopSongs() {
    sounds.forEach((sound) => {
        const song =
            document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    });
}


function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    heart.innerText = "💜";

    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);