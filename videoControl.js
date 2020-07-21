const tvPlayBtn = document.getElementById("tv-play-btn");
const macPlayBtn = document.getElementById("mac-play-btn");

const gameVideo = videojs("game-video", {loop: true})
const dataVideo = videojs("data-video", {loop: true})

gameVideo.on('ready', () => {
  tvPlayBtn.addEventListener("click", () => {
    if (gameVideo.paused()) {
      gameVideo.play()
      tvPlayBtn.innerText = "Pause"
    } else {
      gameVideo.pause()
      tvPlayBtn.innerText = "Play"
    }
  })
})

dataVideo.on('ready', () => {
  macPlayBtn.addEventListener("click", () => {
    if (dataVideo.paused()) {
      dataVideo.play()
      macPlayBtn.innerText = "Stop"
    } else {
      dataVideo.pause()
      macPlayBtn.innerText = "Play"
    }
  })
})
