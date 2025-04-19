function openWeb01() {
    window.open("https://thuolala.github.io/Portfolio/", "_blank");
}

function openWeb02() {
    window.open("https://artworks-taupe.vercel.app/", "_blank");
}

function openWeb03() {
    window.open("https://thuolala.github.io/learn-note/", "_blank");
}

function openWeb04() {
    window.open("https://thuolala.github.io/my-coffee/", "_blank");
}

function openWeb05() {
    window.open("https://thuolala.github.io/my-clock/", "_blank");
}

let player;
let isPlaying = true;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: '-2yAEUp9v6M', // Only the ID (e.g., "dQw4w9WgXcQ")
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    // Nothing yet – user will click to play
}

function toggleMusic() {
    const volOn = document.getElementById("volume-on");
    const volOff = document.getElementById("volume-off");

    if (!isPlaying) {
        player.playVideo();
        volOn.style.display = "none";
        volOff.style.display = "inline-block";
    } else {
        player.pauseVideo();
        volOn.style.display = "inline-block";
        volOff.style.display = "none";
    }

    isPlaying = !isPlaying;
}

function spawnSparkles(count) {
    const sparkleBg = document.getElementById('sparkle-bg');

    for (let i = 0; i < count; i++) {
        const sparkle = document.createElement('img');
        sparkle.src = './img/flag.png';
        sparkle.className = 'sparkle';

        // Random position
        sparkle.style.left = Math.random() * 100 + 'vw';
        sparkle.style.top = Math.random() * 100 + 'vh';

        // Random animation delay
        // sparkle.style.animationDelay = (Math.random() * 10) + 's';

        sparkleBg.appendChild(sparkle);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    spawnSparkles(50);
});

