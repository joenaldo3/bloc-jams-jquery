class Helper {
  playPauseAndUpdate(song){
  player.playPause(song);
  $('.total-time').text(player.currentlyPlaying.duration);
  }
}
const helper = new Helper();
