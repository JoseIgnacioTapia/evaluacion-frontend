const video = document.getElementById('video');
const play = document.getElementById('play');
const close = document.querySelector('.modal-close');

play.addEventListener('click', () => {
  video.play();
})

close.addEventListener('click', () => {
  video.currentTime = 0;
  video.pause();
});