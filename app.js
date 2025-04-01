// Song list
const songs = [
    { title:"Madras-Gig", file: "music/Kanne-Kanne-(Madras-Gig)-MassTamilan.fm.mp3.crdownload"},
    { title: "Dragon", file: "music/Vazhithunaiye.mp3" },
    { title: "Vaaranam Ayiram", file: "music/Annul-Maelae-MassTamilan.com.mp3" },
    { title: "Nayandi", file: "music/Ae-Le-Le-Etti-Parthale.mp3" },
    { title: "Madharasapatinam", file: "music/Pookal Pookum.mp3.crdownload" },   
];

let currentSongIndex = 0;
const audio = document.getElementById("audio");
const songTitle = document.getElementById("songTitle");

// Function to change song
function loadSong(index) {
    audio.src = songs[index].file;
    songTitle.textContent = songs[index].title;
    audio.play();
}

// Next Button
document.getElementById("nextBtn").addEventListener("click", function() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
});

// Prev Button
document.getElementById("prevBtn").addEventListener("click", function() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
});

// Play/Pause Button
document.getElementById("playPauseBtn").addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
        this.textContent = "⏸ Pause";
    } else {
        audio.pause();
        this.textContent = "▶ Play";
    }
})