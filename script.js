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

