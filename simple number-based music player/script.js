const audioPlayer = document.getElementById("audio-player");
const songButtons = document.querySelectorAll(".song-btn");
const playButton = document.getElementById("play-btn");
const pauseButton = document.getElementById("pause-btn");
const stopButton = document.getElementById("stop-btn");

// Array of songs
const songs = [
  "song1.mp3", // Replace with the actual file path
  "song2.mp3", // Replace with the actual file path
  "song3.mp3", // Replace with the actual file path
];

let currentSongIndex = null;

// Function to load and play a selected song
function loadSong(index) {
  if (index !== null && index >= 0 && index < songs.length) {
    audioPlayer.src = songs[index];
    audioPlayer.play();
    currentSongIndex = index;
  }
}

// Event listeners for song buttons
songButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const songIndex = parseInt(button.getAttribute("data-song")) - 1;
    loadSong(songIndex);
  });
});

// Event listener for play button
playButton.addEventListener("click", () => {
  if (currentSongIndex !== null) {
    audioPlayer.play();
  }
});

// Event listener for pause button
pauseButton.addEventListener("click", () => {
  if (currentSongIndex !== null) {
    audioPlayer.pause();
  }
});

// Event listener for stop button
stopButton.addEventListener("click", () => {
  if (currentSongIndex !== null) {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
  }
});
